import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const DocForm = () => {
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
  const [D_Adhar, setD_Adhar] = useState();
  const [D_AdharName, setD_AdharName] = useState("");
  const [D_Adharpicture, setD_AdharPicture] = useState('');
  const [D_PAN, setD_PAN] = useState();
  const [D_PANName, setD_PANName] = useState("");
  const [D_PANpicture, setD_PANPicture] = useState('');
  const [D_ECHS, setD_ECHS] = useState();
  const [D_ECHSName, setD_ECHSName] = useState("");
  const [D_ECHSpicture, setD_ECHSPicture] = useState('');
  const [D_Voter, setD_Voter] = useState();
  const [D_VoterName, setD_VoterName] = useState("");
  const [D_Voterpicture, setD_VoterPicture] = useState('');


      const saveD_Adhar = (e) => {
        setD_Adhar(e.target.files[0]);
        setD_AdharName(e.target.files[0].name);
        setD_AdharPicture(URL.createObjectURL(e.target.files[0]));
      };


      const saveD_PAN = (e) => {
        setD_PAN(e.target.files[0]);
        setD_PANName(e.target.files[0].name);
        setD_PANPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveD_ECHS = (e) => {
        setD_ECHS(e.target.files[0]);
        setD_ECHSName(e.target.files[0].name);
        setD_ECHSPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveD_Voter = (e) => {
        setD_Voter(e.target.files[0]);
        setD_VoterName(e.target.files[0].name);
        setD_VoterPicture(URL.createObjectURL(e.target.files[0]));
      };



  const uploadD_Adhar = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("D_Adhar", D_Adhar);
        formData.append("D_AdharName", D_AdharName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadD_Adhar",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };

      const uploadD_PAN = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("D_PAN", D_PAN);
        formData.append("D_PANName", D_PANName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadD_PAN",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadD_ECHS = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("D_ECHS", D_ECHS);
        formData.append("D_ECHSName", D_ECHSName);
        try {
          const res = await axios.post(
            "http://localhost:5000/uploadD_ECHS",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadD_Voter = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);


        formData.append("D_Voter", D_Voter);
        formData.append("D_VoterName", D_VoterName);


        try {
          const res = await axios.post(
            "http://localhost:5000/UploadD_Voter",
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
      <form onSubmit={DocForm}>
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
          <input type="file" name='D_Adhar' onChange={saveD_Adhar} /><br/>
          <button className='btn btn-primary'style={{customStyle}} onClick={uploadD_Adhar}>Upload Adhaar</button>

          </div>

        <FormLabel text={"D_PAN Card :"} />
          <div className="col-md-4 box space">
          <input type="file" name='D_PAN' onChange={saveD_PAN} /><br/>
          <button className='btn btn-primary' onClick={uploadD_PAN}>Upload D_PAN</button>

          </div>

        <FormLabel text={"D_Voter Id :"} />
          <div className="col-md-4 box space">
          <input type="file" name='D_Voter' onChange={saveD_Voter} /><br/>
          <button className='btn btn-primary' onClick={uploadD_Voter}>Upload D_Voter</button>
          </div>

        <FormLabel text={"D_ECHS Card :"} />
          <div className="col-md-4  box space">
          <input type="file" name='D_ECHS' onChange={saveD_ECHS} /><br/>
          <button className='btn btn-primary' onClick={uploadD_ECHS}>Upload D_ECHS</button>

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

      export default DocForm;
