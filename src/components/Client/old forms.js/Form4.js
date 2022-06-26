import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const Form4 = () => {

    const [Service_No, setService_No] = useState('');
    const [House_No, setHouse_No] = useState('');
    const [House_Name, setHouse_Name] = useState('');
    const [Street, setStreet] = useState('');
    const [Pincode, setPincode] = useState('');
    const [Police_Station, setPolice_Station] = useState('');
    const [Tele_No, setTele_No] = useState('');
    const [P_House_No, setP_House_No] = useState('');
    const [P_House_Name, setP_House_Name] = useState('');
    const [P_Street, setP_Street] = useState('');
    const [P_Pincode, setP_Pincode] = useState('');
    const [P_Police_Station, setP_Police_Station] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Form4 = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_contact_details', {
                Service_No:Service_No,
                House_No: House_No,
                House_Name:House_Name,
                Street: Street,
                Pincode:Pincode,
                Police_Station: Police_Station,
                Tele_No: Tele_No,
                P_House_No: P_House_No,
                P_House_Name: P_House_Name,
                P_Street: P_Street,
                P_Pincode: P_Pincode,
                P_Police_Station: P_Police_Station
            });
            navigate("/Form5");
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
      <form onSubmit={Form4}>

      <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
      <label className="header">Contact Details</label>
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


      <FormLabel text={"House No."} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="House_No" value={House_No} onChange={(e) => setHouse_No(e.target.value)} />
      </div>
      <FormLabel text={"House Name"} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="House_Name" value={House_Name} onChange={(e) => setHouse_Name(e.target.value)} />
      </div>

      <FormLabel text={"Street"} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="Street" value={Street} onChange={(e) => setStreet(e.target.value)} />
      </div>

      <FormLabel text={"Pincode"} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="Pincode" value={Pincode} onChange={(e) => setPincode(e.target.value)} />
      </div>

      <FormLabel text={"Police Station"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" name="Police_Station" value={Police_Station} onChange={(e) => setPolice_Station(e.target.value)} />
        </div>

        <FormLabel text={"Telephone No."} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" name="Tele_No" value={Tele_No} onChange={(e) => setTele_No(e.target.value)} />
        </div>


        <FormLabel text={"Permanent House No."} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" name="P_House_No" value={P_House_No} onChange={(e) => setP_House_No(e.target.value)} />
        </div>

          <FormLabel text={"Permanent House Name"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" name="P_House_Name" value={P_House_Name} onChange={(e) => setP_Street(e.target.value)} />
        </div>

        <FormLabel text={"Permanent Street"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" name="P_Street" value={P_Street} onChange={(e) => setP_Street(e.target.value)} />
        </div>

          <FormLabel text={"Permanent Pincode"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" name="P_Pincode" value={P_Pincode} onChange={(e) => setP_Street(e.target.value)} />
        </div>

        <FormLabel text={"Permanent Police Station"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" name="P_Police_Station" value={P_Police_Station} onChange={(e) => setP_Police_Station(e.target.value)} />
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

export default Form4
