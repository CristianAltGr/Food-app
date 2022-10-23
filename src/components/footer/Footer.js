import React from 'react'
import FooterStyle from '../footer/FooterStyle'
import Github from "../../assets/Git.png"

const Footer = () => {
    return (
        <FooterStyle>
            <p>Thanks for your visit!</p>
            <p>NASA project 2022 &#169;</p>
            <div>
                <p>Made by CristianAltGr</p>
                <a href={"https://github.com/CristianAltGr"} target="_blank" rel="noreferrer" alt=" autor" >
                    <img src={Github} alt="Git logo" />
                </a>
            </div>

        </FooterStyle >
    )
}

export default Footer