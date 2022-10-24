import styled from "styled-components";
import { tablet } from "../../styles/Media"

const MarsRoberStyle = styled.section`
    
    section{
        background-color: #245757;
        cursor: pointer;
        padding: 3vh;
        margin: 1vh;
        color: white;
        border-radius: 20px;
        text-align: center;
    }

    img{
        width: 25vh;
        height: 25vh;
    }
`

export const PhotoListStyle = styled.aside`

    position: absolute;
    z-index: 2;
    top: 40%;
    left: 5%;
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #245757;
    opacity: 1;
    
    

    h4{
        font-size: 5vh;
        padding-top: 7vh;
    }
    
    select{
        margin: 4vh;
        width: 50%;
    }

    .photos{

        margin-top: 4vh;
        margin-bottom: 2vh;
        h6{
            margin: 1vh;
        }

        img{
            padding: 2vh;
            height: 40vh;
            width: 50%;
        }

    
    ${tablet}{

        img{
            width: 70%;
        }
    }
        
    }

`
export default MarsRoberStyle;

export const BackRober = styled.article`
    position: fixed;
    margin: 0;
    z-index: 1;
    background-color: #80808075;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
`
