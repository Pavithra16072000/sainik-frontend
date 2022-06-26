import React, { useState, useEffect } from 'react'
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter , selectFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import FormLabel from "../../view/FormLabel";


const TableFilter2 = () => {
    const [users, setUsers] = useState([]);
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Column_Attribute, setColumn_Attribute] = useState('');

    const [hideService, sethideService] = useState(true);
    const [hideCorps, sethideCorps] = useState(true);
    const [hideRecord, sethideRecord] = useState(true);
    const [hideGroup, sethideGroup] = useState(true);
    const [hideTrade, sethideTrade] = useState(true);

    const [hideRank, sethideRank] = useState(true);
    const [hideRankCategory, sethideRankCategory] = useState(true);
    const [hideName, sethideName] = useState(true);
    const [hideGender, sethideGender] = useState(true);
    const [hideDOB, sethideDOB] = useState(true);
    const [hideEnroll, sethideEnroll] = useState(true);
    const [hideWorldWar2, sethideWorldWar2] = useState(true);
    const [hideOA, sethideOA] = useState(true);
    const [hideDecorations, sethideDecorations] = useState(true);

//Form2
    const [hideUL, sethideUL] = useState(true);
    const [hideDD, sethideDD] = useState(true);
    const [hideDR, sethideDR] = useState(true);
    const [hideDM, sethideDM] = useState(true);
    const [hideDC, sethideDC] = useState(true);
    const [hideDB, sethideDB] = useState(true);
    const [hideIP, sethideIP] = useState(true);
    const [hidePPO, sethidePPO] = useState(true);
    const [hidePS, sethidePS] = useState(true);
    const [hideISDP, sethideISDP] = useState(true);
    const [hideDP, sethideDP] = useState(true);
    const [hideDPT, sethideDPT] = useState(true);
    const [hidePAC, sethidePAC] = useState(true);
    const [hideBA, sethideBA] = useState(true);
    const [hideB, sethideB] = useState(true);
    const [hideIFSC, sethideIFSC] = useState(true);

//Form3

const [hideFN, sethideFN] = useState(true);
const [hideMN, sethideMN] = useState(true);
const [hideBS, sethideBS] = useState(true);
const [hideBD, sethideBD] = useState(true);
const [hideBPL, sethideBPL] = useState(true);
const [hideReligion, sethideReligion] = useState(true);
const [hideCC, sethideCC] = useState(true);
const [hideAD, sethideAD] = useState(true);
const [hideVI, sethideVI] = useState(true);
const [hidePCN, sethidePCN] = useState(true);
const [hideCSD, sethideCSD] = useState(true);
const [hideECHS, sethideECHS] = useState(true);
const [hideId_Mark1, sethideId_Mark1] = useState(true);
const [hideId_Mark2, sethideId_Mark2] = useState(true);


//Form4

const [hidePP, sethidePP] = useState(true);
const [hidePRS, sethidePRS] = useState(true);
const [hidePD, sethidePD] = useState(true);
const [hidePT, sethidePT] = useState(true);
const [hideLocality, sethideLocality] = useState(true);
const [hidePCV, sethidePCV] = useState(true);
const [hidePST, sethidePST] = useState(true);
const [hidePNM, sethidePNM] = useState(true);
const [hidePHN, sethidePHN] = useState(true);
const [hidePPS, sethidePPS] = useState(true);
const [hidePTN, sethidePTN] = useState(true);
const [hidePPP, sethidePPP] = useState(true);
const [hidePPPS, sethidePPPS] = useState(true);
const [hidePPD, sethidePPD] = useState(true);

const [hidePPT, sethidePPT] = useState(true);
const [hidePPL, sethidePPL] = useState(true);
const [hidePPCV, sethidePPCV] = useState(true);
const [hidePPPPS, sethidePPPPS] = useState(true);
const [hidePPH, sethidePPH] = useState(true);
const [hidePPHN, sethidePPHN] = useState(true);
const [hidePPPSS, sethidePPPSS] = useState(true);

