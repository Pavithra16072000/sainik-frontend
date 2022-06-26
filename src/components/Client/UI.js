import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel, {StarLabel} from "../../view/FormLabel";
import LinearProgress from "./Form0";


const UII = () => {

    const [Service_No, setService_No] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Corps_Name, setCorps_Name] = useState('');
    const [Record_Office_Name, setRecord_Office_Name] = useState('');
    const [Group_Name, setGroup_Name] = useState('');
    const [Trade_Name, setTrade_Name] = useState('');
    const [Rank_Name, setRank_Name] = useState('');
    const [Name, setName] = useState('');
    const [Gender, setGender] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const UI = async (e) => {
        e.preventDefault();
        try {
                await axios.post('http://localhost:5000/u_service_details', {
                Service_No:Service_No,
                Service_Name:Service_Name,
                Corps_Name: Corps_Name,
                Record_Office_Name: Record_Office_Name,
                Group_Name: Group_Name,
                Trade_Name: Trade_Name,
                Rank_Name: Rank_Name,
                Name: Name,
                Gender: Gender,

      });
            navigate("/Form2");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }

    }

    return (
      <div className="center">
      <div className="wrapper fadeInDown">
      <div id="form1Content" >
      <form onSubmit={UI}>

      <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
      <label className="header">Service Details</label>
      <div>

     <div className = "right-align dis">
      <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
</div>
 </div>

      </div>

      <div className="upperForm1Content">
      <p className="has-text-centered">{msg}</p>
      <div className="row">


    {/*  <label for="test">test</label>
     <input type="text" id="test" name="test"/>*/}

     <div class="input-icons">
     <i class="fa fa-user icon"></i></div>
<div>
     <input class="input-field" type="text" placeholder="Username"/>
     </div>



























</div>
</div>
      </form>
  </div>
  </div>
  </div>
      )
  }

  export default UII
