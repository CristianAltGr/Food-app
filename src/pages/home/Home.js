import React, { useEffect, useState } from 'react'
import { getDayPhoto } from '../../services/PhotoDay';
import HomeStyle, { Photo, DataPhoto } from './HomeStyle';
import Link from '../../components/Link';


const Home = () => {

    const [dayPhoto, setPhoto] = useState({});

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
                <Link className="homeLink" to={"/projects/"}><p>NASA Project</p></Link>
            </section>

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