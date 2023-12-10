import React from 'react';
import './cyberButton.scss';

const CyberButton = ({ href }) => {
    return (
        <div>
            <div class="center-center">
                <a class="btn-glitch-fill" href={href}>
                    <span class="texts">Подключить</span>
                    <span class="text-decoration">_</span>
                    <span class="decoration">&rArr;</span>
                </a>
            </div>
        </div>
    );
};

export default CyberButton;
