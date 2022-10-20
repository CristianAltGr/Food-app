import axios from "axios";
import APIKey from "./APIKey";
//`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${APIKey}`
//https://api.nasa.gov/neo/rest/v1/neo/2312942?api_key=HTZi2cPx9Q4rCTbCy3SrBnQY4cIHe7eWeJdT8TZw
//https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY
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