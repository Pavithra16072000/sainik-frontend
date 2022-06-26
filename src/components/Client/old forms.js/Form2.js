import React, { useState ,useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const Form2 = () => {

    const [Service_No, setService_No] = useState('');
    const [Unit_Last_Served, setUnit_Last_Served] = useState('');
    const [Discharge_Date, setDischarge_Date] = useState('');
    const [Discharge_Reason, setDischarge_Reason] = useState('');
    const [Discharge_Med_Cat, setDischarge_Med_Cat] = useState('');
    const [Discharge_Character, setDischarge_Character] = useState('');
    const [Discharge_Book_No, setDischarge_Book_No] = useState('');
    const [If_Pensioner, setIf_Pensioner] = useState('');
    const [PPO_No, setPPO_No] = useState('');
    const [Pension_Sanctioned, setPension_Sanctioned] = useState('');
    const [Present_Pension, setPresent_Pension] = useState('');
    const [If_Sanctioned_Dis_Pension, setIf_Sanctioned_Dis_Pension] = useState('');
    const [Disability_Pension, setDisability_Pension] = useState('');
    const [Disability_Percentage, setDisability_Percentage] = useState('');
    const [Pension_AC_No, setPension_AC_No] = useState('');
    const [Bank_Name, setBank_Name] = useState('');
    const [Branch, setBranch] = useState('');
    const [IFSC, setIFSC] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [medicals , setMedicals] = useState([]);
    const [characters , setCharacters] = useState([]);
    const [banks, setBanks] = useState([]);
    const [branchs, setBranchs] = useState([]);

 useEffect(() => {
    getMedicals();
    getCharacters();
    getBanks();
    getBranchs();
}, []);


const axiosJWT = axios.create();
    const getMedicals  = async () => {
    const response = await axiosJWT.get('http://localhost:5000/med_D');
    setMedicals(response.data);
    }

    const getCharacters = async () => {
    const response = await axiosJWT.get('http://localhost:5000/char_D');
    setCharacters(response.data);
    }

    const getBanks = async () => {
    const response = await axiosJWT.get('http://localhost:5000/bank_D');
    setBanks(response.data);
    }

    const getBranchs = async () => {
    const response = await axiosJWT.get('http://localhost:5000/branch_D');
    setBranchs(response.data);
    }

    const Form2 = async (e) => {

        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_pension_details', {
                Service_No:Service_No,
                Unit_Last_Served: Unit_Last_Served,
                Discharge_Date:Discharge_Date,
                Discharge_Reason: Discharge_Reason,
                Discharge_Med_Cat: Discharge_Med_Cat,
                Discharge_Character: Discharge_Character,
                Discharge_Book_No: Discharge_Book_No,
                If_Pensioner: If_Pensioner,
                PPO_No: PPO_No,
                Pension_Sanctioned: Pension_Sanctioned,
                Present_Pension: Present_Pension,
                If_Sanctioned_Dis_Pension: If_Sanctioned_Dis_Pension,
                Disability_Pension: Disability_Pension,
                Disability_Percentage: Disability_Percentage,
                Pension_AC_No: Pension_AC_No,
                Bank_Name: Bank_Name,
                Branch: Branch,
                IFSC:IFSC
            });
            navigate("/Form3");
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
    <label className="header">Pension Details</label>
    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">

        <div className = "right-align">
        <div>
        <label class="sn-mar">{"Service No"}</label>
        <input type="text"   name="Service_No" value={Service_No}onChange={(e) => setService_No(e.target.value)} disabled required/>
        </div>
        </div>

         <FormLabel text={"Unit Last Served"} />
         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" autocomplete = "off" name="Unit_Last_Served"  value={Unit_Last_Served} onChange={(e) => setUnit_Last_Served(e.target.value.toUpperCase())}  required/>
         </div>

         <FormLabel text={"Date of Discharge"} />
         <div className="col-lg-4 space">
         <input type="date"  class="fadeIn second formInput"  name="Discharge_Date" value={Discharge_Date} onChange={(e) => setDischarge_Date(e.target.value)} required/>

         </div>


         <FormLabel text={"Medical Category while Discharge"} />
         <div className="col-lg-4 space">
         <select >
         {medicals.map((user, index) => (
         <option key={user.id}value="s">{user.Discharge_Med_Cat}</option>
         ))}
         </select>
         </div>

         <FormLabel text={"Character while Discharge"} />
         <div className="col-lg-4 space">
         <select >
         {characters.map((user, index) => (
         <option key={user.id}value="s">{user.Discharge_Character}</option>
         ))}
         </select>
          </div>

          <FormLabel text={"Discharge Book No"} />
          <div className="col-lg-10 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" name="Discharge_Book_No" value={Discharge_Book_No} onChange={(e) => setDischarge_Book_No(e.target.value.toUpperCase())} required/>
          </div>

          <FormLabel text={"Whether Pensioner"} />
          <div className="col-lg-10 space">

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio1" name="If_Pensioner" value="Yes" onChange={(e) => setIf_Pensioner(e.target.value)} />
          <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio3" name="If_Pensioner" value="No" onChange={(e) => setIf_Pensioner(e.target.value)} />
          <label class="form-check-label" for="inlineRadio3">No</label>
          </div>

          </div>

          <FormLabel text={"PPO No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" name="PPO_No" value={PPO_No} onChange={(e) => setPPO_No(e.target.value.toUpperCase())} />
          </div>

          <FormLabel text={"Pension sanctioned"} />
          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" name="Pension_Sanctioned" value={Pension_Sanctioned} onChange={(e) => setPension_Sanctioned(e.target.value.toUpperCase())} required/>
          </div>

          <FormLabel text={"Present Pension"} />
          <div className="col-lg-10 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" name="Present_Pension" value={Present_Pension} onChange={(e) => setPresent_Pension(e.target.value.toUpperCase())} required/>
          </div>


          <FormLabel text={"Whether sanctioned disability Pension"} />

          <div className="col-lg-10 space" >

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio1" name="If_Sanctioned_Dis_Pension" value="Yes" onChange={(e) => setIf_Sanctioned_Dis_Pension(e.target.value)} />
          <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio3" name="If_Sanctioned_Dis_Pension" value="No" onChange={(e) => setIf_Sanctioned_Dis_Pension(e.target.value)} />
          <label class="form-check-label" for="inlineRadio3">No</label>
          </div></div>

          <FormLabel text={"PPO No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" name="PPO_No" value={PPO_No} onChange={(e) => setPPO_No(e.target.value)} />
          </div>

          <FormLabel text={"Disability Pension"} />
          <div className="col-lg-4 space">
          <input type="number"  class="fadeIn third formInput" autocomplete = "off" name="Disability_Pension" value={Disability_Pension} onChange={(e) => setDisability_Pension(e.target.value.toUpperCase())} required />
          </div>

          <FormLabel text={"Percentage of Disability"} />
          <div className="col-lg-4 space">
          <input type="number"  class="fadeIn third formInput" autocomplete = "off"  name="Disability_Percentage" value={Disability_Percentage} onChange={(e) => setDisability_Percentage(e.target.value.toUpperCase())} required/>
          </div>

          <FormLabel text={"Pension A/C No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" name="Pension_AC_No" value={Pension_AC_No} onChange={(e) => setPension_AC_No(e.target.value.toUpperCase())}required />

          </div>

          <FormLabel text={"Bank Name"} />
          <div className="col-lg-4 space">
          <select >
         {banks.map((user, index) => (
         <option key={user.id}value="s">{user.Bank_Name}</option>
         ))}
    </select>
          </div>

          <FormLabel text={"Branch"} />
          <div className="col-lg-4 space">
       <select >
         {branchs.map((user, index) => (
         <option key={user.id}value="s">{user.Branch}</option>
         ))}
        </select>          </div>

          <FormLabel text={"IFSC"} />
          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" name="IFSC" value={IFSC} onChange={(e) => setIFSC(e.target.value.toUpperCase())} required/>
          </div>
</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/form1">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>
 )
}

export default Form2

{/* function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/}
