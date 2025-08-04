import React, { useState } from 'react';
import '../Assets/Calculator.css';

function Calculator() {
    const [monitorValue, setMonitorValue] = useState("0");
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

    const Number = (e) => {
        e.preventDefault();
        const value = e.target.value;

        if (value === '.' && monitorValue.includes('.')) return;

        if (waitingForSecondNumber) {
            setMonitorValue(value === '.' ? '0.' : value);
            setWaitingForSecondNumber(false);
        } else {
            setMonitorValue(prev =>
                prev === "0" && value !== '.' ? value : prev + value
            );
        }
    };

    const handleOperator = (e) => {
        e.preventDefault();
        const selectedOperator = e.target.value;

        setFirstOperand(parseFloat(monitorValue));
        setOperator(selectedOperator);
        setWaitingForSecondNumber(true);
    };

    const calculate = (e) => {
        e.preventDefault();
        const secondOperand = parseFloat(monitorValue);

        if (operator && firstOperand !== null) {
            let result = 0;
            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
                    break;
                default:
                    return;
            }
            setMonitorValue(result.toString());
            setFirstOperand(null);
            setOperator(null);
            setWaitingForSecondNumber(false);
        }
    };

    const Clear = (e) => {
        e.preventDefault();
        setMonitorValue("0");
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondNumber(false);
    };

    return (
        <div className='container'>
            <form className='form'>
                <div className='monitor-container'>
                    <input 
                        className='monitor'
                        type='text'
                        value={monitorValue}
                        placeholder='Click a number'
                        readOnly
                        disabled
                    />
                </div>

                <div className='btns-column'>
                    <div className='left-container'>
                        <div className='first-layer'>
                            <button onClick={Clear}>CLR</button>
                            <button value="/" onClick={handleOperator}>/</button>
                            <button value="*" onClick={handleOperator}>*</button>
                        </div>
                        <div className='second-layer'>
                            <div> 
                                <button value={7} onClick={Number}>7</button>
                                <button value={8} onClick={Number}>8</button>
                                <button value={9} onClick={Number}>9</button> 
                            </div>
                            <div>
                                <button value={4} onClick={Number}>4</button>
                                <button value={5} onClick={Number}>5</button>
                                <button value={6} onClick={Number}>6</button>
                            </div>
                            <div>
                                <button value={1} onClick={Number}>1</button>
                                <button value={2} onClick={Number}>2</button>
                                <button value={3} onClick={Number}>3</button>
                            </div>
                            <div>
                                <button className='zero-btn' value={0} onClick={Number}>0</button>
                                <button value={'.'} onClick={Number}>.</button>
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <button value="-" onClick={handleOperator}>-</button>
                        <button value="+" onClick={handleOperator} className='rigth-btn-extends'>+</button>
                        <button onClick={calculate} className='rigth-btn-extends'>=</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Calculator;
