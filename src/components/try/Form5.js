import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import FormLabel from "../view/FormLabel";

const Form5 = () => {

const [Service_No, setService_No] = useState('');
const [Civil_Qualification, setCivil_Qualification] = useState('');
const [Addi_Course, setAddi_Course] = useState('');
const [Equi_Test, setEqui_Test] = useState('');
const [Civil_Emp_Status, setCivil_Emp_Status] = useState('');
const [Dept, setDept] = useState('');
const [Pres_Desg, setPres_Desg] = useState('');
const [Employer, setEmployer] = useState('');
const [Month_Income, setMonth_Income] = useState('');
const [Official_No, setOfficial_No] = useState('');
const [Desg_Retire, setDesg_Retire] = useState('');
const [Retire_Date, setRetire_Date] = useState('');
const [Civil_PPO_No, setCivil_PPO_No] = useState('');
const [msg, setMsg] = useState('');
const navigate = useNavigate();

const Form5 = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/u_employment_details', {
            Service_No:Service_No,
            Civil_Qualification: Civil_Qualification,
            Addi_Course:Addi_Course,
            Equi_Test: Equi_Test,
            Civil_Emp_Status:Civil_Emp_Status,
            Dept: Dept,
            Pres_Desg: Pres_Desg,
            Employer: Employer,
            Month_Income: Month_Income,
            Official_No: Official_No,
            Desg_Retire: Desg_Retire,
            Retire_Date: Retire_Date,
            Civil_PPO_No:Civil_PPO_No

        });
        navigate("/");
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

      <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
      <label className="header">Employment Details</label>
      </div>
      <div className="upperForm1Content">

      <p className="has-text-centered">{msg}</p>
      <div className="row">

      <FormLabel text={"Service No"} />

      <div className="col-md-4 space">
      <input type="text"  class="fadeIn second formInput" name="Service_No" value={Service_No} onChange={(e) => setService_No(e.target.value)} />
      </div>
      <FormLabel text={"Civil Qualification"} />

      <div className="col-md-4 space">
      <input type="text"  class="fadeIn second formInput" name="Civil_Qualification" value={Civil_Qualification} onChange={(e) => setCivil_Qualification(e.target.value)} />
      </div>
      <FormLabel text={"Additional Courses"} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Addi_Course" value={Addi_Course} onChange={(e) => setAddi_Course(e.target.value)} />
        </div>

        <FormLabel text={"Equivalent Test passed in Service"} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Equi_Test" value={Equi_Test} onChange={(e) => setEqui_Test(e.target.value)} />
        </div>

        <FormLabel text={"Civil Employement Status"} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Civil_Emp_Status" value={Civil_Emp_Status} onChange={(e) => setCivil_Emp_Status(e.target.value)} />
        </div>

        <FormLabel text={"Department  "} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Dept" value={Dept} onChange={(e) => setDept(e.target.value)} />
        </div>

        <FormLabel text={"Present Designation  "} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Pres_Desg" value={Pres_Desg} onChange={(e) => setPres_Desg(e.target.value)} />
        </div>

        <FormLabel text={"Employer  "} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Employer" value={Employer} onChange={(e) => setEmployer(e.target.value)} />
        </div>

        <FormLabel text={"Monthly Income  "} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Month_Income" value={Month_Income} onChange={(e) => setMonth_Income(e.target.value)} />
        </div>

        <FormLabel text={"Offical Contact No."} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Official_No" value={Official_No} onChange={(e) => setOfficial_No(e.target.value)} />
        </div>

        <FormLabel text={"Designation while Retirement"} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Desg_Retire" value={Desg_Retire} onChange={(e) => setDesg_Retire(e.target.value)} />
        </div>

        <FormLabel text={"Date of Retirement from civil service"} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Retire_Date" value={Retire_Date} onChange={(e) => setRetire_Date(e.target.value)} />
        </div>

        <FormLabel text={"Civil PPO No."} />
        <div className="col-md-4 space">
        <input type="text"  class="fadeIn second formInput" name="Civil_PPO_No" value={Civil_PPO_No} onChange={(e) => setCivil_PPO_No(e.target.value)} />
         </div>
         </div>
         </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>

    </div>
    </form>
</div>
</div>
</div>
    )
}

export default Form5
