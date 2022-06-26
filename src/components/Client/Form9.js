import React,{useState,useEffect} from 'react'
import axios from 'axios';
//getimg
//
import { Link } from "react-router-dom";

import FormLabel from "../../view/FormLabel";

const FileUpload = () => {
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
      const [Discharge_Book, setDischarge_Book] = useState();
      const [Discharge_BookName, setDischarge_BookName] = useState("");
      const [Discharge_Bookpicture, setDischarge_BookPicture] = useState('');
      const [PPO, setPPO] = useState();
      const [PPOName, setPPOName] = useState("");
      const [PPOpicture, setPPOPicture] = useState('');
      const [Adhar, setAdhar] = useState();
      const [AdharName, setAdharName] = useState("");
      const [Adharpicture, setAdharPicture] = useState('');
      const [PAN, setPAN] = useState();
      const [PANName, setPANName] = useState("");
      const [PANpicture, setPANPicture] = useState('');
      const [ECHS, setECHS] = useState();
      const [ECHSName, setECHSName] = useState("");
      const [ECHSpicture, setECHSPicture] = useState('');
      const [Voter, setVoter] = useState();
      const [VoterName, setVoterName] = useState("");
      const [Voterpicture, setVoterPicture] = useState('');

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
      const saveAdhar = (e) => {
        setAdhar(e.target.files[0]);
        setAdharName(e.target.files[0].name);
        setAdharPicture(URL.createObjectURL(e.target.files[0]));
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

      const uploadDischarge_Book = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);

        formData.append("Discharge_Book", Discharge_Book);
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

      //get img
      const [users, setUsers] = useState([]);
      const [msg, setMsg] = useState('');
      useEffect(() => {
        getUsers();
        fetchImage();

  //      getimg();
      }, []);
    const axiosJWT = axios.create();
      const getUsers = async () => {
          const sn = localStorage.getItem('A_Service_No')
           const response = await axiosJWT.get('http://localhost:5000/getimg',{
            params:{
              A_Service_No: sn
            }
          }
        );
         setUsers(response.data);

  }
  const [img, setImg] = useState();
  const [pdf, setPdf] = useState();
  const u='swayam fee paid.pdf'
  const apiURL = "http://127.0.0.1:5000/images/"+u;
  const imageUrl = "http://127.0.0.1:5000/images/"+users;
//file-1652624167311.jpgs
  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  //get pdf
  const fetchpdf = async () => {
  axios(`${apiURL}`, {
      method: 'GET',
      responseType: 'blob' //Force to receive data in a Blob Format
  })
  .then(response => {
  //Create a Blob from the PDF Stream
      const file = new Blob(
        [response.data],
        {type: 'application/pdf'});
  //Build a URL from the file
      const pdf = URL.createObjectURL(file);
  //Open the URL on new Window
      window.open(pdf);
  })
  .catch(error => {
      console.log(error);
  });

  };

      return (
        <div className="App">
        {/**/}<div className="upperForm1Content">
        <label>uploaded img</label>
        <label>{users}</label>
        <img className="playerProfilePic_home_tile" name="myImage" src={users} style= {{width : "200px"}}></img>
        </div>

        <img className="playerProfilePic_home_tile" src={img} alt="icons" style= {{width : "200px"}} />
    <button onClick={fetchpdf}>Open file</button>
//form

<div className="center">
<div class="wrapper fadeInDown">
<div  id="form1Content">
<div>
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
  <input type="file" name='Adhar' onChange={saveAdhar} /><br/>
  <button className='btn btn-primary' onClick={uploadAdhar}>Upload Adhaar</button>

  </div>

<FormLabel text={"PAN Card :"} />
  <div className="col-md-4 box space">
  <input type="file" name='PAN' onChange={savePAN} /><br/>
  <button className='btn btn-primary' onClick={uploadPAN}>Upload PAN</button>

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
</div>

//end of form

          <input type="file" name='Discharge_Book' onChange={saveDischarge_Book} />
          <button className='btn btn-info' onClick={uploadDischarge_Book}>Upload Discharge_Book</button>

          <input type="file" name='PPO' onChange={savePPO} />
          <button className='btn' onClick={uploadPPO}>Upload</button>

          <input type="file" name='Adhar' onChange={saveAdhar} />
          <button className='btn' onClick={uploadAdhar}>Upload</button>

          <input type="file" name='PAN' onChange={savePAN} />
          <button className='btn' onClick={uploadPAN}>Upload</button>

          <input type="file" name='ECHS' onChange={saveECHS} />
          <button className='btn' onClick={uploadECHS}>Upload</button>

          <input type="file" name='Voter' onChange={saveVoter} />

          <div className="previewProfilePic" >
            <img className="playerProfilePic_home_tile"  src={Voterpicture} style= {{width : "200px"}}></img>
          </div>
          <button className='btn' onClick={uploadVoter}>Upload</button>
        </div>
      );
}

export default FileUpload;
