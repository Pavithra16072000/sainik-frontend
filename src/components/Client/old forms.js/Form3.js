import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const Form3 = () => {

    const [Service_No, setService_No] = useState('');
    const [Father_Name, setFather_Name] = useState('');
    const [Mother_Name, setMother_Name] = useState('');
    // const [Caste_Category, setCaste_Category] = useState('');
    // const [Birth_Dist_Surname, setBirth_Dis_Surname] = useState('');
    // const [Birth_Place, setBirth_Place] = useState('');
    const [Adhaar, setAdhaar] = useState('');
    const [Voter_Id, setVoter_Id] = useState('');
    const [PAN, setPAN] = useState('');
    const [CSD, setCSD] = useState('');
    const [ECHS, setECHS] = useState('');
    const [Id_Mark1, setId_Mark1] = useState('');
    const [Id_Mark2, setId_Mark2] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [religion, setReligion] = useState([]);

    const [caste, setCaste] = useState([]);
    const [birth_dist, setBirth_Dist] = useState([]);
    const [birth_places, setBirth_Places] = useState([]);

    useEffect(() => {
     getCaste();
     getBirth_Dist();
     getBirth_Places();
     getReligion();
     }, []);

    const axiosJWT = axios.create();
    const getReligion = async () => {
    const response = await axiosJWT.get('http://localhost:5000/religion_D');
    setReligion(response.data);
    }

    const getCaste = async () => {
    const response = await axiosJWT.get('http://localhost:5000/caste_D');
    setCaste(response.data);
    }

    const getBirth_Dist = async () => {
    const response = await axiosJWT.get('http://localhost:5000/birthdist_D');
    setBirth_Dist(response.data);
    }

    const getBirth_Places = async () => {
    const response = await axiosJWT.get('http://localhost:5000/birthplace_D');
    setBirth_Places(response.data);
    }

    const Form3 = async (e) => {  //defining the forms here
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_personal_details', {
                Service_No:Service_No,
                Father_Name: Father_Name,
                Mother_Name:Mother_Name,
                Religion: religion,
                Caste_Category: caste,
                Birth_Dist_Surname: birth_dist,
                Birth_Place: birth_places,
                Adhaar: Adhaar,
                Voter_Id: Voter_Id,
                PAN: PAN,
                CSD: CSD,
                ECHS: ECHS,
                Id_Mark1:Id_Mark1,
                Id_Mark2: Id_Mark2

            });
            navigate("/Form2");
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
      <form onSubmit={Form3}>

      <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
      <label className="header">Personal Details</label>
      </div>
      <div className="upperForm1Content">

      <p className="has-text-centered">{msg}</p>
      <div className="row">

      <div className = "right-align">
      <div >
      <label class="sn-mar">{"Service No"}</label>
      <input type="text"   name="Service_No" value={Service_No}onChange={(e) => setService_No(e.target.value)} disabled required/>
      </div>
      </div>


      <FormLabel text={"Father's Name"} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="Father_Name" value={Father_Name} onChange={(e) => setFather_Name(e.target.value)} />
      </div>

      <FormLabel text={"Mother's Name"} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="Mother_Name" value={Mother_Name} onChange={(e) => setMother_Name(e.target.value)} />
      </div>

      <FormLabel text={"Religion"} />
      <div className="col-lg-4 space">
      <select >
               {religion.map((user, index) => (
               <option key={user.id}value={user.Value}>{user.Value}</option>
               ))}
               </select>     </div>

      <FormLabel text={"Caste Category"} />
      <div className="col-lg-4 space">
<select >
         {caste.map((user, index) => (
         <option key={user.id}value={user.Service_No}>{user.Caste_Category}</option>
         ))}
         </select>       </div>

      <FormLabel text={"Birth District"} />
      <div className="col-lg-4 space">
<select >
         {birth_dist.map((user, index) => (
         <option key={user.id}value="s">{user.Birth_Dist_Surname}</option>
         ))}
         </select>       </div>

      <FormLabel text={"Birth Place"} />
      <div className="col-lg-4 space">
<select >
         {birth_places.map((user, index) => (

         <option key={user.id}value="s">{user.Birth_Place}</option>
         ))}
         </select>       </div>

      <FormLabel text={"Adhaar No."} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="Adhaar" value={Adhaar} onChange={(e) => setAdhaar(e.target.value)} />
      </div>

      <FormLabel text={"Voter ID No."} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="Voter_Id" value={Voter_Id} onChange={(e) => setVoter_Id(e.target.value)} />
      </div>

      <FormLabel text={"PAN No."} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="PAN" value={PAN} onChange={(e) => setPAN(e.target.value)} />
      </div>

      <FormLabel text={"CSD Card No."} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="CSD" value={CSD} onChange={(e) => setCSD(e.target.value)} />
      </div>

      <FormLabel text={"ECHS Card No."} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="ECHS" value={ECHS} onChange={(e) => setECHS(e.target.value)} />
      </div>

      <FormLabel text={"Identificaion Mark 1"} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="Id_Mark1" value={Id_Mark1} onChange={(e) => setId_Mark1(e.target.value)} />
      </div>

      <FormLabel text={"Identificaion Mark 2"} />
      <div className="col-lg-4 space">
      <input type="text"  class="fadeIn second formInput" name="Id_Mark2" value={Id_Mark2} onChange={(e) => setId_Mark2(e.target.value)} />
      </div>
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
