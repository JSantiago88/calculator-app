import React from 'react';
import { ButtonRow } from './ButtonRow';
import { data as rows } from '../data';

export const ButtonTable = ({ handleSelectButton }) => {

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