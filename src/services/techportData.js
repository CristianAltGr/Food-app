import axios from "axios"
import APIKey from "./APIKey";

const getTechportData = async () => {

    const today = new Date();
    const month = today.getMonth() + 1;

    try {

        const response = await axios.get(`https://api.nasa.gov/techport/api/projects?updatedSince=2022-${month}-01&api_key=${APIKey}`)
            .then((res) => res.data);
        return response.projects;

    } catch (e) {
        console.log(e);
    }
}

export const getTechProject = async (project) => {

    try {

        const response = await axios.get(` https://api.nasa.gov/techport/api/projects/${project}?api_key=${APIKey}`)
            .then((res) => res.data);
        console.log(response.project)
        return response.project;

    } catch (e) {
        console.log(e);
    }
}

export default getTechportData;