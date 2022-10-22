import React, { useEffect, useState } from 'react'
import { getTechProject } from '../../services/techportData';

const Project = ({ id, update }) => {

    const [active, setActive] = useState(false);
    const [project, setProject] = useState([]);
    const [description, setDescription] = useState("");
    const [goal, setGoal] = useState("");

    const parseObject = () => {

        const descript = project.description.replace(/<([^>]+)>/ig, " ")
        const transcribe = project.benefits.replace(/<([^>]+)>/ig, " ")

        setDescription(descript);
        setGoal(transcribe);
    }

    const changeActive = () => {
        !active ? setActive(true) : setActive(false);
        parseObject()
    }

    useEffect(() => {

        const projectData = async () => {
            const info = await getTechProject(id);
            setProject(info);
        }

        projectData();

    }, [id]);


    return (
        <div>
            <h5 onClick={changeActive}>{project.title}</h5>

            {active &&
                <div>
                    <h5 >{project.title}</h5>
                    <h6>Last update: {update}</h6>

                    <section>
                        <p>{description}</p>
                        <p>{goal}</p>
                        <p>Started date: {project.startDateString}</p>
                        <p>Status: {project.statusDescription}</p>
                    </section>
                </div>
            }
        </div>
    )
}

export default Project