// //Form6
//
// const [hidePP, sethidePP] = useState(true);
// const [hidePRS, sethidePRS] = useState(true);
// const [hidePD, sethidePD] = useState(true);
// const [hidePT, sethidePT] = useState(true);
// const [hideLocality, sethideLocality] = useState(true);
// const [hidePCV, sethidePCV] = useState(true);
// const [hidePST, sethidePST] = useState(true);
// const [hidePNM, sethidePNM] = useState(true);
// const [hidePHN, sethidePHN] = useState(true);
// const [hidePPS, sethidePPS] = useState(true);
// const [hidePTN, sethidePTN] = useState(true);
// const [hidePPP, sethidePPP] = useState(true);
// const [hidePPPS, sethidePPPS] = useState(true);
// const [hidePPD, sethidePPD] = useState(true);
//
// const [hidePPT, sethidePPT] = useState(true);
// const [hidePPL, sethidePPL] = useState(true);
// const [hidePPCV, sethidePPCV] = useState(true);
// const [hidePPPPS, sethidePPPPS] = useState(true);
// const [hidePPH, sethidePPH] = useState(true);
// const [hidePPHN, sethidePPHN] = useState(true);
// const [hidePPPSS, sethidePPPSS] = useState(true);

const [userList, setUserList] = useState([]);

   useEffect(() => {
         getUsers();

    }, []);


    const columns = [
      {dataField: 'id', text: 'Sl.No', sort: true, filter: textFilter()},
      {dataField: 'Service_No', text: 'Service No' , filter: textFilter() },
      {dataField: 'Service_Name', text: 'Service Name' , sort: true , hidden : hideService,filter: textFilter()},
      {dataField: 'Corps_Name', text: 'Corps',hidden : hideCorps, sort: true , filter: textFilter()},
      {dataField: 'Record_Office_Name', text: 'Record Office',hidden : hideRecord, sort: true , filter: textFilter()},
      {dataField: 'Group_Name', text: 'Group Name',hidden : hideGroup, sort: true , filter: textFilter()},
      {dataField: 'Trade_Name', text: 'Trade Name',hidden : hideTrade, sort: true , filter: textFilter()},
      {dataField: 'Rank_Name', text: 'Rank Name',hidden : hideRank, sort: true , filter: textFilter()},
      {dataField: 'Rank_Category', text: 'Rank Category',hidden : hideRankCategory, sort: true , filter: textFilter()},
      {dataField: 'Name', text: 'Name',hidden : hideName, sort: true , filter: textFilter()},
      {dataField: 'Gender', text: 'Gender',hidden : hideGender, sort: true , filter: textFilter()},
      {dataField: 'DOB', text: 'DOB',hidden : hideDOB, sort: true , filter: textFilter()},
      {dataField: 'Enroll_Date', text: 'Enrollment Date',hidden : hideEnroll, sort: true , filter: textFilter()},
      {dataField: 'World_War2', text: 'World War2',hidden : hideWorldWar2, sort: true , filter: textFilter()},
      {dataField: 'Opt_Attend', text: 'Operation Attended',hidden : hideOA, sort: true , filter: textFilter()},
      {dataField: 'Deco', text: 'Decorations',hidden : hideDecorations, sort: true , filter: textFilter()},

// Form2
      {dataField: 'Unit_Last_Served', text: 'Unit Last Served',hidden : hideUL, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Date', text: 'Discharge Date',hidden : hideDD, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Reason', text: 'Discharge Reason',hidden : hideDR, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Med_Cat', text: 'Discharge Medical Category',hidden : hideDM, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Character', text: 'Discharge Character',hidden : hideDC, sort: true , filter: textFilter()},
      {dataField: 'Dep_Qualification', text: 'Discharge Book No',hidden : hideDB, sort: true , filter: textFilter()},
      {dataField: 'If_Pensioner', text: 'If Pensioner',hidden : hideIP, sort: true , filter: textFilter()},
      {dataField: 'PPO_No', text: 'PPO No.',hidden : hidePPO, sort: true , filter: textFilter()},
      {dataField: 'Pension_Sanctioned', text: 'Pension Sanctioned',hidden : hidePS, sort: true , filter: textFilter()},
      {dataField: 'If_Sanctioned_Dis_Pension', text: 'If Sanctioned Dis Pension',hidden : hideISDP, sort: true , filter: textFilter()},
      {dataField: 'Disability_Pension', text: 'Disability Pension',hidden : hideDP, sort: true , filter: textFilter()},
      {dataField: 'Disability_Percentage', text: 'Disability Percentage',hidden : hideDPT, sort: true , filter: textFilter()},
      {dataField: 'Pension_AC_No', text: 'Pension AC No.',hidden : hidePAC, sort: true , filter: textFilter()},
      {dataField: 'Bank_Name', text: 'Bank Name',hidden : hideBA, sort: true , filter: textFilter()},
      {dataField: 'Branch', text: 'Branch',hidden : hideB, sort: true , filter: textFilter()},
      {dataField: 'IFSC', text: 'IFSC',hidden : hideIFSC, sort: true , filter: textFilter()},

// Form3
            {dataField: 'Father_Name', text: 'Father Name',hidden : hideFN, sort: true , filter: textFilter()},
            {dataField: 'Mother_Name', text: 'Mother Name',hidden : hideMN, sort: true , filter: textFilter()},
            {dataField: 'Birth_State', text: 'Birth State',hidden : hideBS, sort: true , filter: textFilter()},
            {dataField: 'Birth_Dist_Surname', text: 'Birth District',hidden : hideBD, sort: true , filter: textFilter()},
            {dataField: 'Birth_Place', text: 'Birth Place',hidden : hideBPL, sort: true , filter: textFilter()},
            {dataField: 'Religion', text: 'Religion',hidden : hideReligion, sort: true , filter: textFilter()},
            {dataField: 'Caste_Category', text: 'Caste Category',hidden : hideCC, sort: true , filter: textFilter()},

            {dataField: 'Adhaar', text: 'Adhaar Card No',hidden : hideAD, sort: true , filter: textFilter()},
            {dataField: 'Voter_Id', text: 'Voter Id',hidden : hideVI, sort: true , filter: textFilter()},
            {dataField: 'PAN', text: 'PAN Card No:',hidden : hidePCN, sort: true , filter: textFilter()},
            {dataField: 'CSD', text: 'CSD No',hidden : hideCSD, sort: true , filter: textFilter()},
            {dataField: 'ECHS', text: 'ECHS No',hidden : hideECHS, sort: true , filter: textFilter()},
            {dataField: 'Id_Mark1', text: 'Id_Mark1',hidden : hideId_Mark1, sort: true , filter: textFilter()},
            {dataField: 'Id_Mark2', text: 'Id_Mark2',hidden : hideId_Mark2, sort: true , filter: textFilter()},

// Form4

            {dataField: 'Pincode', text: 'Present Pincode',hidden : hidePP, sort: true , filter: textFilter()},
            {dataField: 'State', text: 'Present State',hidden : hidePRS, sort: true , filter: textFilter()},
            {dataField: 'District', text: 'Present District',hidden : hidePD, sort: true , filter: textFilter()},
            {dataField: 'Taluk_Name', text: 'Present Taluk',hidden : hidePT, sort: true , filter: textFilter()},
            {dataField: 'Locality', text: 'Locality',hidden : hideLocality, sort: true , filter: textFilter()},
            {dataField: 'City_Village', text: 'Present City Village',hidden : hidePCV, sort: true , filter: textFilter()},
            {dataField: 'Street', text: 'Present Street',hidden : hidePST, sort: true , filter: textFilter()},
            {dataField: 'House_Name', text: 'Present House Name',hidden : hidePNM, sort: true , filter: textFilter()},
            {dataField: 'House_No', text: 'Present House No',hidden : hidePHN, sort: true , filter: textFilter()},
            {dataField: 'Police_Station', text: 'Present Police Station',hidden : hidePPS, sort: true , filter: textFilter()},
            {dataField: 'Tele_No', text: 'Present Telephone No',hidden : hidePTN, sort: true , filter: textFilter()},

            {dataField: 'P_Pincode', text: 'Permanent Pincode',hidden : hidePPP, sort: true , filter: textFilter()},
            {dataField: 'P_State', text: 'Permanent State',hidden : hidePPS, sort: true , filter: textFilter()},
            {dataField: 'P_District', text: 'Permanent District',hidden : hidePPD, sort: true , filter: textFilter()},
            {dataField: 'P_Taluk_Name', text: 'Permanent Taluk',hidden : hidePPT, sort: true , filter: textFilter()},
            {dataField: 'P_Locality', text: 'Permanent Locality',hidden : hidePPL, sort: true , filter: textFilter()},
            {dataField: 'P_City_Village', text: 'Permanent City Village',hidden : hidePPCV, sort: true , filter: textFilter()},
            {dataField: 'P_Street', text: 'Permanent Street',hidden : hidePPPPS, sort: true , filter: textFilter()},
            {dataField: 'P_House_Name', text: 'Permanent House Name',hidden : hidePPH, sort: true , filter: textFilter()},
            {dataField: 'P_House_No', text: 'Permanent House No',hidden : hidePPHN, sort: true , filter: textFilter()},
            {dataField: 'P_Police_Station', text: 'Permanent Police Station',hidden : hidePPPSS, sort: true , filter: textFilter()},

  // Form6
                        // {dataField: 'Marital_Status', text: 'Marital Status',hidden : hideMS, sort: true , filter: textFilter()},
                        // {dataField: 'Marriage_Date', text: 'Marriage Date',hidden : hideMD, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Name', text: 'Spouse Name',hidden : hideMSN, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Relation', text: 'Spouse Relation',hidden : hideMR, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_DOB', text: 'Spouse DOB',hidden : hideMDOB, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Sector', text: 'Spouse Sector',hidden : hideMSS, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Dept', text: 'Spouse Department',hidden : hideMPD, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Pres_Desg', text: 'Spouse Present Designation',hidden : hideMO, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Employer', text: 'Spouse Employer',hidden : hideMMI, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Official_No', text: 'Spouse Official No',hidden : hideMO, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Month_Income', text: 'Spouse Monthly Income',hidden : hideMMI, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Desg_Retire', text: 'Spouse Designation',hidden : hideMIM, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Civil_PPO_No', text: 'Spouse Civil PPO No',hidden : hideMQ, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Id_Mark', text: 'Spouse Identification Mark',hidden : hideMES, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Qualification', text: 'Spouse Qualification',hidden : hideMRD, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Emp_Status', text: 'Spouse Employment Status',hidden : hideMSA, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Emp_Profession', text: 'Spouse Employment Profession',hidden : hideMES, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Retire_Date', text: 'Spouse Retirement Date',hidden : hideMRD, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Adhaar', text: 'Spouse Adhaar',hidden : hideMSA, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_Voter_Id', text: 'Spouse Voter Id',hidden : hideMVI, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_PAN', text: 'Spouse PAN',hidden : hideMPAN, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_CSD', text: 'Spouse CSD',hidden : hideMCSD, sort: true , filter: textFilter()},
                        // {dataField: 'Spouse_ECHS', text: 'Spouse ECHS',hidden : hideMECHS, sort: true , filter: textFilter()},
                        // {dataField: 'Divorce_Date', text: 'Divorce Date',hidden : hideMDDD, sort: true , filter: textFilter()},
                        // {dataField: 'Court_Order', text: 'Court Order',hidden : hideMCCC, sort: true , filter: textFilter()},
                        // {dataField: 'Death_Date', text: 'Death Date',hidden : hideSMD, sort: true , filter: textFilter()},

    ]




