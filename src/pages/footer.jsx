import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

export default function Footer({ darkMode }) {
    return (
        <footer
            className={`w-full py-4 px-6 flex flex-col md:flex-row items-center justify-between transition-all duration-300 ${
                darkMode ? "bg-gray-900 text-gray-200" : "bg-slate-900 text-white"
            }`}
        >
            <p className="w-full text-center text-sm md:flex-1">
                &copy; {new Date().getFullYear()} Subhankar Saha
            </p>

            <div className="flex space-x-4 mt-3 md:mt-0 md:ml-auto">
                <a
                    href="https://github.com/subhankar0002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${darkMode ? "hover:text-orange-400" : "hover:text-blue-500"}`}
                >
                    <FaGithub size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/in/subhankar-saha-29512b30a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${darkMode ? "hover:text-orange-400" : "hover:text-blue-500"}`}
                >
                    <FaLinkedin size={18} />
                </a>
                <a
                    href="https://subhankar0002.github.io/My-portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${darkMode ? "hover:text-orange-400" : "hover:text-blue-500"}`}
                >
                    <FaGlobe size={18} />
                </a>
                <a
                    href="https://x.com/Subhankar_002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${darkMode ? "hover:text-orange-400" : "hover:text-blue-500"}`}
                >
                    <FaTwitter size={18} />
                </a>
            </div>
        </footer>
    );
}
