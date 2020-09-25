import React from 'react';

import { Button } from "./Button";

export const ButtonRow = ({ buttons , handleSelectButton}) => {
    
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