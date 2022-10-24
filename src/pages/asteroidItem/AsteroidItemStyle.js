import styled from "styled-components";
import { tablet } from "../../styles/Media"
import space from "../../assets/space_back.jpg"

const AsteroidItemStyle = styled.div`

    margin-top: 15vh;
    
    h3{
                text-align: center;
                font-size: 4vh;
                margin: 2vh;
            }
    div{

        display: flex;
        width: 90%;
        margin: auto;
        justify-content: space-around;
        background-color: #245757 ;
        border-radius: 20px;

        p{
            color: white;
            font-weight: 400;
            margin: 1.5vh;
        }

        ${tablet}{
           
            flex-direction: column;
        }
    }

    section{

        div{
            background-image: url(${space});
            margin-top: 2vh;
            margin-bottom: 2vh;
            border-radius: 20px;

            p:nth-child(1){
            font-weight: 600;
            font-size: 3vh;
            color: #f7422b ;
            }
            
            p{
                font-weight: 400;
            }
        }
    }

    ${tablet}{
         margin-top: 24vh;  
    }
`
export default AsteroidItemStyle;