import { Link } from "react-router-dom";

export default function About({ darkMode }) {
    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>

            {/* About Content */}
            <div className="flex-grow py-16 px-6 md:px-12 xl:px-24">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">

                    {/* Image Section */}
                    <div className="relative w-full md:w-5/12">
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F207-2073434_clip-art-mr-bean-cartoon-mr-bean-cartoon.png&f=1&nofb=1&ipt=6824edf6fb7f09c2e892edf6d795161460d68838d5f7c4cfaab065a137ba34dc&ipo=images"
                            alt="Meme Generator"
                            className="w-full h-auto rounded-lg shadow-lg transition-all duration-300"
                        />
                        {darkMode && (
                            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        )}
                    </div>


                    {/* Content Section */}
                    <div className="w-full md:w-7/12">
                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            About Meme Crafter
                        </h2>
                        <p className={`mt-6 text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                            Welcome to <span className="text-orange-600 font-semibold">Meme Crafter</span> – the ultimate meme generator platform!
                            Our website allows you to create <b>hilarious, viral memes</b> in just a few clicks.
                        </p>
                        <p className={`mt-4 text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                            Whether you're a casual meme lover or a social media influencer, our <b>easy-to-use tools </b> 
                            let you add text, stickers, and customize images to craft the perfect meme.
                        </p>
                        <p className={`mt-4 text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                            Express yourself, share your creativity, and make the internet laugh with <b>Meme Crafter</b>.
                            Let's create memes that break the internet.
                        </p>

                        {/* Button to Navigate */}
                        <div className="mt-6">
                            <Link
                                to="/memepage"
                                className="px-6 py-3 inline-block text-lg font-semibold rounded-lg shadow-md transition-all duration-300
                                    bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg"
                            >
                                Start Creating Memes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer (Sticky at Bottom)
            <footer className={`py-4 text-center text-sm font-medium ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
                © 2025 Meme Crafter. All rights reserved.
            </footer> */}
        </div>
    );
}
