import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormEmp = () => {
    const [Service_No, setService_no] = useState('');
    const [ESM_No, setESM_No] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/FormEmp', {
                Service_No: Service_No,
                ESM_No: ESM_No
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
          <input type="text"  class="fadeIn second textInput" name="FormEmp" placeholder="Service Number"value={Service_No} onChange={(e) => setService_no(e.target.value)} />
          <input type="text" id="ESM_No" class="fadeIn third ESM_NoInput" name="FormEmp" placeholder="ESM Number"value={ESM_No} onChange={(e) => setESM_No(e.target.value)} />
          <input type="submit" class="fadeIn fourth submitInput" value="Log In" />
        </form>

        <div id="formFooter">
          <a class="underlineHover la" href="/ForgotPage">Forgot ESM_No?</a>
        </div>

      </div>
      </div>
</div>
    )
}

export default FormEmp
