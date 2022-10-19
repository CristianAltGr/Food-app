import axios from "axios"
import APIKey from "./APIKey";

export const getEarthPhoto = async (date) => {

    try {
        const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${APIKey}`)
            .then((res) => res.data);
        return response;

    } catch (e) {
        console.log(e.response.data);
    }
} 