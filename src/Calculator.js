import React, { useState } from 'react';
import { ButtonTable } from './components/ButtonTable';
import { Display } from './components/Display';

export const Calculator = () => {

    const [initialValue, setInitialValue] = useState(0);

    return (
        <div className="calculator">
            <h2>Casio</h2>
            <Display initialValue={initialValue} />
            <hr />
            <ButtonTable setInitialValue={setInitialValue}/>
        </div>
    );
};
