import React, { useEffect, useState } from "react";
//get pdf
import axios from "axios";
// const apiURL = "http://127.0.0.1:5000/images/swayam fee paid.pdf";

//const imageUrl = "http://127.0.0.1:5000/images/file-1652626111256.docx";

 const AdminFormDoc = () => {
  const [img, setImg] = useState();
  const [pdf, setPdf] = useState();
  const [i, seti] = useState('');

  const [p, setp] = useState([]);
  const [users, setUsers] = useState([]);

  // const fetchImage = async () => {
  //   const res = await fetch(imageUrl);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
  // };

  useEffect(() => {
    fetchImage();
    // fetchpdf();
    getUsers();
  }, []);

  const axiosJWT = axios.create();

  const sn = localStorage.getItem('A_Service_No')

  const getUsers = async () => {
       const sn = localStorage.getItem('A_Service_No')
      const response = await axiosJWT.get('http://localhost:5000/adminformdoc',{
        params:{
          A_Service_No: 'ch98765ec'
        }
      });
      setUsers(response.data);
  // seti(users.Discharge_Book);
  // setp(response.data.Adhar);
  // console.log(p);
  }
  console.log(p);
  console.log(users[0]);
  console.log(users[1]);

//get pdfhttp://127.0.0.1:5000/images/D_PAN-1653927304317.pdf
const a="http://127.0.0.1:5000/images/D_PAN-1653927304317.pdf"
const imageUrl ='http://127.0.0.1:5000/images/'+users[1]
console.log(imageUrl);

const fetchImage = async () => {
  const res = await fetch(imageUrl);
  const imageBlob = await res.blob();
  const imageObjectURL = URL.createObjectURL(imageBlob);
  setImg(imageObjectURL);
};

const fetchpdf = async () => {
 const apiURL = users[0];

  axios(`${apiURL}`, {
      method: 'GET',
      responseType: 'blob' //Force to receive data in a Blob Format
  })
  .then(response => {
  //Create a Blob from the PDF Stream
      const file = new Blob(
        [response.data],
        {type: 'application/pdf'});
  //Build a URL from the file
      const pdf = URL.createObjectURL(file);
  //Open the URL on new Window
      window.open(pdf);
  })
  .catch(error => {
      console.log(error);
  });

};
//Working
// const [img3, setImg3] = useState();
//   const onImageChange = (e) => {
//     const [file] = e.target.files;
//     setImg3(URL.createObjectURL(file));
//   };
//   return (
//     <div>
//       <input type="file" onChange={onImageChange} />
//       <img src={img3} alt="" />
//     </div>
//   );


  return (
    <>
      <img src={img} alt="icons" width='350' />

<button onClick={fetchpdf}>Open file</button>

    </>
  );
}

 export default AdminFormDoc
//
// const axiosJWT = axios.create();
//
// const sn = localStorage.getItem('A_Service_No')
//
// const getUsers = async () => {
//      const sn = localStorage.getItem('A_Service_No')
//     const response = await axiosJWT.get('http://localhost:5000/adminformdoc',{
//       params:{
//         A_Service_No: 'ch98765ec'
//       }
//     });
//     setUsers(response.data);
// seti(users.Discharge_Book);
// setp(users.Adhar)
// }
