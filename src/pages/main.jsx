// import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.scss';

import Address from '../components/Address/address';
import Connect from '../components/Connect/connect';
import Faq from '../components/FAQ/faq';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Tariffs from '../components/Tarrifs/tariffs';

function Main() {
    const [headerData, setHeaderData] = useState({
        title: 'Безлимитный интернет',
        second_title: [
            'Высокая скорость у Вас дома!',
            2000,
            'Подключение завтра!',
            2000,
            'Выгодные тарифы!',
            2000,
        ],
        phones: ['+79502224497', '+79502224497'],
    });

    const [tariffsData, setTariffsData] = useState([
        {
            title: 'Апгрейд 500',
            description: '',
            speed: 500,
            price: 500,
            tv: null,
            serials: null,
            mobile: null,
            recommend: true,
        },
        {
            title: '2 в 1 Апгрейд 3.0',
            description: '',
            speed: 500,
            price: 650,
            tv: 139,
            serials: null,
            mobile: null,
            recommend: false,
        },
        {
            title: 'Технологии общения. Онлайн',
            description: '',
            speed: 500,
            price: 500,
            tv: 184,
            serials: 25000,
            mobile: { gb: 12, min: 13, sms: 105 },
            recommend: false,
        },
        {
            title: 'Апгрейд 500',
            description: '',
            speed: 500,
            price: 500,
            tv: null,
            serials: null,
            mobile: null,
            recommend: false,
        },
    ]);

    const [faqData, setFaqData] = useState([
        {
            title: 'Интернет',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
        {
            title: 'Как оставить заявку на подключение?',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
        {
            title: 'Нужно ли лично приехать в офис для заключения контракта?',
            description:
                'Не нужно! Сейчас не требуется личный визит клиента для оформления заявки и подписания договора. Заявку на подключение вы оформляете онлайн, договор заполняете дома во время визита монтажника. Подписанный вами договор монтажник увозит с собой и передает в абонентский отдел.',
        },
        {
            title: 'Как выбрать удобное время для подключения?',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
        {
            title: 'Как списывается абонентская плата?',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
        {
            title: 'Надо ли покупать какое-то оборудование, провода для подключения?',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
        {
            title: 'По какой технологии происходит подключение?',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
        {
            title: 'Какой лимит у домашнего интернета ОнЛайм',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
        {
            title: 'Как быстро подключаете после оформления заявки?',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
        {
            title: 'Преимущества интернета ОнЛайм / Ростелеком',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod id ducimus, aut eaque nostrum magni ullam laboriosam provident neque, architecto sit dolorum doloremque? Ea omnis doloribus tempore vero voluptatum.',
        },
    ]);

    const [addressData, setAddressData] = useState([
        'Старорусская 11',
        'Староземская 88',
        'Новгородская 12',
        'Старопутиловская 22',
        'Старокерская 89',
    ]);

    const tariffs = ['1asdsad', '2asdasd', '3asdasd'];

    return (
        <div className="App">
            <Header headerData={headerData} />
            <Tariffs tariffsData={tariffsData} />
            <Faq faqData={faqData} />
            <Address addressData={addressData} />
            <Connect tariffs={tariffs} />
            <Footer />
        </div>
    );
}

export default Main;
