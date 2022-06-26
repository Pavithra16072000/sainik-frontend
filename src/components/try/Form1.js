import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import FormLabel from "../../view/FormLabel";


const Form1 = () => {

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


    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    const axiosJWT = axios.create();
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/dropdown');
        setUsers(response.data);
    }



    const Form1 = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_DOMAIN}/u_service_details`, {
                Service_No:localStorage.getItem('Service_No'),
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
            localStorage.setItem('Name', Name);

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
      <form onSubmit={Form1}>

      <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
      <label className="header">Service Details</label>
      </div>
    <div className="upperForm1Content">

      <p className="has-text-centered">{msg}</p>
      <div className="row">

      <FormLabel text={"Service No"} />

      <div className="col-md-4 space">
      <input type="text"  class="fadeIn second formInput" name="Service_No" value={localStorage.getItem('Service_No')}onChange={(e) => setService_No(e.target.value)} disabled/>
      </div>
      <FormLabel text={"Reg Type"} />

      {/*<div className="col-md-4 space">
      <input type="text"  class="fadeIn second formInput" name="Reg_Type" value={Reg_Type} onChange={(e) => setReg_Type(e.target.value)} />
      </div>*/}

<div className="col-md-4 space">
      <select value={Reg_Type} onChange={(e) => setReg_Type(e.target.value)}>
      {users.map((user, index) => (

      <option key={user.id} value={user.Service_No}>{user.Service_No}</option>
      ))}
      </select>
</div>

      <FormLabel text={"Service"} />


        <div className="col-sm-10 space">

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio1" name="Service_Name" value="ARMY" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio1">ARMY</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio2" name="Service_Name" value="NAVY" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio2">NAVY</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio3" name="Service_Name" value="AIR FORCE" onChange={(e) => setService_Name(e.target.value)} />
          <label class="form-check-label" for="inlineRadio3">AIR FORCE</label>
        </div>



        </div>
        <FormLabel text={"Corps"} />



        <div className="col-md-4 space">
          <input type="text"  class="fadeIn second formInput" name="Corps_Name" value={Corps_Name} onChange={(e) => setCorps_Name(e.target.value)} />
        </div>
        <FormLabel text={"Name of Record Office"} />

        <div className="col-md-4 space">
          <input type="text"  class="fadeIn second formInput" name="Record_Office_Name" value={Record_Office_Name} onChange={(e) => setRecord_Office_Name(e.target.value)} />
        </div>

        <FormLabel text={"Group"} />

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
       <FormLabel text={"Trade/ Branch"} />
        </div>
        <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Trade_Name" value={Trade_Name} onChange={(e) => setTrade_Name(e.target.value)} />
         </div>


         <FormLabel text={"Rank"} />

          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Rank_Name" value={Rank_Name} onChange={(e) => setRank_Name(e.target.value)} />
          </div>

          <FormLabel text={"Name"} />

          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Name" value={Name} onChange={(e) => setName(e.target.value)} />
          </div>

          <FormLabel text={"Gender"} />

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
         <FormLabel text={"Date Of birth"} />


          <div className="col-sm-4 space">

          <input type="date"  class="fadeIn third formInput" name="DOB"value={DOB} onChange={(e) => setDOB(e.target.value)} />
          </div>


          <FormLabel text={"Enrollment Date"} />


          <div className="col-sm-4 space">

          <input type="date"  class="fadeIn third formInput" name="Enroll_Date" value={Enroll_Date} onChange={(e) => setEnroll_Date(e.target.value)} />
          </div>
          <FormLabel text={"World War II"} />


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

          <FormLabel text={"Operations Attended"} />


          <div className="col-sm-10 space">

          <input type="text"  class="fadeIn third formInput" name="Opt_Attend" value={Opt_Attend} onChange={(e) => setOpt_Attend(e.target.value)} />
          </div>

          <FormLabel text={"Decoration"} />


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

export default Form1


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
</div>


<div className="field">
  <div className="control">
    <label className="checkbox">
      <input type="checkbox" />
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>*/}
