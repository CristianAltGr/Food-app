import axios from "axios";
import APIKey from "./APIKey";

const GetAsteroidsList = async (date) => {

    try {

        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${APIKey}`)
            .then((res) => res.data.near_earth_objects[date]);
        return response;

    } catch (e) {
        console.log(e);
    }
}


export default GetAsteroidsList;