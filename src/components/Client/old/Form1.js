import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import LinearProgress from "./Form0";
import FormDisplay from "./Form0"
import ms from 'ms';
import moment from 'moment';

const Form1 = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Service_Name, setService_Name] = useState(localStorage.getItem('Service_Name'));
    const [Corps_Name, setCorps_Name] = useState(localStorage.getItem('Corps_Name'));
    const [Record_Office_Name, setRecord_Office_Name] = useState(localStorage.getItem('Record_Office_Name'));
    const [Group_Name, setGroup_Name] = useState(localStorage.getItem('Group_Name'));
    const [Trade_Name, setTrade_Name] = useState(localStorage.getItem('Trade_Name'));
    const [Rank_Name, setRank_Name] = useState(localStorage.getItem('Rank_Name'));
    const [Rank_Category, setRank_Category] = useState(localStorage.getItem('Rank_Category'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [Gender, setGender] = useState(localStorage.getItem('Gender'));
    const [DOB, setDOB] = useState(localStorage.getItem('DOB'));
    const [Enroll_Date, setEnroll_Date] = useState(localStorage.getItem('Enroll_Date'));
    const [World_War2, setWorld_War2] = useState(localStorage.getItem('World_War2'));
    const [Opt_Attend, setOpt_Attend] = useState(localStorage.getItem('Opt_Attend'));
    const [Deco, setDeco] = useState('');

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [userss, setUserss] = useState([]);
    const [record, setRecord] = useState([]);
    const [trade, setTrade] = useState([]);
    const [rank, setRank] = useState([]);
    const [corp, setCorp] = useState([]);
    const [services, setServices] = useState([]);
    const [rankc, setRankc] = useState([]);
    const [userStatus, setUserStatus] = useState([]);
   const [minDate, setminDate]= useState('');
    const [Form_1, setForm1] = useState([]);
    const gotoToHome = () => navigate("/", { replace: true })
    const gotoToNextStep2 = () => navigate("/new/step-2", { replace: true })

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
    getCorp();
    getRecord();
    getTrade();
    getRank();
    getForm1();
    getServices();
    getRankc();
    getUserStatus();
    }, []);

    useEffect(() => {
           const minsec = ms('5475d')
           const min_date = new Date(+new Date(DOB) + minsec);
           // const max_date = new Date(+new Date(DOB) + minsec);

           setminDate(moment(min_date).format('YYYY-MM-DD'));
           // setmaxDate(moment(max_date).format('YYYY-MM-DD'));
           console.log( min_date)

         }, [DOB]);


const axiosJWT = axios.create();

const getUserStatus = async () => {
const response = await axiosJWT.get('http://localhost:5000/getUserStatus');
setUserStatus(response.data);
}

const handleChange = (event) => {
     setDeco(event.target.files[0])
}

    const getForm1 = async () => {
    const response = await axiosJWT.get('http://localhost:5000/getForm1');
    setForm1(response.data);
    }

    const getServices = async () => {
    const response = await axiosJWT.get('http://localhost:5000/services');
    setServices(response.data);
    }

    const getRecord = async () => {
    const response = await axiosJWT.get('http://localhost:5000/record_D');
    setRecord(response.data);
    }


    const getTrade = async () => {
    const response = await axiosJWT.get('http://localhost:5000/trade_D');
    setTrade(response.data);
    }

    const getRank = async () => {
    const response = await axiosJWT.get('http://localhost:5000/rank_D');
    setRank(response.data);
    }

    const getRankc = async () => {
    const response = await axiosJWT.get('http://localhost:5000/rank_cat_D');
    setRankc(response.data);
    }
    const getCorp = async () => {
    const response = await axiosJWT.get('http://localhost:5000/corp_D');
    setCorp(response.data);
    }

    function handleGameClick() {
      setDisabled(!disabled);
    }


