import React, { useState,useEffect  } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import FormLabel from "../../view/FormLabel";
import FormDisplay from "./Form0"

const Form5 = () => {

const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
const [Civil_Qualification, setCivil_Qualification] = useState(localStorage.getItem('Civil_Qualification'));
const [Addi_Course, setAddi_Course] = useState(localStorage.getItem('Addi_Course'));
const [Equi_Test, setEqui_Test] = useState(localStorage.getItem('Equi_Test'));
const [Civil_Emp_Status, setCivil_Emp_Status] = useState(localStorage.getItem('Civil_Emp_Status'));
const [Dept, setDept] = useState(localStorage.getItem('Dept'));
const [Sector, setSector] = useState(localStorage.getItem('Sector'));
const [Pres_Desg, setPres_Desg] = useState(localStorage.getItem('Pres_Desg'));
const [Employer, setEmployer] = useState(localStorage.getItem('Employer'));
const [Month_Income, setMonth_Income] = useState(localStorage.getItem('Month_Income'));
const [Official_No, setOfficial_No] = useState(localStorage.getItem('Official_No'));
const [Desg_Retire, setDesg_Retire] = useState(localStorage.getItem('Desg_Retire'));
const [Retire_Date, setRetire_Date] = useState(localStorage.getItem('Retire_Date'));
const [Civil_PPO_No, setCivil_PPO_No] = useState(localStorage.getItem('Civil_PPO_No'));
const [msg, setMsg] = useState('');
const navigate = useNavigate();
const [users, setUsers] = useState([]);
const [civil, setCivil] = useState([]);
const[visible,setVisible]=useState(false);
    const gotoBackToStep4 = () => navigate("/new/step-4", { replace: true })
    const gotoToNextStep6 = () => navigate("/new/step-6", { replace: true })
    const [Name, setName] = useState(localStorage.getItem('Name'));

useEffect(() => {
    getCivil();

}, []);

const axiosJWT = axios.create();
    const getCivil = async () => {
    const response = await axiosJWT.get('http://localhost:5000/civil_D');
    setCivil(response.data);
    }

const onPPOChange = (e) =>  {
    const pp = /^[0-9]+$/;
    if (e.target.value === "" || pp.test(e.target.value))
    {

        setCivil_PPO_No(e.target.value);
    }

}

const onOffChange = (e) =>  {
    const op = /^[0-9]+$/;
    if (e.target.value === "" || op.test(e.target.value))
    {

        setOfficial_No(e.target.value);
    }

}

const SECTOR = ['State', 'Central', 'PSU', 'Private', 'Govt.Societies'];

const Form5 = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/u_employment_details', {
            // Service_No:Service_No,
            // Civil_Qualification: Civil_Qualification,
            // Addi_Course:Addi_Course,
            // Equi_Test: Equi_Test,
            // Civil_Emp_Status:Civil_Emp_Status,
            // Dept: Dept,
            // Pres_Desg: Pres_Desg,
            // Employer: Employer,
            // Month_Income: Month_Income,
            // Official_No: Official_No,
            // Desg_Retire: Desg_Retire,
            // Retire_Date: Retire_Date,
            // Civil_PPO_No:Civil_PPO_No

        });

                localStorage.setItem('Service_No',Service_No);
                localStorage.setItem('Civil_Qualification',Civil_Qualification);
                localStorage.setItem('Addi_Course',Addi_Course);
                localStorage.setItem('Equi_Test',Equi_Test);
                localStorage.setItem('Civil_Emp_Status',Civil_Emp_Status);
                localStorage.setItem('Pres_Desg',Pres_Desg);
                localStorage.setItem('Dept',Dept);
                localStorage.setItem('Sector',Sector);
                localStorage.setItem('Employer',Employer);
                localStorage.setItem('Month_Income',Month_Income);
                localStorage.setItem('Official_No',Official_No);
                localStorage.setItem('Desg_Retire',Desg_Retire);
                localStorage.setItem('Retire_Date',Retire_Date);
                localStorage.setItem('Civil_PPO_No',Civil_PPO_No);

        navigate("/Form6");
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

      <form onSubmit={Form5}>

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Employment Details</label>
        <div className = "right-align dis">


     <div className = "right-align dis">
      <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
