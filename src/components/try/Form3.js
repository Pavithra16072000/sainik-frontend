import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../view/FormLabel";
import FormInput from "../view/FormInput";


const Form3 = () => {

    {/*const [Service_No, setService_No] = useState('');
    const [Father_Name, setFather_Name] = useState('');
    const [Mother_Name, setMother_Name] = useState('');
    const [Religion, setReligion] = useState('');
    const [Caste_Category, setCaste_Category] = useState('');
    const [Birth_Dist_Surname, setBirth_Dis_Surname] = useState('');
    const [Birth_Place, setBirth_Place] = useState('');
    const [Adhaar, setAdhaar] = useState('');
    const [Voter_Id, setVoter_Id] = useState('');
    const [PAN, setPAN] = useState('');
    const [CSD, setCSD] = useState('');
    const [ECHS, setECHS] = useState('');
    const [Id_Mark1, setId_Mark1] = useState('');
    const [Id_Mark2, setId_Mark2] = useState('');*/}
    const [msg, setMsg] = useState('');
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        getUsers();
    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/superForm1');
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

      <p className="has-text-centered">{msg}</p>
      {users.map((user, index) => (

      <div className="row"key={user.id}>
      <FormLabel text={"Service No"} />
      <FormInput value={user.Service_No} />

      <FormLabel text={"Reg Type"} />
      <FormInput value={user.Reg_Type} />

      <FormLabel text={"Service"} />
      <FormInput value={user.Service_Name} />

      <FormLabel text={"Corps Name"} />
      <FormInput value={user.Corps_Name} />

      <FormLabel text={"Record Office Name"} />
      <FormInput value={user.Record_Office_Name} />

      <FormLabel text={"Group Name"} />
      <FormInput value={user.Group_Name} />

      <FormLabel text={"Trade Name"} />
      <FormInput value={user.Trade_Name} />

      <FormLabel text={"Rank Name"} />
      <FormInput value={user.Rank_Name} />

      <FormLabel text={"Name"} />
      <FormInput value={user.Name} />

      <FormLabel text={"Gender"} />
      <FormInput value={user.Gender} />

      <FormLabel text={"DOB"} />
      <FormInput value={user.DOB} />
      <FormLabel text={"Enroll Date"} />
      <FormInput value={user.Enroll_Date} />
      <FormLabel text={"World War2"} />
      <FormInput value={user.World_War2} />
      <FormLabel text={"Opt Attend"} />
      <FormInput value={user.Opt_Attend} />
      <FormLabel text={"Deco"} />
      <FormInput value={user.Deco} />

      </div>
    ))}

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
