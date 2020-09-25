import React from 'react';

export const Display = ({ initialValue = [0] }) => {

    return (
        <div className='bg-display'>
            <h1> {initialValue}</h1>
        </div>
    );
};