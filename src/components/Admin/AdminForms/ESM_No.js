import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ESM_No = () => {
    const [Service_No, setService_no] = useState('');
    const [ESM, setESM] = useState('');
    const [P_ESM, setP_ESM] = useState('');
    const [users, setUsers] = useState('');
    const [ids, setIds] = useState('');

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
      getUsers();
      getIds();
  }, []);

  const axiosJWT = axios.create();

  const getUsers = async () => {
      const response = await axiosJWT.get('http://localhost:5000/Prev_ESM');
      setUsers(response.data);
  }
  const getIds = async () => {
      const response = await axiosJWT.get('http://localhost:5000/ZR',{
        params:{ALogin_S:localStorage.getItem("ALogin_S")}
      });
      setIds(response.data);
      setService_no(ids[0]);
      console.log(ids);
  }
    const Auth = async (e) => {
        e.preventDefault();
        try {
          const sn = localStorage.getItem('A_Service_No')

            await axios.post('http://localhost:5000/ESM_No', {

                Service_No: sn,
                ESM_No: ESM
            });
            await axios.post('http://localhost:5000/approve', {
                Service_No:sn
            });
            navigate("/superDash");
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
          <input type="text" id="login" class="fadeIn second textInput" name="ESM" placeholder="Service Number"value={ids[0]+-+ids[1]+-+ESM}  />
          <input type="number" maxlength='6'class="fadeIn third textInput" name="login" placeholder="ESM"value={ESM} onChange={(e) => setESM(e.target.value)} />
          <input type="submit" class="fadeIn fourth submitInput" value="Log In" />
        </form>

        <div id="formFooter">
          <a class="underlineHover la" href="/AdminForm7">Back</a>
          <a class="underlineHover la" value={P_ESM}>{users}</a>

        </div>

      </div>
      </div>
</div>
    )
}

export default ESM_No
