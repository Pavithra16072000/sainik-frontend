import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import Button from '@mui/material/Button';
// import FormInput from "./FormInput";

// import FormInput from "./FormInput";

const Form0 = () => {

    const [Service_No, setService_No] = useState('');
    const [Reg_Type, setReg_Type] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Corps_Name, setCorps_Name] = useState('');
    const [Record_Office_Name, setRecord_Office_Name] = useState('');
    const [Group_Name, setGroup_Name] = useState('');
    const [Trade_Name, setTrade_Name] = useState('');
    const [Rank_Name, setRank_Name] = useState('');
    const [Name, setName] = useState('');
    const [Gender, setGender] = useState('');
    const [DOB, setDOB] = useState('');
    const [Enroll_Date, setEnroll_Date] = useState('');
    const [World_War2, setWorld_War2] = useState('');
    const [Opt_Attend, setOpt_Attend] = useState('');
    const [Deco, setDeco] = useState('');
      const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const Form0 = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_service_details', {
                Service_No:location.state.name,
                Reg_Type: Reg_Type,
                Service_Name:Service_Name,
                Corps_Name: Corps_Name,
                Record_Office_Name: Record_Office_Name,
                Group_Name: Group_Name,
                Trade_Name: Trade_Name,
                Rank_Name: Rank_Name,
                Name: Name,
                Gender: Gender,
                DOB: DOB,
                Enroll_Date: Enroll_Date,
                World_War2:World_War2,
                Opt_Attend: Opt_Attend,
                Deco: Deco
            });
            navigate("/form2");
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
      <form onSubmit={Form0}>

      <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
      <label className="header">Registration Type</label>
      </div>
    <div className="upperForm1Content">

      <p className="has-text-centered">{msg}</p>
      <div className="row">

      <div className="col-sm-2 space">
        <label className="formLable">Service No</label>
      </div>
      <div className="col-md-4 space">
      <input type="text"  class="fadeIn second formInput" name="Service_No" value={location.state.name}onChange={(e) => setService_No(e.target.value)} disabled/>
      </div>
      <div className="col-sm-2 space">
        <label className="formLable">Type of Registration</label>
      </div>

        <div className="col-sm-10 space">

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio1" name="Service_Name" value="ARMY" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio1">ESM</label>
        </div>
        <div className="col-sm-10 space">

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio1" name="Service_Name" value="ARMY" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio1">PBOR</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio2" name="Service_Name" value="NAVY" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio2">JCO</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio3" name="Service_Name" value="AIR FORCE" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio3">HONY</label>
        </div>

        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio2" name="Service_Name" value="NAVY" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio2">Widow/Widower</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio3" name="Service_Name" value="AIR FORCE" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio3">Transfer</label>
        </div>

        </div>
        <div className="col-md-2 space">
          <label className="formLable">Corps</label>
        </div>


        <div className="col-md-4 space">
          <input type="text"  class="fadeIn second formInput" name="Corps_Name" value={Corps_Name} onChange={(e) => setCorps_Name(e.target.value)} />
        </div>
        <div className="col-md-2 space">
          <label className="">Name of Record Office</label>
        </div>
        <div className="col-md-4 space">
          <input type="text"  class="fadeIn second formInput" name="Record_Office_Name" value={Record_Office_Name} onChange={(e) => setRecord_Office_Name(e.target.value)} />
        </div>

        <div className="col-sm-2 space">
       <label className="formLable">Group</label>
       </div>
       <div className="col-sm-10 space">

       <div class="form-check form-check-inline">
         <input class="form-check-input" type="radio"  id="inlineRadio1" name="Group_Name" value="X" onChange={(e) => setGroup_Name(e.target.value)} />
         <label class="form-check-label" for="inlineRadio1">X</label>
       </div>

       <div class="form-check form-check-inline">
         <input class="form-check-input" type="radio" id="inlineRadio2" name="Group_Name" value="Y" onChange={(e) => setGroup_Name(e.target.value)} />
         <label class="form-check-label" for="inlineRadio2">Y</label>
       </div>

       <div class="form-check form-check-inline">
         <input class="form-check-input" type="radio" id="inlineRadio3" name="Group_Name" value="Z" onChange={(e) => setGroup_Name(e.target.value)} />
         <label class="form-check-label" for="inlineRadio3">Z</label>
       </div>

       </div>
       <div className="col-sm-2 space">
          <label className="formLable">Trade/ Branch</label>
        </div>
        <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Trade_Name" value={Trade_Name} onChange={(e) => setTrade_Name(e.target.value)} />
         </div>


          <div className="col-sm-2 space">

          <label className="formLable">Rank</label>
          </div>
          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Rank_Name" value={Rank_Name} onChange={(e) => setRank_Name(e.target.value)} />
          </div>

          <div className="col-sm-2 space">

          <label className="formLable">Name</label>
          </div>
          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Name" value={Name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="col-sm-2 space">

          <label className="formLable">Gender</label>
          </div>
         <div className="col-sm-10 space">

         <div class="form-check form-check-inline">
           <input class="form-check-input" type="radio"  id="inlineRadio1" name="Gender" value="Male" onChange={(e) => setGender(e.target.value)} />
           <label class="form-check-label" for="inlineRadio1">Male</label>
         </div>

         <div class="form-check form-check-inline">
           <input class="form-check-input" type="radio"  id="inlineRadio2" name="Gender" value="Female" onChange={(e) => setGender(e.target.value)} />
           <label class="form-check-label" for="inlineRadio2">Female</label>
         </div>

         <div class="form-check form-check-inline">
           <input class="form-check-input" type="radio"  id="inlineRadio3" name="Gender" value="Transgender" onChange={(e) => setGender(e.target.value)} />
           <label class="form-check-label" for="inlineRadio3">Transgender</label>
         </div>

         </div>

          <div className="col-sm-2 space">

          <label className="formLable">Date Of birth</label>
          </div>
          <div className="col-sm-4 space">

          <input type="date"  class="fadeIn third formInput" name="DOB"value={DOB} onChange={(e) => setDOB(e.target.value)} />
          </div>

          <div className="col-sm-2 space">

          <label className="formLable">Enrollment Date</label>
          </div>
          <div className="col-sm-4 space">

          <input type="date"  class="fadeIn third formInput" name="Enroll_Date" value={Enroll_Date} onChange={(e) => setEnroll_Date(e.target.value)} />
          </div>
          <div className="col-sm-2 space">
          <label className="formLable">World War II</label>
          </div>
          <div className="col-sm-10 space">

          <div class="form-check form-check-inline">
           <input class="form-check-input" type="radio"  id="inlineRadio1" name="World_War2" value="Yes" onChange={(e) => setWorld_War2(e.target.value)} />
           <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>

          <div class="form-check form-check-inline">
           <input class="form-check-input" type="radio"  id="inlineRadio3" name="World_War2" value="No" onChange={(e) => setWorld_War2(e.target.value)} />
           <label class="form-check-label" for="inlineRadio3">No</label>
          </div>

          </div>
          <div className="col-sm-2 space">

          <label className="formLable">Operations Attended</label>
          </div>
          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Opt_Attend" value={Opt_Attend} onChange={(e) => setOpt_Attend(e.target.value)} />
          </div>
          <div className="col-sm-2 space">

          <label className="formLable">Decoration</label>
          </div>
          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Deco"value={Deco} onChange={(e) => setDeco(e.target.value)} />
          </div> </div>

    </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    {/*<input type="submit" class="fadeIn fourth submitInput" value="Log In" />*/}

    </div>
    </form>
</div>
</div>
</div>
    )
}

export default Form0
