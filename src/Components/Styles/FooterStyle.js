import styled from "styled-components";

export const BoxOneFooter = styled.div`
height:65px;
background-color:#446061;
display:flex;
align-items: center;
justify-content:center;
p{

    width:1680px;
    height:19px;
    letter-spacing: 1.68px;
    color: #FFFFFF;
    font-size:16px;
    opacity:0.5;

}
@media  screen and (min-width: 360px) and (max-width: 480px){
    flex-direction:column;
      height:80px; 
       width:414px;
      p{
        margin-left:-7vw;
      
           width:358px;
           height:29px; 
         font-size:8px;
        letter-spacing:0.09px;
      }
} 
`
export const BoxTwoFooter =styled.div`
display:flex;
align-items: center;
justify-content:space-between;
height:20vh;
background-color:#F2F4F1;
width:100%;
nav{
  
   
 width:40vw;
}
@media  screen and (min-width: 360px) and (max-width: 480px){
    flex-direction:column;
      height:546px; 
      width:414px;
} 
`
export const BoxImages =styled.div`

    display:flex;
align-items: center;
justify-content:space-between;
    width:18vw;
  
    margin-left:5vw;
    img{
        width:3vw;
        
    }
    @media  screen and (min-width: 360px) and (max-width: 480px){
       margin-right:12vw;
        width:63vw;
        margin-bottom:12vh;
        order:2;
        img{
            width:12vw;
        }
    }   
`
export const Ul = styled.ul`
 
display:flex;
   align-items: center;
  justify-content: space-around;
   
  
   width:37vw;
    list-style: none;
     li{
      display:flex;
      align-items: center;
     justify-content: space-around;
       width:15vh;
      letter-spacing: 2.52px;
        font-size:24px;
        color: #373737;
       
        height:5.5vh;
     }
     li:hover{
      border:solid;
     
       cursor:pointer;
       transition:ease-in-out;
      
 
     }
     


	
  

    @media  screen and (min-width: 360px) and (max-width: 480px){
        flex-direction:column;
        order:1;
        height:30vh;
        margin-top:13vh;
    }   

`;