import styled from "styled-components"

export const LogInButton = styled.button`
    
    height: 6vh;
    width: 13vh;
    margin: 2vh;
       
    p:hover{
        color: white;
        transition: 0.5s;
    }
`

export const LogInCard = styled.div`
    position: absolute;
    z-index: 1;
    left: 30%;
    top: auto;
    height: 55%;
    width: 40%;
    display: flex;
    background-color: #3e3ef1;
    align-items: center;
    justify-content: center;

    form{
        height: 100%;
        width: 100%;
        display: grid;
        
        p{
            text-align: center;
            margin-top: 3vh ;
            margin-bottom: 0;
            font-size: 5vh;
            font-weight: 300;
            color: rgb(252, 239, 55);

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
            width: 30%;
            height: 7vh;
            margin: auto;
            margin-top: 5vh;
            background-color: #80808075;
            color: white;
            font-weight: 300;
            border-radius: 7px;

            :hover{
                background-color: #3e3ef1;
                transition: 0.5s;
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
