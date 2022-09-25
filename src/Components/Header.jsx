import React,{useState} from "react";

import * as S from "./Styles/HeaderStyles.js";
import Logo from "../Components/Figures/Logo.png"
const Header =()=>{
    
   const [open,setOpen]=useState(false);  
   return(
         
              <S.Header>
                 <S.BoxMenuHambuguer>
              
                  <button onClick={()=>{setOpen(!open)}}>{open === true ? "x" : "="}</button>
                {open && (<nav>
                    <ul>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                    
                    
                 </ul>
                
                </nav>)}
        
              </S.BoxMenuHambuguer>
               <S.BoxMenu>
                   <figure>
                     <img src={Logo} alt=""/>
                   </figure>
                   <S.Ul>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                   
                    
                   </S.Ul>
              </S.BoxMenu> 
              
                
              </S.Header>
              
               

      );

};

export default Header;