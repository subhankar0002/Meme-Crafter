import React, { useEffect, useState } from "react";
import Card from "../components/card";
import GetAllImage from "../components/api"; // Import correctly

const Memepage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchMemes = async () => {
            setLoading(true); // Start loading
            const memes = await GetAllImage(); // Await API call
            setData(memes);
            setLoading(false); // Stop loading
        };
        fetchMemes();
    }, []);

    return (
        <div className="min-h-screen bg-white p-6">
            {loading ? ( 
                <p className="text-center text-xl font-semibold">Loading memes...</p> 
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
