import React, { useEffect, useState } from "react";
//get pdf
import axios from "axios";
const apiURL = "http://127.0.0.1:5000/images/swayam fee paid.pdf";

const imageUrl = "http://127.0.0.1:5000/images/file-1652626111256.docx";

 const Img = () => {
  const [img, setImg] = useState();
  const [pdf, setPdf] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
    // fetchpdf();
  }, []);
//get pdf
const fetchpdf = async () => {
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

// axios(`${apiURL}/pdf`, {
//     method: 'GET',
//     responseType: 'blob' //Force to receive data in a Blob Format
// })
// .then(response => {
// //Create a Blob from the PDF Stream
//     const file = new Blob(
//       [response.data],
//       {type: 'application/pdf'});
// //Build a URL from the file
//     const fileURL = URL.createObjectURL(file);
// //Open the URL on new Window
//     window.open(fileURL);
// })
// .catch(error => {
//     console.log(error);
// });
  return (
    <>
      <img src={img} alt="icons" />
<button onClick={fetchpdf}>Open file</button>
    {/*  <Document file={() => dispatch(downloadAgreement())}>
  <Page pageNumber={pageNumber} />
</Document> */}
    </>
  );
}
export default Img;
