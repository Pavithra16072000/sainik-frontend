import React, { useState } from "react";
import axios from "axios";

const UploadImg = () => {
  const [picture, setPicture] = useState('');
  const [file, setFile] = useState('');

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
    console.log('picture: ', picture);

  };
  const Fileup = (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append('file',file)
  axios.post('http://localhost:5000/upload', formData,{
    headers: {
      "enc-type": "multipart/form-data"
    }
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))


  }
  const imageUrl = "https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU";

  const check=async () => {
    const response = await fetch(imageUrl)
    const imageBlob = await response.blob()
    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      const base64data = reader.result;
      console.log(base64data);
    }
  }
  return (
    <div className="register_wrapper">
      <div className="register_player_column_layout_one">
        <div className="register_player_Twocolumn_layout_two">
          <form className="myForm"onSubmit={Fileup}>
            <div className="formInstructionsDiv formElement">
              <h2 className="formTitle" >Sign Up</h2>
              <p className="instructionsText"></p>
              <div className="register_profile_image">
                 <input id="profilePic" type="file" onChange={onChangePicture}/>
              </div>
              <input id="profilePic"  onClick={check}/>

              <div className="previewProfilePic" >
                <img className="playerProfilePic_home_tile"  src={picture}></img>
                <img className="playerProfilePic_home_tile"  src={check}></img>

              </div>
            </div>
            {/*<div className="fillContentDiv formElement">
              <div className="names formContentElement">
                <input className="inputRequest " type="text" placeholder="First Name" />
                <input className="inputRequest " type="text" placeholder="Last Name" />
              </div>
            </div>*/}
            <div className="submitButtonDiv formElement">
              <button className="submitButton"type="submit">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadImg;
