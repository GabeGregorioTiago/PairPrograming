import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main.jsx"
import Footer from "./Components/Footer";
import * as S from "./Components/Styles/GlobalStyle.js"
const App = () => {
  return (
    < >
      <S.GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;
