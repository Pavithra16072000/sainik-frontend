import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";

const ULogin = () => {
    const [Service_No, setService_No] = useState('');
    const navigate = useNavigate();
    const [v1, setv1] = useState(false)
    const [v2, setv2] = useState(false);


const  ESMReg = (e) =>  {

  setv1(true);
  setv2(false);

}
const  NewReg = (e) =>  {

  navigate("/form1");
  localStorage.setItem('Reg_Type','ESM')
}
const  EmpReg = (e) =>  {

  navigate("/form1");
  localStorage.setItem('Reg_Type','EmpReg')
}
const  Transfer = (e) =>  {

  navigate("/");
  localStorage.setItem('Reg_Type','Transfer')

}
const  WidowReg= (e) =>  {

  setv2(true);
  setv1(false);

}
const  WEsmAready = (e) =>  {

  navigate("/widowform");
  localStorage.setItem('Reg_Type','Widow')
  localStorage.setItem('Reg_TypeForm','Registered')

}

const  WNotReg = (e) =>  {

  navigate("/widowform");
  localStorage.setItem('Reg_Type','Widow')
  localStorage.setItem('Reg_TypeForm','Not Registered')

}



    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

         <form >
         <br /><br />
          <input onClick={ESMReg} class="fadeIn fourth submitInput" value="ESM Registration" />

          {v1 && <div>
          <button onClick={NewReg} class=" btn"style={{backgroundColor:"#243A73",color:"#fff"}} > New ESM Registration </button><br /><br />
          <button onClick={EmpReg} class=" btn"style={{backgroundColor:"#243A73",color:"#fff"}} > Employment Registration </button><br /><br />

          <button onClick={Transfer} class=" btn"style={{backgroundColor:"#243A73",color:"#fff"}} >Transfer </button><br /><br />
</div>}

          <input onClick={WidowReg} class="fadeIn fourth submitInput" value="Widow Registration" />
          {v2 && <div>
          <button onClick={WEsmAready} class="btn "style={{backgroundColor:"#243A73",color:"#fff"}} >ESM Already Registered </button><br /><br />
          <button onClick={WNotReg} class="btn "style={{backgroundColor:"#243A73",color:"#fff"}} >ESM Not Registered </button><br /><br />
          </div>}


        </form>

        <div id="formFooter">
          <a class="underlineHover la"   > SELECT YOUR REGISTRATION TYPE</a>
        </div>

      </div>
      </div>
</div>
    )
}

export default ULogin
