import React from "react";
import smail from "../image/club/smil.png";
import r from "../image/club/r.png";
import done from "../image/club/done.png";
import star from "../image/club/star.png";
import black1 from "../image/club/black1.png";
import black2 from "../image/club/black2.png";
import black3 from "../image/club/black3.png";
import black4 from "../image/club/black4.png";
import black5 from "../image/club/black5.png";
import black6 from "../image/club/black6.png";
import black7 from "../image/club/black7.png";
import black25 from "../image/club/black25.png";
import black8 from "../image/club/black8.png";
import group1 from "../image/club/group1.png";
import group2 from "../image/club/group2.png";
import young from "../image/club/young woman standing and holding her head.png";
import man from "../image/club/man and woman working at the table.png";
import set from "../image/club/Interior set with armchair, bookcase, and floor lamp.png";
import taking from "../image/club/young women taking a selfie.png";
import cloud from "../image/club/cloud storage.png";
import laptop from "../image/club/laptop screen showing online shop page for pink headphones.png";
import joy from "../image/club/joyful young black man jumping.png";
import { useTranslation } from "react-i18next";
const Club = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="club">
      <div className="container">
        <div className="club">
          <h1>
            {t("club.such")}
            <span>{t("club.club2")}</span>
            {t("club.ques")}
          </h1>
          <p>{t("club.inf")}</p>
        </div>
        <div className="why">
          <div className="it">
            <h2>
              {t("club.for-what")} <span>{t("club.it")}</span>
            </h2>
            <p>{t("club.inf1")}</p>
          </div>
        </div>
       
          <div className="li">
            <div className="line">
              <div className="three">
                <div className="month">
                  <h2>3</h2>
                  <p>{t("club.month")}</p>
                </div>
                <div className="talking">
                  <h2>Talking club</h2>
                  <p>{t("club.every")}</p>
                </div>
                <div className="month">
                  <h2>3</h2>
                  <p>{t("club.project")}</p>
                </div>
              </div>
            </div>
          </div>
      
        Ï
        <div className="team">
          <h1>{t("club.team")}</h1>
          <div className="com">
            <img src={group1} className="group1" alt="" />
            <img src={group2} className="group2" alt="" />
            <div className="blacks">
              <img src={black1} className="blacks-black1" alt="" />
              <img src={black2} className="blacks-black2" alt="" />
              <img src={black3} className="blacks-black3" alt="" />
              <img src={black4} className="blacks-black4" alt="" />
              <img src={black5} className="blacks-black5" alt="" />
              <img src={black6} className="blacks-black6" alt="" />
              <img src={black7} className="blacks-black7" alt="" />
              <img src={black25} className="blacks-black25" alt="" />
              <img src={black8} className="blacks-black8" alt="" />
            </div>
            <div className="blur"></div>
            <div className="tex">
              <h2 className="front">Frontend</h2>
              <h2 className="design">UI/UX designer</h2>
              <h2 className="back">Backend</h2>
            </div>
          </div>
        </div>
        <div className="develop">
          <div className="pro">
            <h2>{t("club.develop")}</h2>
          </div>
          <div className="blocks">
            <div className="block">
              <div className="work">
                <img src={smail} className="smail" alt="" />
                <div className="texts">
                  <h3>{t("club.work")}</h3>
                  <p className="texts-p">{t("club.web")}</p>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="work">
                <img src={r} className="smail" alt="" />
                <div className="texts">
                  <h3>Brainstorming</h3>
                  <p className="texts-p">{t("club.inf2")}</p>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="work">
                <img src={done} className="smail" alt="" />
                <div className="texts">
                  <h3>{t("club.presentation")}</h3>
                  <p className="texts-p">{t("club.inf2")}</p>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="work">
                <img src={star} className="smail" alt="" />
                <div className="texts">
                  <h3>Talking club</h3>
                  <p className="texts-p">{t("club.inf2")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="get">
            <div className="extension">
              <h2>{t("club.get")}</h2>
              <div className="di">
                <div className="block">
                  <img src={man} className="books" alt="" />
                  <p>{t("club.eng")}</p>
                </div>
                <div className="block">
                  <img src={young} className="discussions" alt="" />
                  <img src={set} className="discussions" alt="" />
                  <p>{t("club.extension")}</p>
                </div>
              </div>
            </div>
            <div className="all">
              <div className="block">
                <img src={taking} className="discussions" alt="" />
                <p>{t("club.work")}</p>
              </div>
              <div className="block">
                <img src={laptop} className="laptop" alt="" />
                <p>{t("club.portfolio")}</p>
              </div>
              <div className="block">
                <img src={cloud} className="cloud" alt="" />
                <img src={joy} className="joy" alt="" />
                <p>{t("club.projects")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
