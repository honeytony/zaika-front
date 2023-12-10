import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { isMobile } from 'react-device-detect';
import './header.scss';
import { useEffect } from 'react';

const Header = ({ headerData }) => {
    const [activeMenu, setActiveMenu] = useState(false);

    const handleMenuClick = () => {
        setActiveMenu((prev) => !prev);
    };

    return (
        <>
            <main>
                <div className="container">
                    <header className="header">
                        <nav className="header-navigations">
                            <a href="#">
                                <div className="header-navigations-logo"></div>
                            </a>
                            <ul
                                className={
                                    isMobile
                                        ? activeMenu
                                            ? 'header-navigations-links-mobile open'
                                            : 'header-navigations-links-mobile'
                                        : 'header-navigations-links'
                                }>
                                <li className="link">
                                    <a href="#">Главная</a>
                                </li>
                                <li className="link">
                                    <a href="#tarrifs">Тарифы</a>
                                </li>
                                <li className="link">
                                    <a href="#faq">FAQ</a>
                                </li>
                                <li className="link">
                                    <a href="#map">Карта охвата</a>
                                </li>
                                <li className="link">
                                    <a href="#connect">Подключиться</a>
                                </li>
                                <li>
                                    {isMobile ? (
                                        <div className="header-navigations-phones">
                                            <div className="icon header-navigations-phones-phone"></div>
                                            <ul className="header-navigations-phones-links">
                                                {headerData.phones.map((phone, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <a href={`tel:${phone}`}>{phone}</a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ) : null}
                                </li>
                            </ul>
                            {!isMobile ? (
                                <div className="header-navigations-phones">
                                    <div className="icon header-navigations-phones-phone"></div>
                                    <ul className="header-navigations-phones-links">
                                        {headerData.phones.map((phone, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={`tel:${phone}`}>{phone}</a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <a href="#" className="btn">
                                        Подключиться
                                    </a>
                                </div>
                            ) : null}

                            {isMobile ? (
                                <div
                                    onClick={() => handleMenuClick()}
                                    className={
                                        activeMenu
                                            ? 'header-navigations-burger-menu open'
                                            : 'header-navigations-burger-menu '
                                    }>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            ) : null}
                        </nav>
                    </header>
                    <div className="text">
                        <h1>{headerData.title}</h1>
                        <p>
                            <TypeAnimation
                                sequence={headerData.second_title}
                                wrapper="span"
                                speed={0}
                                repeat={Infinity}
                            />
                        </p>
                        <a href="#" className="btn">
                            Подключить
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Header;
