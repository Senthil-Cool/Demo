import TextField from "@mui/material/TextField";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallIcon from "@mui/icons-material/Call";
import { InputAdornment } from "@mui/material";


const Contact = () => {
    const handleClick = async () => {
        const payload = {
            yourName: document.getElementById("full-name").value,
            yourEmail: document.getElementById("email").value,
            phoneNumber: document.getElementById("phone-number").value,
            yourMessage: document.getElementById("message").value,
        };
        
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzJ2dOfGSvp10vhNDSAdi-Yp-btPDQZUZL8PBdABrWh2pe4yc5J_qjlFhdRoHwSLanUFA/exec", {
                redirect: "follow",
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(payload),
            });
    
            // Since we're using no-cors, we won't get a JSON response
            // We'll assume success if we get here
            console.log("Form submitted");
            alert("Form submitted successfully!");
            
            // Clear form fields
            document.getElementById("full-name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone-number").value = "";
            document.getElementById("message").value = "";
            
        } catch (error) {
            console.error("Failed to send data:", error);
            alert("Failed to connect to the server.");
        }
    };

    return (
        <div className="bg-white px-4 sm:px-8 md:px-12 lg:px-24" id="contact">
            <div className="max-w-full pr-0 md:pr-8 mx-auto py-10 sm:py-16 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full">
                    {/* Left Column */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        <h2 className="text-[#114067] font-light text-2xl sm:text-3xl leading-9">
                            Let's Connect
                        </h2>
                        <p className="text-[#161513] lg:pr-40 font-medium text-sm sm:text-base leading-6">
                            We would love to hear from you. Reach out to us for any
                            inquiries, feedback, or support.
                        </p>
                        <div className="flex flex-col  gap-8 mt-4 sm:ml-6">
                            {/* Location Info */}
                            <div className="flex gap-4 sm:gap-6 items-start">
                                <Image
                                    src="/images/Location.svg"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 sm:w-8 sm:h-8 mt-1"
                                    alt="Location icon"
                                />
                                <div>
                                    <p className="font-bold text-sm text-black leading-6">Our Location</p>
                                    <p className="text-[#666666] font-bold text-xs sm:text-sm leading-6">
                                        Block-c 3rd Floor Fortune Towers,
                                    </p>
                                    <p className="text-[#666666] font-bold text-xs sm:text-sm leading-6">
                                        Survey no.7 And 8 Kavuri Hills Madhapur Hyderabad,
                                    </p>
                                    <p className="text-[#666666] font-bold text-xs sm:text-sm leading-6">
                                        Shaikpet Telangana India - 500081.
                                    </p>
                                </div>
                            </div>

                            {/* Phone Number Info */}
                            <div className="flex gap-4 sm:gap-6 items-start">
                                <Image
                                    src="/images/PhoneNumber.svg"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 sm:w-8 sm:h-8 mt-1"
                                    alt="Phone icon"
                                />
                                <div>
                                    <p className="font-bold text-sm text-black leading-6">Phone Number</p>
                                    <p className="text-[#666666] font-bold text-xs sm:text-sm leading-6">
                                        +91 93985 92659
                                    </p>
                                    <p className="text-[#666666] font-bold text-xs sm:text-sm leading-6">
                                        +91 98182 73612
                                    </p>
                                </div>
                            </div>

                            {/* Email Info */}
                            <div className="flex gap-4 sm:gap-6 items-start">
                                <Image
                                    src="/images/Email.svg"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 sm:w-8 sm:h-8 mt-1"
                                    alt="Email icon"
                                />
                                <div>
                                    <p className="font-bold text-sm text-black leading-6">Email Address</p>
                                    <p className="text-[#666666] font-bold text-xs sm:text-sm leading-6">
                                        info@happypeopleai.com
                                    </p>
                                    <p className="text-[#666666] font-bold text-xs sm:text-sm leading-6">
                                        contact@happypeopleai.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-6 w-full lg:w-[90%] flex flex-col gap-5 md:gap-10">
                        <TextField
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#161513", // Default border color
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#161513", // Hover state
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FF9B00", // Focused state border color
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#161513", // Default label color
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#161513", // Focused label color
                        },
                        "& .MuiFormLabel-asterisk": {
                          color: "red", // Asterisk color
                        },
                      }}
                            required
                            id="full-name"
                            label="Your Name"
                            type="text"
                            placeholder="Full Name"
                            className="w-full"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                        sx={{
                            "& .MuiOutlinedInput-root": {
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#161513", // Default border color
                              },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#161513", // Hover state
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#FF9B00", // Focused state border color
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "#161513", // Default label color
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#161513", // Focused label color
                            },
                            "& .MuiFormLabel-asterisk": {
                              color: "red", // Asterisk color
                            },
                          }}
                            required
                            id="email"
                            label="Your Email"
                            type="email"
                            placeholder="Type your email here"
                            className="w-full"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                        sx={{
                            "& .MuiOutlinedInput-root": {
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#161513", // Default border color
                              },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#161513", // Hover state
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#FF9B00", // Focused state border color
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "#161513", // Default label color
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#161513", // Focused label color
                            },
                            "& .MuiFormLabel-asterisk": {
                              color: "red", // Asterisk color
                            },
                          }}
                            required
                            id="phone-number"
                            label="Phone Number"
                            type="tel"
                            placeholder="+91-XXXXX XXXXX"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            className="w-full"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CallIcon />
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                        sx={{
                            "& .MuiOutlinedInput-root": {
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#161513", // Default border color
                              },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#161513", // Hover state
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#FF9B00", // Focused state border color
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "#161513", // Default label color
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#161513", // Focused label color
                            },
                            "& .MuiFormLabel-asterisk": {
                              color: "red", // Asterisk color
                            },
                          }}
                            required
                            id="message"
                            label="Your Message"
                            placeholder="Type your message here"
                            multiline
                            rows={4}
                            className="w-full"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <button
                            className="bg-[#3498DB] w-32 sm:w-[175px] h-[48px] sm:h-[56px] rounded-full text-white font-bold italic text-lg sm:text-xl leading-6 flex items-center justify-center gap-2 hover:bg-[#2980b9] transition-colors duration-300 "
                            onClick={handleClick}
                        >
                            Submit <ArrowOutwardIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
