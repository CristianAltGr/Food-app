import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import GetAsteriodData from '../../services/AsteroidData';
import AsteroidItemStyle from './AsteroidItemStyle';

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
        <AsteroidItemStyle>
            {ready &&
                < >
                    <h3>{asteroid.designation}</h3>
                    <div>
                        <ul>
                            <p>Id: {asteroid.id}</p>
                            <p>Size diameter:</p>
                            <p>    - Max: {parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_max).toFixed(2)} m </p>
                            <p>    - Min:   {parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_min).toFixed(2)} m </p>
                        </ul>
                        <ul>
                            <p>Dangerous hazarous: {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}</p>
                            <p>Sentry obrject: {asteroid.is_sentry_object ? "Yes" : "No"}</p>
                            <p>First observation date: {asteroid.orbital_data.first_observation_date}</p>
                            <p>Last observation date: {asteroid.orbital_data.last_observation_date}</p>
                        </ul>
                    </div>
                    <section>
                        <h3>Close approach</h3>
                        {orbital.map((orbit) => {
                            return (

                                <div key={orbit.close_approach_date_full}>
                                    <p>{orbit.close_approach_date_full}</p>
                                    <p>Miss distance: {parseFloat(orbit.miss_distance.kilometers).toFixed(2)} Km</p>
                                    <p>Relative velocity: {parseFloat(orbit.relative_velocity.kilometers_per_hour).toFixed(2)} Km/h</p>
                                    <p>Orbiting body: {orbit.orbiting_body}</p>
                                </div>
                            )
                        })}
                    </section>
                </>
            }
        </AsteroidItemStyle>
    )
}

export default AsteroidItem