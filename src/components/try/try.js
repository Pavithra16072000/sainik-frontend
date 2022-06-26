import React,{ useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

import F1Label from "../view/F1Label";
import F1Input from "../view/F1Input";

import infoF1 from "../view/infoF1";

function createCard(contact) {
  return (
    <F1Label
      key={contact.id}
      name={contact.name}
value={contact.value}

    />

  );
}
function createInput(contact) {
  return (

    <F1Input
       key={contact.id}
       value={contact.value}
       />
  );
}

function Form3() {
  const [name, setName] = useState('');
  const [service_no, setService_no] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Form3 = async (e) => {
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
    <div>
    <div className="center">
    <div class="wrapper fadeInDown">
    <div id="form1Content" >
      <form onSubmit={Form3}>
      <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
 <label className="header">Service Details</label>
       </div>
   <div className="upperForm1Content">

      <p className="has-text-centered">{msg}</p>
      <div className="row">

      {infoF1.map(createCard)}
      {infoF1.map(createInput)}


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

    </div>
  );
}

export default Form3;

{/*const Form2 = () => {
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
        <div className="col-sm-2 space noSpace">
          <label className="formLable">Service</label>
        </div>
        <div className="col-sm-10 space ">



        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
          <label class="form-check-label" for="inlineRadio1">ARMY</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label class="form-check-label" for="inlineRadio2">NAVY</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
          <label class="form-check-label" for="inlineRadio3">AIR FORCE</label>
        </div>



        </div>
        <div className="col-md-2 space noSpace">
          <label className="formLable">Corps</label>

        </div>
        <div className="col-md-4 space">
<FormInput />
        </div>
        <div className="col-md-2 space noSpace">
          <label className="formLable">Name of Record Office</label>
        </div>
        <div className="col-md-4 space">
          <input type="text"  class="fadeIn second formInput" name="login" placeholder="Name"value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="col-sm-2 space noSpace">
       <label className="formLable">Group</label>
       </div>
       <div className="col-sm-10 space ">

       <div class="form-check form-check-inline">
         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
         <label class="form-check-label" for="inlineRadio1">x</label>
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
       <div className="col-sm-2 space noSpace">
          <label className="formLable">Trade /Branch</label>
        </div>
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

export default Form2*/}
