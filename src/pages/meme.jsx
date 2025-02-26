import React, { useEffect, useState } from "react";
import Card from "../components/card";
import GetAllImage from "../components/api"; 
import MemeCardSkeleton from "../components/skeleton"
const Memepage = ({ darkMode }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchMemes = async () => {
            setLoading(true); 
            const memes = await GetAllImage(); 
            setData(memes);
            setLoading(false); 
        };
        fetchMemes();
    }, []);
    return (
        <div className={`min-h-screen p-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            {loading ? ( 
                <MemeCardSkeleton/> 
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((el) => (
                        <Card key={el.id} image={el.url} title={el.name} />
                    ))}
                </div>
            )}

        </div>
        
    );
};

export default Memepage;
