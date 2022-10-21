import React, { useState } from 'react';
import MarsRoberStyle from './MarsRoberStyle';

const MarsRober = ({ rober, machine }) => {

    const [active, setActive] = useState(false);
    const [photoList, setPhotoList] = useState(rober)

    const changeActive = () => { !active ? setActive(true) : setActive(false) }

    const selectPhotos = (event) => {

        const camera = event;
        //const selected = rober.filter()//falta experesion de selccion segun camera ademas de el selector en la interfaz. 
    }

    //cambiar h2 cursor a pointer
    return (
        <MarsRoberStyle>
            <h2 onClick={changeActive}>{machine}</h2>

            {active &&
                <>
                    <h3>hola</h3>
                    <label>
                        <select name="" id="" onChange={selectPhotos()}>
                            <optgroup>
                                <option id="" value="Camera"></option>
                            </optgroup>
                        </select>
                    </label>
                    <>{rober.map(photo => {

                        return (
                            <div key={photo.id}>
                                <p>name: {photo.camera.full_name}</p>
                                <p>cam: {photo.id}</p>
                                <img src={photo.img_src} alt="Mars" />

                            </div>
                        )
                    })
                    }</>
                </>
            }
        </MarsRoberStyle >


    )
}

export default MarsRober