import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm7 = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/adminform7',{
          params:{
            A_Service_No: sn
          }
        });
        setUsers(response.data);
    }
    const ad=localStorage.getItem('A_Designation');
    const sendEmail = (e) => {

    e.preventDefault();

        emailjs.sendForm('service_kgpr6mm', 'template_6bl6sjb', e.target, 'HaFC-IRHQSI8N8--K')
          .then((result) => {
              console.log('SUCCESS!',result.text);
          }, (error) => {
              console.log('FAILED...',error.text);
          });
          e.target.reset()

    };


    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Dependent Details</label>
      </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Service No"} />
      <FormInput value={user.Service_No} />

      <FormLabel text={"Name"} />
      <FormInput value={user.Name} />

      <FormLabel text={"Dep_Name"} />
      <FormInput value={user.Dep_Name} />

      <FormLabel text={"Relation"} />
      <FormInput value={user.Relation} />

      <FormLabel text={"Dep_DOB"} />
      <FormInput value={user.Dep_DOB} />

      <FormLabel text={"Dep_Adhaar"} />
      <FormInput value={user.Dep_Adhaar} />

      <FormLabel text={"Dep_Qualification"} />
      <FormInput value={user.Dep_Qualification} />

      <FormLabel text={"Dep_Academic_Yr"} />
      <FormInput value={user.Dep_Academic_Yr} />

      <FormLabel text={"Dep_Employment_Status"} />
      <FormInput value={user.PPO_No} />

      <FormLabel text={"Dep_Marital_Status"} />
      <FormInput value={user.Dep_Marital_Status} />

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform6">Back</Link> </button>
  {/*  <button className="btn my-2 my-sm-0 " type="submit">Done </button>*/}
{/*<button className="btn my-2 my-sm-0 " type="submit"><Link to="#verified">Done</Link> </button>*/}
    </div>

</div>
</div>
<Corrections/>
<form onSubmit={sendEmail}>

        <input type="text"  class="fadeIn third textInput"   autocomplete ="off"  name="Mail_Id"  value={Mail_Id} onChange={(e) => setMail_Id(e.target.value)} />
        <button className = "btn btn-primary"  type="submit" >  SEND QUERY TO USER</button>
</form>

</div>
</div>
    )
}

export default AdminForm7
