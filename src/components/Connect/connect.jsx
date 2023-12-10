import React, { useEffect, useLayoutEffect, useState } from 'react';
import InputMask from 'react-input-mask'

import './connect.scss';


const saveField = (e, setField) => {
    setField(e.target.value);
};

const Connect = ({tariffs}) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [choosedTarif, setChoosetTarif] = useState('Выберите тариф');
    const [fioField, setFioField] = useState('');
    const [phoneField, setPhoneField] = useState('');

    useEffect(() => {
        console.log('fio->', fioField);
        console.log('ph->', phoneField);
        console.log('tar->', choosedTarif);
    }, [fioField, phoneField, choosedTarif]);
   

    


    // const url = 'https://11bf-91-215-201-1.ngrok-free.app';
    // useEffect(() => {
    //     console.log(fioField);
    // }, [fioField]);
    // const sendForm = () => {
    //     axios
    //         .post(`${url}/form`, {
    //             firstName: fioField,
    //             phone: phoneField,
    //         })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

  
     {/* <form action="#">
                <input
                    type="text"
                    placeholder="ФИО"
                    onChange={(e) => {
                        saveField(e, setFioField);
                    }}
                />
                <input
                    type="text"
                    placeholder="Телефон"
                    onChange={(e) => {
                        saveField(e, setPhoneField);
                    }}
                />
                <button onClick={sendForm}>Отправить</button>
            </form> */}
    return (
        <section id="connect" className="connect">
            <div className="container">
                <h2>Оставить заявку</h2>
                <p className="description">Оставьте заявку и мы свяжемся с Вами!</p>
                <form action="#" className="connect-form" method="post">
                    <input type="text" value={fioField} className="connect-form-name" placeholder="ФИО" required onChange={(e) => {
                        saveField(e, setFioField);
                    }}/>
                    {/* <input
                        required
                        type="tel"
                        className="connect-form-phone"
                        placeholder="Номер телефона"
                    /> */}
                     <InputMask
                        mask="+7(999)999-99-99"
                        maskChar="_"
                        type='text'
                        value={phoneField}
                        onChange={(e) => {
                        saveField(e, setPhoneField);
                    }}
                        placeholder='Номер телефона'
                    />

                    <div className="select">
                        <div
                            className="select-component"
                            onClick={(e) => {
                                setIsOpen(!isOpen);
                            }}>
                            <div className="placeholder">{choosedTarif}</div>
                        </div>
                        <div className="select-dropdown">
                            <ul className={isOpen ? `active` : ''}>
                                {tariffs.map((e) => {
                                    return (
                                        <li
                                            onClick={(e) => {
                                                setChoosetTarif(e.target.outerText);
                                                setIsOpen(false);
                                            }}>
                                            {e}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="connect-form-checkbox">
                        <label htmlFor="acception">
                            <input type="checkbox" name="acception" id="acception" />

                            <div className="connect-form-checkbox-fake"></div>
                        </label>
                        <p className="connect-form-checkbox-description">
                            Согласие на <a href="">обработку персональных данных</a>
                        </p>
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </section>
    );
};

export default Connect;
