import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact({ darkMode }) {
    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setName("");
        setEmail("");
        setMessage(""); // Show popup message
        setTimeout(() => setShowPopup(false), 3000); // Hide after 3 sec
    };

    return (
        <div className={`relative flex items-top justify-center min-h-[700px] transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            } sm:items-center sm:pt-0`}>
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Contact Info Section */}
                        <div className={`p-6 mr-2 rounded-lg transition-all duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
                            }`}>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium mt-2">
                                Fill in the form to start a conversation
                            </p>

                            {/* Address */}
                            <div className="flex items-center mt-8">
                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    viewBox="0 0 24 24">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Krishnanagar, WB, 741102
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-center mt-4">
                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    viewBox="0 0 24 24">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    8597874***
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center mt-2">
                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    sahav0117@gmail.com
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`w-100 mt-2 py-3 px-3 rounded-lg border font-semibold focus:outline-none transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-600 text-white focus:border-orange-500" :
                                        "bg-white border-gray-400 text-gray-800 focus:border-orange-500"
                                        }`}
                                    required
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}

                                    className={`w-100 mt-2 py-3 px-3 rounded-lg border font-semibold focus:outline-none transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-600 text-white focus:border-orange-500" :
                                        "bg-white border-gray-400 text-gray-800 focus:border-orange-500"
                                        }`}
                                    required
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <textarea
                                    name="message"
                                    id="message"
                                    value={message}
                                    placeholder="Send Message..."
                                    rows="4"
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={`custom-scrollbar w-100 mt-2 py-3 px-3 rounded-lg border font-semibold focus:outline-none transition-all duration-300 resize-none ${darkMode ? "bg-gray-800 border-gray-600 text-white focus:border-orange-500" : "bg-white border-gray-400 text-gray-800 focus:border-orange-500"}`}
                                    required
                                ></textarea>


                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3 transition-all duration-300 hover:bg-orange-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-20 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg"
                    >
                        ✅ Message Sent Successfully!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
