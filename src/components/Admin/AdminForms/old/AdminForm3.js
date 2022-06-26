import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm3 = () => {
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
        const response = await axiosJWT.get('http://localhost:5000/adminform3',{
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
      <label className="header">Personal Details</label>
      </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Service No"} />
      <FormInput value={user.Service_No} />

      <FormLabel text={"Father_Name"} />
      <FormInput value={user.Father_Name} />

      <FormLabel text={"Mother_Name"} />
      <FormInput value={user.Mother_Name} />

      <FormLabel text={"Religion"} />
      <FormInput value={user.Religion} />

      <FormLabel text={"Caste_Category"} />
      <FormInput value={user.Caste_Category} />

      <FormLabel text={"Birth_Dist_Surname"} />
      <FormInput value={user.Birth_Dist_Surname} />

      <FormLabel text={"Birth_Place"} />
      <FormInput value={user.Birth_Place} />

      <FormLabel text={"Adhaar"} />
      <FormInput value={user.Adhaar} />

      <FormLabel text={"Voter_Id"} />
      <FormInput value={user.Voter_Id} />

      <FormLabel text={"PAN"} />
      <FormInput value={user.PAN} />

      <FormLabel text={"CSD"} />
      <FormInput value={user.CSD} />

      <FormLabel text={"ECHS"} />
      <FormInput value={user.ECHS} />

      <FormLabel text={"Id_Mark1"} />
      <FormInput value={user.Disability_Pension} />

      <FormLabel text={"Id_Mark2"} />
      <FormInput value={user.Pension_AC_No} />

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform2">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/adminform4">Next</Link> </button>
    </div>
    </form>

</div>
</div>
<Corrections/>

</div>
</div>
    )
}

export default AdminForm3
