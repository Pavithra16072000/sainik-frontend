import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";



const Corrections = () => {
  
const [Clerk_Q, setClerk_Q] = useState('');
const [Superintendent_Q, setSuperintendent_Q] = useState('');
const [Director_Q, setDirector_Q] = useState('');
const [msg, setMsg] = useState('');

const ClerkQ = async (e) => {
    e.preventDefault();
    try {

      await axios.post('http://localhost:5000/ClerkQ', {
          ClerkQ:Clerk_Q,
          Service_No:localStorage.getItem('A_Service_No')

        });
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
}
const SuperintendentQ = async (e) => {
e.preventDefault();
try {

  await axios.post('http://localhost:5000/SuperintendentQ', {
      SuperintendentQ:Superintendent_Q,
      Service_No:localStorage.getItem('A_Service_No')

    });
} catch (error) {
    if (error.response) {
        setMsg(error.response.data.msg);
    }
}
}
const DirectorQ = async (e) => {
e.preventDefault();
try {

  await axios.post('http://localhost:5000/DirectorQ', {
      DirectorQ:Director_Q,
      Service_No:localStorage.getItem('A_Service_No')

    });

} catch (error) {
    if (error.response) {
        setMsg(error.response.data.msg);
    }
}
}
return(
<div className="footer">
<form onSubmit={ClerkQ}>
<p  className="footer-p">sdkfjal dfkaj;lkn</p>
<textarea rows="4" cols="150" value={Clerk_Q}onChange={(e) => setClerk_Q(e.target.value)} />
<button className="btn my-2 my-sm-0 " type="submit">Post </button>

</form>
<form onSubmit={SuperintendentQ}>
<p  className="footer-p">sdkfjal dfkaj;lkn</p>
<textarea rows="4" cols="150" value={Superintendent_Q}onChange={(e) => setSuperintendent_Q(e.target.value)} />
<button className="btn my-2 my-sm-0 " type="submit">Post </button>

</form>
<form onSubmit={DirectorQ}>
<p  className="footer-p">sdkfjal dfkaj;lkn</p>
<textarea rows="4" cols="150" value={Director_Q}onChange={(e) => setDirector_Q(e.target.value)} />
<button className="btn my-2 my-sm-0 " type="submit">Post </button>

</form>
</div>
)
}

export default Corrections
