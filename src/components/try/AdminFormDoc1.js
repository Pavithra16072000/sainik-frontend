import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminFormDoc1 = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [img, setImg] = useState();

    const [pdf, setPdf] = useState();
    const [users, setUsers] = useState([]);
    const [S, setS] = useState([]);

    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      fetchImage();

      getUsers();


    }, []);



    const axiosJWT = axios.create();

    const getUsers = async () => {
         const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/adminformdoc',{
          params:{
            A_Service_No: 'ch98765ec'
          }
        });
        setUsers(response.data);
    }

    const imageUrl ='http://127.0.0.1:5000/images/'+users[1]
    console.log(imageUrl);

    const fetchImage = async () => {
      const res = await fetch(imageUrl);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };
    localStorage.setItem('image',img);
    console.log(users[0]);

    const fetchpdf = async () => {
     const apiURL = users[0];

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
    const fetchim = async () => {
     const im = imageUrl;

      axios(`${im}`, {
          method: 'GET',
          responseType: 'blob' //Force to receive data in a Blob Format
      })
      .then(response => {
      // //Create a Blob from the PDF Stream
          const file = new Blob(
            [response.data],
            {type: 'application/png'});
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
<>
      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Service Details</label>
      </div>
      <div className="upperForm1Content">


    <div className="row"key={users.id}>

    <div className = "right-align">
    <div >
    <label className="sn-mar">{"Service No"}</label>
    <input type="text" className="dis"   value={users.Service_No}/>
    </div>
    </div>

    <FormLabel text={"Service Name"} />
    <div className="col-lg-10 space">
    <input type="text"  value={users[0]}/>
    </div>
    <FormLabel text={"Corps"} />

    </div>
  <img src={users[3]} alt={users[3]} width='350' />

  <button onClick={fetchpdf}>Open file</button>
  <button onClick={()=> window.open(users[3], "_blank")}>Open image</button>


  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/SuperDash">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " ><Link to="/adminform2">Next</Link> </button>
    </div>


</div>
</div>
<Corrections/>

</div>
</div>
</>
    )
}

export default AdminFormDoc1
