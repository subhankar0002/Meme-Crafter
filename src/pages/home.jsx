import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home({ darkMode }) {
    return (
        <div className={`relative w-full h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1040798%2Fscreenshots%2F15685874%2Fbackground3.gif&f=1&nofb=1&ipt=533179107b0001a4c9b7791891939c31f4595458b66ac9545c23db4e450d0625&ipo=images" 
                    className={`w-full h-full object-cover ${darkMode ? "opacity-50" : "opacity-90"}`}
                />
                <div className={`absolute inset-0 ${darkMode ? " bg-opacity-70" : "bg-gradient-to-b from-transparent to-gray-900"}`}></div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 text-center px-6 sm:px-12">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-6xl font-extrabold leading-tight"
                >
                    Create Your Own <motion.span 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                        className="text-orange-500"
                    >Meme!</motion.span>
                </motion.h1>
                <p className="mt-4 text-lg sm:text-xl opacity-80">
                    Express yourself with hilarious and trending memes in seconds.
                </p>
                <Link
                    to="/memepage"
                    className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 transition-all text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
                >
                    Start Creating
                </Link>
            </div>
        </div>
    );
}
