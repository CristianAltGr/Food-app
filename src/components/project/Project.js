import React, { useEffect, useState } from 'react'
import { getTechProject } from '../../services/techportData';

const Project = ({ id, update }) => {

    const [active, setActive] = useState(false);
    const [project, setProject] = useState([]);
    const [description, setDescription] = useState("");
    const [goal, setGoal] = useState("");

    const parseObject = () => {

        const descript = project.description.replace(/<([^>]+)>/ig, " ")
        setDescription(descript);


        if (project.benefits !== undefined) {
            const transcribe = project.benefits.replace(/<([^>]+)>/ig, " ")
            setGoal(transcribe);
        } else {
            setGoal("No write benefits at the document")
        }
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

                    <h6>Last update: {update}</h6>

                    <section>
                        <p><u>Description:</u> {description}</p>
                        <p><u>Benefits:</u>{goal}</p>
                        <p><u>Started date:</u> {project.startDateString}</p>
                        <p><u>Status:</u> {project.statusDescription}</p>
                    </section>
                </div>
            }
        </div>
    )
}

export default Project