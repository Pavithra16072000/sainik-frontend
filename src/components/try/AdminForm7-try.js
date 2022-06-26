import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";
import emailjs from 'emailjs-com';


const AdminForm7 = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_No, setService_No] = useState('111');
    const [Name, setName] = useState(localStorage.getItem('A_Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');
    const [Mail_Id, setMail_Id] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
      // getMail();
    }, []);

   

  

    const axiosJWT = axios.create();

    // const sn = localStorage.getItem('A_Service_No')

    const getUsers = async () => {
         const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/adminform7',{
          params:{
            A_Service_No: '111'
          }
        });
        setUsers(response.data);
    }
    const ad=localStorage.getItem('A_Designation');

    const Recommend = async (e) => {
        e.preventDefault();
        const sn = localStorage.getItem('A_Service_No')

        try {
            await axios.post('http://localhost:5000/recommend', {
                Service_No:sn
            });
            navigate("/superDash");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Dependent Details</label>
      </div>
         <div className = "right-align dis">
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label>{Name}&nbsp;<br/>
       </div>

      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Dependent Name"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Name} />
      </div>

      <FormLabel text={"Relation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Relation} />
      </div>

      <FormLabel text={"Dependent DOB"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_DOB} />
      </div>

      <FormLabel text={"Dependent Adhaar No "} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Adhaar} />
      </div>

      <FormLabel text={"Dependent Qualification"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Qualification} />
      </div>

      <FormLabel text={"Dependent Academic Yr"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Academic_Yr} />
      </div>

      <FormLabel text={"Dependent Employment Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Employment_Status} />
      </div>

      <FormLabel text={"Dependent Marital Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Marital_Status} />
      </div>

      </div>
    ))}
  </div>
 {/* <input type="email"  class="  textInput"   autocomplete ="off"  name="Mail_Id"  value={Mail_Id} onChange={(e) => setMail_Id(e.target.value)} />
*/}
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform6">Back</Link> </button>

    {
        (() => {
            if(ad == "Clerk") {
                    return (


                      <button id="verified"className="btn my-2 my-sm-0  " type="submit">Verify </button>

                    )
                } else if (ad == "Superintendent") {
                    return (

                      <button id="verified"onClick={Recommend}className="btn my-2 my-sm-0  "  type="submit">Recommend </button>
                    )
                } else {
                    return (

                      <button id="verified"className="btn my-2 my-sm-0 view-align "  type="submit">Approve </button>

                    )
                }
        })()
    }


    

    </div>
    </form>

</div>
</div>
<Corrections/>


</div>
</div>
    )
}

export default AdminForm7
