import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";
import File from "../../../view/file";


const ADocForm1 = () => {
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
          A_Service_No: sn
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
  const apiURL = users[1];

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
<>{/**/}
    <div className="footer-body">
    <div className="center">
    <div class="wrapper fadeInDown">
    <div id="form1Content" >



      {/* //************************** HEADERS *********************************/}
          <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
            <label className="header"> ESM Document Upload Page</label>
               <div className = "right-align dis">
                <label className="sn-mar">{"Service No :"}</label> <p>{users[0]}</p>
               </div>
         </div>
    {/*    //************************** HEADERS ********************************  */}

<div>
        <FormLabel text={"Adhaar Card :"} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[1]}/>
        <File v={users[1]} name={'Adhar'}></File>

        </div>


        <FormLabel text={"Voter ID:"} />
        <div className="col-md-4 space box line">
        {/*<img src={users[3]} alt={users[3]} width='350' />*/}
        <input type="text"  value={users[2]}/>
        <File v={users[2]}name={'voter'}></File>

        </div>

        <FormLabel text={"PAN :"} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[3]}/>
        <File v={users[3]}name={'PAN'}></File>

        </div>

        <FormLabel text={"PPO "} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[4]}/>
        <File v={users[4]}></File>

        </div>

        <FormLabel text={"ECHS :"} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[5]}/>
        <File v={users[5]}></File>

        </div>


        <FormLabel text={"Discharge Book :"} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[6]}/>
        <File v={users[6]}></File>

        </div>

<button onClick={fetchpdf}>Open file</button>
<File v={users[1]}></File>

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

export default ADocForm1
