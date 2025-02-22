import React, { useState } from 'react';

import { TypeAnimation } from 'react-type-animation';
import { isMobile } from 'react-device-detect';
import './header.scss';
import { useEffect } from 'react';
import CyberButton from '../CyberButton/cyberButton';

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
                                    <a href="#address">Карта охвата</a>
                                </li>
                                <li className="link">
                                    <a href="#connect">Подключиться</a>
                                </li>
                                <li>
                                    {isMobile ? (
                                        <div className="header-navigations-phones">
                                            <div className="icon header-navigations-phones-phone"></div>
                                            <ul className="header-navigations-phones-links">
                                                <li>
                                                    <a href={`tel:+${headerData?.phone1}`}>
                                                        +{headerData?.phone1}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={`tel:+${headerData?.phone2}`}>
                                                        +{headerData?.phone2}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : null}
                                </li>
                            </ul>
                            {!isMobile ? (
                                <div className="header-navigations-phones">
                                    <div className="icon header-navigations-phones-phone"></div>
                                    <ul className="header-navigations-phones-links">
                                        <li>
                                            <a href={`tel:+${headerData?.phone1}`}>
                                                +{headerData?.phone1}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`tel:+${headerData?.phone2}`}>
                                                +{headerData?.phone2}
                                            </a>
                                        </li>
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
                        <h1>{"Самый быстрый интернет в Москве"}</h1>
                        <p>
                            <TypeAnimation
                                sequence={'Самый быстрый интернет'}
                                wrapper="span"
                                speed={0}
                                repeat={Infinity}
                            />
                            {'Самый быстрый интернет'}
                        </p>
                        {/* <CyberButton href={'#connect'} text={headerData?.button} /> */}
                        <CyberButton href={'#connect'} text={"Оформить интернет"} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Header;
