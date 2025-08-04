import React from 'react';
import '../Assets/Calculator.css';
import { useRef , useState } from 'react';

function Calculator() {
    const [monitorValue , setMonitorValue] = useState(0);
    const [result , setResult] = useState(0);
    const buttonvalueRef = useRef(null);

    const Number = (e) => {
        e.preventDefault();
        setMonitorValue((prev) => prev === 0 ?  e.target.value : prev + e.target.value); 
    }

  










  return (
    <div className='container'>
        <form className='form'>

            <div className='monitor-container'>
                <input 
                    className='monitor'
                    type='number'
                    value={monitorValue}
                    placeholder='Click a number'
                    readOnly
                    disabled
                />
            </div>

            <div className='btns-column'>
                <div className='left-container'>
                    <div className='first-layer'>
                            <button>CLR</button>
                            <button>/</button>
                            <button>*</button>
                    </div>
                    <div className='second-layer'>
                        <div> 
                            <button value={7} onClick={Number}>7</button>
                            <button value={8} onClick={Number}>8</button>
                            <button value={9} onClick={Number}>9</button> 
                        </div>
                        <div>
                            <button value={4} onClick={Number}>4</button>
                            <button value={7} onClick={Number}>5</button>
                            <button value={7} onClick={Number}>6</button>
                        </div>
                    
                        <div>
                            <button value={7} onClick={Number}>1</button>
                            <button value={7} onClick={Number}>2</button>
                            <button value={7} onClick={Number}>3</button>
                        </div>
                        
                        <div>
                            <button className='zero-btn'>0</button>
                            <button>.</button>
                        </div>
                    </div>
                </div>
                <div className='right-container'>
                            <button>-</button>
                            <button className='rigth-btn-extends'> +</button>
                            <button className='rigth-btn-extends'>=</button>
                </div>


            </div>

            
           
           
            
        </form>

    </div>
  )
}

export default Calculator