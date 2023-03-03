import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

const Offline = ({btn,addBtn}) => {
    const {t, i18n} = useTranslation();


    return (
        <>
            <button
                style={{
                    display: btn ? "block": "none"
                }}
                onMouseOver={() => addBtn(false)}
            >{t("frontend.offline")}
            </button>


        <div className="Offline"
             onMouseLeave={() => addBtn(true)}
             style={{
                 display: btn ? "none": "block"
             }}
        >
            <h1>{t("frontend.Offline")}</h1>
            <div style={{
                marginTop: "-30px"
            }}>
                <h4>{t("frontend.Offline-text")}</h4>
                <h3>{t("frontend.Offline-center")}</h3>
                <h5>{t("frontend.Offline-bottom")}</h5>
            </div>
        </div>
        </>

    );
};

export default Offline;