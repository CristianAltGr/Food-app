import React from 'react'
import NavStyle from './NavStyle'
import Link from "../Link"

const Nav = () => {
    return (
        <NavStyle>
            <section>
                <h1>Tasty Food Recipes!</h1>
                <div>
                    <p>Loggin etc..</p>
                    <input type="text" name="searchFood" id="searchFood" />
                </div>
            </section>
            <nav>
                <Link to={"../../pages/home"}>Home</Link>
            </nav>
        </NavStyle>
    )

}

export default Nav