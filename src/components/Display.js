import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ initialValue = [0] }) => {

    return (
        <div className='bg-display'>
            <h1> {initialValue}</h1>
        </div>
    );
};


Display.propTypes = {
    initialValue: PropTypes.array.isRequired
};

export default Display;