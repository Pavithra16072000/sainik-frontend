import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ALogin = () => {
    const [service_no, setService_no] = useState('');
    const [designation, setDesignation] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/alogin', {
                service_no: service_no,
                password: password,
                // designation: designation
            });
localStorage.setItem('ALogin_S',service_no);
//localStorage.setItem('ALogin_Board',service_no);

            navigate("/superDash");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Service Number</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Service Number" value={service_no} onChange={(e) => setService_no(e.target.value)} />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ALogin
