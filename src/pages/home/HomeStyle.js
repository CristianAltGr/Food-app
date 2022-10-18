import styled from "styled-components";


const HomeStyle = styled.div`

    display: grid;
    grid-template-rows: 1fr 5fr;
    
    section{
        display: grid ;
        grid-template-columns: 20% 60% 20%;
        margin: 5vh;

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

        .homeLink{
            display: flex;
            align-content: center;
            justify-content: center;
            margin: 2vh;
            border: 1px solid #402675;
            border-radius: 20px; 
            text-decoration: none;   

            p{
                display: flex;
                align-content: center;
                justify-content: center;
                margin: auto;
                font-style: initial;
            }

            :hover{
                background-color: #402675;
                color: white;
                transition: 0.5s;
            }
        }

    div{
        display: flex;
        align-content: center;
        justify-content: center;

    }
    }

`

export const Photo = styled.div`

    margin: auto;
    height: 60vh;
    width: 60vh;
    background-image: url(${(props) => props.photo});
    background-repeat: no-repeat;
    background-size: contain;  
`

export const DataPhoto = styled.div`

    margin: 5vh;
    padding: 3vh;
    border-radius: 20px;
    text-align: justify;
    background-color: #402675;
    opacity: 0.9;
    color: white;

    h3{
        font-size: larger;
        text-decoration: underline;
    }
    
    p{
        margin-top: 2vh;
    }
`

export default HomeStyle;