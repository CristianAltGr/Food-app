import axios from "axios"
import APIKey from "./APIKey";

export const getDayPhoto = async () => {

    try {

        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
            .then((res) => res.data);

        return response;

    } catch (e) {
        console.log(e);
    }
} 