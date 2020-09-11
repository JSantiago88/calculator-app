import React from 'react';

export const Button = ({ values }) => {

    return (
        <>
            <button className={values.styles}>{values.value}</button>
        </>
    )
};
