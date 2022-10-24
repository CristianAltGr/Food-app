import styled from "styled-components";
import { tablet } from "../../styles/Media";

const AsteroidStyle = styled.div`

     section{

    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    text-align: center;

    h2{
      font-size: 5vh;
    }

    p{
      font-size: 3vh;
      margin: 1vh;
    }

    input{
      margin: auto;
      margin-top: 2vh;
      width: 30%;
      cursor: pointer;
      text-align: center;
    }

    ${tablet}{
      
      margin-top: 25vh;
      
      input{
        width: 60%;
      }
    }
  }
`

export const AsteroidListItem = styled.div`

  div{
    margin: auto;
    margin-top: 1vh;
    margin-bottom: 2vh;
    padding: 2vh;
    width: 90%;
    text-align: center;
    background-color: #245757;
    color: white;
    border-radius: 20px;

    .asteroid{
        
        color: #f33d3d;
        text-transform: uppercase;
        text-decoration: none;
        
        p{
            font-size: 3vh;
        }
    }
  }
`

export default AsteroidStyle;