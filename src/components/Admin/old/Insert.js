import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormLabel from "../../view/FormLabel";

import Rsb from "./InsertComponents/Rsb";
import Zsb from "./InsertComponents/Zsb";
import Bank from "./InsertComponents/Bank";
import MedicalCategory from "./InsertComponents/MedicalCategory";
import RecordOfficeArmy from "./InsertComponents/RecordOfficeArmy";
import State from "./InsertComponents/State";
import District from "./InsertComponents/District";
import Trade from "./InsertComponents/Trade";
import Taluk from "./InsertComponents/Taluk";
import Rank from "./InsertComponents/Rank";

import Single from "./InsertComponents/single";

const Insert = () => {

    // const [RSB_Id, setRSB_Id] = useState('');
    // const [RSB_Name, setRSB_Name] = useState('');
    // const [RSB_Surname, setRSB_Surname] = useState('');
const [DValue, setDValue] = useState('');
const [visible, setVisible] = useState(false);

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    // const Insert = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/I_rsb', {
    //             RSB_Id: RSB_Id,
    //             RSB_Name:RSB_Name,
    //             RSB_Surname:RSB_Surname
    //         });
    //
    //     } catch (error) {
    //         if (error.response) {
    //             setMsg(error.response.data.msg);
    //         }
    //     }
    // }
    const DEPARTMENT = ['Service','Corps','Discharce Reason','Discharge Character','Religion','Caste','Civil Qualification','Reg Type','Rank Category','Rsb',
    'Zsb',
    'Bank',
    'MedicalCategory',
    'RecordOfficeArmy',
    'State',
    'District',
    'Trade',
    'Taluk','Rank','Rank_Category'];

    return (
      <div className=" row">
      <div className='col-lg-12 insert-pad'>
      <div>  <FormLabel text={"Insert Into"} />
        <div className="col-md-4 space">

         <select value={DValue}onChange={(e) => setDValue(e.target.value)}>
        {DEPARTMENT.map(c => <option key={c}>{c}</option>)}
        </select>
         </div>
</div>
{/* this is also working
  <div>  <FormLabel text={"Department  "} />
  <div className="col-md-4 space">

   <select defaultValue={DValue} onChange={(e) => setDValue(e.target.value)}>
   <option selected value="1">Single Values</option>
   <option value="Rsb">Rsb</option>
   <option value="Zsb">Zsb</option>

  </select>
   </div>
</div>*/}
</div>
      <div className='col-lg-12'>
{/*      {visible &&
      <div>
      <Rsb />
      </div>}*/}
                 {

                     (() => {

                         if(DValue == "Rsb") {
                                 return (
                                  <Rsb />
                                 )
                             } else if (DValue == "Zsb") {
                                 return (
                                     <Zsb />
                                 )

                             }
                             else if (DValue == "Bank") {
                                 return (
                                     <Bank />
                                 )

                             }else if (DValue == "MedicalCategory") {
                                 return (
                                     <MedicalCategory />
                                 )

                             }else if (DValue == "RecordOfficeArmy") {
                                 return (
                                     <RecordOfficeArmy />
                                 )

                             }else if (DValue == "State") {
                                 return (
                                     <State />
                                 )

                             }else if (DValue == "District") {
                                 return (
                                     <District />
                                 )

                             }else if (DValue == "Trade") {
                                 return (
                                     <Trade />
                                 )

                             }else if (DValue == "Taluk") {
                                 return (
                                     <Taluk />
                                 )

                             }else if (DValue == "Rank") {
                                 return (
                                     <Rank />
                                 )

                             } else {
                                 return (
                                     <Single text={DValue}/>
                                 )
                             }
                     })()
                 }
             </div>

</div>
    )
}

export default Insert
