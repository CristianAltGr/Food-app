import React from 'react'
import GetCuriosityData, { GetPerseveranceData } from "../../services/RoberData"
import { useState, useEffect } from 'react';
import MarsRober from '../../components/marsRober/MarsRober';
import perseveranceImg from "../../assets/Perseverance_rover.jpg"
import curiosityImg from "../../assets/Curiosity_rover.jpg"

const Rober = () => {

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
            <div>
                <h3>Robers Mars</h3>
                <p>You can see the photos than Robers make two days ago at Mars, in this moment there are two Robers:</p>
                <p>The veteran: Curiosity</p>
                <p>And the last one: The perseverance</p>
                <p>Before there were others like spirit or oppotunity. If you are interested, you can find more information on this
                    <a href="https://www.britannica.com/topic/NASA" target="_blank" rel="noopener noreferrer"> page</a></p>
            </div>


            <MarsRober rober={perseverance.photos} machine={{ title: "Perseverance", img: perseveranceImg }}></MarsRober>
            <MarsRober rober={curiosity.photos} machine={{ title: "Curiosity", img: curiosityImg }}></MarsRober>

        </>
    )
}

export default Rober