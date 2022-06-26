import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import emailjs from 'emailjs-com';


const Corrections = () => {

const [Clerk_Q, setClerk_Q] = useState('');
const [Superintendent_Q, setSuperintendent_Q] = useState('');
const [Director_Q, setDirector_Q] = useState('');
const [gclerkQ, setgClerkQ] = useState([]);
const [cvisible, setcvisible]=useState(false);
const [svisible, setsvisible]=useState(false);
const [dvisible, setdvisible]=useState(false);
const [msg, setMsg] = useState('');
const [Mail_Id, setMail_Id] = useState('');
const [Service_No, setService_No] = useState('111');

useEffect(() => {
    getMail();
    getClerkQ();
}, []);


  const getMail  = async () => {
        const response = await axiosJWT.get('http://localhost:5000/getForgetMail1',{

          params:{
            Service_No: Service_No
          }
        });
        setMail_Id(response.data);
      }



// const sendEmail = (e) => {
//
// e.preventDefault();
//
//     emailjs.sendForm('service_kgpr6mm', 'template_6bl6sjb', e.target, 'HaFC-IRHQSI8N8--K')
//       .then((result) => {
//           console.log('SUCCESS!',result.text);
//       }, (error) => {
//           console.log('FAILED...',error.text);
//       });
//       e.target.reset()
//
// };

const axiosJWT = axios.create();

const getClerkQ = async () => {
    const sn = localStorage.getItem('A_Service_No')
    const response = await axiosJWT.get('http://localhost:5000/getClerkQ',{
      params:{
        A_Service_No: sn
      }
    });
    setgClerkQ(response.data);

}



// Clerk_Q=

const CQ = async (e) => {
    e.preventDefault();
    try {


      await axios.post('http://localhost:5000/ClerkQ', {
          ClerkQ:Clerk_Q,
          Service_No:localStorage.getItem('111')

        });
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
}


// SuperintendentQ_Q=

const SQ = async (e) => {
e.preventDefault();
try {

  await axios.post('http://localhost:5000/SuperintendentQ', {
      SuperintendentQ:Superintendent_Q,
      Service_No:localStorage.getItem('A_Service_No')

    });
} catch (error) {
    if (error.response) {
        setMsg(error.response.data.msg);
    }
}
}

// DirectorQ_Q=


const DQ = async (e) => {
e.preventDefault();
try {

  await axios.post('http://localhost:5000/DirectorQ', {
      DirectorQ:Director_Q,
      Service_No:localStorage.getItem('A_Service_No')

    });

} catch (error) {
    if (error.response) {
        setMsg(error.response.data.msg);
    }
}
}
const ad=localStorage.getItem('A_Designation');

return(
<div className="footer">

                            {/* <div>
                                 <h2><b>Clerk</b></h2><br/>
                               <textarea rows="4" cols="100" name = "obs" value={Clerk_Q }onChange={(e) => setClerk_Q(e.target.value)} />
                               <button className="btn my-2 my-sm-0 " onClick = {CQ}><strong>Post</strong> </button>

                                 </div>
                        */}
    { gclerkQ.map((user, index) => (
      <div key={user.id} >
           <div>
                 {
                   (() => {
                       if(ad == "Clerk")
                             {
                                 return
                                 (
                                   <div>
                                       <h2><b>Clerk</b></h2><br/>
                                       <textarea rows="4" cols="100" name = "obs" value={Clerk_Q }onChange={(e) => setClerk_Q(e.target.value)} />
                                       <button className="btn my-2 my-sm-0 "onClick = {CQ}><strong>Post</strong> </button>
                                   </div>
                                 )
                             }

                         else if (ad == "Superintendent")
                              {
                                   return
                                   (
                                     <div>
                                         <h2><b>Clerk</b></h2><br/>
                                         <textarea rows="4"  cols="100" value={user.C_Remark }onChange={(e) => setClerk_Q(e.target.value)} />
                                         <h2><b>Superintendent</b></h2><br/>
                                         <textarea rows="4" cols="100"  name = "obs" value={Superintendent_Q}onChange={(e) => setSuperintendent_Q(e.target.value)} />
                                         <button className="btn my-2 my-sm-0 " onClick = {SQ}><strong>Post</strong> </button>
                                     </div>
                                  )
                           }

                         else {
                                 return
                                 (
                                   <div>
                                         <h2><b>Clerk</b></h2><br/>
                                         <textarea rows="4" cols="100" value={user.C_Remark }onChange={(e) => setClerk_Q(e.target.value)} />
                                         <h2><b>Superintendent</b></h2><br/>
                                         <textarea rows="4" cols="100" name = "obs" value={user.S_Remark}onChange={(e) => setSuperintendent_Q(e.target.value)} />


                                         <h2><strong>Director</strong></h2><br/>
                                         <textarea rows="4" name = "obs" cols="100" value={Director_Q}onChange={(e) => setDirector_Q(e.target.value)} />
                                         <button className="btn my-2 my-sm-0 " onClick = {DQ}> <strong>Post</strong> </button>

                                   </div>
                                 )

                              }
                   })()
               }
           </div>
    </div>
    ))}
  {/*  <form onSubmit={sendEmail}>

            <input type="text"  class="fadeIn third textInput"   autocomplete ="off"  name="Mail_Id"  value={Mail_Id} onChange={(e) => setMail_Id(e.target.value)} />
            <button className = "btn btn-primary"  type="submit" >  SEND QUERY TO USER</button>
    </form>*/}
</div>
)
}

export default Corrections
