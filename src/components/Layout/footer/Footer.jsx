import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import i from '../../image/footer/i.png';
import linkel from '../../image/footer/in.png';
import logo from '../../image/footer/logo.svg.png';
import telegram from '../../image/footer/t.png';
import y from '../../image/footer/y.png';


const Footer = () => {
    const {t, i18n} = useTranslation()
    return(
      <section id="footer">
        <div className="footer">
          <div className="container">
            <div className="footer--map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.252514501693!2d74.58194351546686!3d42.86751411089573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec825790b32f5%3A0x7545c2a8e37ec365!2zMTA5LzMg0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6IDcyMDAwMQ!5e0!3m2!1sru!2skg!4v1676894428232!5m2!1sru!2skg" width="500" height="300" style={{border: "3"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="footer--f">
              <NavLink to={'/'} className=""><img className="footer--f--img" src={logo} alt="" /></NavLink>
              <div className="footer--f--block">
                  <NavLink className="footer--f--block--h1">Курсы</NavLink>
                  <NavLink to={'frontend'} className="footer--f--block--p">Frontend</NavLink>
                  <NavLink to={'UxUi'} className="footer--f--block--p">UI/UX design</NavLink>
                  <NavLink to={'backend'} className="footer--f--block--p">Backend</NavLink>
              </div>
            </div>
            <div className="footer--s">
              <NavLink to={'aboutUs'} className="footer--s--p">О нас</NavLink>
              <NavLink to={'club'} className="footer--s--p">Клуб</NavLink>
              <NavLink className="footer--s--p">FAQ</NavLink>
            </div>
            <div className="footer--t">
              <div className="footer--t--img">
                <img src={linkel} alt="" />
                <img src={i} alt="" />
                <img src={telegram} alt="" />
                <img src={y} alt="" />
              </div>
              <div className="footer--t--ref">Icons8.com</div>
              <div className="footer--t--adress">+996 700 232 400</div>
              <div className="footer--t--adress">motionweb312@gmail.com</div>
              <div className="footer--t--adress">г. Бишкек ул. Турусбекова 109/3</div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer