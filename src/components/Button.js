import React from 'react';

export const Button = ({ value, styles, handleSelectButton }) => {

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
