import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm1 = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');

    const [users, setUsers] = useState([]);
    const [S, setS] = useState([]);

    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
      getS();

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

    const getS = async () => {
        const response = await axiosJWT.get('http://localhost:5000/adminform_s');
        setS(response.data);
    }


    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Service Details</label>
      </div>
      <div className="upperForm1Content">


      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <div className = "right-align">
      <div >
      <label className="sn-mar">{"Service No"}</label>
      <input type="text" className="dis"   value={user.Service_No}/>
      </div>
      </div>

      <FormLabel text={"Service Name"} />
      <div className="col-lg-10 space">
      <input type="text"  value={user.Service_Name}/>
      </div>

      <FormLabel text={"Corps"} />
      <div className="col-lg-4 space">
      <input type="text"  value={user.Corps_Name}/>
      </div>


      <FormLabel text={"Record Office"} />
      <div className="col-lg-4 space">
      <input type="text"  value={user.Record_Office_Name}/>
      </div>

      <FormLabel text={"Group_Name"} />
      <div className="col-lg-4 space">
      <input type="text"  value={user.Group_Name}/>
      </div>

      <FormInput value={user.Group_Name} />

      <FormLabel text={"Trade_Name"} />
      <FormInput value={user.Trade_Name} />

      <FormLabel text={"Rank_Name"} />
      <FormInput value={user.Rank_Name} />

      <FormLabel text={"Name"} />
      <FormInput value={user.Name} />

      <FormLabel text={"Gender"} />
      <FormInput value={user.Gender} />

    {/*  <FormLabel text={"DOB"} />
      <FormInput value={user.DOB} />

      <FormLabel text={"Enroll_Date"} />
      <FormInput value={user.Enroll_Date} />

      <FormLabel text={"World_War2"} />
      <FormInput value={user.World_War2} />

      <FormLabel text={"Opt_Attend"} />
      <FormInput value={user.Opt_Attend} />

      <FormLabel text={"Deco"} />
      <FormInput value={user.Deco} />
*/}
      </div>
    ))}
    {S.map((user, index) => (

    <div className="row"key={user.id}>

    <div className = "right-align">
    <div >
    <label className="sn-mar">{"Service No"}</label>
    <input type="text" className="dis"   value={user.Service_No}/>
    </div>
    </div>

    <FormLabel text={"Service Name"} />
    <div className="col-lg-10 space">
    <input type="text"  value={user.Service}/>
    </div>
    <FormLabel text={"Corps"} />
    <div className="col-lg-4 space">
    <input type="text"  value={user.Corps}/>
    </div>


    <FormLabel text={"Record Office"} />
    <div className="col-lg-4 space">
    <input type="text"  value={user.Record_Office_Name}/>
    </div>

    <FormLabel text={"Group_Name"} />
    <div className="col-lg-4 space">
    <input type="text"  value={user.Group_Name}/>
    </div>

    <FormInput value={user.Group_Name} />

    <FormLabel text={"Trade_Name"} />
    <FormInput value={user.Trade} />

    <FormLabel text={"Rank_Name"} />
    <FormInput value={user.Rank} />

    <FormLabel text={"Name"} />
    <FormInput value={user.Name} />

    <FormLabel text={"Gender"} />
    <FormInput value={user.Gender} />

    </div>
  ))}

  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/SuperDash">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " ><Link to="/adminform2">Next</Link> </button>
    </div>
    </form>

</div>
</div>
<Corrections/>

</div>
</div>
    )
}

export default AdminForm1