</div>

 </div>

      </div>
      <div className="upperForm1Content">

      <p className="has-text-centered">{msg}</p>
      <div className="row">


      <FormLabel text={"Civil Qualification"} />

      <div className="col-md-4 space">
         <select  className="col-lg-9 dropdown_align" >
         {civil.map((user, index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
         </select>      </div>

        <FormLabel text={"Additional Courses"} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course" value={Addi_Course} onChange={(e) => setAddi_Course(e.target.value.toUpperCase())} />
        </div>

        <FormLabel text={"Equivalent Test passed in Service"} />
        <div className="col-md-4 space">
<div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Equi_Test" value="Yes" onChange={(e) => setEqui_Test(e.target.value)} />
     <label className="form-check-label" for="inlineRadio1">Yes</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Equi_Test" value="No" onChange={(e) => setEqui_Test(e.target.value)} />
     <label className="form-check-label" for="inlineRadio2">No</label>
     </div>
        </div>

        <FormLabel text={"Civil Employment Status"} />
        <div className="col-md-4 space">
<div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Civil_Emp_Status" value="1" onClick={()=> setVisible(true)} />
     <label className="form-check-label" for="inlineRadio1">Employed</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Civil_Emp_Status" value="0" onClick={()=> setVisible(false)} />
     <label className="form-check-label" for="inlineRadio2">Un-Employed</label>
     </div>
        </div>

 { visible &&
            <div>
        <label className ="col-lg-2 space noSpace">Sector</label>
        <div className="col-md-4 space">

         <select  className="col-lg-9 dropdown_align">
         <option value="Sector">--Select One--</option>
        {SECTOR.map(c => <option key={c}>{c}</option>)}
        </select>
         </div>

        <label className ="col-lg-2 space noSpace">Department</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Dept" value={Dept} onChange={(e) => setDept(e.target.value.toUpperCase())} />
        </div>

        <label className ="col-lg-2 space noSpace">Present Designation</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Pres_Desg" value={Pres_Desg} onChange={(e) => setPres_Desg(e.target.value.toUpperCase())} />
        </div>

        <label className ="col-lg-2 space noSpace">Employer</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInputs" autocomplete = "off" maxlength = "20"  name="Employer" value={Employer} onChange={(e) => setEmployer(e.target.value.toUpperCase())} />
        </div>

        <label className ="col-lg-2 space noSpace">Monthly Income </label>
        <div className="col-lg-4 space">
        <input type="number"  class=" formInput" autocomplete = "off" maxlength = "7" minlength = "3" name="Month_Income" value={Month_Income} onChange={(e) => setMonth_Income(e.target.value)} />
        </div>

        <label className ="col-lg-2 space noSpace">Offical Contact No.</label>
        <div className="col-lg-4 space">
        <input type="number"  class=" formInput" autocomplete = "off" maxlength = "14" minlength = "12"  name="Official_No" value={Official_No} onChange={onOffChange}  />
        </div>

        <label className ="col-lg-2 space noSpace">Designation while Retirement</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInput" autocomplete = "off" maxlength = "6"   name="Desg_Retire" value={Desg_Retire} onChange={(e) => setDesg_Retire(e.target.value)} />
        </div>

        <label className ="col-lg-2 space noSpace">Date of Retirement from civil service</label>

        <div className="col-lg-4 space">
        <input type="date"  class=" formInput" name="Retire_Date" value={Retire_Date} onChange={(e) => setRetire_Date(e.target.value)} />
        </div>

        <label className ="col-lg-2 space noSpace">Civil PPO No.</label>
        <div className="col-lg-4 space">
        <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20" name="Civil_PPO_No" value={Civil_PPO_No} onChange={onPPOChange} />
         </div>


          </div>
      }
         </div>
         </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/Form4">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>
    )
}

const Form5Display = () => <FormDisplay step={5} Form={Form5} />
export default Form5Display
