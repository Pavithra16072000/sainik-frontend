
import React from 'react';
function FormLabel(props){
  return (
    <div className="col-sm-2 space noSpace">
      <label className="formLable">{props.text}</label>
    </div>
    );

}
export default FormLabel;
function FormLabel4(props){
  return (
   <div className=" space noSpace required">
      <label className="formLable4 ">{props.text}</label>
    </div>
    );

}
export {FormLabel4};

function FormLabelS(props){
  return (

      <span className="star">*</span>

    );

}
export {FormLabelS};
