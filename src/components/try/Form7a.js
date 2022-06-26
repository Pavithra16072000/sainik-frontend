/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Form7a= () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [dep, setdep] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        getdep();
    }, []);

    const axiosJWT = axios.create();

    const getdep = async () => {
        const response = await axiosJWT.get('http://localhost:5000/dep');
        setdep(response.data);
    }



    return (
        <div className="container mt-5">
            <h1>Welcome Back: {name}</h1>
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
                            <a href="/Add>"    >ADD</a></td>


                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

          //  <button className="btn my-2 my-sm-0 " type="submit">Next </button>

    )
}

export default Form7a
