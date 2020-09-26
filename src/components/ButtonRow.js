import React from 'react';
import PropTypes from 'prop-types';

import Button from "./Button";

const ButtonRow = ({ buttons = [], handleSelectButton }) => {

    return (
        <div className="button-row">
            {
                buttons.map((button) => (
                    <Button
                        key={button.value}
                        {...button}
                        handleSelectButton={handleSelectButton}
                    />
                ))
            }
        </div>
    );
};

ButtonRow.propTypes = {
    handleSelectButton: PropTypes.func.isRequired,
    buttons: PropTypes.array.isRequired,
}

export default ButtonRow;