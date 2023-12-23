// import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.scss';

import Address from '../components/Address/address';
import Connect from '../components/Connect/connect';
import Faq from '../components/FAQ/faq';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Tariffs from '../components/Tarrifs/tariffs';
import axios from 'axios';
import Preloader from '../components/Preloader/preloader';

function Main() {
    const faqApi = `${process.env.REACT_APP_DB_IP}/api/faq`;
    const tariffsApi = `${process.env.REACT_APP_DB_IP}/api/tariffs`;
    const infoApi = `${process.env.REACT_APP_DB_IP}/api/info`;
    const addressApi = `${process.env.REACT_APP_DB_IP}/api/streets`;

    const [choosedTarif, setChoosetTarif] = useState('Выберите тариф');

    const [headerData, setHeaderData] = useState({});

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
            mobile: [{ gb: 12, min: 13, sms: 105 }],
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

    const [tariffs, setTariffs] = useState(['1asdsad', '2asdasd', '3asdasd']);
    const [isLoading, setIsLoading] = useState(true);
    function getData(api, setFunction) {
        axios.get(api).then((data) => {
            setFunction(data.data);
        });
    }

    function getTarrifsData() {
        axios.get(tariffsApi).then((data) => {
            let newData = [];
            data.data.forEach((tariffs) => {
                // console.log(tariffs);
                newData.push(tariffs.title);
            });
            setTariffsData(data.data);
            setTariffs(newData);
            setChoosetTarif(newData[0]);
        });
    }

    function getAddressData(text, setFunction) {
        let data = JSON.stringify({
            qerySearch: text,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: addressApi,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                setFunction(response.data);
            })
            .catch((error) => {
                // if (error.response) {
                //     console.log(error.response.data);
                //     console.log(error.response.status);
                //     console.log(error.response.headers);
                // } else if (error.request) {
                //     // no response
                //     console.log(error.request);
                // } else {
                //     // Something wrong in setting up the request
                //     console.log('Error', error.message);
                // }
                // console.log(error.config);
            });
        // axios.get(addressApi).then((data) => {
        //     console.log('address->' + data.data);
        //     setFunction(data.data);
        // });
    }

    useEffect(() => {
        getData(infoApi, setHeaderData);
        getTarrifsData();
        getData(faqApi, setFaqData);
    }, []);

    useEffect(() => {
        if (headerData.title) {
            setTimeout(() => {
                setIsLoading((prev) => !prev);
            }, 1000);
        }
    }, [headerData]);

    return (
        <div className="App">
            {<Preloader isLoading={isLoading} />}
            <Header headerData={headerData} />
            <Tariffs tariffsData={tariffsData} setChoosetTarif={setChoosetTarif} />
            <Faq faqData={faqData} />
            <Address addressData={addressData} getAddressData={getAddressData} />
            <Connect
                tariffs={tariffs}
                choosedTarif={choosedTarif}
                setChoosetTarif={setChoosetTarif}
            />
            <Footer headerData={headerData} />
        </div>
    );
}

export default Main;
