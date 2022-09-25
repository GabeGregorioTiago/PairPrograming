import React,{useState} from "react";

import * as S from "./Styles/FooterStyle";
import Face from "./Figures/Facebook.png"
import Insta from "./Figures/Insta.png"
import P from "./Figures/Pinterest.png"
import Twitter from "./Figures/Twitter.png"
const Footer =()=>{
    
   const [open,setOpen]=useState(false);  
   return(
         
            <footer>
                <S.BoxTwoFooter>
                   <S.BoxImages>
                       <img src={Insta} alt=""/>
                       <img src={Twitter} alt=""/>
                       <img src={Face} alt=""/>
                       <img src={P} alt=""/>
                   </S.BoxImages>
                 
                    <nav>
                    <S.Ul>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                   
                    
                         </S.Ul>
                    </nav>
            
                </S.BoxTwoFooter>
                <S.BoxOneFooter>
                    <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
                </S.BoxOneFooter>
            </footer>  
              
               

      );

};

export default Footer;