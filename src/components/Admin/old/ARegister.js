import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ARegister = () => {
    const [name, setName] = useState('');
    const [service_no, setService_no] = useState('');
    const [board, setBoard] = useState('');
    const [board_name, setBoard_name] = useState('');

    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const BOARD = ['KSB','RSB','ZSB'];
    const DESIGNATION = ['DIRECTOR','SUPERINTENDENT','CLERK'];

    const ARegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/admin', {
                name: name,
                service_no:service_no,
                board:board,
                board_name:board_name,
                designation: designation,
                email: email,
                mobile:mobile,
                password: password,
                confPassword: confPassword
            });
            navigate("/insert");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

        <div class="fadeIn first">
          <img src="https://apsainik.org.in/assets/img/sainiklogo.png" id="icon" alt="User Icon" />
        </div>
        <form onSubmit={ARegister}>
        <p className="has-text-centered">{msg}</p>
        <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="Name"value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="Service Number"value={service_no} onChange={(e) => setService_no(e.target.value)} />

          <input type="email" id="login" class="fadeIn second emailInput" name="login" placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="number" id="login" class="fadeIn second numberInput" name="login" placeholder="Mobile"value={mobile} onChange={(e) => setMobile(e.target.value)} />

<div className='row remove-pad '>
<div className='col-sm-5'>
<select id="login" class="fadeIn second textInput" value={board}onChange={(e) => setBoard(e.target.value)}>
<option >Select Board</option>

{BOARD.map(c => <option key={c}>{c}</option>)}
</select>
</div>
<div className='col-sm-6 '>
          <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="board_name"value={board_name} onChange={(e) => setBoard_name(e.target.value)} />
</div>
</div>
          <select id="login" class="fadeIn second textInput" value={designation}onChange={(e) => setDesignation(e.target.value)}>
          <option style={{color:'grey'}} >select Designation</option>

          {DESIGNATION.map(c => <option key={c}>{c}</option>)}
          </select>

          <input type="password" id="password" class="fadeIn third passwordInput" name="login" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" id="password" class="fadeIn third passwordInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />


          <input type="submit" class="fadeIn fourth submitInput" value="Log In" />
        </form>

                            </div>
                            </div>
                      </div>
    )
}

export default ARegister
