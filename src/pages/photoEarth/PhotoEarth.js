import React, { useEffect, useState } from 'react'
import { getEarthPhoto } from '../../services/Earth'
import EarthStyle from './PhotoEarthStyle';

const PhotoEarth = () => {

    const today = new Date();
    const [day, setDay] = useState(today.getDate() - 5);
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [year, setYear] = useState(today.getFullYear());
    const [images, setImages] = useState([]);
    const [date, setDate] = useState(`${year}-${month}-${day}`);

    const earthPhotos = async () => {

        const list = await getEarthPhoto(date);
        setImages(list);
    }

    const dateChange = (event) => {
        const value = event.target.value;

        if (value.length >= 10) {
            setDate(value);
            setDay(value.slice(8, 10));
            setMonth(value.slice(5, 7));
            setYear(value.slice(0, 4));
        }
    }

    useEffect(() => {
        earthPhotos();
    }, [date]);


    return (

        <EarthStyle>

            <h2>Photos of the Earth</h2>
            <section>
                <p>These photos are made on {date}</p>
                <p>You can search photos of any day: "Note: Nasa reports photos since a week"</p>
                <input type="date" name="date" id="date" onChange={dateChange} />
            </section>

            {images.map(image => {

                const url = `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/epic_1b_${image.identifier}.png?api_key=HTZi2cPx9Q4rCTbCy3SrBnQY4cIHe7eWeJdT8TZw`;

                return (
                    <div key={image.identifier}>
                        <img src={url} alt="foto of the earth" />
                        <p>Cocentroid coordinates: lat: {image.centroid_coordinates.lat} long: {image.centroid_coordinates.lon}</p>
                    </div>
                );
            })}

        </EarthStyle>

    );
}

export default PhotoEarth