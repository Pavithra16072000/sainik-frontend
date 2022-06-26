import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
// import ButtonUpload from "../../view/ButtonUpload";


const DocForm = () => {
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
  const [Adhar, setAdhar] = useState();
  const [AdharName, setAdharName] = useState("");
  const [Adharpicture, setAdharPicture] = useState('');
  const [Discharge_Book, setDischarge_Book] = useState();
  const [Discharge_BookName, setDischarge_BookName] = useState("");
  const [Discharge_Bookpicture, setDischarge_BookPicture] = useState('');
  const [PPO, setPPO] = useState();
  const [PPOName, setPPOName] = useState("");
  const [PPOpicture, setPPOPicture] = useState('');
  const [PAN, setPAN] = useState();
  const [PANName, setPANName] = useState("");
  const [PANpicture, setPANPicture] = useState('');
  const [ECHS, setECHS] = useState();
  const [ECHSName, setECHSName] = useState("");
  const [ECHSpicture, setECHSPicture] = useState('');
  const [Voter, setVoter] = useState();
  const [VoterName, setVoterName] = useState("");
  const [Voterpicture, setVoterPicture] = useState('');
const [disabled, setDisabled] = useState(false);
function handleGameClick() {
  setDisabled(!disabled);
}

      const saveAdhar = (e) => {
        setAdhar(e.target.files[0]);
        setAdharName(e.target.files[0].name);
        setAdharPicture(URL.createObjectURL(e.target.files[0]));
      };

      const saveDischarge_Book = (e) => {
        setDischarge_Book(e.target.files[0]);
        setDischarge_BookName(e.target.files[0].name);
        setDischarge_BookPicture(URL.createObjectURL(e.target.files[0]));
      };
      const savePPO = (e) => {
        setPPO(e.target.files[0]);
        setPPOName(e.target.files[0].name);
        setPPOPicture(URL.createObjectURL(e.target.files[0]));
      };

      const savePAN = (e) => {
        setPAN(e.target.files[0]);
        setPANName(e.target.files[0].name);
        setPANPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveECHS = (e) => {
        setECHS(e.target.files[0]);
        setECHSName(e.target.files[0].name);
        setECHSPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveVoter = (e) => {
        setVoter(e.target.files[0]);
        setVoterName(e.target.files[0].name);
        setVoterPicture(URL.createObjectURL(e.target.files[0]));
      };



  const uploadAdhar = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("Adhar", Adhar);
        formData.append("AdharName", AdharName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadAdhar",
            formData
          );
          console.log(res);

        } catch (ex) {
          console.log(ex);
        }
      };

      const uploadPAN = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("PAN", PAN);
        formData.append("PANName", PANName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadPAN",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadECHS = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("ECHS", ECHS);
        formData.append("ECHSName", ECHSName);
        try {
          const res = await axios.post(
            "http://localhost:5000/uploadECHS",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadVoter = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);


        formData.append("Voter", Voter);
        formData.append("VoterName", VoterName);


        try {
          const res = await axios.post(
            "http://localhost:5000/UploadVoter",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadDischarge_Book = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);

        formData.append("Discharge_Book", Discharge_Book,Service_No);
        formData.append("Discharge_BookName", Discharge_BookName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadDischarge_Book",
            formData
          );

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadPPO = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);

        formData.append("PPO", PPO);
        formData.append("PPOName", PPOName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadPPO",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };

      const [style, setStyle] = useState("btn btn-primary");
      const [disable, setDisable] = useState(false);

      const [buttonText, setButtonText] = useState("Upload"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

        const changeStyle = () => {
          console.log("you just clicked");
           setButtonText("uploaded");
 setDisable(true)

          setStyle("btn btn-secondary");
        };
        // const [buttonText, setButtonText] = useState("Next"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
        //
        // const changeText = (text) => setButtonText(text);


        const CuploadAdhar = async (e) => {
              uploadAdhar();
              changeStyle();
              handleGameClick();
            };

      return (
        <div className="center">
       <div class="wrapper fadeInDown">
       <div  id="form1Content">

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
          <div className="col-md-4 space box line"disabled={disabled}>
          <input type="file" name='Adhar' onChange={saveAdhar}disabled={disabled} /><br/>
          <button className={style} onClick={CuploadAdhar}>{buttonText}</button>
{/*<ButtonUpload call={CuploadAdhar}></ButtonUpload>*/}
          </div>

        <FormLabel text={"PAN Card :"} />
          <div className="col-md-4 box space">
          <input type="file" name='PAN' onChange={savePAN} /><br/>
          <button className='btn btn-primary' onClick={uploadPAN}>Upload PAN</button>
            <button >{buttonText}</button>
          </div>

        <FormLabel text={"Voter Id :"} />
          <div className="col-md-4 box space">
          <input type="file" name='Voter' onChange={saveVoter} /><br/>
          <button className='btn btn-primary' onClick={uploadVoter}>Upload Voter</button>
          </div>

        <FormLabel text={"ECHS Card :"} />
          <div className="col-md-4  box space">
          <input type="file" name='ECHS' onChange={saveECHS} /><br/>
          <button className='btn btn-primary' onClick={uploadECHS}>Upload ECHS</button>

          </div>


          <FormLabel text={"Discharge Book :"} />
            <div className="col-md-4 box space">
            <input type="file" name='Discharge_Book' onChange={saveDischarge_Book} /><br/>
            <button className='btn btn-primary' onClick={uploadDischarge_Book}>Upload Discharge_Book</button>

            </div>

            <FormLabel text={"PPO :"} />
              <div className="col-md-4 box space">
              <input type="file" name='PPO' onChange={savePPO} /><br/>
              <button className='btn btn-secondary' onClick={uploadPPO}>Upload PPO</button>
              </div>







</div>
</div></div>
{/*      //************   FOOTERS *************************   */}

              <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
              <button className=" btn" ><Link to="/Form4">Back</Link> </button>
              <button className="btn my-2 my-sm-0 " ><Link to="/Form9">Back</Link> </button>
              </div>
{/*      //************   FOOTERS *************************   */}


      </div>
      </div>
      </div>

      )
      }

      export default DocForm;
