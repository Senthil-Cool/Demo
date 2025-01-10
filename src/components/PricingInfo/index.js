import { useUser } from "@/context";
import { getCountryFromLatLong } from "@/utils/location";
import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
const apiBaseUrl = process.env.NEXT_PUBLIC_URL || "https://riseon.happypeopleai.com";

const PricingInfo = () => {
    const [hoveredTooltipId, setHoveredTooltipId] = useState(null);
    const { user, userToken } = useUser();
    const [location, setLocation] = useState({
        currency: "INR",
        calling_code: "+91",
        country: null
    });
    const [pricingData, setPricingData] = useState([]);
    const [loading, setLoading] = useState(true);


    const currency = location.country === 'India' ? 'INR' : 'USD';

    // Style definitions
    const tooltipContainerStyle = {
        position: 'absolute',
        backgroundColor: 'white',
        color: '#333',
        padding: '12px 16px',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        fontSize: '14px',
        zIndex: 1,
        width: '250px',
        bottom: '-80px',
        left: '30px',
        border: '1px solid #d1d5db',
    };

    const tooltipArrowStyle = {
        position: 'absolute',
        width: '14px',
        height: '14px',
        backgroundColor: 'white',
        border: '1px solid black',
        borderTop: 'none',
        borderLeft: 'none',
        top: '-7px',
        left: '78%',
        transform: 'translateX(-50%) rotate(225deg)',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
    };

    const tooltipIconStyle = {
        marginLeft: '5px',
        cursor: 'pointer',
        width: '16px',
        height: '16px',
    };

    const getArrowLeftPosition = (id) => {
        switch (id) {
            case 'tt1':
                return '78%';
            case 'tt2':
                return '56%';
            case 'tt3':
                return '57%';
            default:
                return '50%';
        }
    };

    useEffect(() => {
        getLocation();
        fetchPricingDetails();
    }, []);

    const getLocation = () => {
        // First try to get location from geolocation API
        navigator.geolocation.getCurrentPosition(
            successCallback,
            () => {
                // If geolocation fails, fallback to IP-based location
                fetchLocationFromIP();
            }
        );
    };

    const fetchLocationFromIP = async () => {
        try {
          const response = await fetch("https://ipapi.co/json/");
          const data = await response.json();
          setLocation({
            currency: data.currency,
            calling_code: data.country_calling_code,
            country: data.country_name,
          });
        } catch (error) {
          console.error("Error fetching IP location:", error);
        }
      };

    async function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const res = await getCountryFromLatLong(latitude, longitude);
        setLocation({ ...res, country: res.country || null });
    }

    const fetchPricingDetails = async () => {
        try {
            const { data, error } = await supabase
                .from("pricing_plans")
                .select("*")
                .order("Duration", { ascending: true });

            if (error) {
                console.error("Supabase error:", error.message);
                setLoading(false);
                return;
            }

            if (data && data.length > 0) {
                setPricingData(data);
                console.log("pricingdata",pricingData);
                
            } else {
                console.warn("No data found in Pricing table.");
            }

            setLoading(false);
        } catch (error) {
            console.error("Error fetching details:", error.message);
            setLoading(false);
        }
    };
    
    const getPriceDetails = (pricing) => {
        const isIndianUser = location.country === "India";
        const currency = isIndianUser ? pricing.Alt_Currency : pricing.Currency; // Use "INR" directly
        const mrp = isIndianUser ? pricing.MRPIND : pricing.MRP;
        const discountedPrice = isIndianUser ? pricing.Final_Payable_INR : pricing.Final_Payable_Amount;
        const discount = isIndianUser ? pricing.Discount : pricing.DiscountUSD;

        return { currency, mrp, discountedPrice, discount };
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!pricingData.length) {
        return <div>No Pricing Data Available</div>;
    }


    const handlePayments = async (pricing) => {
        // console.log(pricing)
        const { discountedPrice } = getPriceDetails(pricing);

        const priceInINR = location.currency !== "INR"
            ? discountedPrice * 83 // Using a fixed conversion rate for example, you should use real-time rates
            : discountedPrice;

        // console.log("discounted price: ", discountedPrice)
        const response = await fetch('/api/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: discountedPrice, currency: "INR" }),
        });

        const orderData = await response.json();
        // console.log("orderData", orderData)
        const { id: order_id, currency: order_currency, amount: order_amount } = orderData;

        // console.log(order_id, order_currency, order_amount)
        if (!order_id) {
            console.error('Failed to create order');
            setLoading(false);
            return;
        }

        // Initialize Razorpay options
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // add your Razorpay key here
            amount: order_amount.toString(),
            currency: order_currency,
            name: 'Happy People AI LLP',
            description: `${Math.round(pricing.Duration / 30)} Months Subscription`,
            image: "/images/hpalogo.svg",
            order_id,
            handler: function (response) {
                console.log("Payment successful", response);
                verifyPayment(response, pricing);
            },
            prefill: {
                name: user?.full_name || "",
                email: user?.email || "",
                contact: user?.phone || ""
            },
            notes: {
                plan_id: pricing.Pricing_UID,
                duration: pricing.Duration,
                original_currency: location.currency,
                original_amount: discountedPrice
            },
            theme: {
                color: "#3B82F6" // matches the blue-500 color
            }
        };

        // Open Razorpay checkout
        const rzp = new window.Razorpay(options);

        rzp.on('payment.failed', function (response) {
            console.error("Payment failed", response.error);
            alert("Payment failed. Please try again.");

            
        });
        
        rzp.open();


    }

    const verifyPayment = async (paymentResponse, pricing) => {
      try {
          const payload = {
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_signature: paymentResponse.razorpay_signature,
          };
  
          const response = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
          });
  
          const data = await response.json();
  
          if (data.success) {
              console.log("Payment verified successfully:", data.paymentDetails);
  
              // Create a complete transaction record with all required fields
              const transactionData = {
                  razorpay_payment_id: paymentResponse.razorpay_payment_id,
                  razorpay_order_id: paymentResponse.razorpay_order_id,
                  
              };
  
              // Save to Supabase with complete data
              const { error } = await supabase
                  .from('transactions')
                  .insert([transactionData]);
  
              if (error) {
                  console.error("Full error details:", error); // Log full error for debugging
                  alert("Payment verification successful, but failed to save transaction. Please contact support.");
                  return;
              }
  
              alert("Payment successful! Your subscription has been activated.");
          } else {
              console.error("Payment verification failed:", data.message);
              alert("Payment verification failed. Please contact support.");
          }
      } catch (error) {
          console.error("Payment verification error:", error);
          alert("An error occurred while verifying your payment. Please contact support.");
      }
  };
