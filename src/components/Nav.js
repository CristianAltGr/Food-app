import React from 'react'
import NavStyle from './NavStyle'

const Nav = () => {
    return (
        <NavStyle>
            <h1>Tasty Food Recipes!</h1>
            <div>
                <div>Loggin etc..</div>
                <input type="text" name="searchFood" id="searchFood" />
            </div>

        </NavStyle>
    )
}

export default Nav