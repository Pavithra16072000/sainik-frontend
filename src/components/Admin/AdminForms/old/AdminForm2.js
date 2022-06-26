import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm2 = () => {
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
        const response = await axiosJWT.get('http://localhost:5000/adminform2',{
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
      <label className="header">Pension Details</label>
      </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Service No"} />
      <FormInput value={user.Service_No} />

      <FormLabel text={"Unit_Last_Served"} />
      <FormInput value={user.Unit_Last_Served} />

      <FormLabel text={"Discharge_Date"} />
      <FormInput value={user.Discharge_Date} />

      <FormLabel text={"Discharge_Reason"} />
      <FormInput value={user.Discharge_Reason} />

      <FormLabel text={"Discharge_Med_Cat"} />
      <FormInput value={user.Discharge_Med_Cat} />

      <FormLabel text={"Discharge_Character"} />
      <FormInput value={user.Discharge_Character} />

      <FormLabel text={"Discharge_Book_No"} />
      <FormInput value={user.Discharge_Book_No} />

      <FormLabel text={"If_Pensioner"} />
      <FormInput value={user.If_Pensioner} />

      <FormLabel text={"PPO_No"} />
      <FormInput value={user.PPO_No} />

      <FormLabel text={"Pension_Sanctioned"} />
      <FormInput value={user.Pension_Sanctioned} />

      <FormLabel text={"If_Sanctioned_Dis_Pension"} />
      <FormInput value={user.If_Sanctioned_Dis_Pension} />

      <FormLabel text={"Disability_Percentage"} />
      <FormInput value={user.Disability_Percentage} />

      <FormLabel text={"Disability_Pension"} />
      <FormInput value={user.Disability_Pension} />

      <FormLabel text={"Pension_AC_No"} />
      <FormInput value={user.Pension_AC_No} />

      <FormLabel text={"Bank_Name"} />
      <FormInput value={user.Bank_Name} />

      <FormLabel text={"Branch"} />
      <FormInput value={user.Branch} />

      <FormLabel text={"IFSC"} />
      <FormInput value={user.IFSC} />

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform1">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/adminform3">Next</Link> </button>
    </div>
    </form>

</div>
</div>
<Corrections/>

</div>
</div>
    )
}

export default AdminForm2
