import styled from "styled-components";
import space from "../../assets/space_back.jpg"
import { mobile, tablet } from "../../styles/Media";


const HomeStyle = styled.div`

    
    section{
        display: grid ;
        grid-template-columns: 20% 60% 20%;
        margin: 5vh;
        margin-top: 8vh;
        

        h2{
            font-size: 5vh;
        }

        p{
            margin-top: 2vh;
            font-size: 2vh;
            padding: 2vh;
            font-style: oblique;
            text-align: justify;
        }

        button{
            display: flex;
            align-content: center;
            justify-content: center;
            height: 10vh;
            margin: 2vh;
            border: 1px solid #2544f7 ;
            border-radius: 30px; 
            text-decoration: none;   

            p{
                display: flex;
                align-content: center;
                justify-content: center;
                font-weight: 600;
                margin: auto;
                font-style: initial;
            }

            :hover{
                background-color: #2544f7 ;
                color: white;
                transition: 0.5s;
            }
        }

    }

    ${tablet}{
            
        section{
            display: flex;
            flex-direction: column;
            }
    }

    ${mobile}{

        margin-top: 25vh;
    }

`

export const Photo = styled.div`
    
    margin: auto;
    margin-top: 4vh;
    height: 60vh;
    width: 98vh;
    background-image: url(${(props) => props.photo});
    background-repeat: no-repeat;
    background-size: contain;  

    ${tablet}{
        width: 80%;
        height: 38vh;
    }

    ${mobile}{
        width: 40vh;
        height: 25vh;
    }
`

export const DataPhoto = styled.div`

    margin: 5vh;
    padding: 3vh;
    border-radius: 20px;
    text-align: justify;
    background-color: #000000;
    opacity: 0.9;
    color: white;

    h3{
        font-size: larger;
        text-decoration: underline;
    }
    
    p{
        margin-top: 2vh;
    }

    ${tablet}{

        margin-top: 1vh;
    }

    ${mobile}{
        margin: 1vh
    }
`

export const ListStyle = styled.div`

    background-image: url(${space});
    color: white;
    
    section{
        display: grid;
        grid-template-columns: 2fr 7fr;
        margin: 0;
        margin-bottom: 4vh;

        h2{
            margin: 3vh;
        }

        li{
            
            margin: 2vh;
            background-color: #ffffff;
            width: 70%;
            border-radius: 30px;
            text-align: center;

            .linkHome{
                font-size: 4.5vh;
                margin: 0;
                color: #42228f;
            }
            
            p{
                color: black;
                margin: 0;
                text-align: center;
            }
        }
    }
    
`



export default HomeStyle;