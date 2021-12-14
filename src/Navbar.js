import React from 'react'
import { useState } from 'react'

const Section = () => {
    const [value, setValue] = useState(0)
   

    const reset = () =>{
        setValue(0)
    }

    
    return (
        <div>
            

            <h2>counter</h2>
            <h1> {value} </h1>
            <button onClick={ () => {setValue(value + 1)}} >Increase</button>
            <button onClick={ () => {setValue(value - 1)}} >Decrease</button>
            <button onClick={reset} >Reset</button>

        </div>
    )
}

export default Section