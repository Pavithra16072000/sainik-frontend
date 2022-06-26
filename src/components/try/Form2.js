import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,useLocation,Link } from "react-router-dom";
import FormLabel from "../view/FormLabel";


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
    const location = useLocation();

    const Form2 = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_pension_details', {
                Service_No:localStorage.getItem('Service_No'),
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

    <FormLabel text={"Service No"} />
         <div className="col-md-10 space">
         <input type="text"  class="fadeIn second formInput" name="Service_No" value={localStorage.getItem('Service_No')} onChange={(e) => setService_No(e.target.value)} />
         </div>
         <FormLabel text={"Unit Last Served"} />

         <div className="col-md-10 space">
         <input type="text"  class="fadeIn second formInput" name="Unit_Last_Served" value={Unit_Last_Served} onChange={(e) => setUnit_Last_Served(e.target.value)} />
         </div>
         <FormLabel text={"Date of Discharge"} />

         <div className="col-md-10 space">
         <input type="date"  class="fadeIn second formInput" name="Discharge_Date" value={Discharge_Date} onChange={(e) => setDischarge_Date(e.target.value)} />
         </div>
         <FormLabel text={"Reason for Discharge"} />

         <div className="col-md-10 space">
         <input type="combobox"  class="fadeIn second formInput" name="Discharge_Reason" value={Discharge_Reason} onChange={(e) => setDischarge_Reason(e.target.value)} />
         </div>
         <FormLabel text={"Medical Category while Discharge"} />

         <div className="col-md-10 space">
         <input type="text"  class="fadeIn second formInput" name="Discharge_Med_Cat" value={Discharge_Med_Cat} onChange={(e) => setDischarge_Med_Cat(e.target.value)} />
         </div>
         <FormLabel text={"Character while Discharge"} />

          <div className="col-md-10 space">
          <input type="text"  class="fadeIn second formInput" name="Discharge_Character " value={Discharge_Character} onChange={(e) => setDischarge_Character(e.target.value)} />
          </div>
          <FormLabel text={"Discharge Book No"} />

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="Discharge_Book_No" value={Discharge_Book_No} onChange={(e) => setDischarge_Book_No(e.target.value)} />
          </div>
          <FormLabel text={"Whether Pensioner"} />


          <div className="col-sm-10 space">
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

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="PPO_No" value={PPO_No} onChange={(e) => setPPO_No(e.target.value)} />
          </div>
          <FormLabel text={"Pension sanctioned"} />

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="Pension_Sanctioned" value={Pension_Sanctioned} onChange={(e) => setPension_Sanctioned(e.target.value)} />
          </div>
          <FormLabel text={"Present Pension"} />

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="Present_Pension" value={Present_Pension} onChange={(e) => setPresent_Pension(e.target.value)} />
          </div>
          <FormLabel text={"Whether sanctioned disability Pension"} />

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="PPO_No" value={PPO_No} onChange={(e) => setPPO_No(e.target.value)} />
          </div>
          <FormLabel text={"Disability Pension"} />

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="Disability_Pension" value={Disability_Pension} onChange={(e) => setDisability_Pension(e.target.value)} />
          </div>
          <FormLabel text={"Percentage of Disability"} />

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="Disability_Percentage" value={Disability_Percentage} onChange={(e) => setDisability_Percentage(e.target.value)} />
          </div>
          <FormLabel text={"Pension A/C No."} />

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="Pension_AC_No" value={Pension_AC_No} onChange={(e) => setPension_AC_No(e.target.value)} />
          </div>
          <FormLabel text={"Bank Name"} />

          <div className="col-sm-4 space">
          <input type="text"  class="fadeIn third formInput" name="Bank_Name" value={Bank_Name} onChange={(e) => setBank_Name(e.target.value)} />
          </div>
          <FormLabel text={"Branch"} />

          <div className="col-sm-4 space">
          <input type="text"  class="fadeIn third formInput" name="Branch" value={Branch} onChange={(e) => setBranch(e.target.value)} />
          </div>
          <FormLabel text={"IFSC"} />

          <div className="col-sm-10 space">
          <input type="text"  class="fadeIn third formInput" name="IFSC" value={IFSC} onChange={(e) => setIFSC(e.target.value)} />
          </div>
</div>

    </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to={{
      pathname: '/form1',
      state: { name: Service_No}
    }}>Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>


    )
}

export default Form2
