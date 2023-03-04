import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import user1 from "../image/home-main/user1.png";
import user2 from "../image/home-main/user2.png";
import user3 from "../image/home-main/user3.png";
import icon1 from "../image/home-main/icon1.svg";
import icon2 from "../image/home-main/icon2.svg";
import icon3 from "../image/home-main/icon3.svg";
import icon4 from "../image/home-main/icon4.svg";
import Slider from "react-slick";
import axios from "axios";
import Modal from "../modal/Modal";
import userlesson from "../image/home-main/card.png"
import mainuser from "../image/home-main/mainM.png"
import Accordion from "./Accordion";

const Home = () => {
    const {t, i18n} = useTranslation();
    const [modal, setModal] = useState(false)

    const [json, setJson] = useState([]);

    const getJson = async () => {
        const url = await axios(`https://jsonplaceholder.typicode.com/photos`);
        const {data} = await url;
        await setJson(data.slice(0, 1));
    };

    useEffect(() => {
        getJson();
    }, []);

    const [active, setActive] = useState("");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>

            <div>
                <div id="title">
                    <div className="container">
                        <div className="main">
                            <h1 className="main--h1">
                                {t("mainPage.main")}
                                <span className="main--h1--span">{t("mainPage.main2")}</span>
                                {t("mainPage.main3")}
                            </h1>

                            <div className="main--title">
                                Лицензированная IT академия в Бишкеке
                            </div>
                            <button
                                onClick={() => setModal(!modal)}
                                className="main--btn">Оставить заявку
                            </button>
                        </div>
                        {modal ? <Modal modal={modal} setModal={setModal}/> : ''}

                        <div className="title">
                            <h1>{t("main.ОНАС")}</h1>
                            <div className="title--text">
                                <p>{t("main.titles")}</p>
                                <p>{t("main.titles2")}</p>
                                <a href="#">{t("main.link")}</a>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block--one">
                                <h1>2000+</h1>
                                <p>Выпусников</p>
                            </div>
                            <div className="block--two">
                                <h1>2</h1>
                                <p>Года</p>
                            </div>
                            <div className="block--three">
                                <h1>10+</h1>
                                <p>Менторов</p>
                            </div>
                            <div className="block--four">
                                <h1>95%</h1>
                                <p>Трудоустроились</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="scroll text1">
                        <div style={{background:"red"}}>
                            КУРСЫ <span>КУРСЫ - </span> КУРСЫ <span>
                            КУРСЫ - </span>   КУРСЫ <span>КУРСЫ - </span> КУРСЫ <span>
                            КУРСЫ - </span>
                        </div>
                        <div style={{background:"red"}}>
                            КУРСЫ <span>КУРСЫ - </span> КУРСЫ <span>
                            КУРСЫ - </span>   КУРСЫ <span>КУРСЫ - </span> КУРСЫ <span>
                            КУРСЫ - </span>
                        </div>
                    </div>
                    <div className="scroll text2">
                        <div style={{background:"#4886FF"}}>
                            BACKEND <span>UX UI - </span> BACKEND <span>
                            FRONTEND - </span>   BACKEND <span>UX UI - </span> FRONTEND <span>
                            BACKEND - </span>
                        </div>
                        <div style={{background:"#4886FF"}}>
                            BACKEND <span>UX UI - </span> BACKEND <span>
                            FRONTEND - </span>   BACKEND <span>UX UI - </span> FRONTEND <span>
                            BACKEND - </span>
                        </div>
                    </div>
                </section>

                <section id="user">
                    <div className="container">
                        <div className="user">
                            <div className="user--one">
                                <div className="user--one__top">
                                    <img src={user1} alt=""/>
                                </div>
                                <div className="user--one__block">
                                    <h1>FRONTEND</h1>
                                    <p>{t("main.userFront")}</p>
                                    <div className="user--one__block--btn">
                                        <button>HTML</button>
                                        <button>React</button>
                                        <button>TypeScript</button>
                                        <button>JS</button>
                                        <button>CSS</button>
                                        <button>SASS</button>
                                        <button>+Английский</button>
                                        <button>7 месяцев</button>
                                    </div>
                                    <div className="user--one__block--button">
                                        <button>Подробнее</button>
                                        <button>Оставить заявку</button>
                                    </div>
                                </div>
                            </div>
                            <div className="user--one">
                                <div
                                    className="user--one__top"
                                    style={{
                                        background:
                                            " linear-gradient(114deg, #725EF2 32%, rgba(115, 95, 243, 0.5) 100%)",
                                    }}
                                >
                                    <img src={user2} alt=""/>
                                </div>
                                <div className="user--one__block">
                                    <h1>UX/UI DESIGN</h1>
                                    <p>{t("main.userUi")}</p>
                                    <div
                                        className="user--one__block--btn  user--one__block--adil"
                                        style={{padding: "23px 0px 49px 0"}}
                                    >
                                        <button>Figma</button>
                                        <button>Adobe XD</button>
                                        <button>Photoshop</button>
                                        <button>+Английский</button>
                                        <button>3 месяцев</button>
                                    </div>
                                    <div className="user--one__block--button">
                                        <button>Подробнее</button>
                                        <button>Оставить заявку</button>
                                    </div>
                                </div>
                            </div>
                            <div className="user--one">
                                <div
                                    className="user--one__top"
                                    style={{
                                        background:
                                            "linear-gradient(134.65deg, #1E9F2B 33.94%, rgba(115, 252, 129, 0.9) 99.36%)",
                                    }}
                                >
                                    <img src={user3} alt=""/>
                                </div>
                                <div className="user--one__block">
                                    <h1>BACKEND</h1>
                                    <p>{t("main.userBac")}</p>
                                    <div
                                        className="user--one__block--btn"
                                        style={{padding: "0 0px 49px 0"}}
                                    >
                                        <button>HTML</button>
                                        <button>React</button>
                                        <button>JS</button>
                                        <button>CSS</button>
                                        <button>SASS</button>
                                        <button>+Английский</button>
                                        <button>7 месяцев</button>
                                    </div>
                                    <div className="user--one__block--button">
                                        <button>Подробнее</button>
                                        <button>Оставить заявку</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="lesson">
                    <div className="container">
                        <div className="lesson">
                            <img className="users" src={userlesson} alt=""/>
                            <div className="lesson--block">
                                <div className="lesson--block--le">
                                    <h1>ПРОБНЫЕ УРОКИ</h1>
                                    <p>Прочуствуй дружную атмосферу нашей академии! Оставь заявку на пробный урок и
                                        стань ближе к своей цели!</p>
                                </div>
                                <div className="lesson--block--right">
                                    <h2>18 февраля в 18:00 мастер класс по FRONTEND</h2>
                                    <button>Записаться</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="web">
                    <div className="container">
                        <div className="nav">
                            <div className="nav--left">
                                <h1>{t("main.webLeft")}</h1>
                            </div>
                            <div className="nav--right">
                                <div className="nav--right__one">
                                    <div className="nav--right__one--left">
                                        <img src={icon1} alt=""/>
                                    </div>
                                    <div className="nav--right__one--right">
                                        <h1>{t("main.webRight")}</h1>
                                        <p>{t("main.webRight2")}</p>
                                    </div>
                                </div>
                                <div className="nav--right__one">
                                    <div className="nav--right__one--left">
                                        <img src={icon2} alt=""/>
                                    </div>
                                    <div className="nav--right__one--right">
                                        <h1>Open Space</h1>
                                        <p>{t("main.webOpen")}</p>
                                    </div>
                                </div>
                                <div className="nav--right__one">
                                    <div className="nav--right__one--left">
                                        <img src={icon3} alt=""/>
                                    </div>
                                    <div className="nav--right__one--right">
                                        <h1>{t("main.webEnOne")}</h1>
                                        <p>{t("main.webEnTwo")}</p>
                                    </div>
                                </div>
                                <div className="nav--right__two">
                                    <div className="nav--right__one--left">
                                        <img src={icon4} alt=""/>
                                    </div>
                                    <div className="nav--right__one--right">
                                        <h1>{t("main.webClub")}</h1>
                                        <p>{t("main.webClubTwo")}</p>
                                        <a href="#">{t("main.link")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bac">
                    <div className="container">
                        <div className="bac">

                            <div className="bac--blocks">
                                <h1>Проекты студентов</h1>
                                <h2>MOTIN WEB IT ACADEMY</h2>
                            </div>
                            <img src={mainuser} alt=""/>
                            <img src={mainuser} alt=""/>
                            <img src={mainuser} alt=""/>
                            <div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="swiper">
                    <div className="container">
                        <div className="swiper">
                            <h1>Отзывы студентов</h1>
                            <Slider {...settings}>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                                <div className="swiper--block"></div>
                            </Slider>
                        </div>
                    </div>
                </section>

                <section id="accordions">
                    <div className="container">
                        <div className="accordions">
                            <div>
                                <h1>{t("main.accordionsH1")}</h1>
                            </div>
                            <div>
                                <Accordion title={t("main.accordionTitle")} active={active} setActive={setActive}/>
                                <Accordion title={t("main.accordionTitle")} active={active} setActive={setActive}/>
                                <Accordion title={t("main.accordionTitle")} active={active} setActive={setActive}/>
                                <Accordion title={t("main.accordionTitle")} active={active} setActive={setActive}/>
                                <Accordion title={t("main.accordionTitle")} active={active} setActive={setActive}/>
                                <Accordion title={t("main.accordionTitle")} active={active} setActive={setActive}/>
                                <Accordion title={t("main.accordionTitle")} active={active} setActive={setActive}/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service">
                    <div className="container">
                        <div className="service">
                            <div className="service--left">
                                <h1>{t("main.serviceH1")}</h1>
                                <p>{t("main.serviceP")}</p>
                            </div>
                            <div className="service--right">
                                <input type="text" placeholder={"Имя"}/>
                                <input type="text" placeholder={"Номер"}/>
                                <input type="text" placeholder="Электронная почта"/>
                                <div className="service--right__checkout">
                                    <div>
                                        <input type="checkbox" style={{width: "20px"}}/>
                                    </div>
                                    <span>{t("main.serviceSpan")}</span>
                                </div>
                                <button>{t("main.serviceBtn")}</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
