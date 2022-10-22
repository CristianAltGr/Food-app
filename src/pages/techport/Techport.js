import React, { useEffect, useState } from 'react'
import Project from '../../components/project/Project';
import getTechportData from '../../services/techportData';

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
        <div>
            <h2>Techport project by NASA</h2>
            <p>In this section you can search all project that NASA are made this month</p>

            {techList.map((project => {

                return (
                    <div key={project.projectId}>
                        <Project id={project.projectId} update={project.lastUpdated} />
                    </div>
                )
            }))
            }
        </div>
    )


}

export default Techport