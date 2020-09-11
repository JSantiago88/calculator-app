import React from 'react';

export const Button = ({ values, setInitialValue }) => {

    const handleInputChange = ( e) => {
       
        setInitialValue( values.value );
    }

    return (
        <>
            <button className={values.styles} onClick={ handleInputChange }>{values.value}</button>
        </>
    )
};
