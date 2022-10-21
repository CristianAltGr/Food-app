import React from 'react'
import NavStyle from './NavStyle'
import Link from "../Link"

const Nav = () => {
    return (
        <NavStyle>
            <section>
                <h1>NASA Project</h1>
                <div>
                    <p>Loggin etc..</p>
                    <input type="text" name="searchFood" id="searchFood" />
                </div>
            </section>
            <nav>
                <Link className="linkNav" to={""}>Home</Link>
                <Link className="linkNav" to={"/projects/"}>Projects</Link>
                <Link className="linkNav" to={"/projects/earth/"}>Earth</Link>
                <Link className="linkNav" to={"/projects/asteroids/"}>Asteroids</Link>
                <Link className="linkNav" to={"/projects/rober/"}>Rober</Link>

            </nav>
        </NavStyle>
    )

}

export default Nav