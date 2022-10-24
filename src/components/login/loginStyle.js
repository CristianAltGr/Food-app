import styled from "styled-components"
import { mobile, tablet } from "../../styles/Media"

export const LogInButton = styled.button`
    
    height: 8vh;
    width: 30vh;
    margin: 2vh;
    background-color: #2544f7 ;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 30px;
    cursor: pointer;
    
    :hover{
        background-color: #f7422b;
        transition: 0.5s;
        color: white;
    }

    ${tablet}{
        width: 20vh;
    }

    ${mobile}{
        width: 15vh;
    }
`

export const LogInCard = styled.div`
    position: fixed;
    z-index: 1;
    left: 20%;
    top: 20%;
    height: 55%;
    width: 60%;
    display: flex;
    background-color: #1e1e7c;
    align-items: center;
    justify-content: center;
    border: 5px solid black;

    form{
        height: 100%;
        width: 100%;
        display: grid;
        
        p{
            text-align: center;
            margin-top: 3vh ;
            margin-bottom: 0;
            font-size: 5vh;
            font-weight: 700;
            color: rgb(233, 233, 233);

        }

        input{
            width: 80%;
            height: 7vh;
            margin: auto;
            background-color: white;
            color: #aaa;
            text-align: center;
            font-weight: 300;
            border-radius: 7px;
        }

        div{
            display: flex;
            align-content: space-around ;
        }

        button{
            width: 40%;
            height: 7vh;
            margin: auto;
            margin-top: 5vh;
            background-color: #f7422b;
            color: white;
            font-weight: 400;
            border-radius: 7px;

            :hover{
                background-color: #3e3ef1;
                transition: 0.5s;
                border: 1px solid white;
            }
        }
    }

    ${tablet}{
        width: 80%;
        left: 10%;
    }

    ${mobile}{
        width: 90%;
        left: 4%;
      form{
            p{
                font-size: 4vh;
                font-weight: 400;
            }
        }
    }

`

export const BackClick = styled.div`
    position: fixed;
    z-index: 1;
    background-color: #80808075;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
`
