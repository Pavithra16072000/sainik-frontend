import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm5 = () => {
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
        const response = await axiosJWT.get('http://localhost:5000/adminform5',{
          params:{
            A_Service_No: sn
          }
        });
        setUsers(response.data);
    }

    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Employment Details</label>
      </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Service No"} />
      <FormInput value={user.Service_No} />

      <FormLabel text={"Civil_Qualification"} />
      <FormInput value={user.Civil_Qualification} />

      <FormLabel text={"Addi_Course"} />
      <FormInput value={user.Addi_Course} />

      <FormLabel text={"Equi_Test"} />
      <FormInput value={user.Equi_Test} />

      <FormLabel text={"Civil_Emp_Status"} />
      <FormInput value={user.Civil_Emp_Status} />

      <FormLabel text={"Dept"} />
      <FormInput value={user.Dept} />

      <FormLabel text={"Pres_Desg"} />
      <FormInput value={user.Pres_Desg} />

      <FormLabel text={"Employer"} />
      <FormInput value={user.Employer} />

      <FormLabel text={"Month_Income"} />
      <FormInput value={user.Month_Income} />

      <FormLabel text={"Official_No"} />
      <FormInput value={user.Official_No} />

      <FormLabel text={"Desg_Retire"} />
      <FormInput value={user.Desg_Retire} />

      <FormLabel text={"Retire_Date"} />
      <FormInput value={user.Retire_Date} />

      <FormLabel text={"Civil_PPO_No"} />
      <FormInput value={user.Civil_PPO_No} />

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform4">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/adminform6">Next</Link> </button>
    </div>
    </form>

</div>
</div>
<Corrections/>

</div>
</div>
    )
}

export default AdminForm5
