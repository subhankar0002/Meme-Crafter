import axios from "axios";

const GetAllImage = async () => {
    try {
        const response = await axios.get('https://api.imgflip.com/get_memes');
        return response.data.data.memes; 
    } catch (error) {
        console.error("Error fetching memes:", error);
        return []; 
    }
};

export default GetAllImage; 

