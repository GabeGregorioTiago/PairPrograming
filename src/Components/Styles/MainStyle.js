import styled from "styled-components";
import B from "../Figures/Grupodemascara2.png"
import BTwo from "../Figures/Grupodemascara4.png"

export const Box = styled.div`
margin-left:2vw;
margin-top:2vh;
background-image: url(${B}); 
background-repeat: no-repeat;
  background-size: cover; 
  width:1852px;
  height:1303px;
 
 
   h1{
    color: #373737;
    font-size:150px;
    padding-top:48vh;
    padding-left:29vw;
    letter-spacing: 15.75px;
   }
   @media  screen and (min-width: 360px) and (max-width: 480px){
    background-image: url(${BTwo}); 
    background-repeat: no-repeat;
      background-size: cover; 
      width:398px;
      height:857px;
      h1{

        padding-left:13vw;
        font-size:40px;
      }
      
   }
`