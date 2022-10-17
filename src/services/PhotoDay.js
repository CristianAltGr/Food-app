import axios from "axios"


export const getDayPhoto = async () => {

    try {

        const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then((res) => res.data);

        return response;



    } catch (e) {
        console.log(e);
    }



} 