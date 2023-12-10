import React from 'react';
import Element from './Element/element';
import './faq.scss';

const Faq = ({ faqData }) => {
    return (
        <section id="faq" className="faq">
            <div className="container">
                <h2>FAQ</h2>
                <div className="faq-tabs">
                    <ul className="faq-tabs-list">
                        {faqData &&
                            faqData.map((element, index) => {
                                return (
                                    <Element
                                        key={index}
                                        title={element.title}
                                        description={element.description}
                                    />
                                );
                            })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Faq;
