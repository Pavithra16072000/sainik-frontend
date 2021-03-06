 import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormDisplay from "./Form0"


const Form6 = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Marital_Status, setMarital_Status] = useState(localStorage.getItem('Marital_Status'));
    const [Marriage_Date, setMarriage_Date] = useState(localStorage.getItem('Marriage_Date'));
    const [Spouse_Name, setSpouse_Name] = useState(localStorage.getItem('Spouse_Name'));
    const [Spouse_Relation, setSpouse_Relation] = useState(localStorage.getItem('Spouse_Relation'));
    const [Spouse_DOB, setSpouse_DOB] = useState(localStorage.getItem('Spouse_DOB'));
    const [Spouse_Id_Mark, setSpouse_Id_Mark] = useState(localStorage.getItem('Spouse_Id_Mark'));
    const [Spouse_Qualification, setSpouse_Qualification] = useState(localStorage.getItem('Spouse_Qualification'));
    const [Spouse_Emp_Status, setSpouse_Emp_Status] = useState(localStorage.getItem('Spouse_Emp_Status'));
    const [Spouse_Emp_Profession, setSpouse_Emp_Profession] = useState(localStorage.getItem('Spouse_Emp_Profession'));
    const [Spouse_Retirement_Date, setSpouse_Retirement_Date] = useState(localStorage.getItem('Spouse_Retirement_Date'));
    const [Spouse_Adhaar, setSpouse_Adhaar] = useState(localStorage.getItem('Spouse_Adhaar'));
    const [Spouse_Voter_Id, setSpouse_Voter_Id] = useState(localStorage.getItem('Spouse_Voter_Id'));
    const [Spouse_PAN, setSpouse_PAN] = useState(localStorage.getItem('Spouse_PAN'));
    const [Spouse_CSD, setSpouse_CSD] = useState(localStorage.getItem('Spouse_CSD'));
    const [Spouse_ECHS, setSpouse_ECHS] = useState(localStorage.getItem('Spouse_ECHS'));
    const [Dept, setDept] = useState(localStorage.getItem('Dept'));
    const [Sector, setSector] = useState(localStorage.getItem('Sector'));
    const [Pres_Desg, setPres_Desg] = useState(localStorage.getItem('Pres_Desg'));
    const [Employer, setEmployer] = useState(localStorage.getItem('Employer'));
    const [Spouse_Month_Income, setSpouse_Month_Income] = useState(localStorage.getItem('Spouse_Month_Income'));
    const [Spouse_Official_No, setSpouse_Official_No] = useState(localStorage.getItem('Spouse_Official_No'));
    const [Spouse_Desg_Retire, setSpouse_Desg_Retire] = useState(localStorage.getItem('Spouse_Desg_Retire'));
    const [Spouse_Retire_Date, setSpouse_Retire_Date] = useState(localStorage.getItem('Spouse_Retire_Date'));
    const [Spouse_Civil_PPO_No, setSpouse_Civil_PPO_No] = useState(localStorage.getItem('Spouse_Civil_PPO_No'));
    const gotoBackToStep5 = () => navigate("/new/step-5", { replace: true })
    const gotoToNextStep7 = () => navigate("/new/step-7", { replace: true })
    const [civil, setCivil] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
        const [Name, setName] = useState(localStorage.getItem('Name'));

    const[visible,setVisible]=useState(false);
    const[disabled,setDisabled]=useState(false);

const axiosJWT = axios.create();

     const getCivil = async () => {
     const response = await axiosJWT.get('http://localhost:5000/civil_D');
    setCivil(response.data);
    }



const onSNameChange = (e) =>  {
 const a = /^[A-Z/ \b]+$/;

     if (e.target.value.toUpperCase() === "" || a.test(e.target.value.toUpperCase()))
    {

        setSpouse_Name(e.target.value.toUpperCase());
    }

}