const COLS = ['Service Name','Corps', 'Record Office', 'Group Name','Trade Name','Rank Name','Rank Category','Name','Gender','DOB','Enrollment Date','World War2','Operation Attended','Decorations',
'Unit Last Served',
'Discharge Date',
'Discharge Reason',
'Discharge Medical Category',
'Discharge Character',
'Discharge Book No',
'If Pensioner',
'PPO No.',
'Pension Sanctioned',
'If Sanctioned Dis Pension',
'Disability Pension',
'Disability Percentage',
'Pension AC No.',
'Bank Name',
'Branch',
'IFSC',
'Father Name',
'Mother Name',
'Birth State',
'Birth District',
'Birth Place',
'Religion',
'Caste Category',
'Adhaar Card No',
'Voter Id',
'PAN Card No:',
'CSD No',
'ECHS No',
'Id_Mark1',
'Id_Mark2',
'Present Pincode',
'Present State',
'Present District',
'Present Taluk',
'Locality',
'Present City Village',
'Present Street',
'Present House Name',
'Present House No',
'Present Police Station',
'Present Telephone No',
'Permanent Pincode',
'Permanent State',
'Permanent District',
'Permanent Taluk',
'Permanent Locality',
'Permanent City Village',
'Permanent Street',
'Permanent House Name',
'Permanent House No',
'Permanent Police Station',
'Marital Status',
'Marriage Date',
'Spouse Name',
'Spouse Relation',
'Spouse DOB',
'Spouse Sector',
'Spouse Department',
'Spouse Present Designation',
'Spouse Employer',
'Spouse Official No',
'Spouse Monthly Income',
'Spouse Designation',
'Spouse Civil PPO No',
'Spouse Identification Mark',
'Spouse Qualification',
'Spouse Employment Status',
'Spouse Retirement Date',
'Spouse Adhaar',
'Spouse Voter Id',
'Spouse PAN',
'Spouse CSD',
'Spouse ECHS',
'Divorce Date',
'Court Order',
'Death Date'

];








