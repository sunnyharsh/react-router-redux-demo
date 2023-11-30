import React, { useState } from 'react';

const UseForm=(props:any)=>{
    const {handleSubmitEventFire}=props;

    const [fieldValue, setFieldValue]=useState({name:"", age:"", salary:""})

    const handleChange=(e:any)=>{
        setFieldValue({...fieldValue,[e.target.name]:e.target.value })
    }
    const handleSubmit=()=>{
    
        handleSubmitEventFire(fieldValue)
    }
    return(
        <div>
            <div>
                <input onChange={handleChange} name="name" placeholder='enter name'/>
            </div>
            <div>
                <input onChange={handleChange} name="age" placeholder='enter age'/>
            </div>
            <div>
                <input onChange={handleChange} name="salary" placeholder='enter salary'/>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default UseForm;