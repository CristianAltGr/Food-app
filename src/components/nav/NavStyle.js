import styled from "styled-components";
import space from "../../assets/space_back.jpg"
import { mobile, tablet } from "../../styles/Media";

const NavStyle = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height : 24vh ;
    background-image: url(${space}) ;
    color: white;

    div{
        display: flex;
        align-items: center;
        
        img{
            width: 18vh;
        }
    }

    section{
        
        display: flex;
        justify-content: space-between;
        margin: 4vh;
    }
    
    nav{
        display: flex;
        justify-content: center;
        height: 6vh;
        padding: 2vh;
        margin: 0;
        background-color: #0e012b;
        border: 1px solid white;
    }

    .linkNav{
        
        height: 20px;
        padding: 1vh;
        font-weight: 600;
        text-decoration: none;
        color: white;

        :hover{
            color: #f7422b ;
        
        }
    }   

    ${tablet}{

        h1{
            display: none;
        }
        
        img{
            width: 11vh;
        }  
        
        nav{  
            display: flex ;
            flex-direction: column;
            height: 26vh;
            margin-bottom: 2vh;
            text-align: center;
        
            
             .linkNav{
            margin-left: 0;
            font-size: 2vh;
            letter-spacing: 0;
        }
        }
    }

    ${mobile}{

        div {
            
            img{
            width: 13vh;
            }   
        }

        h1{
           display: none;
        }           

        nav{
            display: flex ;
            flex-direction: column;
            height: 26vh;
            margin-bottom: 2vh;
            text-align: center;
        }


        .linkNav{
            margin-left: 0;
        }
    }
`


export default NavStyle;