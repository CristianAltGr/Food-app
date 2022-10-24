import React, { useEffect, useState } from 'react'
import { getEarthPhoto } from '../../services/Earth'
import EarthStyle, { ItemPhoto } from './PhotoEarthStyle';

const PhotoEarth = () => {

    const today = new Date();
    const day = today.getDate() - 4;
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const [images, setImages] = useState([]);
    const [date, setDate] = useState(`${year}-${month}-${day}`);

    const dateChange = (event) => {
        const value = event.target.value;

        if (value.length >= 10) {
            setDate(value);
        }
    }

    useEffect(() => {
        const earthPhotos = async () => {

            const list = await getEarthPhoto(date);
            setImages(list);
        }
        earthPhotos();
    }, [date]);


    return (

        <EarthStyle>


            <section>
                <h2>Photos of the Earth</h2>
                <p>These photos are made on {date}</p>
                <p>You can search photos of any day: "Note: NASA sends photos until last four days"</p>
                <input type="date" name="date" id="date" onChange={dateChange} />
            </section>

            <ItemPhoto>
                {images.map(image => {

                    const url = `https://api.nasa.gov/EPIC/archive/natural/${image.date.slice(0, 4)}/${image.date.slice(5, 7)}/${image.date.slice(8, 10)}/png/epic_1b_${image.identifier}.png?api_key=HTZi2cPx9Q4rCTbCy3SrBnQY4cIHe7eWeJdT8TZw`;

                    return (
                        <div key={image.identifier}>
                            <img src={url} alt="foto of the earth" />
                            <p>Cocentroid coordinates: <br /> Lat: {image.centroid_coordinates.lat} Long: {image.centroid_coordinates.lon}</p>
                        </div>
                    );
                })}
            </ItemPhoto>
        </EarthStyle >
    );
}

export default PhotoEarth