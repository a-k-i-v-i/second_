import React from 'react';
import {useTranslation} from "react-i18next";

const Online = ({btn, addBtn}) => {
    const {t} = useTranslation();

    return (
        <>
            <button style={{
                display: btn ? "block" : "none",
                transition: btn ? ".7s" : "0"
            }}  onMouseOver={() => addBtn(false)}>
                {t("frontend.online")}
            </button>


        <div className="Online"
            hidden={btn}  style={{
            display: btn ? "none" : "block",
            transition: btn ? "0" : ".7s"

        }}
             onMouseLeave={() => addBtn(true)}>
            <h1>{t("frontend.Online")}</h1>
            <div style={{
                marginTop: "-30px"
            }}>
                <h4>{t("frontend.Online-text")}</h4>
                <h3>{t("frontend.Online-center")}</h3>
                <h5>{t("frontend.Online-bottom")}</h5>
            </div>

        </div>
        </>

    );
};

export default Online;