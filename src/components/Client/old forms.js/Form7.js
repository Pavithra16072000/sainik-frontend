import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const Form7 = () => {

    const [Service_No, setService_No] = useState('');
    const [Name, setName] = useState('');

    const [Dep_Name, setDep_Name] = useState('');
    const [Relation, setRelation] = useState('');
    const [Dep_DOB, setDep_DOB] = useState('');
    const [Dep_Adhaar, setDep_Adhaar] = useState('');
    const [Dep_Qualification, setDep_Qualification] = useState('');
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState('');
    const [Dep_Employment_Status, setDep_Employment_Status] = useState('');
    const [Dep_Marital_Status, setDep_Marital_Status] = useState('');
    const [dep, setdep] = useState([]);

    useEffect(() => {
        getdep();
    }, []);

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const axiosJWT = axios.create();

    const getdep = async () => {
        const response = await axiosJWT.get('http://localhost:5000/dep');
        setdep(response.data);
    }


    const Form7 = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_dependent_details', {
                Service_No:Service_No,
                Dep_Name: Dep_Name,
                Relation:Relation,
                Dep_DOB: Dep_DOB,
                Dep_Adhaar: Dep_Adhaar,
                Dep_Qualification: Dep_Qualification,
                Dep_Academic_Yr: Dep_Academic_Yr,
                Dep_Employment_Status: Dep_Employment_Status,
                Dep_Marital_Status: Dep_Marital_Status
            });
            await axios.post('http://localhost:5000/u_status_details', {
                Service_No:Service_No,
                 Name:localStorage.getItem('Name')

            });


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
    <form onSubmit={Form7}>
    <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
    <label className="header">Details of Family Members</label>
    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">
<div className = "right-align">
      <div >
      <label class="sn-mar">{"Service No"}</label>
      <input type="text"   name="Service_No" value={Service_No}onChange={(e) => setService_No(e.target.value)} required />
      <input type="text" name="Name"value={localStorage.getItem('Name')}onChange={(e) => setName(e.target.value)} required />

      </div>
      </div>

         <FormLabel text={"Dependent Name"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Dep_Name" value={Dep_Name} onChange={(e) => setDep_Name(e.target.value.toUpperCase())} />
         </div>
         <FormLabel text={"Relation"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Relation" value={Relation} onChange={(e) => setRelation(e.target.value.toUpperCase())} />
         </div>
         <FormLabel text={"Dependent DOB"} />

         <div className="col-lg-4 space">
         <input type="Date"  class="fadeIn second formInput" name="Dep_DOB" value={Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)} />
         </div>
         <FormLabel text={"Dependent Adhaar Card No."} />

         <div className="col-lg-4 space">
         <input type="number"  class="fadeIn second formInput" name="Dep_Adhaar" value={Dep_Adhaar} onChange={(e) => setDep_Adhaar(e.target.value)} />
         </div>
         <FormLabel text={"Dependent Qualification"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn second formInput" name="Dep_Qualification " value={Dep_Qualification} onChange={(e) => setDep_Qualification(e.target.value)} />
          </div>
          <FormLabel text={"Dependent Academic Year"} />

          <div className="col-lg-4 space">
          <input type="number"  class="fadeIn third formInput" name="Dep_Academic_Yr" value={Dep_Academic_Yr} onChange={(e) => setDep_Academic_Yr(e.target.value)} />
          </div>

          <FormLabel text={"Dependent Employment Status"} />
          <div className="col-lg-4 space">
          <input type="combobox"  class="fadeIn third formInput" name="Dep_Employment_Status" value={Dep_Employment_Status} onChange={(e) => setDep_Employment_Status(e.target.value)} required/>
          </div>

         <FormLabel text={"Dependent Marital Status"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Dep_Marital_Status" value={Dep_Marital_Status} onChange={(e) => setDep_Marital_Status(e.target.value)} required/>
          </div>

</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/form6">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">ADD </button>
    </div>
    </form>
</div>
</div>
<table className="table is-striped is-fullwidth">
    <thead>
        <tr>
        <th>Sl.No</th>
            <th>Dependent Name </th>
            <th>Relation</th>
            <th>Dependent DOB</th>
            <th>Dependent Adhaar</th>
            <th>Dependent Qualification</th>
            <th>Dependent Academic Year</th>
            <th>Dependent Employment Status</th>
            <th>Dependent Marital Status</th>
            <th>Action</th>


        </tr>
    </thead>
    <tbody>
        {dep.map((user, index) => (
            <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.Dep_Name}</td>
                <td>{user.Relation}</td>
                <td>{user.Dep_DOB}</td>
                <td>{user.Dep_Adhaar}</td>
                <td>{user.Dep_Qualification}</td>
                <td>{user.Dep_Academic_Yr}</td>
                <td>{user.Dep_Employment_Status}</td>
                <td>{user.Dep_Marital_Status}</td>

                <td>
                <a href="/Edit>">EDIT</a></td>
                  <td>
                <a href="/Add>"   >ADD</a></td>


            </tr>
        ))}

    </tbody>
</table>
</div>


    )
}

export default Form7
