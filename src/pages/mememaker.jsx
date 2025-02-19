import React, { useState, useRef,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text";
import { toJpeg } from "html-to-image";
import download from "downloadjs";

const MemeMekar = () => {
    const [params] = useSearchParams();
    const [texts, setTexts] = useState([]);
    // const [isEditing, setIsEditing] = useState(false);
    // const [bgColor, setBgColor] = useState("#f1f5f9");
    // const [imgHeight, setImgHeight] = useState("auto");
    // const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    const memeRef = useRef(null);

    const addText = () => {
        setTexts([...texts, { id: texts.length }]);
    };

    // mesure image Size............
    // useEffect(() => {
    //             const imageUrl = params.get("url");
    //             if (imageUrl) {
    //                 const img = new Image();
    //                 img.src = imageUrl;
        
    //                 img.onload = () => {
    //                     setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
    //                 };
    //             }
    //         }, [params]);

    // const [imgWidth, setImgWidth] = useState(`imageSize.width`);


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
        <div className="h-screen w-screen bg-slate-200 flex flex-col items-center justify-center">
            <div ref={memeRef} className="w-2/5 h-80 flex items-center relative bg-white p-2 shadow-lg " >
                <img src={params.get("url")} alt="Meme" className="h-64  object-contain"  />

                {texts.map((text) => (
                    <Text key={text.id} />
                ))}
            </div>
            <div className="mt-4 flex gap-4">
                <button
                    onClick={addText}
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                >
                    Add Text
                </button>
                <button
                    onClick={saveMeme}
                    className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
                >
                    Save as JPEG
                </button>
                {/* <button
                    onClick={() => setIsEditing(true)}
                    className="bg-green-500 text-white mt-2 font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
                >
                    Edit
                </button> */}
            </div>
            {/* {isEditing && (
                <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col transition-transform transform translate-x-0 md:w-80 lg:w-96">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Edit Panel</h2>
                        <button onClick={() => setIsEditing(false)} className="text-red-500 text-lg font-bold">&times;</button>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600">Edit your meme settings here.</p>
                        <label className="block mt-4 text-gray-700">Background Color:</label>
                        <input
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="mt-2 w-full h-10 border rounded-lg"
                        />
                        <label className="block mt-4 text-gray-700">Image Width:</label>
                        <input
                            type="range"
                            min={imgWidth}
                            max={100}
                            value={imgWidth}
                            onChange={(e) => setImgWidth(Number(e.target.value))}  // Convert value to a number
                            className="mt-2 w-full h-10 border rounded-lg p-2"
                        />
                        <h2 className="text-lg font-semibold mb-4">Meme Size: {imageSize.width} x {imageSize.height}</h2>

                    </div>
                </div>
            )} */}

        </div>

    );
};

export default MemeMekar;

// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// const MemeMekar = () => {
//     const [params] = useSearchParams();
//     const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

//     useEffect(() => {
//         const imageUrl = params.get("url");
//         if (imageUrl) {
//             const img = new Image();
//             img.src = imageUrl;

//             img.onload = () => {
//                 setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
//             };
//         }
//     }, [params]);

//     return (
//         <div className="flex flex-col items-center">
//             <h2 className="text-lg font-semibold mb-4">Meme Size: {imageSize.width} x {imageSize.height}</h2>
//             <img src={params.get("url")} alt="Meme" className="max-w-full max-h-full" />
//         </div>
//     );
// };

// export default MemeMekar;