const onSAdhaarChange = (e) =>  {
 const a = /^[0-9/\b]+$/;

     if (e.target.value === "" || a.test(e.target.value))
    {

        setSpouse_Adhaar(e.target.value);
    }

}
const onSVoterChange = (e) =>  {
 const v = /^[A-Z/-0-9/\b]+$/;

     if (e.target.value.toUpperCase() === "" || v.test(e.target.value.toUpperCase()))
    {

        setSpouse_Voter_Id(e.target.value.toUpperCase());
    }

}
const onSPANChange = (e) =>  {
 const p = /^[A-Z0-9\b]+$/;

     if (e.target.value.toUpperCase() === "" || p.test(e.target.value.toUpperCase()))
    {

        setSpouse_PAN(e.target.value.toUpperCase());
    }

}

const onSCSDChange = (e) =>  {
 const c = /^[A-Z0-9/\b]+$/;

     if (e.target.value.toUpperCase() === "" || c.test(e.target.value.toUpperCase()))
    {

        setSpouse_CSD(e.target.value.toUpperCase());
    }

}

const onSECHSChange = (e) =>  {
 const h = /^[0-9\b]+$/;

     if (e.target.value === "" || h.test(e.target.value))
    {

        setSpouse_ECHS(e.target.value);
    }

}

const onSIncomeChange = (e) =>  {
 const z = /^[0-9\b]+$/;

     if (e.target.value === "" || z.test(e.target.value))
    {

        setSpouse_Month_Income(e.target.value);
    }

}

const onSTelChange = (e) =>  {
 const r = /^[0-9-\b]+$/;

     if (e.target.value === "" || r.test(e.target.value))
    {

        setSpouse_Official_No(e.target.value);
    }

}

const onSCivilChange = (e) =>  {
 const s = /^[0-9\b]+$/;

     if (e.target.value === "" || s.test(e.target.value))
    {

        setSpouse_Civil_PPO_No(e.target.value);
    }

}

const onSIdentityChange = (e) =>  {
 const l = /^[A-Za-z\b]+$/;

     if (e.target.value === "" || l.test(e.target.value))
    {

        setSpouse_Id_Mark(e.target.value);
    }

}




 const Form6 = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_spouse_details', {
                // Service_No:Service_No,
                // Marital_Status: Marital_Status,
                // Marriage_Date:Marriage_Date,
                // Spouse_Name: Spouse_Name,
                // Spouse_Relation: Spouse_Relation,
                // Spouse_DOB: Spouse_DOB,
                // Spouse_Id_Mark: Spouse_Id_Mark,
                // Spouse_Qualification: Spouse_Qualification,
                // Spouse_Emp_Status: Spouse_Emp_Status,
                // Spouse_Emp_Profession: Spouse_Emp_Profession,
                // Spouse_Retirement_Date: Spouse_Retirement_Date,
                // Spouse_Adhaar: Spouse_Adhaar,
                // Spouse_Voter_Id: Spouse_Voter_Id,
                // Spouse_PAN: Spouse_PAN,
                // Spouse_CSD: Spouse_CSD,
                // Spouse_ECHS: Spouse_ECHS
            });
                localStorage.setItem('Service_No',Service_No);
                localStorage.setItem('Marital_Status',Marital_Status);
                localStorage.setItem('Marriage_Date',Marriage_Date);
                localStorage.setItem('Spouse_Name',Spouse_Name);
                localStorage.setItem('Spouse_Relation',Spouse_Relation);
                localStorage.setItem('Spouse_DOB',Spouse_DOB);
                localStorage.setItem('Spouse_Id_Mark',Spouse_Id_Mark);
                localStorage.setItem('Spouse_Qualification',Spouse_DOB);
                localStorage.setItem('Spouse_Emp_Status',Spouse_Emp_Status);
                localStorage.setItem('Spouse_Emp_Profession',Spouse_Emp_Profession);
                localStorage.setItem('Spouse_Retirement_Date',Spouse_Retirement_Date);
                localStorage.setItem('Spouse_Adhaar',Spouse_Adhaar);
                localStorage.setItem('Spouse_Voter_Id',Spouse_Voter_Id);
                localStorage.setItem('Spouse_PAN',Spouse_PAN);
                localStorage.setItem('Spouse_CSD',Spouse_CSD);
                localStorage.setItem('Spouse_ECHS',Spouse_ECHS);
                localStorage.setItem('Dept',Dept);
                localStorage.setItem('Pres_Desg',Pres_Desg);
                localStorage.setItem('Employer',Employer);
                localStorage.setItem('Spouse_Month_Income',Spouse_Month_Income);
                localStorage.setItem('Spouse_Official_No',Spouse_Official_No);
                localStorage.setItem('Spouse_Desg_Retire',Spouse_Desg_Retire);
                localStorage.setItem('Spouse_Retire_Date',Spouse_Retire_Date);
                localStorage.setItem('Spouse_Civil_PPO_No',Spouse_Civil_PPO_No);



            navigate("/Form7");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
