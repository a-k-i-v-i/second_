import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import FirstImg from "../image/frontEnd/firstImg.png"
import SecondImg from "../image/frontEnd/secondImg.png"
import ThirdImg from "../image/frontEnd/thirdImg.png"
import Certificate from "../image/frontEnd/certificate.png"
import Card from "../image/frontEnd/card.png"
import mentorRight from "../image/frontEnd/mentorFirst.png"
import mentorCenter from "../image/frontEnd/mentorCenter.png"
import mentorLeft from "../image/frontEnd/mentorRight.png"
import Online from "../inform/Online";
import Offline from "../inform/Ofline";
import Accordion from "../home/Accordion";

import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";


const Frontend = () => {
    const {t, i18n} = useTranslation();
    const [btn, setBtn] = useState(true)
    const [offline, setOffline] = useState(true)
    const [active, setActive] = useState("");

    const navigate = useNavigate()
    const [modal, setModal] = useState(false)

    return (
        <>
        <div className="main-title">
        {modal ? <Modal modal={modal} setModal={setModal}/> : ''}
            <h1>FRONT <span>END</span></h1>
            <div className="text">
                <h5>{t('frontend.ALINA')}</h5>
                <h5>{t('frontend.ALINA-')}</h5>
                <h5>{t('frontend.ALINA--')}</h5>
                <h5>{t('frontend.ALINA---')}</h5>
                <h5>{t('frontend.ALINA----')}</h5>
                <h4>{t('frontend.ux-ui')}</h4>
            </div>
            <button  onClick={() => setModal(!modal)}>{t("frontend.ALINA-button")}</button>

            
        </div>
            <div id="frontEnd">

                <div className="frontEnd">
                    <div className="container">
                        <div className="frontEnd--inform">
                            <div className="frontEnd--inform__question">

                                <h3>{t("frontend.question")} <span>{t("frontend.text")} </span></h3>

                                <h4>
                                    {t("frontend.text-")} <span>{t("frontend.text?")}</span>
                                </h4>
                            </div>
                            <div className="frontEnd--inform__text">
                                <p>{t("frontend.inform")}</p>

                                <h4>{t("frontend.left")}</h4>
                            </div>
                        </div>
                        <div className="frontEnd--courses">
                            <h2>{t("frontend.courses")}</h2>

                            <div className="frontEnd--courses__inform">
                                <div className="frontEnd--courses__inform--first">
                                    <div className="frontEnd--courses__inform--first__fon">
                                        <img src={FirstImg} alt=""/>
                                    </div>
                                    <h3>{t("frontend.new")}</h3>
                                    <p>{t("frontend.newInform")}</p>

                                </div>
                                <div className="frontEnd--courses__inform--first">
                                    <div className="frontEnd--courses__inform--first__fon">
                                        <img src={SecondImg} alt=""/>
                                    </div>
                                    <h3>{t("frontend.junior")}</h3>
                                    <p>{t("frontend.juniorInform")} <br/> {t("frontend.juniorInform-")}
                                        <br/> {t("frontend.juniorInform--")}</p>

                                </div>
                                <div className="frontEnd--courses__inform--first">
                                    <div className="frontEnd--courses__inform--first__fon">
                                        <img src={ThirdImg} alt=""/>
                                    </div>
                                    <h3>{t("frontend.designer")}</h3>
                                    <p>{t("frontend.designerInform")} <br/> {t("frontend.designerInform-")}
                                        <br/> {t("frontend.designerInform--")} <br/> {t("frontend.designerInform---")}
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="frontEnd--title">
                            <div className="frontEnd--title__first">
                                <h1>{t("frontend.educationHour")}</h1>
                                <h5>{t("frontend.education")}</h5>
                            </div>
                            <div className="frontEnd--title__first">
                                <h1>{t("frontend.time")}</h1>
                                <h5>{t("frontend.timeHour")}</h5>
                            </div>
                            <div className="frontEnd--title__first">
                                <h1>{t("frontend.timeEnglish")}</h1>
                                <h5>{t("frontend.englishHour")}</h5>
                            </div>
                        </div>
                        <div className="frontEnd--buttons">
                            <Offline btn={btn} addBtn={setBtn}/>
                           <Online btn={offline} addBtn={setOffline}/>
                        </div>
                    </div>


                </div>

                <div className="frontEnd--bottom">
                    <div className="container">
                        <div className="frontEnd--cours">
                            <div className="frontEnd--cours__text">
                                <h2>{t("frontend.coursText")}</h2>
                            </div>
                            <div className="frontEnd--cours__informs">
                                <div className="frontEnd--cours__informs--first">
                                    <div className="frontEnd--cours__informs--first__title">
                                        <h3>{t("frontend.first")}</h3>
                                        <h4>{t("frontend.employment")}</h4>
                                        <p>{t("frontend.employmentInform")}</p>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="frontEnd--cours__informs--first">
                                    <div className="frontEnd--cours__informs--first__title">
                                        <h3>{t("frontend.second")}</h3>
                                        <h4>{t("frontend.english")}</h4>
                                        <p>{t("frontend.secondText")}</p>
                                    </div>
                                    <hr/>
                                </div>

                                <div className="frontEnd--cours__informs--first">
                                    <div className="frontEnd--cours__informs--first__title">
                                        <h3>{t("frontend.third")}</h3>
                                        <h4>{t("frontend.portfolio")}</h4>
                                        <p>{t("frontend.threeText")} <br/> {t("frontend.threeText-")}</p>
                                    </div>
                                    <hr/>
                                </div>

                                <div className="frontEnd--cours__informs--first">
                                    <div className="frontEnd--cours__informs--first__title">
                                        <h3>{t("frontend.fought")}</h3>
                                        <h4>{t("frontend.support")}</h4>
                                        <p>{t("frontend.supportText")} <br/> {t("frontend.supportText-")}</p>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="frontEnd--cours__informs--first">
                                    <div className="frontEnd--cours__informs--first__title">
                                        <h3>{t("frontend.fifth")}</h3>
                                        <h4>{t("frontend.work")}</h4>
                                        <p>{t("frontend.workText")} <br/> {t("frontend.workText-")}
                                            <br/> {t("frontend.workText--")}</p>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="frontEnd--cours__informs--first">
                                    <div className="frontEnd--cours__informs--first__title">
                                        <h3>{t("frontend.sixth")}</h3>
                                        <h4>{t("frontend.train")}</h4>
                                        <p>{t("frontend.trainText")} <br/> {t("frontend.trainText-")}
                                            <br/> {t("frontend.trainText--")}</p>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="frontEnd--certificate">
                    <div className="container">
                        <div className="frontEnd--certificate__inform">
                            <div className="frontEnd--certificate__inform--text">
                                <h3>{t("frontend.certificate")}</h3>
                                <h6>{t("frontend.certificateText")}</h6>
                                <div className="frontEnd--certificate__inform--text__buttons">
                                    <button>Кыргызский</button>
                                    <button>Русский</button>
                                    <button className="buttonEnglish">Английский</button>
                                </div>
                                <h6>{t("frontend.company")}
                                </h6>
                            </div>
                            <div className="frontEnd--certificate__inform--img">
                                <img src={Certificate} alt=""/>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="designer">
                    <div className="container">
                        <div className="designer--choose">
                            <h2>{t("frontend.designerChoose")}</h2> <br/>
                            <p>{t("frontend.free")}</p>
                        </div>
                        <div className="designer--fon">
                            <img src= {Card} alt=""/>
                            <div className="designer--fon__application">
                                <form>
                                    <input type="text" placeholder="Имя"/>
                                </form>
                                <form>
                                    <input type="text" placeholder="Номер"/>
                                </form>
                                <div className="designer--fon__application--checked">
                                    <input type="checkbox" className="check-box"/>
                                    <p>{t("frontend.agree")}</p>

                                </div>
                                <button>{t("frontend.button")}</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="mentor">
                    <div className="container">
                        <div className="mentor--title">
                            <h2>{t("frontend.mentor")}</h2>
                            <h3>{t("frontend.mentorKg")}</h3>
                        </div>
                        <div className="mentor--boys">
                            <div className="mentor--boys__first">
                                <img src={mentorRight} alt=""/>
                                <h3>{t("frontend.nameRight")}</h3>
                                <p>{t("frontend.rightInform")}</p>
                            </div>
                            <div className="mentor--boys__first">
                                <img src={mentorCenter} alt=""/>
                                <h3>{t("frontend.nameCenter")}</h3>
                                <p>{t("frontend.rightInform")}</p>
                            </div>
                            <div className="mentor--boys__first">
                                <img src={mentorLeft} alt=""/>
                                <h3>{t("frontend.nameLeft")}</h3>
                                <p>{t("frontend.rightInform")}</p>
                            </div>

                        </div>
                        <div className="mentor--connection">
                            <div className="mentor--connection__text">
                                <h2>{t("frontend.mentorText")} <br/> {t("frontend.mentorText-")} <br/> {t("frontend.mentorText--")}</h2>
                                <p>{t("frontend.texts")} <br/> {t("frontend.texts-")} <br/> {t("frontend.texts--")}</p>
                            </div>
                            <div className="mentor--connection__video">
                                <iframe className="video"  width="380" height="215" style={{
                                    borderRadius: "30px",
                                    marginTop: "15px",
                                    
                                }}  src="https://www.youtube.com/embed/7VerRJwJP0s"
                                         title="YouTube video player" frameBorder="0"
                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                         allowFullScreen>
                                </iframe>
                                <iframe className="video" width="380" height="215" style={{
                                    borderRadius: "30px",
                                    marginTop: "15px"
                                }} src="https://www.youtube.com/embed/H0ZTsv4ljcE"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>

                                </iframe>
                            </div>

                        </div>
                    </div>

                </div>

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

    )
}

export default Frontend