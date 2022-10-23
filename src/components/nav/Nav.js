import React from 'react'
import NavStyle from './NavStyle'
import Link from "../Link"
import Login from '../login/login'

const Nav = () => {
    return (
        <NavStyle>
            <section>
                <h1>NASA Project</h1>
                <div>
                    <Login />
                </div>
            </section>
            <nav>
                <Link className="linkNav" to={""}>HOME</Link>
                <Link className="linkNav" to={"/projects/earth/"}>EARTH</Link>
                <Link className="linkNav" to={"/projects/asteroids/"}>ASTEROIDS</Link>
                <Link className="linkNav" to={"/projects/rober/"}>ROBER</Link>
                <Link className="linkNav" to={"/projects/techport/"}>TECHPORT</Link>
            </nav>
        </NavStyle>
    )

}

export default Nav