const SECTOR = ['State', 'Central', 'PSU', 'Private', 'Govt.Societies'];

    return (
    <div className="center">
    <div class="wrapper fadeInDown">
    <div id="form1Content" >
    <form onSubmit={Form6}>
    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Spouse Details</label>
            <div className = "right-align dis">


     <div className = "right-align dis">
      <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
</div>
{/*     <div className = "left-align dis">
      <label className="sn-mar ">{"Name :"}</label> <h1>{Name}</h1>

</div>*/}
 </div>

    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">


         <FormLabel text={"Marital Status"} />

         <div className="col-lg-10 space">
     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Marital_Status"  value="1"  onClick={()=> setDisabled(true)} />
     <label className="form-check-label" for="inlineRadio1">Married</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Marital_Status"  value="0"  onClick={()=> setDisabled(false)} />
     <label className="form-check-label" for="inlineRadio2">Single</label>
     </div>

    <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Marital_Status" value="0"  onClick={()=> setDisabled(false)} />
     <label className="form-check-label" for="inlineRadio1">Divorced</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Marital_Status" value="0"  onClick={()=> setDisabled(false)} />
     <label className="form-check-label" for="inlineRadio2">Widow/Widower</label>
     </div>

    </div>

         <FormLabel text={"Marriage Date"} />

         <div className="col-lg-4 space">
         <input type="date"  class="fadeIn second formInput" name="Marriage_Date" value={Marriage_Date} onChange={(e) => setMarriage_Date(e.target.value)} />
         </div>
         <FormLabel text={"Spouse Name"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Spouse_Name" value={Spouse_Name} onChange={onSNameChange} />
         </div>
         <FormLabel text={"Spouse Relation"} />

         <div className="col-lg-4 space">
<div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Spouse_Relation" value="Wife" onChange={(e) => setSpouse_Relation(e.target.value)} />
     <label className="form-check-label" for="inlineRadio1">Wife</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Spouse_Relation" value="Husband" onChange={(e) => setSpouse_Relation(e.target.value)} />
     <label className="form-check-label" for="inlineRadio2">Husband</label>
     </div>
         </div>
         <FormLabel text={"Spouse DOB"} />

          <div className="col-lg-4 space">
          <input type="Date"  class="fadeIn second formInput" name="Spouse_DOB " value={Spouse_DOB} onChange={(e) => setSpouse_DOB(e.target.value)} />
          </div>

           <FormLabel text={"Spouse Adhaar No."} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" maxlength = "12" name="Spouse_Adhaar" value={Spouse_Adhaar} onChange={onSAdhaarChange} />
          </div>
          <FormLabel text={"Spouse Voter Id "} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" maxlength = "10" name="Spouse_Voter_Id" value={Spouse_Voter_Id} onChange={onSVoterChange} />
          </div>
         <FormLabel text={"Spouse CSD Card No."} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" maxlength = "15" name="Spouse_CSD" value={Spouse_CSD} onChange={onSCSDChange}/>
          </div>


           <FormLabel text={"Spouse PAN Card No."} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" maxlength = "10"  name="Spouse_PAN" value={Spouse_PAN} onChange={onSPANChange}/>
          </div>



          <FormLabel text={"Spouse ECHS Card No."} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" maxlength = "15"  name="Spouse_ECHS" value={Spouse_ECHS} onChange={onSECHSChange}/>
          </div>
          <FormLabel text={"Spouse Identification Mark"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Spouse_Id_Mark" value={Spouse_Id_Mark} onChange={onSIdentityChange} />
          </div>

          <FormLabel text={"Spouse Qualification"} />
          <div className="col-lg-4 space">
<select  className="col-lg-9 dropdown_align" >
         {civil.map((user, index) => (
         <option key={user.id}value={user.Civil_Qualification}>{user.Civil_Qualification}</option>
         ))}
         </select></div>

         <FormLabel text={"Spouse Employment Status"} />

          <div className="col-lg-4 space">
<div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Spouse_Emp_Status" value="Employed" value="1" onClick={()=> setVisible(true)} />
     <label className="form-check-label" for="inlineRadio1">Employed</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Spouse_Emp_Status" value="Un-Employed" value="0" onClick={()=> setVisible(false)}/>
     <label className="form-check-label" for="inlineRadio2">Un-Employed</label>
     </div>          </div>


 { visible &&
            <div>

 <label className ="col-lg-2 space noSpace">Spouse Working Sector</label>
        <div className="col-md-4 space">

         <select  className="col-lg-9 dropdown_align">
         <option value="Sector">--Select One--</option>
        {SECTOR.map(c => <option key={c}>{c}</option>)}
        </select>
         </div>

        <label className ="col-lg-2 space noSpace">Spouse Working Department</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Dept" value={Dept} onChange={(e) => setDept(e.target.value.toUpperCase())} />
        </div>

        <label className ="col-lg-2 space noSpace">Spouse Present Designation</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Pres_Desg" value={Pres_Desg} onChange={(e) => setPres_Desg(e.target.value.toUpperCase())} />
        </div>

        <label className ="col-lg-2 space noSpace">Spouse Employer</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInputs" autocomplete = "off" maxlength = "20"  name="Employer" value={Employer} onChange={(e) => setEmployer(e.target.value.toUpperCase())} />
        </div>

        <label className ="col-lg-2 space noSpace">Spouse Monthly Income </label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInput" autocomplete = "off" maxlength = "7" minlength = "3" name="Spouse_Month_Income" value={Spouse_Month_Income} onChange={onSIncomeChange} />
        </div>

        <label className ="col-lg-2 space noSpace">Spouse Offical Contact No.</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInput" autocomplete = "off" maxlength = "14" minlength = "12"  name="Spouse_Official_No" value={Spouse_Official_No} onChange={onSTelChange} />
        </div>

        <label className ="col-lg-2 space noSpace">Spouse Designation while Retirement</label>
        <div className="col-lg-4 space">
        <input type="text"  class=" formInput" autocomplete = "off" maxlength = "6"   name="Spouse_Desg_Retire" value={Spouse_Desg_Retire} onChange={(e) => setSpouse_Desg_Retire(e.target.value)} />
        </div>

        <label className ="col-lg-2 space noSpace">Spouse Date of Retirement from civil service</label>

        <div className="col-lg-4 space">
        <input type="date"  class=" formInput" name="Spouse_Retire_Date" value={Spouse_Retire_Date} onChange={(e) => setSpouse_Retire_Date(e.target.value)} />
        </div>

        <label className ="col-lg-2 space noSpace">Spouse Civil PPO No.</label>
        <div className="col-lg-4 space">
        <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20" name="Spouse_Civil_PPO_No" value={Spouse_Civil_PPO_No} onChange={onSCivilChange}/>
        </div>

    {/*   /////////////////////////////////
          <FormLabel text={"Spouse Employment Profession"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" maxlength = "20" name="Spouse_Emp_Profession" value={Spouse_Emp_Profession} onChange={(e) => setSpouse_Emp_Profession(e.target.value.toUpperCase())} />

          </div>
          <FormLabel text={"Spouse Retirement Date "} />

          <div className="col-lg-4 space">
          <input type="date"  class="fadeIn third formInput" name="Spouse_Retirement_Date" value={Spouse_Retirement_Date} onChange={(e) => setSpouse_Retirement_Date(e.target.value)} />
          </div>*/}


          </div>
      }
</div>

    </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
   {/* <button className=" btn" onClick={gotoBackToStep5} >Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"  onClick={gotoToNextStep7} >Next </button>*/}
    <button className=" btn" ><Link to="/Form5">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>


    )
}

const Form6Display = () => <FormDisplay step={6} Form={Form6} />
export default Form6Display
