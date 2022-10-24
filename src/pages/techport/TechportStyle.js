import styled from "styled-components";
import { tablet } from "../../styles/Media"

const TechportStyle = styled.div`

    margin-top: 15vh;
    text-align: center;

    h2{ 
        font-size: 4vh;
    }

    section{
        cursor: pointer;
        margin: 3vh;
        background-color: #245757 ;
        border-radius: 20px;
        padding: 4vh;

        h5{
            color: white;
            margin-bottom: 1vh;
        }

        p{
            text-align: left;
            margin-top: 2vh;
            font-weight: 500;
        }
    }

    ${tablet}{
        margin-top: 24vh;

        section{
            padding: 1vh;
            margin: 1vh;
        }

    }
`

export default TechportStyle;