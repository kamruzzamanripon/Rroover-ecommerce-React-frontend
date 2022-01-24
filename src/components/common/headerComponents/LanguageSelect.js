import React from 'react';

const LanguageSelect = () => {
    return (
        <li>
            <a>ENG
                <i className="fas fa-chevron-down u-s-m-l-9" />
            </a>
            <ul className="g-dropdown" style={{width: '70px'}}>
                <li>
                    <a href="#" className="u-c-brand">ENG</a>
                </li>
                <li>
                    <a href="#">ARB</a>
                </li>
            </ul>
        </li>
    );
};

export default LanguageSelect;
