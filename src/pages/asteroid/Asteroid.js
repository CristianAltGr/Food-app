import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import GetAsteroidsList from '../../services/AsteroidsList';


const Asteroid = () => {

    const today = new Date();
    const day = today.getDate() - 5;
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const [images, setImages] = useState([]);
    const [date, setDate] = useState(`${year}-${month}-${day}`);

    /* const dateChange = (event) => {
         const value = event.target.value;
 
         if (value.length >= 10) {
             setDate(value);
         }
     }*/

    useEffect(() => {
        const listAsteroid = async () => {

            const list = await GetAsteroidsList(date);
            setImages(list);
        }
        listAsteroid();
    }, [date]);



    return (
        <div>Asteroid</div>
    )
}

export default Asteroid