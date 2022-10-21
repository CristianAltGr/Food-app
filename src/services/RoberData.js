import axios from "axios";
import APIKey from "./APIKey";

const today = new Date();
const day = today.getDate() - 2;
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = `${year}-${month}-${day}`;

const GetCuriosityData = async () => {

    try {

        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${APIKey}`)
            .then((res) => res.data);
        return response;

    } catch (e) {
        console.log(e);
    }
}

export const GetPerseveranceData = async () => {

    try {

        const response = await axios.get(`http://mars-photos.herokuapp.com/api/v1/rovers/Perseverance/photos?earth_date=${date}`)
            .then((res) => res.data);
        return response;

    } catch (e) {
        console.log(e);
    }

}

export default GetCuriosityData;