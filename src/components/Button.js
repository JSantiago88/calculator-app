import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, styles, handleSelectButton }) => {

    return (
        <>
            <button
                className={styles}
                onClick={handleSelectButton}
            >
                {value}
            </button>
        </>
    )
};

Button.propTypes = {
    handleSelectButton: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired
}

export default Button;