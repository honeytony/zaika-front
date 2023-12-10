import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <nav className="footer-container-links">
                    <ul>
                        <li>
                            <a href="#">Главная</a>
                        </li>
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                        <li>
                            <a href="#tarrifs">Тарифы</a>
                        </li>
                        <li>
                            <a href="#address">Карта охвата</a>
                        </li>
                        <li>
                            <a href="#connect">Подключиться</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer-container-logo"></div>
                <nav className="footer-container-tels">
                    <ul>
                        <li>
                            <a href="tel:89502224497">89502224497</a>
                        </li>
                        <li>
                            <a href="tel:89502224497">89502224497</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
