import React, { useState } from 'react';

import MarsRoberStyle, { BackRober, PhotoListStyle } from './MarsRoberStyle';

const MarsRober = ({ rober, machine }) => {

    const [active, setActive] = useState(false);
    const [photoList, setPhotoList] = useState({});

    const changeActive = () => {

        if (!active) {
            setPhotoList(rober);
            setActive(true);
        } else {
            setActive(false)
        }
    }

    const selectPhotos = (event) => {

        const camera = event.target.value;
        const selected = rober.filter((photo) => photo.camera.name === camera ? true : false)
        setPhotoList(selected);

        if (selected.length === 0) {
            alert("Maybe you have chosen a wrong camera?")
        }
    }


    return (
        <MarsRoberStyle>
            <section onClick={changeActive}>
                <img src={machine.img} alt="machine" />
                <h2 >{machine.title}</h2>
            </section>

            {active &&
                <>
                    <BackRober onClick={() => setActive(false)} />
                    <PhotoListStyle>

                        <label>
                            <h4>Select the camera you want</h4>
                            <select name="camRober" id="camRober" onChange={selectPhotos}>
                                <optgroup label='Perseverance'>
                                    <option className='cam' value="NAVCAM_RIGHT"> Navigation Camera - Right</option>
                                    <option className='cam' value="NAVCAM_LEFT"> Navigation Camera - Left</option>
                                    <option className='cam' value="MCZ_RIGHT">Mast Camera Zoom - Right</option>
                                    <option className='cam' value="MCZ_LEFT"> Mast Camera Zoom - Left</option>
                                    <option className='cam' value="FRONT_HAZCAM_RIGHT_A"> Front Hazard Avoidance Camera - Right</option>
                                    <option className='cam' value="FRONT_HAZCAM_LEFT_A"> Front Hazard Avoidance Camera - Left</option>
                                    <option className='cam' value="REAR_HAZCAM_RIGHT"> Rear Hazard Avoidance Camera - Right</option>
                                    <option className='cam' value="REAR_HAZCAM_LEFT"> Rear Hazard Avoidance Camera - Left</option>
                                    <option className='cam' value="SKYCAM">MEDA Skycam</option>
                                    <option className='cam' value="SUPERCAM_RMI">SuperCam Remote Micro Imager</option>
                                </optgroup>
                                <optgroup label='Curiosity'>
                                    <option className='cam' value="FHAZ"> Front Hazard Avoidance Camera</option>
                                    <option className='cam' value="CHEMCAM"> Chemistry and Camera Complex</option>
                                    <option className='cam' value="MAHLI"> Mars Hand Lens Imager</option>
                                    <option className='cam' value="NAVCAM"> Navigation Camera</option>
                                </optgroup>
                            </select>
                        </label>

                        <>{photoList.map(photo => {

                            return (
                                <div className='photos' key={photo.id}>
                                    <h6>{photo.camera.full_name}</h6>
                                    <p>Photo: {photo.id}</p>
                                    <img src={photo.img_src} alt="Mars" />

                                </div>
                            )
                        })
                        }</>
                    </PhotoListStyle>
                </>
            }
        </MarsRoberStyle >


    )
}

export default MarsRober