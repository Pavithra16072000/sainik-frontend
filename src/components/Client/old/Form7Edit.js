import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormDisplay from "./Form0"
import FormInput from "../../view/FormInput";



const Form7Edit = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState('');
    const [Dep_Name, setDep_Name] = useState(localStorage.getItem('A_Dep_Name'));
    const [Relation, setRelation] = useState(localStorage.getItem('A_Relation'));
        const [Relate, setRelate] = useState('');

    const [Dep_DOB, setDep_DOB] = useState(localStorage.getItem('A_Dep_DOB'));
    const [Dep_Adhaar, setDep_Adhaar] = useState(localStorage.getItem('A_Dep_Adhaar'));
    const [Dep_Qualification, setDep_Qualification] = useState(localStorage.getItem('A_Dep_Qualification'));
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState(localStorage.getItem('A_Dep_Academic_Yr'));
    const [Dep_Employment_Status, setDep_Employment_Status] = useState(localStorage.getItem('A_Dep_Employment_Status'));
    const [Dep_Marital_Status, setDep_Marital_Status] = useState(localStorage.getItem('A_Dep_Marital_Status'));
    const [dep, setdep] = useState([]);

    const gotoBackToStep7 = () => navigate("/new/step-7", { replace: true })
    const submitForm = () => navigate("/", { replace: true })

    // useEffect(() => {
    //       getUsers();
    //   }, []);
    //  const axiosJWT = axios.create();
    //   const getUsers = async () => {
    //     const sn=localStorage.getItem('Service_No');
    //     const response = await axiosJWT.get('http://localhost:5000/form8dep',
    //         {
    //             params:{D_Service_No:sn}
    //         });
    //       setdep(response.data);
    //   }

const RELATION = ['Father', 'Mother', 'Daughter', 'Son'];
const MARITAL_STATUS = ['Single', 'Married', 'Divorced', 'Widower/Widow'];

const onAcademicChange = (e) =>  {
    const p = /^[0-9]+$/;
    if (e.target.value === "" || p.test(e.target.value))
    {

        setDep_Academic_Yr(e.target.value);
    }

}

const onAdhaarChange = (e) =>  {
    const a = /^[0-9]+$/;
    if (e.target.value === "" || a.test(e.target.value))
    {
     setDep_Adhaar(e.target.value);
    }

}

    const onRelationChange = (e) =>  {
        setRelation(e.target.value);
        switch(e.target.value) {
            case "Father":
                setDep_Marital_Status("Married")
                break
            case "Mother":
                setDep_Marital_Status("Married")
                break
            default:
                setDep_Marital_Status("")
        }
    }

    useEffect(() => {
        getdep();
    }, []);

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const axiosJWT = axios.create();

    const getdep = async () => {
      const sn=localStorage.getItem('A_Dep_Name');
      const response = await axiosJWT.get('http://localhost:5000/form8dep',
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }

 const Form7Edit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/Form7Edit', {
                Service_No:Service_No,
                checkDep_Name: localStorage.getItem('A_Dep_Name'),
                Dep_Name: Dep_Name,
                Relation:Relation,
                Dep_DOB: Dep_DOB,
                Dep_Adhaar: Dep_Adhaar,
                Dep_Qualification: Dep_Qualification,
                Dep_Academic_Yr: Dep_Academic_Yr,
                Dep_Employment_Status: Dep_Employment_Status,
                Dep_Marital_Status: Dep_Marital_Status
            });

 navigate("/Form7");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const Delete = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/Form7Delete', {
              Service_No:Service_No,
              checkDep_Name: Dep_Name

          });
            navigate("/Form7");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
    <div className="center">
    <div class="wrapper fadeInDown">
    <div id="form1Content" >
    <form onSubmit={Form7Edit}>
    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Details of Family Members</label>
 </div>
 <div className="row">


 <FormLabel text={"Dep_Name"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn third formInput"  autocomplete = "off" name="Dep"value={Dep_Name} onChange={(e) => setDep_Name(e.target.value)} />
 </div>

 <FormLabel text={"Relation"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn third formInput"  autocomplete = "off" name="DOB"value={Relation} onChange={(e) => setRelation(e.target.value)} />
 </div>

 <FormLabel text={"Dep_DOB"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn third formInput"  autocomplete = "off" name="DOB"value={Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)} />
 </div>

 <FormLabel text={"Dep_Adhaar"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn third formInput"  autocomplete = "off" name="DOB"value={Dep_Adhaar} onChange={(e) => setDep_Adhaar(e.target.value)} />
 </div>

 <FormLabel text={"Dep_Qualification"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn third formInput"  autocomplete = "off" name="DOB"value={Dep_Qualification} onChange={(e) => setDep_Qualification(e.target.value)} />
 </div>

 <FormLabel text={"Dep_Academic_Yr"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn third formInput"  autocomplete = "off" name="DOB"value={Dep_Academic_Yr} onChange={(e) => setDep_Academic_Yr(e.target.value)} />
 </div>

 <FormLabel text={"Dep_Employment_Status"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn third formInput"  autocomplete = "off" name="DOB"value={Dep_Employment_Status} onChange={(e) => setDep_Employment_Status(e.target.value)} />
 </div>

 <FormLabel text={"Dep_Marital_Status"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn third formInput"  autocomplete = "off" name="DOB"value={Dep_Marital_Status} onChange={(e) => setDep_Marital_Status(e.target.value)} />
 </div>

    </div>
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/Form7">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "  onClick={Form7Edit}>Edit </button>
    <button className="btn my-2 my-sm-0 col-sm-1 view-align" onClick={Delete} >Delete </button>

    </div>
    </form>
</div>
</div>

</div>


    )
}
export default Form7Edit
