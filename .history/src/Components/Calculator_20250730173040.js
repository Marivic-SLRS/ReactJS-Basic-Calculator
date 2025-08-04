import React from 'react'

function Calculator() {
  return (
    <div className='container'>
        <form className='form'>

            <div className='monitor-container'>
                <input 
                    className='monitor'
                    type='number'
                    placeholder='Click a number'
                />
            </div>

            <div className='btns-container'>
                    <div className=''>
                            <button>CLR</button>
                            <button>/</button>
                            <button>*</button>
                    </div>
                    <div>
                        <div> 
                            <button>7</button>
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
                            <button>0</button>
                            <button>.</button>
                        </div>
                    </div>
                    <div>
                            <button>-</button>
                            <button>+</button>
                            <button>=</button>
                    </div>
            </div>
            
        </form>

    </div>
  )
}

export default Calculator