// const ColumnVisible = (e) =>  {
// if(hideCorps==true){
// sethideCorps(false)
// }else{
//   sethideCorps(true)
// }
   // }

    const ColumnVisible = (e) =>  {
     if(Column_Attribute==="Service Name")
     {
        if(hideService==true)
        {
         sethideService(false)
         }

     }

     if(Column_Attribute==="Corps")
     {
        if(hideCorps==true)
        {
         sethideCorps(false)
         }

     }

     if(Column_Attribute==="Record Office")
     {
        if(hideRecord==true)
        {
         sethideRecord(false)
         }

     }

     if(Column_Attribute==="Group Name")
     {
        if(hideGroup==true)
        {
         sethideGroup(false)
         }

     }


     if(Column_Attribute==="Trade Name")
     {
        if(hideTrade==true)
        {
         sethideTrade(false)
         }

     }


     if(Column_Attribute==="Rank Name")
     {
        if(hideRank==true)
        {
         sethideRank(false)
         }

     }


     if(Column_Attribute==="Rank Category")
     {
        if(hideRankCategory==true)
        {
         sethideRankCategory(false)
         }

     }


     if(Column_Attribute==="Name")
     {
        if(hideName==true)
        {
         sethideName(false)
         }

     }


     if(Column_Attribute==="Gender")
     {
        if(hideGender==true)
        {
         sethideGender(false)
         }

     }

     if(Column_Attribute==="DOB")
     {
        if(hideDOB==true)
        {
         sethideDOB(false)
         }

     }if(Column_Attribute==="Enrollment Date")
     {
        if(hideEnroll==true)
        {
         sethideEnroll(false)
         }

     }if(Column_Attribute==="World War2")
     {
        if(hideWorldWar2==true)
        {
         sethideWorldWar2(false)
         }

     }if(Column_Attribute==="Operation Attended")
     {
        if(hideOA==true)
        {
         sethideOA(false)
         }

     }if(Column_Attribute==="Decorations")
     {
        if(hideDecorations==true)
        {
         sethideDecorations(false)
         }

     }

// Form2
     if(Column_Attribute==="Unit Last Served")
     {
        if(hideUL==true)
        {
         sethideUL(false)
         }

     }if(Column_Attribute==="Discharge Date")
     {
        if(hideDD==true)
        {
         sethideDD(false)
         }

     }
     if(Column_Attribute==="Discharge Reason")
     {
        if(hideDR==true)
        {
         sethideDR(false)
         }

     }
     if(Column_Attribute==="Discharge Medical Category")
     {
        if(hideDM==true)
        {
         sethideDM(false)
         }

     }if(Column_Attribute==="Discharge Character")
     {
        if(hideDC==true)
        {
         sethideDC(false)
         }

     }if(Column_Attribute==="Discharge Book No")
     {
        if(hideDB==true)
        {
         sethideDB(false)
         }

     }if(Column_Attribute==="If Pensioner")
     {
        if(hideIP==true)
        {
         sethideIP(false)
         }

     }if(Column_Attribute==="PPO No.")
     {
        if(hidePPO==true)
        {
         sethidePPO(false)
         }

     }if(Column_Attribute==="Pension Sanctioned")
     {
        if(hidePS==true)
        {
         sethidePS(false)
         }

     }if(Column_Attribute==="If Sanctioned Dis Pension")
     {
        if(hideISDP==true)
        {
         sethideISDP(false)
         }

     }if(Column_Attribute==="Disability Pension")
     {
        if(hideDP==true)
        {
         sethideDP(false)
         }

     }if(Column_Attribute==="Disability Percentage")
     {
        if(hideDPT==true)
        {
         sethideDPT(false)
         }

     }

     if(Column_Attribute==="Pension AC No.")
     {
        if(hidePAC==true)
        {
         sethidePAC(false)
         }

     }if(Column_Attribute==="Bank Name")
     {
        if(hideBA==true)
        {
         sethideBA(false)
         }

     }
     if(Column_Attribute==="Branch")
     {
        if(hideB==true)
        {
         sethideB(false)
         }

     }if(Column_Attribute==="IFSC")
     {
        if(hideIFSC==true)
        {
         sethideIFSC(false)
         }

     }
// Form3

if(Column_Attribute==="Father Name")
{
   if(hideFN==true)
   {
    sethideFN(false)
    }

}
if(Column_Attribute==="Mother Name")
{
   if(hideMN==true)
   {
    sethideMN(false)
    }

}
if(Column_Attribute==="Birth State")
{
   if(hideBS==true)
   {
    sethideBS(false)
    }

}

if(Column_Attribute==="Birth District")
{
   if(hideBD==true)
   {
    sethideBD(false)
    }

}
if(Column_Attribute==="Birth Place")
{
   if(hideBPL==true)
   {
    sethideBPL(false)
    }

}

if(Column_Attribute==="Religion")
{
   if(hideReligion==true)
   {
    sethideReligion(false)
    }

}

if(Column_Attribute==="Caste Category")
{
   if(hideCC==true)
   {
    sethideCC(false)
    }

}if(Column_Attribute==="Adhaar Card No")
{
   if(hideAD==true)
   {
    sethideAD(false)
    }

}
if(Column_Attribute==="Voter Id")
{
   if(hideVI==true)
   {
    sethideVI(false)
    }

}
if(Column_Attribute==="PAN Card No:")
{
   if(hidePCN==true)
   {
    sethidePCN(false)
    }

}
if(Column_Attribute==="CSD No")
{
   if(hideCSD==true)
   {
    sethideCSD(false)
    }

}

if(Column_Attribute==="ECHS No")
{
   if(hideECHS==true)
   {
    sethideECHS(false)
    }

}
if(Column_Attribute==="Id_Mark1")
{
   if(hideId_Mark1==true)
   {
    sethideId_Mark1(false)
    }

}

if(Column_Attribute==="Id_Mark2")
{
   if(hideId_Mark2==true)
   {
    sethideId_Mark2(false)
    }

}
if(Column_Attribute==="Present Pincode")
{
   if(hidePP==true)
   {
    sethidePP(false)
    }

}
if(Column_Attribute==="Present State")
{
   if(hidePRS==true)
   {
    sethidePRS(false)
    }

}
if(Column_Attribute==="Present District")
{
   if(hidePD==true)
   {
    sethidePD(false)
    }

}
if(Column_Attribute==="Present Taluk")
{
   if(hidePT==true)
   {
    sethidePT(false)
    }

}
if(Column_Attribute==="Locality")
{
   if(hideLocality==true)
   {
    sethideLocality(false)
    }

}
if(Column_Attribute==="Present City Village")
{
   if(hidePCV==true)
   {
    sethidePCV(false)
    }

}
if(Column_Attribute==="Present Street")
{
   if(hidePST==true)
   {
    sethidePST(false)
    }

}
if(Column_Attribute==="Present House Name")
{
   if(hidePNM==true)
   {
    sethidePNM(false)
    }

}
if(Column_Attribute==="Present House No")
{
   if(hidePHN==true)
   {
    sethidePHN(false)
    }

}
if(Column_Attribute==="Present Police Station")
{
   if(hidePPS==true)
   {
    sethidePPS(false)
    }

}
if(Column_Attribute==="Present Telephone No")
{
   if(hidePTN==true)
   {
    sethidePTN(false)
    }

}
if(Column_Attribute==="Permanent Pincode")
{
   if(hidePPP==true)
   {
    sethidePPP(false)
    }

}
if(Column_Attribute==="Permanent State")
{
   if(hidePPPS==true)
   {
    sethidePPPS(false)
    }

}
if(Column_Attribute==="Permanent District")
{
   if(hidePPD==true)
   {
    sethidePPD(false)
    }

}
if(Column_Attribute==="Permanent Taluk")
{
   if(hidePPT==true)
   {
    sethidePPT(false)
    }

}
if(Column_Attribute==="Permanent Locality")
{
   if(hidePPL==true)
   {
    sethidePPL(false)
    }

}
if(Column_Attribute==="Permanent City Village")
{
   if(hidePPCV==true)
   {
    sethidePPCV(false)
    }

}
if(Column_Attribute==="Permanent Street")
{
   if(hidePPPPS==true)
   {
    sethidePPPPS(false)
    }

}
if(Column_Attribute==="Permanent House Name")
{
   if(hidePPH==true)
   {
    sethidePPH(false)
    }

}
if(Column_Attribute==="Permanent House No")
{
   if(hidePPHN==true)
   {
    sethidePPHN(false)
    }

}
if(Column_Attribute==="Permanent Police Station")
{
   if(hidePPPSS==true)
   {
    sethidePPPSS(false)
    }

}


//form6

// if(Column_Attribute==="Marital Status")
// {
//    if(hideMS==true)
//    {
//     sethideMS(false)
//     }
//
// }if(Column_Attribute==="Marriage Date")
// {
//    if(hideMD==true)
//    {
//     sethideMD(false)
//     }
//
// }if(Column_Attribute==="Spouse Name")
// {
//    if(hideMSN==true)
//    {
//     sethideMSN(false)
//     }
//
// }if(Column_Attribute==="Spouse Relation")
// {
//    if(hideMR==true)
//    {
//     sethideMR(false)
//     }
//
// }
// }if(Column_Attribute==="Spouse DOB")
// {
//    if(hideMDOB==true)
//    {
//     sethideMDOB(false)
//     }
//
// }if(Column_Attribute==="Spouse Sector")
// {
//    if(hideMSS==true)
//    {
//     sethideMSS(false)
//     }
//
// }if(Column_Attribute==="Spouse Present Designation")
// {
//    if(hideMPD==true)
//    {
//     sethideMPD(false)
//     }
//
// }if(Column_Attribute==="Spouse Official No")
// {
//    if(hideMO==true)
//    {
//     sethideMO(false)
//     }
//
// }if(Column_Attribute==="Spouse Monthly Income")
// {
//    if(hideMMI==true)
//    {
//     sethideMMI(false)
//     }
//
// }if(Column_Attribute==="Spouse Designation")
// {
//    if(hideMSP==true)
//    {
//     sethideMSP(false)
//     }
//
// }if(Column_Attribute==="Spouse Civil PPO No")
// {
//    if(hideMCP==true)
//    {
//     sethideMCP(false)
//     }
//
// }if(Column_Attribute==="Spouse Identification Mark")
// {
//    if(hideMIM==true)
//    {
//     sethideMIM(false)
//     }
//
// }if(Column_Attribute==="Spouse Qualification")
// {
//    if(hideMQ==true)
//    {
//     sethideMQ(false)
//     }
//
// }if(Column_Attribute==="Spouse Employment Status")
// {
//    if(hideMES==true)
//    {
//     sethideMES(false)
//     }
//
// }if(Column_Attribute==="Spouse Retirement Date")
// {
//    if(hideMRD==true)
//    {
//     sethideMRD(false)
//     }
//
// }if(Column_Attribute==="Spouse Adhaar")
// {
//    if(hideMSA==true)
//    {
//     sethideMSA(false)
//     }
//
// }
// if(Column_Attribute==="Spouse Voter Id")
// {
//    if(hideMVI==true)
//    {
//     sethideMVI(false)
//     }
//
// }
// if(Column_Attribute==="Spouse PAN")
// {
//    if(hideMPAN==true)
//    {
//     sethideMPAN(false)
//     }
//
// }
// if(Column_Attribute==="Spouse CSD")
// {
//    if(hideMCSD==true)
//    {
//     sethideMCSD(false)
//     }
//
// }
// if(Column_Attribute==="Spouse ECHS")
// {
//    if(hideMECHS==true)
//    {
//     sethideMECHS(false)
//     }
//
// }
// if(Column_Attribute==="Divorce Date")
// {
//    if(hideMDDD==true)
//    {
//     sethideMDDD(false)
//     }
//
// }
// if(Column_Attribute==="Court Order")
// {
//    if(hideMCCC==true)
//    {
//     sethideMCCC(false)
//     }
//
// }
// if(Column_Attribute==="Death Date")
// {
//    if(hideSMD==true)
//    {
//     sethideSMD(false)
//     }
//
// }










   }