//const COLORS = ['white', 'red', 'blue', 'black', 'cream'];

    const Form1 = async (e) => {
        e.preventDefault();
        try {
                // await axios.post('http://localhost:5000/u_service_details', {
                // Service_No:Service_No,
                // Service_Name:Service_Name,
                // Corps_Name: Corps_Name,
                // Record_Office_Name: Record_Office_Name,
                // Group_Name: Group_Name,
                // Trade_Name: Trade_Name,
                // Rank_Name: Rank_Name,
                // Name: Name,
                // Gender: Gender,
                // DOB: DOB,
                // Enroll_Date: Enroll_Date,
                // World_War2:World_War2,
                // Opt_Attend: Opt_Attend,
                // Deco: Deco
                //});
                localStorage.setItem('Service_No',Service_No);
                localStorage.setItem('Service_Name',Service_Name);
                localStorage.setItem('Corps_Name',Corps_Name);
                localStorage.setItem('Record_Office_Name',Record_Office_Name);
                localStorage.setItem('Group_Name',Group_Name);
                localStorage.setItem('Trade_Name',Trade_Name);
                localStorage.setItem('Rank_Name',Rank_Name);
                localStorage.setItem('Rank_Category',Rank_Category);
                localStorage.setItem('Name',Name);
                localStorage.setItem('Gender',Gender);
                localStorage.setItem('DOB',DOB);
                localStorage.setItem('Enroll_Date',Enroll_Date);
                localStorage.setItem('World_War2',World_War2);
                localStorage.setItem('Opt_Attend',Opt_Attend);
                localStorage.setItem('Deco',Deco);

            navigate("/Form2");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }

    }

    return (
      <div className="center">
      <div className="wrapper fadeInDown">
      <div id="form1Content" >
      <form onSubmit={Form1}>

      <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
      <label className="header">Service Details</label>
     <div>

     <div className = "right-align dis">
      <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
</div>
      <div className = "left-align dis">
      <label className="sn-mar ">{"Name :"}</label> <h1>{Name}</h1>

</div>
 </div>

      </div>
      <div className="upperForm1Content">
      <p className="has-text-centered">{msg}</p>
      <div className="row">
      <div className = "right-align">
      </div>
<div className="col-lg-12 space x ">
      <FormLabel text={"Service"} />

       <div className="col-lg-4 space">
      <select className="col-lg-9 dropdown_align" value =
{Service_Name} disabled={disabled} onChange={(e) => setService_Name(e.target.value)}>
         {services.map((user,
            index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
         </select>
          </div></div>



 {/*const onServiceNameChange = (e) =>  {
        setService_Name(e.target.value)
       switch(e.target.value) {
            case "Army":

          { visible &&
            <div>

    <FormLabel text={"Corps"} />
    <div className="col-lg-4 space">
    <select className="col-lg-9 dropdown_align" >
         {corp.map((user, index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
    </select>
    </div>

  </div>}
                break

            default:
                setService_Name("")
     }*/}




     <input className=" btn" onClick={handleGameClick} value='Start Game' />

    <FormLabel text={"Record Office"} />
    <div className="col-lg-4 space">
    <select className="col-lg-9 dropdown_align" value =
{Record_Office_Name}         disabled={disabled}
 onChange={(e)=> setRecord_Office_Name(e.target.value)} >
         {record.map((user, index) => (

         <option key={user.id}value={user.Record_Office_Name}>{user.Record_Office_Name} </option>
         ))}
    </select>
    </div>

 <FormLabel text={"Rank Category"} />
    <div className="col-lg-4 space">
    <select className="col-lg-9 dropdown_align" value =
{Rank_Category}         disabled={disabled}
 onChange={(e)=> setRank_Category(e.target.value)} >
         {rankc.map((user, index) => (

         <option key={user.id}value={user.Rank_Category}>{user.Rank_Category} </option>
         ))}
    </select>
    </div>

  <FormLabel text={"Rank"} />
   <div className="col-lg-4 space">
   <select  className="col-lg-9 dropdown_align"  value = {Rank_Name} disabled={disabled} onChange={(e)=> setRank_Name(e.target.value)}>
         {rank.map((user, index) => (
         <option key={user.id}value={user.Rank_Name}>{user.Rank_Name}</option>
         ))}
    </select>
   </div>

    <FormLabel text={"Group"} />
<div className="col-lg-4 space">

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Group_Name" value="X" onChange={(e) => setGroup_Name(e.target.value)} />
     <label className="form-check-label" for="inlineRadio1">X</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Group_Name" value="Y" onChange={(e) => setGroup_Name(e.target.value)} />
     <label className="form-check-label" for="inlineRadio2">Y</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio3" name="Group_Name" value="Z" onChange={(e) => setGroup_Name(e.target.value)} />
     <label className="form-check-label" for="inlineRadio3">Z</label>
     </div>


     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio3" name="Group_Name" value="Others" onChange={(e) => setGroup_Name(e.target.value)} />
     <label className="form-check-label" for="inlineRadio4">Others</label>
     </div>
</div>


    <FormLabel text={"Trade/Branch"} />
    <div className="col-lg-4 space">
    <select className="col-lg-9 dropdown_align" value ={Trade_Name} disabled={disabled} onChange={(e)=> setTrade_Name(e.target.value)}>
         {trade.map((user, index) => (
         <option key={user.id}value={user.Trade_Name}>{user.Trade_Name}</option>
         ))}
    </select>
    </div>




      <FormLabel text={"Gender"} />
<div className="col-lg-4 space">

      <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio"  id="inlineRadio1" name="Gender" value="Male" onChange={(e) => setGender(e.target.value)} />
      <label className="form-check-label" for="inlineRadio1">Male</label>
      </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio2" name="Gender" value="Female" onChange={(e) => setGender(e.target.value)} />
     <label className="form-check-label" for="inlineRadio2">Female</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio3" name="Gender" value="Transgender" onChange={(e) => setGender(e.target.value)} />
     <label className="form-check-label" for="inlineRadio3">Transgender</label>
     </div>

</div>

       <FormLabel text={"Date Of birth"} />
       <div className="col-lg-4 space">
       <input type="date"  className="fadeIn third formInput"  autocomplete = "off" name="DOB"value={DOB} disabled={disabled}onChange={(e) => setDOB(e.target.value)} />
       </div>

       <FormLabel text={"Enrollment Date"} />
       <div className="col-lg-4 space">
       <input type="date"  className="fadeIn third formInput" min = {minDate}   autocomplete = "off" name="Enroll_Date" value={Enroll_Date}disabled={disabled} onChange={(e) => setEnroll_Date(e.target.value)} />
       </div>

       <FormLabel text={"World War II Veteran"} />
<div className="col-lg-4 space">

       <div className="form-check form-check-inline">
       <input className="form-check-input" type="radio"  id="inlineRadio1" name="World_War2" value="Yes" disabled={disabled} onChange={(e) => setWorld_War2(e.target.value)} />
       <label className="form-check-label" for="inlineRadio1">Yes</label>
       </div>

       <div className="form-check form-check-inline">
       <input className="form-check-input" type="radio"  id="inlineRadio3" name="World_War2" value="No"disabled={disabled} onChange={(e) => setWorld_War2(e.target.value)} />
       <label className="form-check-label" for="inlineRadio3">No</label>
       </div>
</div>

          <FormLabel text={"Operations Attended"} />
          <div className="col-lg-4 space">
          <input type="text"  className="fadeIn third formInput" autocomplete = "off"  maxlength= "100"  name="Opt_Attend" value={Opt_Attend}disabled={disabled} onChange={(e) => setOpt_Attend(e.target.value.toUpperCase())} />
          </div>



       {/*   <FormLabel text={"Decoration"} />
          <div className="col-lg-4 space">
          <input type="file"  className="fadeIn third formInput" autocomplete = "off" name="Deco"value={Deco} onChange={(e)=> handlechange(e)} />
          </div>
       */}


</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
  {/*  <button className=" btn" onClick={gotoToHome}>Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"  onClick={gotoToNextStep2} >Next </button>
*/}

<button className=" btn" ><Link to="/">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>

{/*        <div>
            <button name="cancel" onClick={gotoToHome}>
                Cancel
            </button>
            <button name="next" onClick={gotoToNextStep2}>
                Next Step
            </button>
        </div>
*/}


    </div>
    </form>
</div>
</div>
</div>
    )
}

function Form1Display() {
    return <FormDisplay step={1} Form={Form1} />
}

export default Form1Display


{/*radio buttons
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>


<div className="field">
  <div className="control">
    <label className="checkbox">
      <input type="checkbox" />
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>*/}
 // { /* <input type="submit" class="fadeIn fourth submitInput" value="Log In"/> */}

{/*
  //<label>Color*:</label>
////       <select>
//         <option value="">Select color</option>
//         {COLORS.map(c => <option key={c}>{c}</option>)}
//       </select>*/}

{/*


// const data = new FormData();

//         for(let i = 0; i < files.length; i++) {
//             data.append('file', files[i]);
//         }

//         axios.post('//localhost:8000/upload', data)
//             .then((response) => {
//                 toast.success('Upload Success');
//                 onSuccess(response.data)
//             })
//             .catch((e) => {
//                 toast.error('Upload Error')
//             })
//     };


*/}




{/* // const getFile = async () => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("fileName", fileName);
//         try {
//           const res = await axios.post("http://localhost:5000/upload",formData);

//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };



// const axiosJWT = axios.create();
// formData.append("file", file);
//   formData.append("fileName", fileName);
//     const getFile = async () => {
//     const response = await axiosJWT.get('http://localhost:5000/upload');
//     setUsers(response.data);
//     }

/////////////////////////////////////////////////////////////

     //  getFile();



 */}
