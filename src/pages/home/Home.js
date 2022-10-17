import React, { useEffect, useState } from 'react'
import { getDayPhoto } from '../../services/PhotoDay';
import HomeStyle, { Photo } from './HomeStyle';


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
                <p>On this page you can search for lots of interesting information about space, the NASA project, Mart, and much more... That's the photo of the day. If you have more information, please sign in with us for free.</p>
            </section>

            <div>
                <Photo photo={dayPhoto.url} />
                <h3>{dayPhoto.title}</h3>
                <p>{dayPhoto.date}</p>
                <p>{dayPhoto.explanation}</p>
            </div>

        </HomeStyle>
    )
}

export default Home