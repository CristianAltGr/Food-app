import React from 'react'
import Link from "../../components/Link"

const List = () => {
    return (
        <section>
            <h2>List of services</h2>

            <div>
                <Link to={"/projects/earth/"}>Earth</Link>
                <Link to={"/projects/asteroids/"}>Asteroids</Link>
                Rober photos // rober type photo
                techport list /// techport porject
                **stelites
            </div>

        </section>
    )
}

export default List