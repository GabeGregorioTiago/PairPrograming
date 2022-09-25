import React,{useState} from "react";

import * as S from "./Styles/MainStyle";

const Main =()=>{
    
   const [open,setOpen]=useState(false);  
   return(
         
            <main>
                <S.Box>
                    <h1>RECIPES</h1>
                </S.Box>
            </main>  
              
               

      );

};

export default Main;