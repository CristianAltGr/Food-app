import axios from "axios";
import APIKey from "./APIKey";

const GetAsteroidsList = async () => {

    try {

        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-18&end_date=2022-10-19&api_key=${APIKey}`)
            .then((res) => res.data);
        console.log(response);
        return response;

    } catch (e) {
        console.log(e);
    }
}

export const AsteriodItem = async () => {

    try {

        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${APIKey}`)
            .then((res) => res.data);

        return response;

    } catch (e) {
        console.log(e);
    }
}


export default GetAsteroidsList;