import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import GetAsteriodData from '../../services/AsteroidData';

const AsteroidItem = () => {

    const url = useParams();
    const [asteroid, setAsteroid] = useState({});

    useEffect(() => {

        const getData = async () => {
            const data = await GetAsteriodData(url.id);
            setAsteroid(data);
        }
        getData();
    }, []);


    return (
        <div>AsteroidItem</div>
    )
}

export default AsteroidItem