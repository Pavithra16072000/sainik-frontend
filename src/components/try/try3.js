import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormInput from "../view/FormInput";
import FormLabel from "../view/FormLabel";
import FormRadio from "../view/FormRadio";

const Form2 = () => {
    const [name, setName] = useState('');
    const [service_no, setService_no] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Form2 = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/form1', {
                name: name,
                service_no:service_no,
                email: email,
                mobile:mobile,
                password: password,
                confPassword: confPassword
            });
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
      <div id="form1Content" >
        <form onSubmit={Form2}>
        <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
   <label className="header">Service Details</label>
         </div>
     <div className="upperForm1Content">

        <p className="has-text-centered">{msg}</p>
        <div className="row">
          <FormLabel text={"Service"} />
        <div className="col-sm-10 space ">
        <FormRadio text={"Army"} value={"Army"} name={"Service_Details"} />

        <FormRadio text={"Navy"} />
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
          <label class="form-check-label" for="inlineRadio3">AIR FORCE</label>
        </div>
        </div>
        <FormLabel text={"Corps"} />

        <FormInput />

        <FormLabel text={"Name of Record Office"} />
        <div className="col-md-4 space">
          <input type="text"class="fadeIn second formInput"name="login"value={name}onChange={(e) => setName(e.target.value)} />
        </div>

        <FormLabel text={"Group"} />
       <div className="col-sm-10 space ">

       <div class="form-check form-check-inline">
         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
         <label class="form-check-label" for="inlineRadio1">X</label>
       </div>

       <div class="form-check form-check-inline">
         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
         <label class="form-check-label" for="inlineRadio2">Y</label>
       </div>

       <div class="form-check form-check-inline">
         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
         <label class="form-check-label" for="inlineRadio3">Z</label>
       </div>

       </div>
       <FormLabel text={"Trade/ Branch"} />
        <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="login" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <div className="col-sm-2 space noSpace">

          <label className="formLable">Service Number</label>
          </div>
          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
          </div>

          <div className="col-sm-2 space noSpace">

          <label className="formLable">Rank</label>
          </div>
          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
          </div>

          <div className="col-sm-2 space noSpace">

          <label className="formLable">Name</label>
          </div>
          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
          </div>

          <div className="col-sm-2 space noSpace">

          <label className="formLable">Gender</label>
          </div>
          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
          </div>

          <div className="col-sm-2 space noSpace">

          <label className="formLable">Date Of birth</label>
          </div>
          <div className="col-sm-4 space">

          <input type="date"  class="fadeIn third formInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
          </div>

          <div className="col-sm-2 space noSpace">

          <label className="formLable">Enrollment Date</label>
          </div>
          <div className="col-sm-4 space">

          <input type="date"  class="fadeIn third formInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
          </div>


</div>
</div>

<div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
<button className=" btn" type="submit" onClick="/">Back </button>
<button className="btn my-2 my-sm-0 " type="submit">Next </button>
 </div>
        </form>
</div>



      </div>
</div>
    )
}

export default Form2
{/*<Link to="#">*/}
{/*radio buttons
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>*/}
