import React, { useState, useEffect} from 'react'
import axios from "axios";
import {Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const Form3 = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers();
    }, []);

    const axiosJWT = axios.create();
    const getUsers = async () => {

        const response = await axiosJWT.get('http://localhost:5000/dropdown');
        setUsers(response.data);
    }

    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form onSubmit={Form3}>

      <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
      <label className="header">Personal Details</label>
      </div>
      <div className="upperForm1Content">

      <FormLabel text={"Service"} />
      <div className="col-md-10 space">
         <select >
         {users.map((user, index) => (

         <option key={user.id}value="s">{user.Service_No}</option>
         ))}
         </select>
         <select >
         {users.map((user, index) => (

         <option key={user.id}value="s">{user.Service_Name}</option>
         ))}
         </select>

     </div>

      </div>
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/form2">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>

    </div>
    </form>

</div>
</div>
</div>
    )
}

export default Form3
