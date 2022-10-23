import styled from "styled-components"
import { tablet } from "../../styles/Media";

const FooterStyle = styled.footer`

    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    text-align: center;
    background-color: #222222;
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

    ${tablet}{

    display: flex;
    align-content: center;
    justify-content: center;
    
       p:nth-child(1){
        display: none;
       }
    }
`

export default FooterStyle;