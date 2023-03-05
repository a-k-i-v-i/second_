import { useTranslation } from "react-i18next";
import React, {useState} from "react";
import LOGO from "../../image/header/logo.png";
import language from "../../image/header/language.svg";
import { NavLink } from "react-router-dom";
import Courses from "./Courses";
import Menu from "./Menu";



const Header = () => {
  const { t, i18n } = useTranslation();
  const items = [{value : 'О нас', href : '/aboutUs' },{value : 'Frontend', href : 'frontend' },{value : 'backend', href : 'backend' },{value : 'UxUi', href : 'UxUi' },{value : 'Club', href : 'club' },{value : 'Contact' , href: '' }]
  
  const [courses,setCourses] = useState(false)
  const [active , setActive] = useState(false)

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const valueLang = localStorage.getItem('18nextLng')
 

  const scrollWin = ()=>{
    window.scrollTo(700, 1000000);
  }
  return (
    <header
        onMouseOver={()=> setCourses(true)}
        onMouseLeave={() => setCourses(false)}
        id="header">
      <div className="container">
         <dir className="courses--navbar"> {courses ?  <Courses/> : ''}</dir>

          <div className="header">
          <div className="header--logo">
            <NavLink to={'/'}><img src={LOGO} alt="" /></NavLink>
          </div>
          <nav className="header--navbar">
            <NavLink to={"/"}  className='header--navbar--link'>Главная</NavLink>
            <NavLink to={"aboutUs"} className='header--navbar--link'>О нас</NavLink>
            <span className="header--navber--courses"> О курсах</span>
            <NavLink to={"club"} className='header--navbar--link'>Клуб</NavLink>
            <NavLink onClick={scrollWin} className='header--navbar--link'>Контакты</NavLink>
          </nav>

        

          <div className="header--language">
            <img src={language} alt="" />
            <div>
              <span onClick={()=> changeLanguage('kg')}>КР</span > /  
              <span onClick={()=> changeLanguage('ru')}>РУС</span>  / 
              <span onClick={()=> changeLanguage('en')}> ENG </span>
            </div>
          </div>
          
          <nav className="burger_navbar">
            <div 
            onClick={()=> setActive(!active)}
            className="burger-btn">
              <span/>
            </div>
          </nav>
        </div>
      </div>

     <div className="menu--navbar"> <Menu items={items} active={active} setActive={setActive}/></div>
    </header>
  );
};

export default Header;
