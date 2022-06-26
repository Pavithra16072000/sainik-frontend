import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FormLabel,{FormLabel4} from "../../view/FormLabel";


const Form4 = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [State, setState] = useState(localStorage.getItem('State'));
    const [District, setDistrict] = useState(localStorage.getItem('District'));
    const [Taluk_Name, setTaluk_Name] = useState(localStorage.getItem('Taluk_Name'));
    const [House_No, setHouse_No] = useState(localStorage.getItem('House_No'));
    const [House_Name, setHouse_Name] = useState(localStorage.getItem('House_Name'));
    const [Street, setStreet] = useState(localStorage.getItem('Street'));
    const [Pincode, setPincode] = useState(localStorage.getItem('Pincode'));
    const [Police_Station, setPolice_Station] = useState(localStorage.getItem('Police_Station'));
    const [Tele_No, setTele_No] = useState(localStorage.getItem('Tele_No'));
    const [P_House_No, setP_House_No] = useState(localStorage.getItem('P_House_No'));
    const [P_House_Name, setP_House_Name] = useState(localStorage.getItem('P_House_Name'));
    const [P_Street, setP_Street] = useState(localStorage.getItem('P_Street'));
    const [P_Pincode, setP_Pincode] = useState(localStorage.getItem('P_Pincode'));
    const [P_Police_Station, setP_Police_Station] = useState(localStorage.getItem('P_Police_Station'));
    const [P_State, setP_State] = useState(localStorage.getItem('P_State'));
    const [P_District, setP_District] = useState(localStorage.getItem('P_District'));
    const [P_Taluk_Name, setP_Taluk_Name] = useState(localStorage.getItem('P_Taluk_Name'));

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [states, setStates] = useState([]);
    const [dist, setDist] = useState([]);
    const [distP, setDistP] = useState([]);

    const [taluks, setTaluks] = useState([]);
    const [streets, setStreets] = useState([]);
    // const [stateChange, setstateChange] = useState();


  useEffect(() => {
     getStates();
     getDist();
     getDistP();

     getStreets();
     getTaluks();
     }, []);

   const axiosJWT = axios.create();
    const getStates = async () => {
    const response = await axiosJWT.get('http://localhost:5000/state_D');
    setStates(response.data);
    }

    const getDist = async () => {
      localStorage.setItem('State',State)

      const sn=localStorage.getItem('State');
      const response = await axiosJWT.get('http://localhost:5000/District_Depend',
          {
              params:{state:sn}
          });
      setDist(response.data);
    }
    const getDistP = async () => {
      localStorage.setItem('P_State',P_State)

      const sn=localStorage.getItem('P_State');
      const response = await axiosJWT.get('http://localhost:5000/District_Depend',
          {
              params:{state:sn}
          });
      setDistP(response.data);
    }

    const getStreets = async () => {
    const response = await axiosJWT.get('http://localhost:5000/street_D');
    setStreets(response.data);
    }

    const getTaluks = async () => {
    const response = await axiosJWT.get('http://localhost:5000/taluk_D');
    setTaluks(response.data);
    }

// const add =  async (e) => {
//              localStorage.setItem('House_Name', House_Name);
//               P_House_Name =        localStorage.getItem('House_Name');
// }
//  stateChange = async () => {
//   setState(e.target.value);
//    localStorage.setItem('State',State)
//
// }

