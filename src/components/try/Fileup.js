import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";

const Fileup = () => {

    const [file, setFile] = useState('');
    const [Preview, setPreview] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

const handleChange = (event) =>{
    // const selectFile = event.target.files[0]
    // setFile(selectFile)
    // const filePreview = URL.createObjectURL(selectFile)
    // setPreview(filePreview)
    // console.log(Preview)
    setPreview(URL.createObjectURL(event.target.files[0]));
    console.log('picture: ', Preview);
}

const Fileup = (e) => {
e.preventDefault()
const formData = new FormData()
formData.append('file',file)
axios.post('http://localhost:5000/Imageupload', formData,{
  headers: {
    "enc-type": "multipart/form-data"
  }
})
.then(res => console.log(res))
.catch(err => console.log(err))


}

    return (
      <form onSubmit={Fileup}>
               <label className="header">File to Upload</label>
                    <div className="row">
                       <FormLabel text={"Decoration"} />
                          <input type = "file" name="file" onChange={(e) => handleChange(e)} />

                                  <div>
                                    {file && <img src ={Preview} alt={file.name} style= {{width : "200px"}} />}
                                  </div>
                    </div>


    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className="btn my-2 my-sm-0 " type="submit">Upload </button>
 </div>
</form>
 )
}

export default Fileup





{/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ORIGINAL IMAGE PREVIEW &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel from "../view/FormLabel";

const Fileup = () => {

    const [file, setFile] = useState('');
    const [Preview, setPreview] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

const handleChange = (event) =>{
    const selectFile = event.target.files[0]
    setFile(selectFile)
    const filePreview = URL.createObjectURL(selectFile)
    setPreview(filePreview)
    console.log(Preview)
}

    return (
      <form onSubmit={Fileup}>
               <label className="header">File to Upload</label>
                    <div className="row">
                       <FormLabel text={"Decoration"} />
                           <div className="col-lg-4 space">
                           <input type = "file" name="file" onChange={(e) => handleChange(e)} />
                           </div>
                                  <div>
                                    {file && <img src ={Preview} alt={file.name} style= {{width : "200px"}} />}
                                  </div>
                    </div>


    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/Form1">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
 </div>
</form>
 )
}

export default Fileup




*/}
