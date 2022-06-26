import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel,{FormLabel4} from "../../view/FormLabel";
import FormDisplay from "./Form0"


const Form3 = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Father_Name, setFather_Name] = useState(localStorage.getItem('Father_Name'));
    const [Mother_Name, setMother_Name] = useState(localStorage.getItem('Mother_Name'));
    const [Religion, setReligion] = useState(localStorage.getItem('Religion'));
    const [Caste_Category, setCaste_Category] = useState(localStorage.getItem('Caste_Category'));
    const [State, setState] = useState(localStorage.getItem('State'));
    const [Birth_Dist_Surname, setBirth_Dist_Surname] = useState(localStorage.getItem('Birth_Dist_Surname'));
    const [Birth_Place, setBirth_Place] = useState(localStorage.getItem('Birth_Place'));
    const [Adhaar, setAdhaar] = useState(localStorage.getItem('Adhaar'));
    const [Voter_Id, setVoter_Id] = useState(localStorage.getItem('Voter_Id'));
    const [PAN, setPAN] = useState(localStorage.getItem('PAN'));
    const [CSD, setCSD] = useState(localStorage.getItem('CSD'));
    const [ECHS, setECHS] = useState(localStorage.getItem('ECHS'));
    const [Id_Mark1, setId_Mark1] = useState(localStorage.getItem('Id_Mark1'));
    const [Id_Mark2, setId_Mark2] = useState(localStorage.getItem('Id_Mark2'));
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [caste, setCaste] = useState([]);
    const [dist, setDist] = useState([]);
    const [places, setPlaces] = useState([]);
    const [religions, setReligions] = useState([]);
    const [states, setStates] = useState([]);
    const gotoBackToStep2 = () => navigate("/new/step-2", { replace: true })
    const gotoToNextStep4 = () => navigate("/new/step-4", { replace: true })
    const [Name, setName] = useState(localStorage.getItem('Name'));



    useEffect(() => {
     getCaste();
     getReligions();
     getDist();
     getStates();
     getPlaces();
     }, []);

    const axiosJWT = axios.create();
    const getCaste = async () => {
    const response = await axiosJWT.get('http://localhost:5000/caste_D');
    setCaste(response.data);
    }


    const getReligions = async () => {
    const response = await axiosJWT.get('http://localhost:5000/religions_D');
    setReligions(response.data);
    }
   const getStates = async () => {
    const response = await axiosJWT.get('http://localhost:5000/state_D');
    setStates(response.data);
    }
  {/*  const getDist = async () => {
    const response = await axiosJWT.get('http://localhost:5000/dist_D');
    setDist(response.data);
    }
*/}
    const getPlaces = async () => {
    const response = await axiosJWT.get('http://localhost:5000/place_D');
    setPlaces(response.data);
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


const onAdhaarChange = (e) =>  {
    const re = /^[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value))
    {

        setAdhaar(e.target.value);
    }

}

const onVoterChange = (e) =>  {
    const v = /^[0-9]+$/;
    if (e.target.value === "" || v.test(e.target.value))
    {

        setVoter_Id(e.target.value);
    }

}

const onPANChange = (e) =>  {
    const x = /^[A-Z0-9]+$/;
    if (e.target.value.toUpperCase() === "" || x.test(e.target.value.toUpperCase()))
    {

        setPAN(e.target.value.toUpperCase());
    }

}
const onECHSChange = (e) =>  {
    const ec = /^[A-Z0-9]+$/;
    if (e.target.value.toUpperCase() === "" || ec.test(e.target.value.toUpperCase()))
    {

        setECHS(e.target.value.toUpperCase());
    }

}

const onCSDChange = (e) =>  {
    const y = /^[A-Z0-9]+$/;
    if (e.target.value.toUpperCase() === "" || y.test(e.target.value.toUpperCase()))
    {

        setCSD(e.target.value.toUpperCase());
    }

}


