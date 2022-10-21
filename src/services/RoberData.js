import axios from "axios";
import APIKey from "./APIKey";

const GetCuriosityData = async (id) => {

    const today = new Date();
    const day = today.getDate() - 5;
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `${year}-${month}-${day}`;

    try {

        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${APIKey}`)
            .then((res) => res.data);
        console.log(response);
        return response;

    } catch (e) {
        console.log(e);
    }
}

export default GetCuriosityData;