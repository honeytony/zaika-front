import React from 'react';
import { useState } from 'react';
import './address.scss';

const Address = ({ addressData, getAddressData }) => {
    const [foundAddresses, setFoundAddresses] = useState([]);
    const [addressInput, setAddressInput] = useState('');
    const checkAddress = (address) => {
        setAddressInput(address);
        if (address.length > 2) {
            getAddressData(address, setFoundAddresses);
        } else {
            setFoundAddresses([]);
        }
    };
    return (
        <section id="address" className="address">
            <div className="container">
                <h2>Адреса</h2>
                <p className="description">Проверьте, входит ли Ваш адрес в зону подключений</p>
                <form action="#" className="address-form">
                    <input
                        type="text"
                        className="address-form-search"
                        placeholder="Введите ваш адрес"
                        value={addressInput}
                        onChange={(e) => checkAddress(e.target.value)}
                    />
                </form>
                <ul className="address-list">
                    {foundAddresses &&
                        foundAddresses.map((address, index) => {
                            return (
                                <li
                                    key={index}
                                    className="address-list-address"
                                    onClick={(e) => {
                                        setAddressInput(address);
                                        setFoundAddresses([]);
                                    }}>
                                    {address}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </section>
    );
};

export default Address;
