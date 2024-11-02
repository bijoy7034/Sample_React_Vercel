
import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
           
            const evalResult = eval(input); 
            setResult(evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <ButtonPanel 
                onButtonClick={handleButtonClick} 
                onClear={handleClear} 
                onCalculate={handleCalculate} 
            />
        </div>
    );
};

export default Calculator;
