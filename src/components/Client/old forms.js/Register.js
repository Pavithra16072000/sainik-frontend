import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [service_no, setService_no] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                Name: name,
                Service_No:service_no,
                Mail_Id: email,
                Mobile:mobile,
                Password: password,
                confPassword: confPassword
            });
            navigate("/login");
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

        <form onSubmit={Register}>
        <p className="has-text-centered">{msg}</p>
        <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="Name"value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="Service Number"value={service_no} onChange={(e) => setService_no(e.target.value)} />

          <input type="email" id="login" class="fadeIn second emailInput" name="login" placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="number" id="login" class="fadeIn second numberInput" name="login" placeholder="Mobile"value={mobile} onChange={(e) => setMobile(e.target.value)} />

          <input type="password" id="password" class="fadeIn third passwordInput" name="login" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" id="password" class="fadeIn third passwordInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />

          <input type="submit" class="fadeIn fourth submitInput" value="Log In" />
        </form>

        <div id="formFooter">
          <a class="underlineHover la" href="/login">Already Registered?</a>
        </div>

      </div>
      </div>
</div>
    )
}

export default Register
