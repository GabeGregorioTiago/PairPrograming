import styled from "styled-components";
export const Header = styled.header`
  position:fixed;
 margin-top:6vh;
 margin-left:4vh;
 @media  screen and (min-width: 360px) and (max-width: 480px){
  margin-left:0vh; 
  
    width:398px;
    height:10vw;       
}
`;

export const BoxMenu = styled.nav`
   display:flex;
   align-items: center;
  justify-content: space-around;

  width:100%;
  img{
   width:4vw;
   margin-left:4vw;
 }
 
 @media  screen and (min-width: 360px) and (max-width: 480px){
    display:none;     
 
}   

  

`;
export const BoxMenuHambuguer=styled.div`
      display:none;
      @media  screen and (min-width: 360px) and (max-width: 480px){
        display:flex;
        flex-direction: column;
 
         width:10vw;
         height:20vh;
         ul{
           
            margin-left:68vw;
            margin-top:4vh;
         }
         li{

             list-style: none;
             font-size:3vh;
             margin-top:1vh;
             
         }
         
         button{
           margin-left:70vw;
           border:none;
           width:20vw;
           height:9vh;
           font-size:10vh;
           
             
          
           background-color:transparent;
          
         }
       
     
      }
`;

export const Ul = styled.ul`
   display:flex;
   align-items: center;
  justify-content: space-around;
   margin-left:67vh;
   
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
     
        display:none;
    }   

`;