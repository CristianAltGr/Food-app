import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Link from "../../components/Link"
import GetAsteroidsList from '../../services/AsteroidsList';


const Asteroid = () => {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const [asteroidsList, setAsteroids] = useState([]);
    const [date, setDate] = useState(`${year}-${month}-${day}`);


    const dateChange = (event) => {
        const value = event.target.value;

        if (value.length >= 10) {
            setDate(value);
        }
    }

    useEffect(() => {
        const listAsteroid = async () => {

            const list = await GetAsteroidsList(date);
            setAsteroids(list);
        }
        listAsteroid();
    }, [date]);



    return (
        <>
            <section>
                <h2>Asteroids Inforrmation</h2>
                <p>In this section you can watch a list of asteroid near to the earth.</p>
                <input type="date" name="date" id="date" onChange={dateChange} />
            </section>

            {asteroidsList.map(item => {

                const danger = item.is_potentially_hazardous_asteroid ? "Yes" : "No"
                return (

                    <div key={item.id}>

                        <Link to={"/projects/asteroids/" + item.neo_reference_id} className="asteroid" ><p>Name:{item.name}</p></Link>
                        <p>Potencial danger: {danger}</p>
                        <p>Close approach: {item.close_approach_data[0].close_approach_date_full}</p>
                    </div>
                )
            })}

        </>
    )
}

export default Asteroid