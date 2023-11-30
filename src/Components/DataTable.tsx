import React from 'react';


const DataTable=(props:any)=>{
const {data}=props
    
    return(
        <>
            {
                    data?.map((obj:any, index:number)=>(
                        <div key={index} style={{display:"flex", justifyContent:"space-evenly", border:'1px solid grey'}}>
                            <div style={{textAlign:"left"}}>{obj.name}</div>
                            <div style={{}}>{obj.age}</div>
                            <div style={{}}>{obj.salary}</div>
                            <div>Update</div>
                            <div>Delete</div>
                        </div>
                    ))
            }
        </>
    )
}

export default DataTable;