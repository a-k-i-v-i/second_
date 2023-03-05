import axios from "axios";
import React, { useState } from "react";
import SMILE from "../image/modal/smiling-face 2.png";
import {MdClose} from 'react-icons/md'

const Modal = ({modal,setModal}) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
  });

  const getValues = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  };

  const post_Form = async()=>{
    await axios.post(`https://63ddebeddf83d549cea7a557.mockapi.io/task`,{
       name: values.name,
       email : values.email,
       number : values.phone
  })
 }
  return (
    <div id="modal">
      <div className="modal">
        <div
        onClick={()=> setModal(false)}
         className="modal--close">
          <MdClose style={{color: "white"}}/></div>
        <img className="modal--img" src={SMILE} alt="" />
        <div className="modal--form">
          <input
          onChange={getValues}
            type="text"
            name="name"
            className="modal--input"
            placeholder="Имя"
          />
          <input
          onChange={getValues}
            type="text"
            name="phone"
            className="modal--input"
            placeholder="Номер"
          />
          <div className="modal--checkbox">
            <input className="modal--checkbox--check" type="checkbox" />
            <p className="modal--checkbox--p">
              Я соглашаюсь на обработку персональных данных
            </p>
          </div>
          <button 
          onClick={post_Form}
          className="modal_btn">Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
