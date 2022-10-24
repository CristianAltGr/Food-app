import styled from "styled-components";
import { tablet } from "../../styles/Media";

const EarthStyle = styled.div`

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
export const ItemPhoto = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    div{

      border: 1px solid black;      
      margin: 1vh;
      padding: 2vh;
      background-color: #245757;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      border-radius: 20px;

      img{
        width: 40vh;
        height: 40vh;
      }

      p{
        width: 40vh;
      }
    }
  
`

export default EarthStyle;