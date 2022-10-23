import styled from "styled-components"

const FooterStyle = styled.footer`

    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    text-align: center;
    background-color: #797575;
    color: white;
    padding: 4vh;
    
    p{
        margin-top: 2.2vh;
    }
    
    div{
        display: flex;
    }

    img{
        width: 50px;
        height: 50px;
        
    }
`

export default FooterStyle;