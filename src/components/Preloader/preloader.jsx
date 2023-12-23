import React from 'react';
import './preloader.scss';
const Preloader = ({ isLoading }) => {
    return (
        <div className={isLoading ? 'preloader-bg' : 'preloader-bg hide'}>
            <div className="logo"></div>
            <div className="preloader"></div>
        </div>
    );
};

export default Preloader;
