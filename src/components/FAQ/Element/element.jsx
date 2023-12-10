import React, { useState } from 'react';

const Element = ({ title, description }) => {
    const [isToggle, setIsToggle] = useState(false);
    const toggleElement = () => {
        setIsToggle(!isToggle);
    };
    return (
        <li
            className={`faq-tabs-list-element ${isToggle ? 'active' : ''}`}
            onClick={() => toggleElement()}>
            {title}
            <div className="faq-tabs-list-element-description">{description}</div>
        </li>
    );
};

export default Element;
