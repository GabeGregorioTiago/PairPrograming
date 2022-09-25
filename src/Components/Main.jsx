import React,{useState} from "react";

import * as S from "./Styles/MainStyle";

import RedV from "./Figures/red-velvet.png"
import Pizza from "./Figures/pizza.png"
import Vitamina from "./Figures/vitamina.png"
import Colher from "./Figures/colher-de-sal.png"

const Main =()=>{
    
   const [open,setOpen]=useState(false);  
   return(
        <>
            <section>
                <S.BoxBG>
                    <h1>RECIPES</h1>
                </S.BoxBG>
            </section>
            <S.Box>
                <S.RecipesBox>
                    <S.TitleDiv>
                        <S.Title>LATEST RECIPES</S.Title>
                        <S.Line></S.Line>
                    </S.TitleDiv>
                    <S.FoodsBox>
                        <div>
                            <S.ImgFoodBox>
                                <S.Img src={RedV} alt="Pedaço de Red Velvet num prato branco com um garfo sobre uma superfície preta." />
                            </S.ImgFoodBox>
                            <S.FoodNameBox>
                                <S.LineFoodName></S.LineFoodName>
                                <S.Food>Red Velvet Cake</S.Food>
                            </S.FoodNameBox>
                        </div>
                        <div>
                            <S.ImgFoodBox>
                                <S.Img src={Pizza} alt="Pizza de tomate com queijo e manjericão" />
                            </S.ImgFoodBox>
                            <S.FoodPizzaBox>
                                <S.LineFoodName></S.LineFoodName>
                                <S.Food>Margherita Pizza</S.Food>
                            </S.FoodPizzaBox>
                        </div>
                        <div>
                            <S.ImgFoodBox>
                                <S.Img src={Vitamina} alt="Dois copos de vitamina de amendoim com colher com doce de leite ao lado." />
                            </S.ImgFoodBox>
                            <S.FoodNameBox>
                                <S.LineFoodName></S.LineFoodName>
                                <S.Food>Peanut Smoothie</S.Food>
                            </S.FoodNameBox>
                        </div>
                    </S.FoodsBox>
                </S.RecipesBox>
            </S.Box>
            <S.AboutBox>
                <S.BoxImgAbout>
                    <S.ImgAbout src={Colher} alt="Colher com sal grosso sobre mármore branco." />
                </S.BoxImgAbout>
                <S.BoxText>
                    <S.AboutText>
                        <S.TitleAboutBox>
                            <S.Title>ABOUT</S.Title>
                            <S.TitleLineAbout></S.TitleLineAbout>
                        </S.TitleAboutBox>
                        <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</S.Text>
                    </S.AboutText>
                </S.BoxText>
            </S.AboutBox>
            <S.SignUpSection>
                <S.SignUpBox>
                    <S.SignUpTitleAndTextBox>
                        <S.SignUpTitle>SUBSCRIBE</S.SignUpTitle>
                        <S.SignUpText>Sign up for newsletter</S.SignUpText>
                    </S.SignUpTitleAndTextBox>
                    <S.Input type="email" placeholder="Your Email" />
                    <S.Btn>SUBMIT</S.Btn>
                </S.SignUpBox>
            </S.SignUpSection>
        </>
      );

};

export default Main;