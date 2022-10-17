import styled from "styled-components";


const HomeStyle = styled.div`

    display: grid;
    grid-template-rows: 1fr 5fr;
    
    section{
        display: flex;
        flex-direction: row;
        margin: 1vh;

        h2{
            font-size: 5vh;
        }

        p{
            margin-top: 2vh;
            font-size: 2.4vh;
            padding: 2vh;
            font-style: oblique;
        }
    }

`

export const Photo = styled.div`

    height: 610px;
    width: 1080px;
    background-image: url(${(props) => props.photo});
    background-repeat: no-repeat;
`

export default HomeStyle;