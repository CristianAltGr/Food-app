import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import GetAsteriodData from '../../services/AsteroidData';

const AsteroidItem = () => {

    const url = useParams();
    const [asteroid, setAsteroid] = useState({});
    const [orbital, setOrbital] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {

        const getData = async () => {
            const data = await GetAsteriodData(url.id);
            setAsteroid(data);
            setOrbital(data.close_approach_data);
            setReady(true);
        }
        getData();
    }, [url]);


    return (
        <>
            {ready &&
                < div >
                    <h3>{asteroid.designation}</h3>
                    <p>id: {asteroid.id}</p>
                    <p>Size diameter:</p>
                    <p>Max: {asteroid.estimated_diameter.meters.estimated_diameter_max} m </p>
                    <p>Min:   {asteroid.estimated_diameter.meters.estimated_diameter_min} m </p>
                    <p>Dangerous hazarous: {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}</p>
                    <p>Sentry obrject: {asteroid.is_sentry_object ? "Yes" : "No"}</p>
                    <p>First observation date: {asteroid.orbital_data.first_observation_date}</p>
                    <p>Last observation date: {asteroid.orbital_data.last_observation_date}</p>

                    <section>
                        <h3>Close approach</h3>
                        {orbital.map((orbit) => {


                            return (

                                <div key={orbit.close_approach_date_full}>
                                    <p>{orbit.close_approach_date_full}</p>
                                    <p>Miss distance: {orbit.miss_distance.kilometers} Km</p>
                                    <p>Relative velocity: {orbit.relative_velocity.kilometers_per_hour} Km/h</p>
                                    <p>Orbiting body: {orbit.orbiting_body}</p>
                                </div>
                            )
                        })}

                    </section>
                </div >


            }
        </>
    )
}

export default AsteroidItem