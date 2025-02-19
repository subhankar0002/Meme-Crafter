import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                    <h1 className="text-3xl font-bold"><span className="text-orange-700  font-bold">Meme </span>Crafter</h1>
                    </Link>

                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="lg:hidden text-gray-800 text-2xl focus:outline-none"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
                            {["Home", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={`/${item.toLowerCase()}`}
                                        className={({ isActive }) =>
                                            `block py-2 px-4 text-lg duration-200 border-b lg:border-0 ${
                                                isActive ? "text-orange-700 font-semibold" : "text-gray-800"
                                            } hover:text-orange-700`
                                        }
                                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                </div>
            </nav>
        </header>
    );
}
