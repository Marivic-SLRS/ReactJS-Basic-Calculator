import React from 'react';
import '../Assets/Calculator.css';
import { useRef , useState } from 'react';

function Calculator() {
    const [monitorValue , setMonitorValue] = useState(0);
    

    const Number = (e) => {
        e.preventDefault();
        const value = e.target.value;


        if (monitorValue === 0){
            setMonitorValue(value)
        } else if (monitorValue !== 0){
            setMonitorValue(monitorValue + value);
        }
        else if( value === '.' && monitorValue.toString().includes('.')) return;
        if (monitorValue === 0 && value === '.'){
            setMonitorValue('0.');
        } 
        


       
    }

  










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