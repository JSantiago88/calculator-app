import React from 'react';
import PropTypes from 'prop-types';

import ButtonRow from './ButtonRow';
import { data as rows } from '../data';

const ButtonTable = ({ handleSelectButton }) => {

    return (
        <div className="button-table">
            {
                rows.map(({ row, values }) => (
                    <ButtonRow
                        key={row}
                        buttons={values}
                        handleSelectButton={handleSelectButton}
                    />
                ))
            }
        </div>
    );
};

ButtonTable.propTypes = {
    handleSelectButton: PropTypes.func.isRequired,
}

export default ButtonTable;