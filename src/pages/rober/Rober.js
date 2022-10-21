import React from 'react'
import GetCuriosityData from "../../services/RoberData"
import { useState, useEffect } from 'react';

const Rober = () => {

    const [Robers, setRobers] = useState({});



    useEffect(() => {
        const infoRobers = async () => {

            const list = await GetCuriosityData();
            setRobers(list);
        }
        infoRobers();
    }, []);

    return (
        <div>Rober</div>
    )
}

export default Rober