// console.log("pricingdata",pricingData);


    return (

        <div className="grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 sm:flex-row justify-center items-center gap-6 sm:px-8 px-1 py-1 md:pb-12 bg-[#FBF9F8] mb-4 md:mb-0" id="pricingdetails">
            <div className="relative bg-white shadow-lg p-8 ml-4 2xl:ml-20 w-[calc(90%)] sm:w-80 flex flex-col items-center rounded-t-md mt-16" style={{ borderRadius: '8px' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 bg-black text-white px-4 py-1 text-center rounded-t-md w-[150px]">
                    FREE
                </div>
                <div className="mt-6">
                    <p className="text-[#A4AFB6] line-through font-normal decoration-black  text-3xl text-left">{currency} 0</p>
                    <p className="text-[#FF9B00] font-normal text-lg text-left">Try first and decide later</p>
                    <p className="font-bold text-3xl mb-4 text-left" style={{ color: '#2C3E50', fontWeight: 400 }}>FREE + TRIAL</p>
                    <ul className="text-[#666666] list-disc ml-4 text-left mb-4" style={{ color: '#666666' }}>
                        <li>100 Hours Premium</li>
                        <li>50 AI Coins</li>
                        <li>200 Profile IQ Coins</li>
                        <li>All Features</li>
                    </ul>
                    <br />
                    <hr className="w-full my-4" />
                    <a href={`${apiBaseUrl}`}>
                        <button className="bg-[#3498DB] text-white rounded-full px-6 py-2 flex items-center justify-center">
                            Subscribe
                            <span className="ml-2">
                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.331956 10.2929C-0.0585686 10.6834 -0.0585686 11.3166 0.331956 11.7071C0.72248 12.0976 1.35564 12.0976 1.74617 11.7071L0.331956 10.2929ZM12.0391 1C12.0391 0.447714 11.5913 -7.61451e-07 11.0391 -3.39982e-07L2.03906 -2.13542e-07C1.48678 -5.50717e-07 1.03906 0.447715 1.03906 0.999999C1.03906 1.55228 1.48678 2 2.03906 2L10.0391 2L10.0391 10C10.0391 10.5523 10.4868 11 11.0391 11C11.5913 11 12.0391 10.5523 12.0391 10L12.0391 1ZM1.74617 11.7071L11.7462 1.70711L10.332 0.292893L0.331956 10.2929L1.74617 11.7071Z" fill="white" />
                                </svg>
                            </span>
                        </button>
                    </a>
                    <p className="flex items-center text-[#666666] mt-4">
                        <span className="mr-2">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0391 1C12.6105 2 9.18192 1.00004 8.03906 0C6.89621 0.999957 3.46763 2 0.0390625 1C0.0390625 8 2.32478 13 8.03906 16C13.7533 13 16.0391 8 16.0391 1Z" fill="#FF9B00" />
                                <path d="M12.6097 4C10.3239 4.5 8.69129 3.62503 8.03823 3C7.38516 3.62497 5.42598 4.625 3.4668 4C3.4668 7.5 4.77292 10.625 8.03823 12.5C11.3035 10.625 12.6097 7.5 12.6097 4Z" stroke="white" />
                            </svg>
                        </span>
                        100% money-back guarantee
                    </p>
                </div>
            </div>


            {pricingData
            .sort((a,b) => a.Duration - b.Duration)
            .map((Pricing) => {
                const { currency, mrp, discountedPrice, discount } = getPriceDetails(Pricing);
                return (
                    <div key={Pricing.Pricing_UID} className="relative bg-white shadow-lg p-8 ml-4 2xl:ml-20  w-[calc(90%)] sm:w-80 flex flex-col items-start rounded-t-md mt-16" style={{ borderRadius: '8px' }}>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 bg-black text-white px-4 py-1 text-center rounded-t-md w-[150px]">
                            {Math.round(Pricing.Duration / 30)} Months
                        </div>
                        <div className="mt-6">
                            <p className="text-[#A4AFB6] line-through font-normal decoration-black  text-3xl text-left">{currency} {mrp}</p>
                            <p className="text-[#FF9B00] font-normal text-lg text-left">{discount}</p>
                            <p className="font-bold text-3xl mb-4 text-left" style={{ color: '#2C3E50', fontWeight: 400 }}>{currency} {Math.floor(discountedPrice)}</p>
                            <ul className="text-[#666666] list-disc ml-4 text-left mb-4" style={{ color: '#666666' }}>
                                <li style={{ lineHeight: '24px' }}>{Pricing.Duration} Days Premium</li>
                                <li style={{ lineHeight: '24px' }}>{Pricing.AI_Tokens} AI Gems</li>
                                <li style={{ lineHeight: '24px' }}>{Pricing.Profile_IQ_Gems} Profile IQ Gems</li>
                                {Pricing.Pricing_UID === 1 && <>
                                    <li style={{ lineHeight: '24px' }}>All Features</li>
                                    <li style={{ lineHeight: '24px' }}><li>Standard customer support</li></li><br /></>}
                                {Pricing.Pricing_UID === 2 && (
                                    <>
                                        <li style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                            <span><li>Priority customer support</li></span>
                                            <img
                                                id="tt1"
                                                width='24px'
                                                height='24px'
                                                src='/images/tooltip.svg'
                                                alt="Tooltip Icon"
                                                style={tooltipIconStyle}
                                                onMouseEnter={() => setHoveredTooltipId('tt1')}
                                                onMouseLeave={() => setHoveredTooltipId(null)}
                                            />
                                            {hoveredTooltipId === 'tt1' && (
                                                <div style={tooltipContainerStyle}>
                                                    <div className="text-[#161513]" style={{ ...tooltipArrowStyle, left: getArrowLeftPosition('tt1') }}></div>
                                                    Be the first to use our latest tools and updates
                                                </div>
                                            )}                                            
                                        </li>
                                        <li style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                            <span><li>Early Access to New Features</li></span>
                                        </li>
                                        <br />
                                    </>
                                )}
                                {Pricing.Pricing_UID === 3 && (
                                    <>
                                        <li style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                            <span><li>VIP customer support</li></span>
                                            <img
                                                id="tt2"
                                                width='24px'
                                                height='24px'
                                                src='/images/tooltip.svg'
                                                alt="Tooltip Icon"
                                                style={tooltipIconStyle}
                                                onMouseEnter={() => setHoveredTooltipId('tt2')}
                                                onMouseLeave={() => setHoveredTooltipId(null)}
                                            />
                                            {hoveredTooltipId === 'tt2' && (
                                                <div style={tooltipContainerStyle}>
                                                    <div className="text-[#161513]"  style={{ ...tooltipArrowStyle, left: getArrowLeftPosition('tt2') }}></div>
                                                    Personalized support with a dedicated account manager.
                                                </div>
                                            )}
                                        </li>
                                        <li style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                            <span><li>Exclusive Beta Access</li></span>
                                            <img
                                                id="tt3"
                                                width='24px'
                                                height='24px'
                                                src='/images/tooltip.svg'
                                                alt="Tooltip Icon"
                                                style={tooltipIconStyle}
                                                onMouseEnter={() => setHoveredTooltipId('tt3')}
                                                onMouseLeave={() => setHoveredTooltipId(null)}
                                            />
                                            {hoveredTooltipId === 'tt3' && (
                                                <div style={tooltipContainerStyle}>
                                                    <div className="text-[#161513]" style={{ ...tooltipArrowStyle, left: getArrowLeftPosition('tt3') }}></div>
                                                    First to experience and provide feedback on all new features
                                                </div>
                                            )}
                                        </li>
                                        <br />
                                    </>
                                )}
                            </ul>
                            <hr className="w-full my-4" />


            <a href={`${apiBaseUrl}`}>

                <button className="bg-[#3498DB] text-white rounded-full px-6 py-2 flex items-center justify-center">
                  Subscribe
                  <span className="ml-2">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.331956 10.2929C-0.0585686 10.6834 -0.0585686 11.3166 0.331956 11.7071C0.72248 12.0976 1.35564 12.0976 1.74617 11.7071L0.331956 10.2929ZM12.0391 1C12.0391 0.447714 11.5913 -7.61451e-07 11.0391 -3.39982e-07L2.03906 -2.13542e-07C1.48678 -5.50717e-07 1.03906 0.447715 1.03906 0.999999C1.03906 1.55228 1.48678 2 2.03906 2L10.0391 2L10.0391 10C10.0391 10.5523 10.4868 11 11.0391 11C11.5913 11 12.0391 10.5523 12.0391 10L12.0391 1ZM1.74617 11.7071L11.7462 1.70711L10.332 0.292893L0.331956 10.2929L1.74617 11.7071Z" fill="white" />
                    </svg>
                  </span>
                </button>

              </a> 

 

                    
                            <p className="flex items-center text-[#666666] mt-4">
                                <span className="mr-2">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0391 1C12.6105 2 9.18192 1.00004 8.03906 0C6.89621 0.999957 3.46763 2 0.0390625 1C0.0390625 8 2.32478 13 8.03906 16C13.7533 13 16.0391 8 16.0391 1Z" fill="#FF9B00" />
                                        <path
                                            d="M12.6097 4C10.3239 4.5 8.69129 3.62503 8.03823 3C7.38516 3.62497 5.42598 4.625 3.4668 4C3.4668 7.5 4.77292 10.625 8.03823 12.5C11.3035 10.625 12.6097 7.5 12.6097 4Z"
                                            stroke="white"
                                        />
                                    </svg>
                                </span>
                                100% money-back guarantee
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PricingInfo;


