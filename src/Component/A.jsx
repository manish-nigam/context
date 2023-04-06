import React, { useState } from 'react';
import B from './B';
import myconst from './Context';

const A = () => {
  const[state, setState] = useState("")
   const    [data,setData]    =    useState("")
  return (
    <div>

      
      <h2>A Component: </h2>
      <input type='text' placeholder='Enter Some Text'  onChange={(e)=>{
        setState(e.target.value)
      }}/>
      <button onClick={()=> {
        setData(state)
      }}>Click me</button>
      <myconst.Provider value={{data}} >
      <B/>
      </myconst.Provider>
     
    </div>
  );
}

export default A;
