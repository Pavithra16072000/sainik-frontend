import React, { useState } from 'react'

import {Link, useNavigate} from 'react-router-dom';

function ComponentA(props) {
  const [Service_No, setService_No] = useState('');

  const navigate = useNavigate();

  const toComponentB=()=>{
navigate('/B',{state:{name:Service_No}});
  }

  return (
   <>
<div>
<input type="text"  class="fadeIn second formInput" name="Service_No" value={Service_No} onChange={(e) => setService_No(e.target.value)} />

<a onClick={()=>{toComponentB()}}>Component B</a></div>
</>
  );


}
export default ComponentA;
