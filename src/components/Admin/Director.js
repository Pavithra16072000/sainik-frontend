/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Director = () => {
    const [name, setName] = useState('');
    const [users_C, setUsers_C] = useState([]);
    const [users_S, setUsers_S] = useState([]);
    const [users_D, setUsers_D] = useState([]);

    const [design, setDesign] = useState([]);
    const [Designation, setDesignation] = useState([]);

    const [Service_No, setService_No] = useState('');
    const [A_Service_No, setA_Service_No] = useState('');

    const [Clerk, setClerk] = useState([]);
    const [Superintendent, setSuperintendent] = useState([]);

    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        getUsers_C();
        getUsers_S();
        getUsers_D();

        getDesign();
    }, []);




    const axiosJWT = axios.create();


    const getUsers_C = async () => {
        const response = await axiosJWT.get('http://localhost:5000/Users_C',{
        params:{
          ALogin_S: localStorage.getItem('ALogin_S')
        }
        });
        setUsers_C(response.data);
    }
    const getUsers_S = async () => {
        const response = await axiosJWT.get('http://localhost:5000/Users_S',{
        params:{
          ALogin_S: localStorage.getItem('ALogin_S')
        }
        });
        setUsers_S(response.data);
    }
    const getUsers_D = async () => {
        const response = await axiosJWT.get('http://localhost:5000/Users_D',{
        params:{
          ALogin_S: localStorage.getItem('ALogin_S')
        }
        });
        setUsers_D(response.data);
    }

    const getDesign = async () => {
        const response = await axiosJWT.get('http://localhost:5000/designation',{
          params:{
            ALogin_S: localStorage.getItem('ALogin_S')
          }
        });
        setDesign(response.data);
        localStorage.setItem('A_Designation',design[1])
    }

    // const next = function next(e){
    //   function p() { setService_No(user.Service_No)};
    //   SuperDash()
    // }
    const SuperDash = async (e) => {
        e.preventDefault();
        // const Service_No=
        try {
            // await axios.post('http://localhost:5000/superForm3',{
              // Service_No:Service_No
            // });
            console.log(Service_No);

            localStorage.setItem('A_Service_No',Service_No);
            // localStorage.setItem('A_Designation',Designation);

            navigate("/adminform1");
            // ,{state:{name:Service_No}}
            // console.log(Service_No);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    console.log(design[1]);
    console.log(Clerk);
// else if(design[1]=='Director'){
//   if(Clerk=='Pending'||'Observation'){
//     setDisabled(true)
//   }else{
//     setDisabled(false)
//   }
// }else{
//   setDisabled(false)
// }
// console.log(Clerk);
//}
    return (
        <div className="container mt-5">

            <div className='right-align for-btn'>
            <form onSubmit={SuperDash}>
            <h1><strong>Search By Service No</strong></h1>
            <input type="text"  class="fadeIn formInput" value={Service_No} onChange={(e) =>setService_No(e.target.value)} /> <br />
            <button className="btn my-2 my-sm-0 view-align nextButton " type="submit">Search </button>

             </form>

            </div>
<div>
            {users_C.map((user, index) => (
              <form onSubmit={SuperDash}>
              <div class="card space for-btn">
          <div className="card-header color"key={user.id}>
                  <h3 className='color'> <strong> {user.Name} </strong></h3>
           </div>
            <div class="card-body row">
           <span class="card-text col-sm-3"value={Service_No} onChange={(e) =>setService_No(user.Service_No)}>{user.Service_No}</span>
<span className="card-title col-sm-4">
           <table className="table  is-fullwidth">

               <tbody>

                       <tr key={user.id}>
                           <td value={Clerk} onChange={(e) =>setClerk(user.Clerk)}>{user.Clerk}</td>
                           <td value={Superintendent} onChange={(e) =>setSuperintendent(user.Superindendent)}>{user.Superintendent}</td>
                           <td >{user.Director}</td>
                       </tr>
               </tbody>
           </table>
           </span>
             <button className="btn my-2 my-sm-0 col-sm-1 view-align" type="submit"onMouseEnter={() =>setService_No(user.Service_No)}disabled>View </button>
           </div>
           </div>
           </form>

           ))}
</div>

<div>
            {users_S.map((user, index) => (
              <form onSubmit={SuperDash}>
              <div class="card space for-btn">
          <div className="card-header color"key={user.id}>
                  <h3 className='color'> <strong> {user.Name} </strong></h3>
           </div>
            <div class="card-body row">
           {/*<input type="text"  class="fadeIn formInput" value={Service_No} onMouseEnter={() =>setService_No(user.Service_No)} />*/}

           <span class="card-text col-sm-3"value={Service_No} onChange={(e) =>setService_No(user.Service_No)}>{user.Service_No}</span>
<span className="card-title col-sm-4">
           <table className="table  is-fullwidth">

               <tbody>
                       <tr key={user.id}>
                           <td >{user.Clerk}</td>
                           <td >{user.Superintendent}</td>
                           <td >{user.Director}</td>
                       </tr>
               </tbody>
           </table>
           </span>
             <button className="btn my-2 my-sm-0 col-sm-1 view-align" type="submit"onMouseEnter={() =>setService_No(user.Service_No)} disabled>View </button>
           </div>
           </div>
           </form>

           ))}
</div>

<div >
            {users_D.map((user, index) => (
              <form onSubmit={SuperDash}>
              <div class="card space for-btn">
          <div className="card-header color"key={user.id}>
                  <h3 className='color'> <strong> {user.Name} </strong></h3>
           </div>
            <div class="card-body row">
           {/*<input type="text"  class="fadeIn formInput" value={Service_No} onMouseEnter={() =>setService_No(user.Service_No)} />*/}

           <span class="card-text col-sm-3"value={Service_No} onChange={(e) =>setService_No(user.Service_No)}>{user.Service_No}</span>
<span className="card-title col-sm-4">
           <table className="table  is-fullwidth">

               <tbody>
                       <tr key={user.id}>
                           <td value={Clerk} onChange={(e) =>setClerk(user.Clerk)}>{user.Clerk}</td>
                           <td value={Superintendent} onChange={(e) =>setSuperintendent(user.Superindendent)}>{user.Superintendent}</td>
                           <td >{user.Director}</td>
                       </tr>
               </tbody>
           </table>
           </span>
             <button className="btn my-2 my-sm-0 col-sm-1 view-align" type="submit"onMouseEnter={() =>setService_No(user.Service_No)}>View </button>
           </div>
           </div>
           </form>

           ))}
</div>


        </div>
    )
}

export default Director
