import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm4 = () => {
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
        const response = await axiosJWT.get('http://localhost:5000/adminform4',{
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
      <label className="header">Contact Details</label>
      </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Service No"} />
      <FormInput value={user.Service_No} />

      <FormLabel text={"State"} />
      <FormInput value={user.State} />

      <FormLabel text={"District"} />
      <FormInput value={user.District} />

      <FormLabel text={"Taluk_Name"} />
      <FormInput value={user.Taluk_Name} />

      <FormLabel text={"House_No"} />
      <FormInput value={user.House_No} />

      <FormLabel text={"House_Name"} />
      <FormInput value={user.House_Name} />

      <FormLabel text={"Street"} />
      <FormInput value={user.Street} />

      <FormLabel text={"Pincode"} />
      <FormInput value={user.Pincode} />

      <FormLabel text={"Police_Station"} />
      <FormInput value={user.Police_Station} />

      <FormLabel text={"Tele_No"} />
      <FormInput value={user.Tele_No} />

      <FormLabel text={"P_House_No"} />
      <FormInput value={user.P_House_No} />

      <FormLabel text={"P_House_Name"} />
      <FormInput value={user.P_House_Name} />

      <FormLabel text={"P_Street"} />
      <FormInput value={user.P_Street} />

      <FormLabel text={"P_Pincode"} />
      <FormInput value={user.P_Pincode} />

      <FormLabel text={"P_Police_Station"} />
      <FormInput value={user.P_Police_Station} />

      <FormLabel text={"P_State"} />
      <FormInput value={user.P_State} />

      <FormLabel text={"P_District"} />
      <FormInput value={user.P_District} />

      <FormLabel text={"P_Taluk_Name"} />
      <FormInput value={user.P_Taluk_Name} />

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform3">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/adminform5">Next</Link> </button>
    </div>
    </form>

</div>
</div>
<Corrections/>

</div>
</div>
    )
}

export default AdminForm4
