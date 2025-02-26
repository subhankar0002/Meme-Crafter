import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`shadow sticky top-0 z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-slate-300 text-black"}`}>
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-3xl font-bold">
                            <span className="text-orange-700 dark:text-orange-500">Meme </span>Crafter
                        </h1>
                    </Link>

                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle Button */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
                        >
                            {darkMode ? "☀️ Light" : "🌙 Dark"}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-2xl focus:outline-none"
                        >
                            {isMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>

                    {/* Desktop Navigation (Always Visible on lg Screens) */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        {["Home", "About", "Contact"].map((item) => (
                            <NavLink
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `block py-2 px-4 text-lg duration-200 ${
                                        isActive
                                            ? "text-orange-700 dark:text-orange-500 font-semibold"
                                            : "hover:text-orange-700 dark:hover:text-orange-500"
                                    }`
                                }
                            >
                                {item}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute top-full left-0 w-full npm s ${darkMode ? "bg-gray-900 text-white" : "bg-slate-300 text-black"} shadow-lg lg:hidden`}
                        >
                            <ul className="flex flex-col space-y-4 p-4">
                                {["Home", "About", "Contact"].map((item) => (
                                    <li key={item}>
                                        <NavLink
                                            to={`/${item.toLowerCase()}`}
                                            className={({ isActive }) =>
                                                `block py-2 px-4 text-lg duration-200 ${
                                                    isActive
                                                        ? "text-orange-700 dark:text-orange-500 font-semibold"
                                                        : "hover:text-orange-700 dark:hover:text-orange-500"
                                                }`
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
