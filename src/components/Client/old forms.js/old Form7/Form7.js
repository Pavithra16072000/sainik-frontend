/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Form7 = () => {
    // const [name, setName] = useState('');
     const [users, setUsers] = useState([]);
    // const [design, setDesign] = useState([]);
    // const [Designation, setDesignation] = useState([]);
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
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
    const [ADep_Name, setADep_Name] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        getUsers();
    }, []);



     const axiosJWT = axios.create();


    const getUsers = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/Form7',
          {
              params:{D_Service_No:sn}
          });
        setUsers(response.data);
    }

    const Edit = async (e) => {
        e.preventDefault();
        try {
            console.log(Service_No);
            localStorage.setItem('A_Dep_Name',Dep_Name);
            localStorage.setItem('A_Relation',Relation);
            localStorage.setItem('A_Dep_DOB',Dep_DOB);
            localStorage.setItem('A_Dep_Adhaar',Dep_Adhaar);
            localStorage.setItem('A_Dep_Qualification',Dep_Qualification);
            localStorage.setItem('A_Dep_Academic_Yr',Dep_Academic_Yr);
            localStorage.setItem('A_Dep_Employment_Status',Dep_Employment_Status);
            localStorage.setItem('A_Dep_Marital_Status',Dep_Marital_Status);

            navigate("/form7Edit");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    // function EditMouseHover(){
    //   setDep_Name(user.Dep_Name);
    //   setRelation(user.Relation);
    // }
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

        <div className="container mt-5">
                      <form onSubmit={Form7}>
                      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
                      <label className="header">Details of Family Members</label>
                              <div className = "right-align dis">


                       <div className = "right-align dis">
                        <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
                  </div>
                        <div className = "left-align dis">
                        <label className="sn-mar ">{"Name :"}</label> <h1>{Name}</h1>

                  </div>
                   </div>
                      </div>
                      <div class="card space for-btn">
                   <table className="table  is-fullwidth">
                   <thead>
                       <tr>
                       <th>Sl.No</th>
                       <th>Dependent Name</th>
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

                   {users.map((user, index) => (

                       <tbody>
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
                <td>  <button className="btn my-2 my-sm-0  view-align" onClick={Edit} onMouseEnter={function EditMouseHover(){
                    setDep_Name(user.Dep_Name);
                    setRelation(user.Relation);
                    setDep_DOB(user.Dep_DOB);
                    setDep_Adhaar(user.Dep_Adhaar);
                setDep_Qualification(user.Dep_Qualification);
                setDep_Academic_Yr(user.Dep_Academic_Yr);
                setDep_Employment_Status(user.Dep_Employment_Status);
                setDep_Marital_Status(user.Dep_Marital_Status);
              }}>Edit/Delete </button></td>
                       </tr>
                       </tbody>

                     ))}

                   </table>

                   </div>
                   </form>
                   <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>

                    <button className=" btn" ><Link to="/Form6">Back</Link> </button>
                    <button className="btn my-2 my-sm-0 " ><Link to="/Form8" >ADD </Link> </button>
                    <button className="btn my-2 my-sm-0 " type="submit">SUBMIT </button>


                   </div>
          </div>
          </div>

          </div>

    )
}

export default Form7
{/*        <div className="container mt-5">
            {users.map((user, index) => (
              <form onSubmit={Form7}>
              <div class="card space for-btn">
          <div className="card-header color"key={user.id}>
                  <h3 className='color' value={Dep_Name} onChange={(e) =>setDep_Name(user.Dep_Name)}> <strong> {user.Dep_Name} </strong></h3>
           </div>
            <div class="card-body row">
<span className="card-title col-sm-9">
           <table className="table  is-fullwidth">
           <thead>
               <tr>
               <th>Sl.No</th>

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
               <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.Dep_DOB}</td>
        <td>{user.Dep_Adhaar}</td>
        <td>{user.Dep_Qualification}</td>
        <td>{user.Dep_Academic_Yr}</td>
        <td>{user.Dep_Employment_Status}</td>
        <td>{user.Dep_Marital_Status}</td>
               </tr>
               </tbody>
           </table>
           </span>
            <button className="btn my-2 my-sm-0 col-sm-1 view-align" onClick={Edit} onMouseEnter={function EditMouseHover(){
              setDep_Name(user.Dep_Name);
              setRelation(user.Relation);
              setDep_DOB(user.Dep_DOB);
              setDep_Adhaar(user.Dep_Adhaar);
          setDep_Qualification(user.Dep_Qualification);
          setDep_Academic_Yr(user.Dep_Academic_Yr);
          setDep_Employment_Status(user.Dep_Employment_Status);
          setDep_Marital_Status(user.Dep_Marital_Status);
        }}>Edit/Delete </button>

           </div>
           </div>
           </form>

           ))}
  </div>*/}
