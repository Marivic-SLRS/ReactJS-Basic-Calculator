import React from 'react';
import '../Assets/Calculator.css';
import { useRef , useState } from 'react';

function Calculator() {
    const [monitorValue , setMonitorValue] = useState(0);
    const [result , setResult] = useState(0);
    const buttonvalueRef = useRef(null);

    const Number = (e) => {
        e.preventDefault();
        setMonitorValue(this.target.value);
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
                            <button buttonvalueRef = '7' onClick={Number}>7</button>
                            <button>8</button>
                            <button>9</button> 
                        </div>
                        <div>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </div>
                    
                        <div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
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