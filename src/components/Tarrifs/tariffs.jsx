import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './tarrifs.scss';

const Tariffs = ({ tariffsData, setChoosetTarif }) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    arrows: false,
                },
            },
        ],
    };

    return (
        <section id="tarrifs" className="tarrifs">
            <div className="container">
                <h2>Тарифы</h2>
                <div className="tarrifs-slider">
                    <Slider {...settings}>
                        {tariffsData &&
                            tariffsData.map((tariff, index) => {
                                return (
                                    <div className="tarrifs-slider-slide" key={index}>
                                        {tariff.recommend ? (
                                            <p className="tarrifs-slider-slide-recomend">
                                                Рекомендуем
                                            </p>
                                        ) : null}
                                        <div className="tarrifs-slider-slide-card">
                                            <div className="tarrifs-slider-slide-card-headers">
                                                <h3 className="tarrifs-slider-slide-card-headers-header">
                                                    {tariff.title}
                                                </h3>
                                                <ul className="tarrifs-slider-slide-card-headers-options">
                                                    {tariff.speed ? (
                                                        <li className="tarrifs-slider-slide-card-headers-options-internet">
                                                            <div className="tarrifs-slider-slide-card-headers-options-internet-icon icon"></div>
                                                            <div className="tarrifs-slider-slide-card-headers-options-internet-text">
                                                                <p>
                                                                    <span className="tarrifs-slider-slide-card-headers-options-internet-text-bold">
                                                                        {tariff.speed}
                                                                    </span>
                                                                    Мбит/c
                                                                </p>
                                                                <p className="tarrifs-slider-slide-card-headers-options-internet-text-description">
                                                                    Безлимитный интернет
                                                                </p>
                                                            </div>
                                                        </li>
                                                    ) : null}
                                                    {tariff.tv ? (
                                                        <li className="tarrifs-slider-slide-card-headers-options-channels">
                                                            <div className="tarrifs-slider-slide-card-headers-options-channels-icon icon"></div>
                                                            <div className="tarrifs-slider-slide-card-headers-options-channels-text">
                                                                <p>
                                                                    <span className="tarrifs-slider-slide-card-headers-options-channels-text-bold">
                                                                        {tariff.tv}
                                                                    </span>
                                                                    каналов
                                                                </p>
                                                                <p className="tarrifs-slider-slide-card-headers-options-channels-text-description">
                                                                    Интерактивное TV Wink
                                                                </p>
                                                            </div>
                                                        </li>
                                                    ) : null}
                                                    {tariff.serials ? (
                                                        <li className="tarrifs-slider-slide-card-headers-options-serials">
                                                            <div className="tarrifs-slider-slide-card-headers-options-serials-icon icon"></div>
                                                            <div className="tarrifs-slider-slide-card-headers-options-serials-text">
                                                                <p>
                                                                    <span className="tarrifs-slider-slide-card-headers-options-serials-text-bold">
                                                                        {tariff.serials}
                                                                    </span>
                                                                    фильмов и сериалов
                                                                </p>
                                                                <p className="tarrifs-slider-slide-card-headers-options-serials-text-description">
                                                                    Интерактивное ТВ Wink
                                                                </p>
                                                            </div>
                                                        </li>
                                                    ) : null}
                                                    {tariff?.mobile?.length ? (
                                                        <li className="tarrifs-slider-slide-card-headers-options-phone">
                                                            <div className="tarrifs-slider-slide-card-headers-options-phone-icon icon"></div>
                                                            <div className="tarrifs-slider-slide-card-headers-options-phone-text">
                                                                <p>
                                                                    <span className="tarrifs-slider-slide-card-headers-options-phone-text-bold">
                                                                        {tariff?.mobile[0]?.gb}
                                                                    </span>
                                                                    гб/
                                                                    <span className="tarrifs-slider-slide-card-headers-options-phone-text-bold">
                                                                        {tariff?.mobile[0]?.min}
                                                                    </span>
                                                                    мин/
                                                                    <span className="tarrifs-slider-slide-card-headers-options-phone-text-bold">
                                                                        {tariff?.mobile[0]?.sms}
                                                                    </span>
                                                                    СМС
                                                                </p>
                                                                <p className="tarrifs-slider-slide-card-headers-options-phone-text-description">
                                                                    Мобильная связь
                                                                </p>
                                                            </div>
                                                        </li>
                                                    ) : null}
                                                </ul>
                                            </div>
                                            <div className="tarrifs-slider-slide-card-cost">
                                                <div className="tarrifs-slider-slide-card-cost-info">
                                                    <span className="tarrifs-slider-slide-card-cost-info-bold">
                                                        {tariff.price}{' '}
                                                    </span>{' '}
                                                    <div className="tarrifs-slider-slide-card-cost-info-valute">
                                                        <p>руб</p>
                                                        <p>мес</p>
                                                    </div>
                                                </div>
                                                <a
                                                    onClick={() => setChoosetTarif(tariff.title)}
                                                    href="#connect"
                                                    className="btn tarrifs-slider-slide-card-cost-button">
                                                    Подключить
                                                </a>
                                                <a
                                                    href="#connect"
                                                    className="tarrifs-slider-slide-card-cost-after">
                                                    Подробнее о тарифе
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Tariffs;
