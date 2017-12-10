import React from 'react';
import classNames from 'classnames';

const Button = ({ type, text }) => {
    let btnClass = classNames({
        'uk-button': true,
        'uk-button-primary': type === 'primary',
        'uk-button-secondary': type === 'secondary'
    });
    return (
        <button className={btnClass}>{text}</button>
    );
};

export default Button;