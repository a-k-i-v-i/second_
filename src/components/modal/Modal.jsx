import axios from "axios";
import React, {useState} from "react";
import SMILE from "../image/modal/smiling-face 2.png";
import {MdClose} from "react-icons/md";
import {useForm} from "react-hook-form";

const Modal = ({setModal}) => {
    const [values, setValues] = useState({
        name: "",
        phone: "",
    });

    const [pending, setPending] = useState(true);
    const [closeModal, setCloseModal] = useState(true);
    const [pleasholder, setPleasholder] = useState('номер')

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    })
    const onSubmit = (data) => {
        reset();
    }

    const getValues = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const post_Form = async () => {
        await axios
            .post(`https://motion-app.herokuapp.com/api/v1/applications/`, {
                name: values.name,
                email: values.email,
                number: values.phone,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
        setPending(false);
        if (errors) {
            setTimeout(() => {
                setCloseModal(false);
            }, 3000);
        }
    };

    return (
        <div id="modal">
            {closeModal ? (
                <div className="modal">
                    {pending ? (
                        <>
                            {" "}
                            <div onClick={() => setModal(false)} className="modal--close">
                                <MdClose style={{color: "white"}}/>
                            </div>
                            <img className="modal--img" src={SMILE} alt=""/>
                            <div className="modal--form">
                                <form onSubmit={handleSubmit(onSubmit)} action="">
                                    <div className="name">
                                        <input{...register('name', {required: 'Поле обязательно к заполнению', minLength: {value: 1, message: 'укажите точное  имя'}})} onChange={getValues} type="text" name="name" className="modal--input" placeholder="Имя"/>
                                        <div>{errors?.name && <p style={{color: 'red', marginTop: '-29px'}}>{errors?.name?.message || 'Error!'}</p>}</div>
                                    </div>
                                    <div className="phone">
                                        <input onClick={() => setPleasholder('000 00 00 00')}{...register('phone', {
                                                    required: 'Поле обязательно к заполнению',
                                                    maxLength: {
                                                        value: 9,
                                                        message: 'не менее 9 символов',

                                                    }
                                                })} onChange={getValues} type="number" name="phone" className="modal--input" placeholder={pleasholder}/>
                                        <div>{errors?.phone && <p style={{color: 'red', marginTop: '-29px'}}>{errors?.phone?.message || 'Error!'}</p>}</div>
                                    </div>
                                    <div className="modal--checkbox">
                                        <input className="modal--checkbox--check" type="checkbox"/>
                                        <p className="modal--checkbox--p">
                                            Я соглашаюсь на обработку персональных данных
                                        </p>
                                    </div>
                                    <button onClick={post_Form} disabled={!isValid} className="modal_btn">
                                        Оставить заявку
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div className="resolve">
                            <img className="modal--img" src={SMILE} alt=""/>
                            <h1 className="resolve--h1">Менеджеры скоро свяжутся с вами!</h1>
                        </div>
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Modal;
