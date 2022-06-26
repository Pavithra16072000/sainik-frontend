import React, { useState ,useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormDisplay from "./Form0"
import ms from 'ms';
import moment from 'moment';
const Form2 = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));

    const [Unit_Last_Served, setUnit_Last_Served] = useState(localStorage.getItem('Unit_Last_Served'));
    const [Discharge_Date, setDischarge_Date] = useState(localStorage.getItem('Discharge_Date'));
    const [Discharge_Reason, setDischarge_Reason] = useState(localStorage.getItem('Discharge_Reason'));
    const [Discharge_Med_Cat, setDischarge_Med_Cat] = useState(localStorage.getItem('Discharge_Med_Cat'));
    const [Discharge_Character, setDischarge_Character] = useState(localStorage.getItem('Discharge_Character'));
    const [Discharge_Book_No, setDischarge_Book_No] = useState(localStorage.getItem('Discharge_Book_No'));
    const [If_Pensioner, setIf_Pensioner] = useState(localStorage.getItem('If_Pensioner'));
    const [PPO_No, setPPO_No] = useState(localStorage.getItem('PPO_No'));
    const [Pension_Sanctioned, setPension_Sanctioned] = useState(localStorage.getItem('Pension_Sanctioned'));
    const [Present_Pension, setPresent_Pension] = useState(localStorage.getItem('Present_Pension'));
    const [If_Sanctioned_Dis_Pension, setIf_Sanctioned_Dis_Pension] = useState(localStorage.getItem('If_Sanctioned_Dis_Pension'));
    const [Disability_Pension, setDisability_Pension] = useState(localStorage.getItem('Disability_Pension'));
    const [Disability_Percentage, setDisability_Percentage] = useState(localStorage.getItem('Disability_Percentage'));
    const [Pension_AC_No, setPension_AC_No] = useState(localStorage.getItem('Pension_AC_No'));
    const [Bank_Name, setBank_Name] = useState(localStorage.getItem('Bank_Name'));
    const [Branch, setBranch] = useState(localStorage.getItem('Branch'));
    const [IFSC, setIFSC] = useState(localStorage.getItem('IFSC'));
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [medicals , setMedicals] = useState([]);
    const [reasons , setReasons] = useState([]);
        const [Name, setName] = useState(localStorage.getItem('Name'));

        const [minDate, setminDate]= useState('');

    const [characters , setCharacters] = useState([]);
    const [banks, setBanks] = useState([]);
    const [branchs, setBranchs] = useState([]);
    const [ifscs, setIfscs] = useState([]);
    const[visible,setVisible]=useState(false);
    const[visiible,setVisiible]=useState(false);
const gotoBackToStep1 = () => navigate("/new/step-1", { replace: true })
    const gotoToNextStep3 = () => navigate("/new/step-3", { replace: true })

     const [Discharge_Date_d, setDischarge_Date_d] = useState(localStorage.getItem('Enroll_Date'));

 useEffect(() => {
    getMedicals();
    getReasons();
    getCharacters();
    getBanks();
    getBranchs();
    getIfscs();

}, []);


useEffect(() => {
       const minsec = ms('5475d')
       const min_date = new Date(+new Date(Discharge_Date_d) + minsec);
       // const max_date = new Date(+new Date(DOB) + minsec);

       setminDate(moment(min_date).format('YYYY-MM-DD'));
       // setmaxDate(moment(max_date).format('YYYY-MM-DD'));
       console.log( min_date)

     }, [Discharge_Date_d]);

