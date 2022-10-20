import axios from "axios";
import APIKey from "./APIKey";

const GetAsteriodData = async (id) => {

    try {

        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${APIKey}`)
            .then((res) => res.data);
        console.log(response);
        return response;

    } catch (e) {
        console.log(e);
    }
}

export default GetAsteriodData;