import React, {useEffect, useState} from 'react';
import response from "../data/data.json"
import DataTable from '../Components/DataTable';
import UseForm from '../Components/UserForm';

const Home=()=>{

    const [data, setdata]=useState([{}]); // 

    // Api call
    useEffect(()=>{
        setdata(response)
    },[])
    const handleSubmitEventFire=(obj:any)=>{
        setdata([...response, obj])
    }
    return(
        <div>
            <div>
                <UseForm handleSubmitEventFire={handleSubmitEventFire} />
            </div>
            <div>
                <DataTable data={data}/>
            </div>
        </div>
    )
}

export default Home;

