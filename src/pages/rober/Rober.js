import React from 'react'
import GetCuriosityData, { GetPerseveranceData } from "../../services/RoberData"
import { useState, useEffect } from 'react';
import MarsRober from '../../components/marsRober/MarsRober';

const Rober = () => {
    //two days ago call
    const [curiosity, setCuriosity] = useState({});
    const [perseverance, setPerseverance] = useState({});



    useEffect(() => {
        const infoRobers = async () => {

            const curiosityList = await GetCuriosityData();
            const perseveranceList = await GetPerseveranceData();
            setCuriosity(curiosityList);
            setPerseverance(perseveranceList);
        }
        infoRobers();
    }, []);

    return (
        <>
            <div>Rober</div>


            <MarsRober rober={perseverance.photos} machine="Perseverance"></MarsRober>
            <MarsRober rober={curiosity.photos} machine="Curiosity"></MarsRober>

        </>
    )
}

export default Rober