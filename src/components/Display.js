import React from 'react';

export const Display = ({ initialValue }) => {

    return (
        <div className='bg-display'>
            <h1> {initialValue}</h1>
        </div>
    );
};