const axiosJWT = axios.create();
    const getMedicals  = async () => {
    const response = await axiosJWT.get('http://localhost:5000/med_D');
    setMedicals(response.data);
    }
    const getReasons = async () => {
    const response = await axiosJWT.get('http://localhost:5000/reason_D');
    setReasons(response.data);
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

    const getIfscs = async () => {
    const response = await axiosJWT.get('http://localhost:5000/ifsc_D');
    setIfscs(response.data);
    }

 const onDischargeBookChange = (e) =>  {
 const d = /^[0-9A-Z\\b]+$/;

     if (e.target.value === "" || d.test(e.target.value))
    {

        setDischarge_Book_No(e.target.value);
    }

}

 const onPresentChange = (e) =>  {
 const p = /^[0-9\b]+$/;

     if (e.target.value === "" || p.test(e.target.value))
    {

        setPresent_Pension(e.target.value);
    }

}
 const onPensionSanctionChange = (e) =>  {
 const ps = /^[0-9\b]+$/;

     if (e.target.value === "" || ps.test(e.target.value))
    {

        setPension_Sanctioned(e.target.value);
    }

}

 const onDisabilityChange = (e) =>  {
 const dp = /^[0-9\b]+$/;

     if (e.target.value === "" || dp.test(e.target.value))
    {

        setDisability_Pension(e.target.value);
    }

}
const onPensionAccountChange = (e) =>  {
 const pa = /^[0-9\b]+$/;

     if (e.target.value === "" || pa.test(e.target.value))
    {

        setPension_AC_No(e.target.value);
    }

}


const onDisabilityPercentageChange = (e) =>  {
 const d = /^[0-9\b]+$/;

     if (e.target.value === "" || d.test(e.target.value))
    {

        setDisability_Percentage(e.target.value);
    }

}



const DateofDischarge = (e) =>  {

}


    const Form2 = async (e) => {

        e.preventDefault();
        try {
            // await axios.post('http://localhost:5000/u_pension_details', {

            // });

                localStorage.setItem('Service_No',Service_No);
                localStorage.setItem('Unit_Last_Served',Unit_Last_Served);

                localStorage.setItem('Discharge_Date_d',Discharge_Date_d);

                localStorage.setItem('Discharge_Date',Discharge_Date);
                localStorage.setItem('Discharge_Reason',Discharge_Reason);
                localStorage.setItem('Discharge_Med_Cat',Discharge_Med_Cat);
                localStorage.setItem('Discharge_Character',Discharge_Character);
                localStorage.setItem('Discharge_Book_No',Discharge_Book_No);
                localStorage.setItem('If_Pensioner',If_Pensioner);
                localStorage.setItem('PPO_No',PPO_No);
                localStorage.setItem('Pension_Sanctioned',Pension_Sanctioned);
                localStorage.setItem('Present_Pension',Present_Pension);
                localStorage.setItem('If_Sanctioned_Dis_Pension',If_Sanctioned_Dis_Pension);
                localStorage.setItem('Disability_Pension',Disability_Pension);
                localStorage.setItem('Disability_Percentage',Disability_Percentage);
                localStorage.setItem('Pension_AC_No',Pension_AC_No);
                localStorage.setItem('Bank_Name',Bank_Name);
                localStorage.setItem('Branch',Branch);
                localStorage.setItem('IFSC',IFSC);


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
    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Pension Details</label>
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


         <FormLabel text={"Unit Last Served"} />
         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" maxlength= "20" autocomplete = "off" name="Unit_Last_Served"  value={Unit_Last_Served} onChange={(e) => setUnit_Last_Served(e.target.value.toUpperCase())}  />
         </div>

        {/* <FormLabel text={"Date of Discharge Trial"} />
         <div className="col-lg-4 space">*/}
         <input type="hidden"  class="fadeIn second formInput"  name= "Discharge_Date_d" value = {Discharge_Date_d} onChange={(e) => setDischarge_Date_d(e.target.value)} />



         <FormLabel text={"Date of Discharge"} />
         <div className="col-lg-4 space">
         <input type="date"  class="fadeIn second formInput"  name="Discharge_Date" min = {minDate} value = {Discharge_Date} onChange={(e) => setDischarge_Date(e.target.value)} />

         </div>
         <FormLabel text={"Reason for Discharge"} />
         <div className="col-lg-4 space">
         <select  className="col-lg-9 dropdown_align" >
         {reasons.map((user, index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
         </select>
          </div>

         <FormLabel text={"Medical Category while Discharge"} />
         <div className="col-lg-4 space">
         <select  className="col-lg-9 dropdown_align" value =
{Discharge_Med_Cat} onChange={(e)=> setDischarge_Med_Cat(e.target.value)}>
         {medicals.map((user, index) => (
         <option key={user.id}value={user.Discharge_Med_Cat}>{user.Discharge_Med_Cat}</option>
         ))}
         </select>
         </div>

         <FormLabel text={"Character while Discharge"} />
         <div className="col-lg-4 space">
         <select  className="col-lg-9 dropdown_align" >
         {characters.map((user, index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
         </select>
          </div>

          <FormLabel text={"Discharge Book No"} />
          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" maxlength= "15"  name="Discharge_Book_No" value={Discharge_Book_No}  onChange={onDischargeBookChange} />
          </div>

          <label className="labels">Whether Pensioner</label>
          <div className="col-lg-12 space noSpace">

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio1" name="If_Pensioner" value="1"  onClick={()=> setVisible(true)}  />
          <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio2" name="If_Pensioner" value="0"  onClick={()=> setVisible(false)}  />
          <label class="form-check-label" for="inlineRadio2">No</label>
          </div></div>

          { visible &&
            <div>


        <label className ="col-lg-2 space noSpace">PPO No.</label>
          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off"  maxlength= "20"  name="PPO_No" value={PPO_No} onChange={(e) => setPPO_No(e.target.value.toUpperCase())} />
          </div>

        <label className ="col-lg-2 space noSpace">Pension sanctioned</label>
          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off" name="Pension_Sanctioned" maxlength ="6" value={Pension_Sanctioned} onChange={onPensionSanctionChange} />
          </div>



          {/*<FormLabel text={"Present Pension"} />*/}
          <div className="col-lg-12 space">
         <label className ="col-lg-2 space ">Present Pension</label>

          <input type="text"
           class="  formInput"
           autocomplete = "off"
           minlength = "4"
           maxlength ="6"
           name="Present_Pension"
           value={Present_Pension}
           onChange={onPresentChange} />
          </div>

          </div>
          }

          <label className="labels">Whether sanctioned disability Pension</label>

          <div className="col-lg-12 space noSpace" >

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio3" name="If_Sanctioned_Dis_Pension" value="1" onClick={()=> setVisiible(true)}  />
          <label class="form-check-label" for="inlineRadio4">Yes</label>
          </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio4" name="If_Sanctioned_Dis_Pension" value="0" onClick={()=> setVisiible(false)}  />
          <label class="form-check-label" for="inlineRadio4">No</label>
          </div></div>

          { visiible &&
            <div>
            <label className ="col-lg-2 space noSpace">Percentage of Disability</label>

          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off"  maxlength= "3" minlength="2" name="Disability_Percentage" value={Disability_Percentage} onChange={onDisabilityPercentageChange} />
          </div>

        <label className ="col-lg-2 space noSpace">Disability Pension</label>
          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off" maxlength= "6" minlength="3" name="Disability_Pension" value={Disability_Pension} onChange={onDisabilityChange} />
          </div>


          </div>
      }

          <FormLabel text={"Pension A/C No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" maxlength= "20"  name="Pension_AC_No" value={Pension_AC_No} onChange={onPensionAccountChange} />

          </div>

          <FormLabel text={"Bank Name"} />
          <div className="col-lg-4 space">
          <select  className="col-lg-9 dropdown_align"  value =
{Bank_Name} onChange={(e)=> setBank_Name(e.target.value)}>
         {banks.map((user, index) => (
         <option key={user.id}value={user.Bank_Name}>{user.Bank_Name}</option>
         ))}
    </select>
          </div>

          <FormLabel text={"Branch"} />
          <div className="col-lg-4 space">
       <select   className="col-lg-9 dropdown_align" value = {Branch} onChange={(e)=> setBranch(e.target.value)}>
         {branchs.map((user, index) => (
         <option key={user.id}value={user.Branch}>{user.Branch}</option>
         ))}
        </select >          </div>

          <FormLabel text={"IFSC"} />
          <div className="col-lg-4 space">
         <select   className="col-lg-9 dropdown_align" value =
{IFSC} onChange={(e)=> setIFSC(e.target.value)}>
         {ifscs.map((user, index) => (
         <option key={user.id}value={user.IFSC}>{user.IFSC}</option>
         ))}    </select>       </div>
</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
  {/*  <button className=" btn" onClick={gotoBackToStep1}>Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"  onClick={gotoToNextStep3} >Next </button>*/}
    <button className=" btn" ><Link to="/Form1">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>

    </div>
    </form>
</div>
</div>
</div>
 )
}

const Form2Display = () => <FormDisplay step={2} Form={Form2} />

export default Form2Display

{/* function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/}

         {/* <FormLabel text={"Whether sanctioned disability Pension"} />*/}