const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function(page,sizePerPage){
    console.log('page',page);
    console.log('sizePerPage',sizePerPage);

    },
    onSizePerPageChange: function(page, sizePerPage){
    console.log('page',page);
    console.log('sizePerPage',sizePerPage);
    }

});

    const axiosJWT = axios.create();

    const getUsers = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/TableFilter');
      setUsers(response.data);
    }


    return (
    <div className="center">
    <div class="wrapper fadeInDown">
<button onClick={ColumnVisible}>visible</button>
{/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}

    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Details of Family Members</label>
    </div>
{/*   -----------------------------------------  HEADER  SECTION ------------------------------------------------- */}

    <div className="upperForm1Content">


    <FormLabel text={"Attributes"} />
    <div className="col-md-7 space">
    <select  className="col-lg-6 dropdown_align"value={Column_Attribute}  name = "Column_Attribute" value = {Column_Attribute} onClick = {ColumnVisible} onChange={(e) => setColumn_Attribute(e.target.value)} >
    <option value="" selected disabled>--Select One--</option>
    {COLS.map(c => <option key={c}>{c}</option>)}
    </select>
    </div>

<div className = "react-bootstrap-table  ">
    <form onSubmit={TableFilter2}>

    <BootstrapTable
     bootstrap4
     responsive
     keyField = 'id'
     columns = {columns}
     data= {users}
     pagination = {pagination}
     filter = {filterFactory()}

     />

</form>
</div>




</div>



</div>
</div>
)
}

export default TableFilter2
