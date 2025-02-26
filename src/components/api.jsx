import axios from "axios";

const GetAllImage = async () => {
    try {
        const response = await axios.get('https://api.imgflip.com/get_memes');
        return response.data.data.memes; // Return only the memes array
    } catch (error) {
        console.error("Error fetching memes:", error);
        return []; // Return an empty array to prevent crashes
    }
};

export default GetAllImage; // Corrected export

// export const fetchMemesWithLoading = async (setLoading, setFetchData) => {
//     setLoading(true);
//     const result = await GetAllImage(setFetchData);
//     setLoading(false);
//     return result;
// };
