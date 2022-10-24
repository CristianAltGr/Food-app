import React from 'react'
import GetCuriosityData, { GetPerseveranceData } from "../../services/RoberData"
import { useState, useEffect } from 'react';
import MarsRober from '../../components/marsRober/MarsRober';
import perseveranceImg from "../../assets/Perseverance_rover.jpg"
import curiosityImg from "../../assets/Curiosity_rover.jpg"
import RoberStyle, { RoberCard } from './RoberStyle';

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
        <RoberStyle>
            <div>
                <h3>Robers Mars</h3>
                <p>You can see the photos than Robers make four days ago at Mars, in this moment there are two Robers:</p>
                <ul>
                    <li>The veteran: Curiosity</li>
                    <li>And the last one: The perseverance</li>
                </ul>
                <p>Before there were others like spirit or oppotunity. If you are interested, you can find more information on this
                    <a href="https://www.britannica.com/topic/NASA" target="_blank" rel="noopener noreferrer"> page</a></p>
            </div>

            <RoberCard>
                <MarsRober rober={perseverance.photos} machine={{ title: "Perseverance", img: perseveranceImg }}></MarsRober>
                <MarsRober rober={curiosity.photos} machine={{ title: "Curiosity", img: curiosityImg }}></MarsRober>
            </RoberCard>
        </RoberStyle>
    )
}

export default Rober