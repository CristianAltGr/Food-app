import styled from "styled-components";

const NavStyle = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height : 24vh ;
    background-color: #290275 ;
    color: white;

    section{
        
        display: flex;
        justify-content: space-between;
        margin: 4vh;
    }
    
    nav{
        display: flex;
        justify-content: center;
        height: 5vh;
        margin: 0;
        background-color: #874FF7;
        border: 1px solid white;
    }

    .linkNav{

        border-left: 1px solid white; 
        border-right: 1px solid white; 
        height: 100%;
        margin: 0;
        padding: 1vh;
        color: white;
    }
`

export default NavStyle;