import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const SpouseDocForm = () => {
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
  const [S_Adhar, setS_Adhar] = useState();
  const [S_AdharName, setS_AdharName] = useState("");
  const [S_Adharpicture, setS_AdharPicture] = useState('');
  const [S_Discharge_Book, setS_Discharge_Book] = useState();
  const [S_Discharge_BookName, setS_Discharge_BookName] = useState("");
  const [S_Discharge_Bookpicture, setS_Discharge_BookPicture] = useState('');
  const [S_PPO, setS_PPO] = useState();
  const [S_PPOName, setS_PPOName] = useState("");
  const [S_PPOpicture, setS_PPOPicture] = useState('');
  const [S_PAN, setS_PAN] = useState();
  const [S_PANName, setS_PANName] = useState("");
  const [S_PANpicture, setS_PANPicture] = useState('');
  const [S_ECHS, setS_ECHS] = useState();
  const [S_ECHSName, setS_ECHSName] = useState("");
  const [S_ECHSpicture, setS_ECHSPicture] = useState('');
  const [S_Voter, setS_Voter] = useState();
  const [S_VoterName, setS_VoterName] = useState("");
  const [S_Voterpicture, setS_VoterPicture] = useState('');


      const saveS_Adhar = (e) => {
        setS_Adhar(e.target.files[0]);
        setS_AdharName(e.target.files[0].name);
        setS_AdharPicture(URL.createObjectURL(e.target.files[0]));
      };

      const saveS_Discharge_Book = (e) => {
        setS_Discharge_Book(e.target.files[0]);
        setS_Discharge_BookName(e.target.files[0].name);
        setS_Discharge_BookPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveS_PPO = (e) => {
        setS_PPO(e.target.files[0]);
        setS_PPOName(e.target.files[0].name);
        setS_PPOPicture(URL.createObjectURL(e.target.files[0]));
      };

      const saveS_PAN = (e) => {
        setS_PAN(e.target.files[0]);
        setS_PANName(e.target.files[0].name);
        setS_PANPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveS_ECHS = (e) => {
        setS_ECHS(e.target.files[0]);
        setS_ECHSName(e.target.files[0].name);
        setS_ECHSPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveS_Voter = (e) => {
        setS_Voter(e.target.files[0]);
        setS_VoterName(e.target.files[0].name);
        setS_VoterPicture(URL.createObjectURL(e.target.files[0]));
      };



  const uploadS_Adhar = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("S_Adhar", S_Adhar);
        formData.append("S_AdharName", S_AdharName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadS_Adhar",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };

      const uploadS_PAN = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("S_PAN", S_PAN);
        formData.append("S_PANName", S_PANName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadS_PAN",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadS_ECHS = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("S_ECHS", S_ECHS);
        formData.append("S_ECHSName", S_ECHSName);
        try {
          const res = await axios.post(
            "http://localhost:5000/uploadS_ECHS",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadS_Voter = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);


        formData.append("S_Voter", S_Voter);
        formData.append("S_VoterName", S_VoterName);


        try {
          const res = await axios.post(
            "http://localhost:5000/UploadS_Voter",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadS_PPO = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);

        formData.append("S_PPO", S_PPO);
        formData.append("S_PPOName", S_PPOName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadS_PPO",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const customStyle={
        color:'yellow'
      }

      return (
        <div className="center">
       <div class="wrapper fadeInDown">
       <div  id="form1Content">
      <form onSubmit={SpouseDocForm}>
{/*      //************************** HEADERS ******************************** */}
        <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
          <label className="header"> ESM Document Upload Page</label>
             <div className = "right-align dis">
              <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
             </div>
       </div>
  {/*    //************************** HEADERS ********************************  */}
<div className="upperForm1Content">
<div className="row">
<div>

        <FormLabel text={"Adhaar Card :"} />
          <div className="col-md-4 space box line">
          <input type="file" name='S_Adhar' onChange={saveS_Adhar} /><br/>
          <button className='btn btn-primary'style={{customStyle}} onClick={uploadS_Adhar}>Upload Adhaar</button>

          </div>

        <FormLabel text={"S_PAN Card :"} />
          <div className="col-md-4 box space">
          <input type="file" name='S_PAN' onChange={saveS_PAN} /><br/>
          <button className='btn btn-primary' onClick={uploadS_PAN}>Upload S_PAN</button>

          </div>

        <FormLabel text={"S_Voter Id :"} />
          <div className="col-md-4 box space">
          <input type="file" name='S_Voter' onChange={saveS_Voter} /><br/>
          <button className='btn btn-primary' onClick={uploadS_Voter}>Upload S_Voter</button>
          </div>

        <FormLabel text={"S_ECHS Card :"} />
          <div className="col-md-4  box space">
          <input type="file" name='S_ECHS' onChange={saveS_ECHS} /><br/>
          <button className='btn btn-primary' onClick={uploadS_ECHS}>Upload S_ECHS</button>

          </div>


            <FormLabel text={"S_PPO :"} />
              <div className="col-md-4 box space">
              <input type="file" name='S_PPO' onChange={saveS_PPO} /><br/>
              <button className='btn btn-secondary' onClick={uploadS_PPO}>Upload S_PPO</button>
              </div>







</div>
</div></div>
{/*      //************   FOOTERS *************************   */}

              <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
              <button className=" btn" ><Link to="/Form4">Back</Link> </button>
              <button className="btn my-2 my-sm-0 " type="submit">Next </button>
              </div>
{/*      //************   FOOTERS *************************   */}

      </form>
      </div>
      </div>
      </div>

      )
      }

      export default SpouseDocForm;
