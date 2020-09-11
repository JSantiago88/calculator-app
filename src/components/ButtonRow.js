import React from 'react';

import { Button } from "./Button";

export const ButtonRow = ({ elements , setInitialValue}) => {
    
    return (
        <div className="button-row">
            {
                elements.map((element) => (
                    <Button
                        key={element.value}
                        values={element}
                        setInitialValue={setInitialValue}
                    />
                ))
            }
        </div>
    );
};