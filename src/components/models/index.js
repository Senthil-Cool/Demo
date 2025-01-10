import { useUser } from '@/context';
import { postRequest } from '@/utils/api';
import React, { useState } from 'react';

const emailValidator = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    if (!email) {
        return "Please enter email";
    }
    if (!isValid) {
        return 'Invalid email address';
    }
};

const Model = ({ onOpen, onClose, isOpen }) => {
    const [input, setInput] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailSent, setEmailSent] = useState(false);  // New state to handle email submission success
    const { token } = useUser(0);

    const onSubmit = async () => {
        const error = emailValidator(input);
        if (error) {
            setEmailError(error);
            return;
        }
        try {
            const res = await postRequest("/addWaitlist", { email: input }, { Authorization: `Bearer ${token}` });
            console.log(res, "this is res");
            setEmailSent(true); // Email sent successfully
        } catch (err) {
            if (err.response) {
                // Server responded with a status code out of the range of 2xx
                console.error("Error response:", err.response.data, err.response.status);
            } else if (err.request) {
                // Request was made but no response was received
                console.error("Request error:", err.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error", err.message);
            }
            console.log(err, "this is an error");
        }
    };
    

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={onClose}>
            <div className={`bg-[#FBF9F8] p-8 rounded-lg shadow-lg transform transition-transform duration-300 w-[90vh] max-w-lg ${isOpen ? "translate-y-0" : "-translate-y-10"}`} onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none border border-gray-400 rounded-lg w-8 h-8 flex items-center justify-center"
                onClick={onClose}
                >
                <span className="sr-only">Close</span> {/* Hidden text for accessibility */}
                ✕ {/* The X icon */}
                </button>

                {/* Success Message */}
                {emailSent ? (
                    <div className="text-center">
                        <img src="/images/riseonsuite.svg" alt="RiseOn Suite" className="mx-auto w-[150px]" />
                        <div className="mt-6">
                        <div className="flex justify-center items-center space-x-3"> {/* Increased spacing slightly */}
                        <img src="/images/done.svg" alt="done" className="w-8 h-8" /> {/* Adjust icon size to make it more prominent */}
                        <h2 className="text-3xl font-bold text-gray-800 py-4">You're on the List!</h2> {/* Larger font size */}
                    </div>

                            <p className="text-gray-600 mt-4 px-4 py-4">
                                Thank you for joining the waitlist! You're one step closer to transforming your career with AI-powered tools.
                            </p>
                            <p className="text-gray-500 mt-2 px-12 text-sm">
                                We'll notify you as soon as we're ready to launch. Keep an eye on your inbox for early access and updates.
                            </p>
                        </div>
                        
                        {/* Powered By Section */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-400 text-sm font-normal py-4">Powered By</p>
                            <img src="/images/HPAlogo.svg" alt="Happy People AI" className="mx-auto w-[150px]" />
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Default Form */}
                        <div className="text-center">
                            <img src={'/images/riseonsuite.svg'} alt="RiseOn Suite" className="mx-auto w-[150px]" />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className="text-2xl font-semibold text-gray-800">Your AI-Powered Career Companion Is Coming Soon</h2>
                            <p className="text-gray-600 mt-2 text-sm">
                                Create professional profiles, generate AI-crafted resumes and cover letters, access job boards, and master interviews—all in one platform.
                            </p>
                        </div>

                        <form className="space-y-4 text-center mt-4" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                value={input}
                                onChange={(e) => {
                                    setEmailError("");
                                    setInput(e.target.value);
                                }}
                                required
                            />
                            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#2C3E50] text-white font-semibold rounded-full hover:bg-[#1B2A38] transition"
                            >
                                Join the waitlist!
                            </button>
                        </form>

                        {/* Powered by */}
                        <div className="text-center text-bold text-[#1615134D] mt-6">
                            Powered By
                            <img src={'/images/HPAlogo.svg'} alt="HPA logo" className="mx-auto w-[150px]" style={{ paddingTop: '4px' }} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Model;
