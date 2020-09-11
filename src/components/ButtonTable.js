import React from 'react';
import { ButtonRow } from './ButtonRow';
import { data } from '../data';

export const ButtonTable = () => {

    return (

        <div className="button-table">
            {
                data.map(({ values }) => (
                    <ButtonRow
                        elements={values}
                    />
                ))
            }
        </div>
    );
};