import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MainPart from "./mainPart/MainPart";


const Layout = () => {
    return(
        <div>
          <Header/>
          <MainPart/>
          <Outlet/>
          <Footer/>
        </div>
    )
}

export default Layout