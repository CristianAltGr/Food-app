import React, { useEffect, useState } from 'react'
import { getDayPhoto } from '../../services/PhotoDay';
import HomeStyle, { Photo, DataPhoto, ListStyle } from './HomeStyle';
import Link from '../../components/Link';


const Home = () => {

    const [interactive, setInteractive] = useState(false);
    const [dayPhoto, setPhoto] = useState({});

    const changeInteractive = () => { !interactive ? setInteractive(true) : setInteractive(false) };

    const getPhoto = async () => {

        const response = await getDayPhoto();
        setPhoto(response);
    }

    useEffect(() => {

        getPhoto();
    }, [])


    return (
        <HomeStyle>
            <section>
                <h2>Welcome to NASA Project!</h2>
                <p>On this page you can search for lots of interesting information about space, the NASA project, Mart, and much more... That's the photo of the day. If you have more information, please <b>sign in</b> with us for free.</p>
                <button className="homeLink" onClick={changeInteractive}><p>NASA Project</p></button>
            </section>

            {interactive &&

                <ListStyle>
                    <section>
                        <h2>List of pages : </h2>
                        <ul>
                            <li type="none"><Link className="linkHome" to={"/projects/earth/"}>EARTH</Link>
                                <p>On this page you can see the eath from space</p>
                            </li>
                            <li type="none"><Link className="linkHome" to={"/projects/asteroids/"}>ASTEROIDS</Link>
                                <p>On this page you can learn about the all asteroids around the earth</p>
                            </li>
                            <li type="none"><Link className="linkHome" to={"/projects/rober/"}>ROBER</Link>
                                <p>On this page you can see the pictures of mars from a Rober</p>
                            </li >
                            <li type="none"><Link className="linkHome" to={"/projects/techport/"}>TECHPORT</Link>
                                <p>On this one you can learn about all NASA projects</p>
                            </li>
                        </ul>
                    </section>
                </ListStyle>
            }

            <div>
                <Photo photo={dayPhoto.url} />
                <DataPhoto>
                    <h3>{dayPhoto.title}</h3>
                    <p>{dayPhoto.date}</p>
                    <p>{dayPhoto.explanation}</p>
                </DataPhoto>
            </div>

        </HomeStyle>
    )
}

export default Home