// const stateValue = (e) => {
//   setState(e.target.value);
// }
// const stateChange = () => {
//    localStorage.setItem('State',State)
// }
// const twoCalls = e => {
//   this.stateValue(e)
//   this.stateChange()
// }
    const Form4 = async (e) => {
        e.preventDefault();
        try {
            // await axios.post('http://localhost:5000/u_contact_details', {

            // });

                localStorage.setItem('State',State);
                localStorage.setItem('District',District);
                localStorage.setItem('Taluk_Name',Taluk_Name);
                localStorage.setItem('House_No',House_No);
                localStorage.setItem('House_Name',House_Name);
                localStorage.setItem('Street',Street);
                localStorage.setItem('Pincode',Pincode);
                localStorage.setItem('Police_Station',Police_Station);
                localStorage.setItem('Tele_No',Tele_No);
                localStorage.setItem('P_House_No',P_House_No);
                localStorage.setItem('P_House_Name',P_House_Name);
                localStorage.setItem('P_Street',P_Street);
                localStorage.setItem('P_Pincode',P_Pincode);
                localStorage.setItem('P_Police_Station',P_Police_Station);
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

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
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
       <div className = "row">
       <div className = "col-md-6">
      <label><b><u>PRESENT ADDRESS</u></b></label><br></br><br></br>

      <div className="col-lg-12 nospace">
            <FormLabel4 text={"Pincode"} />

      <input type="text"  class="fadeIn second formInput" name="Pincode" autocomplete = "off" maxlength = "6" minlength = "6" value={Pincode} onChange={(e) => setPincode(e.target.value)} required/>
      </div>

      <div className="col-lg-12 nospace">
            <FormLabel4 text={"State"} />

        <select  value =
{State} onChange={(e)=> setState(e.target.value) } >
         {states.map((user, index) => (
         <option key={user.id}value={user.State}>{user.State}</option>
         ))}
         </select>
      </div>

      <div className="col-lg-12 nospace">

       <FormLabel4 text={"District"} />
        <select value =
{District} onClick={getDist}onChange={(e)=> setDistrict(e.target.value)} >
<option>--Select--</option>

        {dist.map((user, index) => (
         <option key={user.id}value={user.District}>{user.District}</option>
         ))}
         </select>
      </div>

             <div className="col-lg-12 nospace">

      <FormLabel4 text={"Taluk"} />
        <select value =
{Taluk_Name} onChange={(e)=> setTaluk_Name(e.target.value)}>
        {taluks.map((user, index) => (
         <option key={user.id}value={user.Taluk_Name}>{user.Taluk_Name}</option>
         ))}
         </select>
      </div>

        <div className="col-lg-12 nospace">

      <FormLabel4 text={"Police Station"} />
        <input type="text"  class="fadeIn second formInput" name="Police_Station" autocomplete = "off" maxlength = "15" minlength = "5" value={Police_Station} onChange={(e) => setPolice_Station(e.target.value.toUpperCase())} required/>
        </div>


      <div className="col-lg-12 nospace">

      <FormLabel4 text={"Street"} />
            <input type="text"  class="fadeIn second formInput" name="Street" autocomplete="off" maxlength = "25" value={Street} onChange={(e) => setStreet(e.target.value.toUpperCase())} />

      </div>

            <div className="col-lg-12 nospace">

     <FormLabel4 text={"House No."} />
      <input type="text"  class="fadeIn second formInput" name="House_No"  autocomplete = "off" maxlength= "6" value={House_No} onChange={(e) => setHouse_No(e.target.value)} />
      </div>

      <div className="col-lg-12 nospace">

     <FormLabel4 text={"House Name"} />
      <input type="text"  class="fadeIn second formInput" name="House_Name" autocomplete="off" maxlength = "25" value={House_Name} onChange={(e) => setHouse_Name(e.target.value.toUpperCase())} />
      </div>

              <div className="col-lg-12 nospace">


    <FormLabel4 text={"Telephone No."} />
        <input type="text"  class="fadeIn second formInput" name="Tele_No" autocomplete = "off" maxlength = "14" minlength = "12" value={Tele_No} onChange={(e) => setTele_No(e.target.value)} required/>
        </div>

</div>
{/* ///////////////////////////////////     PERMENANT ADDRESS    ///////////////////////////////////////////////////// */}



<div className = "vl"></div>
<div className= "col-md-6">

<label><b><u>PERMANENT ADDRESS</u></b></label>

<label >
<input type="checkbox"  className="formInput"  /> Same as Present Address
</label>


  <div className="col-lg-12 nospace">
            <FormLabel4 text={"Pincode"} />

      <input type="text"  class="fadeIn second formInput" name="P_Pincode" autocomplete = "off" maxlength = "6" minlength = "6" value={P_Pincode} onChange={(e) => setP_Pincode(e.target.value)} required/>
      </div>


      <div className="col-lg-12 nospace">
      <FormLabel4 text={" State"} />
        <select value =
{P_State} onChange={(e)=> setP_State(e.target.value)}>
         {states.map((user, index) => (
         <option key={user.id}value={user.State}>{user.State}</option>
         ))}
         </select>
      </div>

      <div className="col-lg-12 nospace">
             <FormLabel4 text={" District"} />

        <select value =
{P_District} onChange={(e)=> setP_District(e.target.value)} onClick={getDistP}>
        {distP.map((user, index) => (
         <option key={user.id}value={user.District}>{user.District}</option>
         ))}
         </select>
      </div>

      <div className="col-lg-12 nospace">
            <FormLabel4 text={" Taluk"} />

        <select value =
{P_Taluk_Name} onChange={(e)=> setP_Taluk_Name(e.target.value)} >
        {taluks.map((user, index) => (
         <option key={user.id}value={user.Taluk_Name}>{user.Taluk_Name}</option>
         ))}
         </select>
      </div>

        <div className="col-lg-12 nospace">
              <FormLabel4 text={" Police Station"} />

        <input type="text"  class="fadeIn second formInput" name="P_Police_Station" autocomplete = "off" maxlength = "15" minlength = "5"  value={P_Police_Station} onChange={(e) => setP_Police_Station(e.target.value.toUpperCase())} required/>
        </div>

        <div className="col-lg-12 nospace">
              <FormLabel4 text={" Street"} />

        <input type="text"  class="fadeIn second formInput" name="P_Street" value={P_Street} onChange={(e) => setP_Street(e.target.value.toUpperCase())} required/>
        </div>


        <div className="col-lg-12 nospace">
                <FormLabel4 text={" House No."} />

        <input type="text"  class="fadeIn second formInput" name="P_House_No" autocomplete = "off" maxlength = "6" value={P_House_No} onChange={(e) => setP_House_No(e.target.value)} />
        </div>

        <div className="col-lg-12 nospace">
                  <FormLabel4 text={" House Name"} />

        <input type="text"  class="fadeIn second formInput" name="P_House_Name" autocomplete="off" maxlength = "25" value={P_House_Name} onChange={(e) => setP_House_Name(e.target.value.toUpperCase())} />
      </div>
</div>
</div>
        </div>
        </div>
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
   <button className=" btn" ><Link to="/Form3">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>
    )
}

export default Form4
