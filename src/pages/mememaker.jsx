import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text";
import { toJpeg } from "html-to-image";
import download from "downloadjs";

const MemeMekar = ({ darkMode }) => {
    const [params] = useSearchParams();
    const [texts, setTexts] = useState([]);
    const memeRef = useRef(null);

    const addText = () => {
        setTexts([...texts, { id: texts.length }]);
    };

    const saveMeme = () => {
        if (memeRef.current) {
            toJpeg(memeRef.current)
                .then((dataUrl) => {
                    download(dataUrl, "meme.jpg");
                })
                .catch((error) => {
                    console.error("Failed to save image:", error);
                });
        }
    };
    return (
        <div className={`h-screen w-screen flex flex-col items-center justify-center transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-slate-200 text-black"}`}>
            <div ref={memeRef} className={`w-2/5 h-80 flex items-center relative p-2 shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`} >
                <img src={params.get("url")} alt="Meme" className="h-64 object-contain" />
                {texts.map((text) => (
                    <Text key={text.id} />
                ))}
            </div>
            <div className="mt-4 flex gap-4">
                <button
                    onClick={addText}
                    className={`px-4 py-2 font-semibold rounded-lg transition duration-300 shadow-md ${darkMode ? "bg-blue-600 hover:bg-blue-800 text-white" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
                >
                    Add Text
                </button>
                <button
                    onClick={saveMeme}
                    className={`px-4 py-2 font-semibold rounded-lg transition duration-300 shadow-md ${darkMode ? "bg-green-600 hover:bg-green-800 text-white" : "bg-green-500 hover:bg-green-700 text-white"}`}
                >
                    Save as JPEG
                </button>
            </div>
        </div>
    );
};

export default MemeMekar;
