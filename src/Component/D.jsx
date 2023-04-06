import React, { useContext } from 'react';
import myconst from './Context';
const D = (props) => {
  const {data} = useContext(myconst);
  return (
    <div>
      <h2>D Component: </h2>
      <p style={{color: "red"}}>{data}</p>
      <p></p>
    </div>
  );
}

export default D;
