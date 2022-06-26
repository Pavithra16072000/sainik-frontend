/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, Link } from 'react-router-dom';

const SuperDash = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);
    const [Service_No, setService_No] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        getUsers();
    }, []);



     const axiosJWT = axios.create();


    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/clerkUsers');
        setUsers(response.data);
    }
    const SuperDash = async (e) => {
        e.preventDefault();
        // const Service_No=
        try {
            // await axios.post('http://localhost:5000/superForm3',{
              // Service_No:Service_No
            // });
            localStorage.setItem('A_Service_No',Service_No)
            navigate("/superForm3");
            // ,{state:{name:Service_No}}
            // console.log(Service_No);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="container mt-5">
            <h1>Welcome Back: {name}</h1>

            {users.map((user, index) => (
              <form onSubmit={SuperDash}>

              <div class="card space">

          <div class="card-header"key={user.id}>
                     {user.Name}

           </div>
            <div class="card-body">
           <span class="card-title">{user.Mail_Id}</span>
           <span class="card-text">{user.Service_No}</span>
           <input type="text"  class="fadeIn second formInput" name="Service_No" value={Service_No}onChange={(e) => setService_No(e.target.value)} />

            <a class="btn btn-primary view-align"onClick={()=>{SuperDash()}}>View</a>
            <button className="btn my-2 my-sm-0 " type="submit">Next </button>


           </div>
           </div>
           </form>

           ))}


        </div>
    )
}

export default SuperDash
// <span class="card-title">{user.Mail_Id}</span>
// <span class="card-text">{user.Service_No}</span>
// <table className="table ">
// <tbody>
// <td>{user.Service_No}</td>
// <td>{user.Mail_Id}</td>
// <a class="btn btn-primary"value={user.Service_No} onChange={(e) => setService_No(e.target.value)}>View</a>
//
// </tbody>
// </table>

//Table format for fetch

// <table className="table is-striped is-fullwidth">
//     <thead>
//         <tr>
//             <th>No</th>
//             <th>Name</th>
//             <th>Service Number</th>
//             <th>Email</th>
//             <th>view</th>
//         </tr>
//     </thead>
//     <tbody>
//         {users.map((user, index) => (
//             <tr key={user.id}>
//                 <td>{index + 1}</td>
//                 <td>{user.Name}</td>
//                 <td>{user.Service_No}</td>
//                 <td>{user.Mail_Id}</td>
//                 <td><Link to="">view</Link></td>
//             </tr>
//         ))}
//
//     </tbody>
// </table>

// const SuperDash = async (e) => {
//     e.preventDefault();
//     // const Service_No=
//     try {
//         await axios.post('http://localhost:5000/superForm3');
//         navigate("/form3",{state:{name:Service_No}});
//         console.log(Service_No);
//     } catch (error) {
//         if (error.response) {
//             setMsg(error.response.data.msg);
//         }
//     }
// }
//
// return (
//     <div className="container mt-5">
//         <h1>Welcome Back: {name}</h1>
//
//         {users.map((user, index) => (
//           <form onSubmit={SuperDash}>
//
//           <div class="card space">
//
//       <div class="card-header"key={user.id}>
//                  {user.Name}
//
//        </div>
//         <div class="card-body">
//        <span class="card-title">{user.Mail_Id}</span>
//        <span class="card-text"value={user.Service_No}onChange={(e) => setService_No(e.target.value)}>{user.Service_No}</span>
//         <a class="btn btn-primary view-align"onClick={()=>{SuperDash()}}>View</a>
//         <button className="btn my-2 my-sm-0 " type="submit">Next </button>
//
//
//        </div>
//        </div>
//        </form>
//
//        ))}
//
//
//     </div>
// )
