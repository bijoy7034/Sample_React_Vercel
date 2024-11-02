import React from 'react';
import Button from './button';


const ButtonPanel = ({ onButtonClick, onClear, onCalculate }) => {
    const buttons = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        'C', '0', '=', '/',
        '√', 'x²', 'sin', 'cos', 'tan'
    ];

    return (
        <div className="button-panel">
            {buttons.map((btn) => (
                <Button 
                    key={btn} 
                    value={btn} 
                    onClick={btn === 'C' ? onClear : btn === '=' ? onCalculate : onButtonClick} 
                />
            ))}
        </div>
    );
};

export default ButtonPanel;
