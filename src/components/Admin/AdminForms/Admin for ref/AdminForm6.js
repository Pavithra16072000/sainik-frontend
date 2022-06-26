import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm6 = () => {
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
        const response = await axiosJWT.get('http://localhost:5000/adminform6',{
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
      <label className="header">Spouse Details</label>
      </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Service No"} />
      <FormInput value={user.Service_No} />

      <FormLabel text={"Marital_Status"} />
      <FormInput value={user.Marital_Status} />

      <FormLabel text={"Marriage_Date"} />
      <FormInput value={user.Marriage_Date} />

      <FormLabel text={"Spouse_Name"} />
      <FormInput value={user.Spouse_Name} />

      <FormLabel text={"Spouse_Relation"} />
      <FormInput value={user.Spouse_Relation} />

      <FormLabel text={"Spouse_DOB"} />
      <FormInput value={user.Spouse_DOB} />

      <FormLabel text={"Spouse_Id_Mark"} />
      <FormInput value={user.Spouse_Id_Mark} />

      <FormLabel text={"Spouse_Qualification"} />
      <FormInput value={user.Spouse_Qualification} />

      <FormLabel text={"Spouse_Emp_Status"} />
      <FormInput value={user.Spouse_Emp_Status} />

      <FormLabel text={"Spouse_Emp_Profession"} />
      <FormInput value={user.Spouse_Emp_Profession} />

      <FormLabel text={"Spouse_Retirement_Date"} />
      <FormInput value={user.Spouse_Retirement_Date} />

      <FormLabel text={"Spouse_Adhaar"} />
      <FormInput value={user.Spouse_Adhaar} />

      <FormLabel text={"Spouse_Voter_Id"} />
      <FormInput value={user.Spouse_Voter_Id} />

      <FormLabel text={"Spouse_PAN"} />
      <FormInput value={user.Spouse_PAN} />

      <FormLabel text={"Spouse_CSD"} />
      <FormInput value={user.Spouse_CSD} />

      <FormLabel text={"Spouse_ECHS"} />
      <FormInput value={user.Spouse_ECHS} />

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform5">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/adminform7">Next</Link> </button>
    </div>
    </form>

</div>
</div>
<Corrections/>

</div>
</div>
    )
}

export default AdminForm6
