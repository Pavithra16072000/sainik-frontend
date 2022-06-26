import React,{useState} from 'react';
import axios from 'axios';

const ButtonUpload = (props) => {
  const [style, setStyle] = useState("btn btn-primary");
  const [buttonText, setButtonText] = useState("Upload"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
  const [Adhar, setAdhar] = useState();
  const [AdharName, setAdharName] = useState("");
  const [Adharpicture, setAdharPicture] = useState('');
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));

      const saveAdhar = (e) => {
        setAdhar(e.target.files[0]);
        setAdharName(e.target.files[0].name);
        setAdharPicture(URL.createObjectURL(e.target.files[0]));
      };

  const uploadAdhar = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("Adhar", Adhar);
        formData.append("AdharName", AdharName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadAdhar",
            formData
          );
          console.log(res);

        } catch (ex) {
          console.log(ex);
        }
      };
    const changeStyle = () => {
       setButtonText("uploaded");
      setStyle("btn btn-secondary");
    };
    const CuploadAdhar = async (e) => {
          uploadAdhar();
          changeStyle()
        };

  return (
    <div>
    <button className={style} onClick={props.call}>{buttonText}</button>
</div>
    );

}
export default ButtonUpload;
