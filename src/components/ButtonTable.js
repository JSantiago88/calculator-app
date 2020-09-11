import React from 'react';
import { ButtonRow } from './ButtonRow';
import { data } from '../data';

export const ButtonTable = ({setInitialValue}) => {

    

    return (

        <div className="button-table">
            {
                data.map(({ values }) => (
                    <ButtonRow
                        elements={values}
                        setInitialValue={setInitialValue}
                    />
                ))
            }
        </div>
    );
};