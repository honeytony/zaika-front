import React from 'react';
import './cyberButton.scss';

const CyberButton = ({ href, text }) => {
    return (
        <div>
            <div className="center-center">
                <a className="btn-glitch-fill" href={href}>
                    <span className="texts">{text}</span>
                    <span className="text-decoration">_</span>
                    <span className="decoration">&rArr;</span>
                </a>
            </div>
        </div>
    );
};

export default CyberButton;
