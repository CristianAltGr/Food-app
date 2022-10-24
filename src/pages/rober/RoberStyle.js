import styled from "styled-components";
import { tablet } from "../../styles/Media";

const RoberStyle = styled.div`

    margin-top: 17vh;
    

    div{
        margin: auto;
        width: 90%;
        background-color: #000000;
        opacity: 0.9;
        color: white;
        border-radius: 20px;

        h3{
            font-size: 4vh;
            margin: 1vh;
            text-align: center;
        }

        p{
            margin: 2vh;
            padding: 2vh;

            a{
                color: #f7422b;
            }
        }
    }

    ${tablet}{
        margin-top: 25vh;
    }
`

export const RoberCard = styled.section`

    display: flex;
    justify-content: space-around;
    
    ${tablet}{
        flex-direction: column;
    }
`

export default RoberStyle;