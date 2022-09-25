import styled from "styled-components";
import B from "../Figures/Grupodemascara2.png"
import BTwo from "../Figures/Grupodemascara4.png"

export const BoxBG = styled.div`
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

export const Box = styled.section`

    background-color: #F2F4F1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 135vh;

    @media(max-width: 768px){
        height: 120vh;
    }

    @media(max-width: 425px){
        height: 340vh;
    }
`

export const RecipesBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 105vh;
    justify-content: space-evenly;
    @media(max-width:425px){
        height: 95%;
    }
`

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    height: 13vh;
    flex-direction:column;
    justify-content: space-evenly;
    
    @media(max-width:425px){
        height: 8%;
    }
`

export const Title = styled.h3`
    font-size: 2.5vw;
    font-weight: 500;
    margin: 0;

    @media(max-width:768px){
        font-size: 2.7vw;
    }

    @media(max-width:425px){
        font-size: 10vw;
    }
`

export const Line = styled.div`
    border: solid;
    width: 6.5vw;
    border-radius: 20vw;

    @media(max-width: 1440px){
        border: solid 3px;
    }

    @media(max-width:1024px){
        border: solid 2px;
    }

    @media(max-width:425px){
        width: 22vw;
        border: solid 3px;
    }
`

export const FoodsBox = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width:425px){
        flex-direction:column;
        height: 88%;
    }
`

export const ImgFoodBox = styled.div`
    display: flex;
`

export const Img = styled.img`
    width: 27.9vw;
    @media(max-width:425px){
        width: 100%;
    }
`

export const FoodNameBox = styled.div`
    border: solid #FFFFFF;
    box-shadow: 0 7px 6px #00000029;
    width: 27.65vw;
    height: 33vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width:425px){
        width: 100%;
        height: 45vh;
    }
`

export const FoodPizzaBox = styled.div`
    border: solid #FFFFFF;
    box-shadow: 0 7px 6px #00000029;
    width: 27.65vw;
    height: 33vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width:425px){
        width: 100%;
        height: 45vh;
        background-color: #FFFFFF;
    }
`

export const LineFoodName = styled.div`
    border-top: solid 4px;
    width: 3vw;
    height: 3vh;
    border-radius: 3px;

    @media(max-width:1024px){
        border-top: solid 2.5px;
        border-radius: 2px;
    }

    @media(max-width: 425px){
        width: 9vw;
        border-top: solid 4px;
        border-radius: 3px;
        height: 1vh;
    }
`

export const Food = styled.h4`
    font-size: 1.6vw;
    font-weight: 400;
    margin: 0;

    @media(max-width:768px){
        font-size: 2vw;
    }

    @media(max-width: 425px){
        font-size: 7vw;
    }
`

export const BoxImgAbout = styled.div`
    display: flex;
    width: 50%;
    @media(max-width: 425px){
      width: 100%;
    }
`

export const ImgAbout = styled.img`
    width: 100%;
`

export const AboutBox = styled.section`
    display: flex;

    @media(max-width:425px){
      flex-direction: column;
    }
`

export const BoxText = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media(max-width: 425px){
        height: 120vh;
        width: 100%;
    }
`

export const TitleLineAbout = styled.div`
    border: solid;
    width: 3.8vw;
    border-radius: 20vw;

    @media(max-width:1024px){
        border: solid 2px;
    }

    @media(max-width: 425px){
        width: 16vw;
    }
`

export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    height: 55vh;

    @media(max-width:768px){
        height: 47vh;
    }

    @media(max-width:425px){
        height: 120vh;
        width: 90%;
        justify-content: space-evenly;
    }
`

export const TitleAboutBox = styled.div`
    display: flex;
    align-items: center;
    height: 13vh;
    flex-direction:column;
    justify-content: space-evenly;

    @media(max-width:425px){
        height: 18%;
    }
`

export const Text = styled.p`
    font-size: 1.4vw;
    margin: 0;

    @media(max-width: 768px){
        font-size: 1.6vw;
    }

    @media(max-width:425px){
        font-size: 5vw;
    }
`

export const SignUpSection = styled.section`
    background-color: #F2F4F1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
`

export const SignUpBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
    justify-content: space-between;
    
    @media(max-width: 425px){
        width: 100%;
        height: 45vh;
    }
`

export const SignUpTitle = styled.h3`
    font-size: 2.5vw;
    font-weight: 500;
    margin: 0;
    letter-spacing: 0.2vw;
    @media(max-width:425px){
        font-size: 10vw;
        letter-spacing: 0.5vw;
    }
`

export const SignUpTitleAndTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SignUpText = styled.p`
    font-size: 1.8vw;
    margin: 0;
    word-spacing: 0.7vw;
    @media(max-width:425px){
        font-size: 8.5vw;
    }
`


export const Input = styled.input`
    width: 40vw;
    height: 9vh;
    padding-left: 3vw;
    outline: none;
    border: none;
    background-color: #EFF1EE;
    font-size: 1vw;
    &::placeholder{
        font-size: 1vw;
    }
    

    @media(max-width:425px){
        width: 90%;
        padding-left: 5vw;
        font-size: 4vw;

        &::placeholder{
            font-size: 4vw;
        }
    }
`

export const Btn = styled.button`
    font-size: 1.4vw;
    letter-spacing: 0.5vw;
    width: 13vw;
    padding-left: 0.5vw;
    font-weight: bold;
    border: solid 5px;
    background-color: transparent;
    height: 8vh;
    cursor: pointer;

    @media(max-width:1024px){
        border: solid 4px;
    }

    @media(max-width:768px){
        border: solid 3px;
    }

    @media(max-width: 425px){
        width: 90%;
        height: 11vh;
        font-size: 4vw;
        border: solid 4px;
    }
`