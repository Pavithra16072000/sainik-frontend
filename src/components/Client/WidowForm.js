import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const WidowForm = () => {

    const [Service_No, setService_No] = useState('');
    const [Widow_Reg_No, setWidow_Reg_No] = useState('');
    const [Family_Pension, setFamily_Pension] = useState('');
    const [W_Nxt_Kin, setW_Nxt_Kin] = useState('');
    const [Death_Date, setDeath_Date] = useState('');
    const [Death_Nature, setDeath_Nature] = useState('');
    const [ESM_No, setESM_No] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const WidowForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_widow_details', {
                Service_No:Service_No,
                Widow_Reg_No: Widow_Reg_No,
                Family_Pension:Family_Pension,
                W_Nxt_Kin: W_Nxt_Kin,
                Death_Date: Death_Date,
                Death_Nature: Death_Nature,
                ESM_No: ESM_No

            });
            navigate("/WidowForm");
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
    <form onSubmit={WidowForm}>
    <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
    <label className="header">Widow Details</label>
    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">

             <div className = "right-align">
      <div >
      <label class="sn-mar">{"Service No"}</label>
      <input type="text"   name="Service_No" value={Service_No}onChange={(e) => setService_No(e.target.value)} disabled required/>
      </div>
      </div>
        <FormLabel text={"ESM No."} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="ESM_No" value={ESM_No} onChange={(e) => setESM_No(e.target.value)} />
          </div>
        <FormLabel text={"Death Date"} />

         <div className="col-lg-4 space">
         <input type="date"  class="fadeIn second formInput" name="Death_Date" value={Death_Date} onChange={(e) => setDeath_Date(e.target.value)} />
         </div>
          <FormLabel text={"Death Nature"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn second formInput" name="Death_Nature " value={Death_Nature} onChange={(e) => setDeath_Nature(e.target.value)} />
          </div>
         <FormLabel text={"Widow Register No."} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Widow_Reg_No" value={Widow_Reg_No} onChange={(e) => setWidow_Reg_No(e.target.value)} />
         </div>

         <FormLabel text={"Wife of Next of Kin"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="W_Nxt_Kin" value={W_Nxt_Kin} onChange={(e) => setW_Nxt_Kin(e.target.value)} />
         </div>


         <FormLabel text={"Family Pension"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Family_Pension" value={Family_Pension} onChange={(e) => setFamily_Pension(e.target.value)} />
         </div>


</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/Form0">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>


    )
}

export default WidowForm