const onId1Change = (e) =>  {
    const j = /^[A-Za-z]+$/;
    if (e.target.value === "" || j.test(e.target.value))
    {

        setId_Mark1(e.target.value);
    }

}
const onId2Change = (e) =>  {
    const k = /^[A-Za-z]+$/;
    if (e.target.value === "" || k.test(e.target.value))
    {

        setId_Mark2(e.target.value);
    }

}



    const Form3 = async (e) => {  //defining the forms here
        e.preventDefault();
        try {
           // await axios.post('http://localhost:5000/u_personal_details', {
                // Service_No:Service_No,
                // Father_Name: Father_Name,
                // Mother_Name:Mother_Name,
                // Religion: Religion,
                // Caste_Category: Caste_Category,
                // Birth_Dist_Surname: Birth_Dist_Surname,
                // Birth_Place: Birth_Place,
                // Adhaar: Adhaar,
                // Voter_Id: Voter_Id,
                // PAN: PAN,
                // CSD: CSD,
                // ECHS: ECHS,
                // Id_Mark1:Id_Mark1,
                // Id_Mark2: Id_Mark2

            // });
            localStorage.setItem('Service_No',Service_No);
            localStorage.setItem('Father_Name',Father_Name);
            localStorage.setItem('Mother_Name',Mother_Name);
            localStorage.setItem('Religion',Religion);
            localStorage.setItem('Caste_Category',Caste_Category);
            localStorage.setItem('State',State);
            localStorage.setItem('Birth_Dist_Surname',Birth_Dist_Surname);
            localStorage.setItem('Birth_Place',Birth_Place);
            localStorage.setItem('Adhaar',Adhaar);
            localStorage.setItem('Voter_Id',Voter_Id);
            localStorage.setItem('PAN',PAN);
            localStorage.setItem('CSD',CSD);
            localStorage.setItem('ECHS',ECHS);
            localStorage.setItem('Id_Mark1',Id_Mark1);
            localStorage.setItem('Id_Mark2',Id_Mark2);



            navigate("/Form4");
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
      <form onSubmit={Form3}>

  {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ HEADER ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Personal Details</label>
         <div className = "right-align dis">

           <div className = "right-align dis">
           <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
           </div>
           {/*
           <div className = "left-align dis">
           <label className="sn-mar ">{"Name :"}</label> <h1>{Name}</h1>
           </div>
*/}
         </div>
      </div>
   {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ HEADER ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

      <div className="upperForm1Content">
      <div className="row">

      <FormLabel text={"Father's Name"} /> <br/>
        <div className="col-lg-4 space">
        <input type="text" id="test" class=" second "  autocomplete = "off" maxlength= "75" name="Father_Name" value={Father_Name} onChange={(e) => setFather_Name(e.target.value.toUpperCase())} required/>
        </div>

      <FormLabel text={"Mother's Name"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "75" name="Mother_Name" value={Mother_Name} onChange={(e) => setMother_Name(e.target.value.toUpperCase())} required/>
        </div>

      <FormLabel text={"Religion"} />
        <div className="col-lg-4 space">
        <select  className="col-lg-9 dropdown_align" >
        {religions.map((user, index) => (
        <option key={user.id}value={user.Value}>{user.Value}</option>
        ))}
        </select>
        </div>

      <FormLabel text={"Caste Category"} />
        <div className="col-lg-4 space">
        <select  className="col-lg-9 dropdown_align" >
        {caste.map((user, index) => (
        <option key={user.id}value={user.Value}>{user.Value}</option>
        ))}
        </select>
        </div>

       <FormLabel text={"Birth State"} />
         <div className="col-lg-4 ">
         <select  className="col-lg-9 dropdown_align"  value =
         {State} onChange={(e)=> setState(e.target.value)} >
         {states.map((user, index) => (
         <option key={user.id}value={user.State}>{user.State}</option>
         ))}
         </select>
        </div>

      <FormLabel text={"Birth District"} />
        <div className="col-lg-4 space">
        <select  className="col-lg-9 dropdown_align" value =
        {Birth_Dist_Surname} onClick={getDist} onChange={(e)=> setBirth_Dist_Surname(e.target.value)} required>
        {dist.map((user, index) => (
        <option key={user.id}value={user.District}>{user.District}</option>
        ))}
        </select>
        </div>

     <FormLabel text={"Birth_Place"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "10" name="Birth_Place" value={Birth_Place} onChange={(e) => setBirth_Place(e.target.value.toUpperCase())} required/>
        </div>


     <FormLabel text={"Adhaar No."} />
       <div className="col-lg-4 space">
       <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "12" name="Adhaar" value={Adhaar} onChange={onAdhaarChange} />
       </div>

     <FormLabel text={"Voter ID No."} />
       <div className="col-lg-4 space">
       <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "10" name="Voter_Id" value={Voter_Id} onChange={onVoterChange}  />
       </div>

     <FormLabel text={"CSD Card No."} />
       <div className="col-lg-4 space">
       <input type="text"  class="fadeIn second formInput" name="CSD"  autocomplete = "off"  maxlength = "15"   value={CSD} onChange={onCSDChange} required />
       </div>

     <FormLabel text={"PAN No."} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "10"  name="PAN" value={PAN} onChange={onPANChange}  />
        </div>


     <FormLabel text={"ECHS Card No."} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "15" name="ECHS" value={ECHS} onChange={onECHSChange}  required/>
        </div>

     <FormLabel text={"Identificaion Mark 1"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "60" name="Id_Mark1" value={Id_Mark1} onChange={onId1Change}   required/>
        </div>

     <FormLabel text={"Identificaion Mark 2"} />
       <div className="col-lg-4 space">
       <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "60" name="Id_Mark2" value={Id_Mark2} onChange={onId2Change}  />
       </div>

 </div>
 </div>

 {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^FOOTERS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    {/*<button className=" btn" onClick={gotoBackToStep2} >Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit" onClick={gotoToNextStep4}>Next </button>*/}
    <button className=" btn" ><Link to="/Form2">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>

 {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ FOOTERS  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

    </div>
    </form>

</div>
</div>
</div>
    )
}
const Form3Display = () => <FormDisplay step={3} Form={Form3} />

export default Form3Display
