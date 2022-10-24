import React, { useEffect, useState } from 'react'
import Project from '../../components/project/Project';
import getTechportData from '../../services/techportData';
import TechportStyle from './TechportStyle';

const Techport = () => {

    const [techList, setTechList] = useState([]);

    useEffect(() => {
        const techData = async () => {

            const list = await getTechportData();
            setTechList(list);
        }
        techData();
    }, []);

    return (
        <TechportStyle>
            <h2>Techport project by NASA</h2>
            <p>In this section you can search all project that NASA are made this month</p>

            {techList.map((project => {

                return (
                    <section key={project.projectId}>
                        <Project id={project.projectId} update={project.lastUpdated} />
                    </section>
                )
            }))
            }
        </TechportStyle>
    )


}

export default Techport