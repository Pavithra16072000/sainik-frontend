import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [Service_No, setService_no] = useState('');
    const [Password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                Service_No: Service_No,
                Password: Password
            });
            localStorage.setItem('Service_No', Service_No);

            navigate("/form1");
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

        <form onSubmit={Auth}>
        <p className="has-text-centered">{msg}</p>
          <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="Service Number"value={Service_No} onChange={(e) => setService_no(e.target.value)} />
          <input type="password" id="password" class="fadeIn third passwordInput" name="login" placeholder="Password"value={Password} onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" class="fadeIn fourth submitInput" value="Log In" />
        </form>

        <div id="formFooter">
          <a class="underlineHover la" href="/ForgotPage">Forgot Password?</a>
        </div>

      </div>
      </div>
</div>
    )
}

export default Login
{/*

  <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
          <div className="container">
              <div className="columns is-centered">
                  <div className="column is-4-desktop">
                      <form onSubmit={Auth} className="box">
                          <p className="has-text-centered">{msg}</p>
                          <div className="field mt-5">
                              <label className="label">Service Number</label>
                              <div className="controls">
                                  <input type="text" className="input" placeholder="Service Number" value={service_no} onChange={(e) => setService_no(e.target.value)} />
                              </div>
                          </div>
                          <div className="field mt-5">
                              <label className="label">Password</label>
                              <div className="controls">
                                  <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                              </div>
                          </div>
                          <div className="field mt-5">
                              <button className="button is-success is-fullwidth">Login</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </section>


*/}
