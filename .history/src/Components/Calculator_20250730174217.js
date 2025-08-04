import React from 'react';
import '../Assets/Calculator.css';

function Calculator() {
  return (
    <div className='container'>
        <form className='form'>

            <div className='monitor-container'>
                <input 
                    className='monitor'
                    type='number'
                    placeholder='Click a number'
                    readOnly
                    disabled
                />
            </div>

            <div className='btns-column'>



            </div>

            
           
           
            
        </form>

    </div>
  )
}

export default Calculator