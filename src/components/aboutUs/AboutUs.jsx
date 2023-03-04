import React, {useState} from "react";
import Kurmanbek from "../image/aboutus/Kurmanbek.aboutUs.png"
import Kanatbek from "../image/aboutus/Kanatbek.aboutUs.png"
import certificate from "../image/aboutus/certificate.aboutus.png"
import limitless from "../image/aboutus/limitless.aboutus.png"
import temir from "../image/aboutus/temir.aboutus.png"
import webilim from "../image/aboutus/webilim.aboutus.png"
import gradient from "../image/aboutus/gradient.aboutus.png"
import gradients from "../image/aboutus/gradients.aboutus.png"
import certificategiv from "../image/aboutus/certificategiv.aboutus.png"
import mentors from "../image/aboutus/mentors.aboutus.png"
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {t,i18n}=useTranslation();


    return(
        <div id='about'>
            <div className='container'>
                <div className="motion">
                    <h1>{t("about.who")}<span>{t('about.motion')}</span>{t("about.question-mark")}</h1>
                    <p>{t("about.inform")}</p>
                </div>
                <div className="founders">
                    <div className="texts">
                        <h1 className='texts-title'>{t("about.founders")}</h1>
                        <p className='texts-text'>{t('about.info')}</p>
                    </div>
                    <div className="photos">
                        <div className="first">
                            <img src={Kurmanbek} alt=""/>
                            <h3 className='first-h3'>{t('about.person')}</h3>
                            <p className='first-tex'>{t('about.who-')}</p>
                        </div>
                        <div className="first">
                            <img src={Kanatbek} alt=""/>
                            <h3 className='first-h3'>{t('about.person1')}</h3>
                            <p className='first-tex'>{t('about.who--')}</p>
                        </div>
                    </div>
                </div>
                <div className="license">
                    <div className="our">
                        <div className="lis">
                            <div className="licenses">
                                <h1>{t('about.our')}</h1>
                                <p>{t('about.info2')}</p>
                            </div>
                            <div className="study">
                                <div className="it">
                                    <h1 className='it-tit'>01.</h1>
                                    <h2 className='it-text'>{t('about.study')}</h2>
                                    <div className="it-line"></div>
                                </div>
                                <div className="it">
                                    <h1 className='it-t'>02.</h1>
                                    <h2 className='it-txt'>{t("about.direction")}</h2>
                                    <div className="it-ln"></div>
                                </div>
</div>
                        </div>
                        <img src={certificate} alt=""/>
                    </div>
                </div>
                <div className="gallery">
                    <div className="photos">
                        <h1>{t('about.gallery')}</h1>
                        <div className="imag">
                            <img src={gradients} className='grad' alt=""/>
                            <img src={certificategiv} alt=""/>
                        </div>
                    </div>
                    <div className="other">
                        <div className="image">
                            <img src={mentors} className='men' alt=""/>
                            <img src={gradient} alt=""/>
                        </div>
                        <a href="">{t("about.show")}</a>
                    </div>
                </div>
                
            </div>
            <div className="logos">
                    <div className="images">
                        <img className="images1" src={limitless} alt=""/>
                        <img className="images2" src={temir} alt=""/>
                        <img className="images3" src={webilim} alt=""/>
                    </div>
                </div>
        </div>
    )
}

export default AboutUs