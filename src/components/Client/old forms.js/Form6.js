 import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const Form6 = () => {

    const [Service_No, setService_No] = useState('');
    const [Marital_Status, setMarital_Status] = useState('');
    const [Marriage_Date, setMarriage_Date] = useState('');
    const [Spouse_Name, setSpouse_Name] = useState('');
    const [Spouse_Relation, setSpouse_Relation] = useState('');
    const [Spouse_DOB, setSpouse_DOB] = useState('');
    const [Spouse_Id_Mark, setSpouse_Id_Mark] = useState('');
    const [Spouse_Qualification, setSpouse_Qualification] = useState('');
    const [Spouse_Emp_Status, setSpouse_Emp_Status] = useState('');
    const [Spouse_Emp_Profession, setSpouse_Emp_Profession] = useState('');
    const [Spouse_Retirement_Date, setSpouse_Retirement_Date] = useState('');
    const [Spouse_Adhaar, setSpouse_Adhaar] = useState('');
    const [Spouse_Voter_Id, setSpouse_Voter_Id] = useState('');
    const [Spouse_PAN, setSpouse_PAN] = useState('');
    const [Spouse_CSD, setSpouse_CSD] = useState('');
    const [Spouse_ECHS, setSpouse_ECHS] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Form6 = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_spouse_details', {
                Service_No:Service_No,
                Marital_Status: Marital_Status,
                Marriage_Date:Marriage_Date,
                Spouse_Name: Spouse_Name,
                Spouse_Relation: Spouse_Relation,
                Spouse_DOB: Spouse_DOB,
                Spouse_Id_Mark: Spouse_Id_Mark,
                Spouse_Qualification: Spouse_Qualification,
                Spouse_Emp_Status: Spouse_Emp_Status,
                Spouse_Emp_Profession: Spouse_Emp_Profession,
                Spouse_Retirement_Date: Spouse_Retirement_Date,
                Spouse_Adhaar: Spouse_Adhaar,
                Spouse_Voter_Id: Spouse_Voter_Id,
                Spouse_PAN: Spouse_PAN,
                Spouse_CSD: Spouse_CSD,
                Spouse_ECHS: Spouse_ECHS
            });
            navigate("/Form7a");
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
    <form onSubmit={Form6}>
    <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
    <label className="header">Spouse Details</label>
    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">

         <div className = "right-align">
         <div >
         <label class="sn-mar">{"Service No"}</label>
         <input type="text" class="dis"   name="Service_No" value={Service_No}onChange={(e) => setService_No(e.target.value)} disabled required/>
         </div>
         </div>
         <FormLabel text={"Marital Status"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Marital_Status" value={Marital_Status} onChange={(e) => setMarital_Status(e.target.value)} required />
         </div>
         <FormLabel text={"Marriage Date"} />

         <div className="col-lg-4 space">
         <input type="date"  class="fadeIn second formInput" name="Marriage_Date" value={Marriage_Date} onChange={(e) => setMarriage_Date(e.target.value)} required/>
         </div>
         <FormLabel text={"Spouse Name"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Spouse_Name" value={Spouse_Name} onChange={(e) => setSpouse_Name(e.target.value.toUpperCase())} required/>
         </div>
         <FormLabel text={"Spouse Relation"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Spouse_Relation" value={Spouse_Relation} onChange={(e) => setSpouse_Relation(e.target.value.toUpperCase())} required/>
         </div>
         <FormLabel text={"Spouse DOB"} />

          <div className="col-lg-4 space">
          <input type="Date"  class="fadeIn second formInput" name="Spouse_DOB " value={Spouse_DOB} onChange={(e) => setSpouse_DOB(e.target.value)} required/>
          </div>
          <FormLabel text={"Spouse Identification Mark"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Spouse_Id_Mark" value={Spouse_Id_Mark} onChange={(e) => setSpouse_Id_Mark(e.target.value.toUpperCase())} required/>
          </div>

          <FormLabel text={"Spouse Qualification"} />
          <div className="col-lg-4 space">
          <input type="combobox"  class="fadeIn third formInput" name="Spouse_Qualification" value={Spouse_Qualification} onChange={(e) => setSpouse_Qualification(e.target.value)} required />
          </div>

         <FormLabel text={"Spouse Employment Status"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Spouse_Emp_Status" value={Spouse_Emp_Status} onChange={(e) => setSpouse_Emp_Status(e.target.value.toUpperCase())} required/>
          </div>
          <FormLabel text={"Spouse Employment Profession"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Spouse_Emp_Profession" value={Spouse_Emp_Profession} onChange={(e) => setSpouse_Emp_Profession(e.target.value)} required/>
          </div>
          <FormLabel text={"Spouse Retirement Date "} />

          <div className="col-lg-4 space">
          <input type="date"  class="fadeIn third formInput" name="Spouse_Retirement_Date" value={Spouse_Retirement_Date} onChange={(e) => setSpouse_Retirement_Date(e.target.value)} required/>
          </div>
          <FormLabel text={"Spouse Adhaar No."} />

          <div className="col-lg-4 space">
          <input type="number"  class="fadeIn third formInput" name="Spouse_Adhaar" value={Spouse_Adhaar} onChange={(e) => setSpouse_Adhaar(e.target.value)} required/>
          </div>
          <FormLabel text={"Spouse Voter Id "} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Spouse_Voter_Id" value={Spouse_Voter_Id} onChange={(e) => setSpouse_Voter_Id(e.target.value.toUpperCase())} required/>
          </div>
          <FormLabel text={"Spouse PAN Card No."} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Spouse_PAN" value={Spouse_PAN} onChange={(e) => setSpouse_PAN(e.target.value.toUpperCase())} required/>
          </div>
          <FormLabel text={"Spouse CSD Card No."} />

          <div className="col-lg-4 space">
          <input type="number"  class="fadeIn third formInput" name="Spouse_CSD" value={Spouse_CSD} onChange={(e) => setSpouse_CSD(e.target.value)} required/>
          </div>
          <FormLabel text={"Spouse ECHS Card No."} />

          <div className="col-lg-4 space">
          <input type="number"  class="fadeIn third formInput" name="Spouse_ECHS" value={Spouse_ECHS} onChange={(e) => setSpouse_ECHS(e.target.value)} required/>
          </div>

</div>

    </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/form5">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>


    )
}

export default Form6
