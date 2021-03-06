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
    const [Service_No, setService_No] = useState(localStorage.getItem('A_Service_No'));
    const [Name, setName] = useState(localStorage.getItem('A_Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/adminform1',{
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

       <div className = "right-align dis">
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label>{Name}&nbsp;<br/>
       </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Civil Qualification"} />
      <div className="col-lg-4 space">
      <FormInput value={user.vCivil_Qualification} />
      </div>

      <FormLabel text={"Additional Course"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Addi_Course} />
      </div>

      <FormLabel text={"Equivalent Test passed"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Equi_Test} />
      </div>

      <FormLabel text={"Civil Employment Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Civil_Emp_Status} />
      </div>

      <FormLabel text={"Department"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dept} />
      </div>

      <FormLabel text={"Present Designation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Pres_Desg} />
      </div>

      <FormLabel text={"Employer"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Employer} />
      </div>

      <FormLabel text={"Monthly Income"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Month_Income} />
      </div>

      <FormLabel text={"Official No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Official_No} />
      </div>

      <FormLabel text={"Designation Retirement"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Desg_Retire} />
      </div>

      <FormLabel text={"Retirement Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Retire_Date} />
      </div>

      <FormLabel text={"Civil PPO No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Civil_PPO_No} />
      </div>

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
