import React, { useEffect, useLayoutEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import './connect.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const saveField = (e, setField) => {
    setField(e.target.value);
};

const Connect = ({ tariffs, choosedTarif, setChoosetTarif }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [fioField, setFioField] = useState('');
    const [phoneField, setPhoneField] = useState('');
    const [personField, setPersonField] = useState(false);
    const [popupInfo, setPopupInfo] = useState({
        title: 'Форма успешно отправлена!',
        desc: ['В течении суток с вами свяжется оператор'],
    });
    const [isShowPopup, setIsShowPopup] = useState(false);

    const handlePopup = () => {
        setIsShowPopup((prev) => !prev);
    };

    const [validationFields, setValidationFields] = useState({
        fio: false,
        phone: false,
        person: false,
    });

    useEffect(() => {
        validateForm();
    }, [fioField, phoneField, personField]);

    const validateForm = () => {
        let errors = [];

        if (fioField.length < 1) {
            setValidationFields((prev) => ({ ...prev, fio: false }));
            errors.push('Имя');
        } else {
            setValidationFields((prev) => ({ ...prev, fio: true }));
        }
        if (phoneField.length < 4) {
            setValidationFields((prev) => ({ ...prev, phone: false }));
            errors.push('Телефон');
        } else {
            setValidationFields((prev) => ({ ...prev, phone: true }));
        }
        if (!personField) {
            setValidationFields((prev) => ({ ...prev, person: false }));
            errors.push('Согласие на обработку персональных данных');
        } else {
            setValidationFields((prev) => ({ ...prev, person: true }));
        }

        setPopupInfo({ title: 'Ошибка! Заполните следующие поля:', desc: errors });
    };

    const url = `${process.env.REACT_APP_DB_IP}/api/form`;

    const sendForm = (e) => {
        e.preventDefault();

        if (
            validationFields.fio === true &&
            validationFields.phone === true &&
            validationFields.person === true
        ) {
            axios
                .post(`${url}`, {
                    firstName: fioField,
                    phone: phoneField,
                    tariffName: choosedTarif,
                })
                .then(function (response) {
                    setPopupInfo({
                        title: 'Форма успешно отправлена!',
                        desc: 'В течении суток с вами свяжется оператор',
                    });
                    handlePopup();
                })
                .catch(function (error) {
                    setPopupInfo({ title: 'Ошибка', desc: error.response.data.message });
                    handlePopup();
                });
        } else {
            setIsShowPopup(true);
        }
    };

    return (
        <section id="connect" className="connect">
            <div className={isShowPopup ? 'popup show' : 'popup'}>
                <div className="close-btn" onClick={() => handlePopup()}>
                    <div></div>
                    <div></div>
                </div>
                <p className="header">{popupInfo?.title}</p>
                <p className="desc">
                    {typeof popupInfo.desc === 'object' ? (
                        <ul>
                            {popupInfo?.desc?.map((el) => {
                                return <li>{el}</li>;
                            })}
                        </ul>
                    ) : (
                        popupInfo?.desc
                    )}
                </p>
            </div>

            <div className="container">
                <h2>Оставить заявку</h2>
                <p className="description">Оставьте заявку и мы свяжемся с Вами!</p>
                <form action="#" className="connect-form" method="post">
                    <input
                        type="text"
                        value={fioField}
                        className="connect-form-name"
                        placeholder="ФИО"
                        required
                        onChange={(e) => {
                            saveField(e, setFioField);
                        }}
                    />

                    <InputMask
                        mask="+7 999 999 99 99"
                        maskChar=""
                        type="text"
                        value={phoneField}
                        onChange={(e) => {
                            saveField(e, setPhoneField);
                        }}
                        placeholder="Номер телефона"
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
                            <input
                                type="checkbox"
                                name="acception"
                                id="acception"
                                required
                                value={personField}
                                onChange={(e) => {
                                    setPersonField((prev) => !prev);
                                }}
                            />
                            <div className="connect-form-checkbox-fake"></div>
                        </label>
                        <p className="connect-form-checkbox-description">
                            Согласие на <Link to="/person">обработку персональных данных</Link>
                        </p>
                    </div>
                    <button
                        type="submit"
                        onClick={(e) => {
                            sendForm(e);
                        }}>
                        Отправить
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Connect;
