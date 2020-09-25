import React, { useState } from 'react';

import { ButtonTable } from './components/ButtonTable';
import { Display } from './components/Display';
import { getResult } from './helpers/getResult';

export const Calculator = () => {

    const [initialValue, setInitialValue] = useState([0]);

    const handleSelectButton = (e) => {
        const value = !isNaN(parseInt(e.target.innerText)) ?
            parseInt(e.target.innerText) :
            e.target.innerText;

        switch (value) { //step
            case '+':
                addOperator(value);
                break;
            case '-':
                addOperator(value);
                break;
            case 'x':
                addOperator(value);
                break;
            case '/':
                addOperator(value);
                break;
            case '=':
                getResult(initialValue);
                break;
            case 'AC':
                setInitialValue([0]);
                break;
            case '.':
                //decimal
                break;
            default:
                setInitialValue((cats) => {
                    return cats[0] === 0 ? [parseInt(value)] : [...cats, parseInt(value)];
                });
                break;
        }

    };

    const addOperator = (value) => {
        setInitialValue((cats) => {
            if (cats[cats.length - 1] === '+' ||
                cats[cats.length - 1] === '-' ||
                cats[cats.length - 1] === 'x' ||
                cats[cats.length - 1] === '/') return [...cats];

            console.log(value);
            return cats[0] === 0 ||
                cats[0] === '+' ||
                cats[0] === '-' ||
                cats[0] === 'x' ||
                cats[0] === '/' ? [0] : [...cats, value];
        });
    };

    return (
        <div className="calculator">
            <h2>Casio</h2>
            <Display initialValue={initialValue} />
            <hr />
            <ButtonTable handleSelectButton={handleSelectButton} />
        </div>
    );

};
