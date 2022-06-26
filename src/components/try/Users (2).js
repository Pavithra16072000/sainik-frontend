import { Sequelize } from "sequelize";

const Op = Sequelize.Op;

import u_user_reg from "../models/UserModel.js";
import u_service_details from "../models/ServiceModel.js";
import u_pension_details from "../models/PensionModel.js";
import u_personal_details from "../models/PersonalModel.js";
import u_contact_details from "../models/ContactModel.js";
import u_employment_details from "../models/EmploymentModel.js";
import u_spouse_details from "../models/SpouseModel.js";
import u_dependent_details from "../models/DependentModel.js";
import u_widow_details from "../models/WidowModel.js";
//import Form7a from "./C";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => { //dashboard
    try {
        const users = await u_user_reg.findAll({
            attributes:['id','Name','Service_No','Mail_Id']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { Name, Service_No, Mobile, Mail_Id, Password, ConfPassword, Reg_Date,Status} = req.body;
    if(Password !== ConfPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await u_user_reg.create({
            Name: Name,
            Service_no:Service_No,
            Mobile:Mobile,
            Mail_Id: Mail_Id,
            Password: hashPassword,
            Reg_Date: Reg_Date,
            Status: Status,
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try {
        const user = await MyUsers.findAll({
            where:{
                service_no: req.body.service_no
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const service_no = user[0].service_no;
        const accessToken = jwt.sign({userId, name, service_no}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, name, service_no}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await MyUsers.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Service Number not found"});
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await MyUsers.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await MyUsers.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}


//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form1            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form1 = async(req, res) => {
    const { Service_No, Reg_Type, Service_Name, Corps_Name,Record_Office_Name,Group_Name, Trade_Name, Rank_Name, Name, Gender, DOB, Enroll_Date, World_War2, Opt_Attend ,Deco } = req.body;

    try {
        await u_service_details.create({

            Service_No:Service_No,
            Reg_Type:Reg_Type,
            Service_Name: Service_Name,
            Corps_Name: Corps_Name,
            Record_Office_Name: Record_Office_Name,
            Group_Name:Group_Name,
            Trade_Name: Trade_Name,
            Rank_Name:Rank_Name,
            Name: Name,
            Gender: Gender,
            DOB: DOB,
            Enroll_Date: Enroll_Date,
            World_War2: World_War2,
            Opt_Attend: Opt_Attend,
            Deco: Deco
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form1            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form2            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form2 = async(req, res) => {
    const { Service_No, Unit_Last_Served, Discharge_Date, Discharge_Reason,Discharge_Med_Cat,Discharge_Character, Discharge_Book_No, If_Pensioner, PPO_No,Pension_Sanctioned, Present_Pension, Enroll_Date, If_Sanctioned_Dis_Pension, Disability_Pension,Disability_Percentage, Pension_AC_No, Bank_Name, Branch,IFSC } = req.body;

    try {
        await u_pension_details.create({

            Service_No:Service_No,
            Unit_Last_Served:Unit_Last_Served,
            Discharge_Date: Discharge_Date,
            Discharge_Reason: Discharge_Reason,
            Discharge_Med_Cat: Discharge_Med_Cat,
            Discharge_Character:Discharge_Character,
            Discharge_Book_No: Discharge_Book_No,
            If_Pensioner:If_Pensioner,
            PPO_No: PPO_No,
            Pension_Sanctioned: Pension_Sanctioned,
            Present_Pension: Present_Pension,
            Enroll_Date: Enroll_Date,
            If_Sanctioned_Dis_Pension: If_Sanctioned_Dis_Pension,
            Disability_Pension: Disability_Pension,
            Disability_Percentage: Disability_Percentage,
            Pension_AC_No: Pension_AC_No,
            Bank_Name: Bank_Name,
            Branch: Branch,
            IFSC:IFSC
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form2          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form3            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form3 = async(req, res) => {
    const { Service_No, Father_Name, Mother_Name, Religion, Caste_Category,Birth_Dist_Surname, Birth_Place, Adhaar, Voter_Id,PAN, CSD, ECHS, Id_Mark1,Id_Mark2 } = req.body;

    try {
        await u_personal_details.create({

            Service_No:Service_No,
            Father_Name:Father_Name,
            Mother_Name: Mother_Name,
            Religion: Religion,
            Caste_Category: Caste_Category,
            Birth_Dist_Surname:Birth_Dist_Surname,
            Birth_Place: Birth_Place,
            Adhaar:Adhaar,
            Voter_Id: Voter_Id,
            PAN: PAN,
            CSD: CSD,
            ECHS: ECHS,
            Id_Mark1: Id_Mark1,
            Id_Mark2: Id_Mark2
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form3          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form4            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form4 = async(req, res) => {
    const { Service_No, House_No , House_Name, Street,Pincode,Police_Station, Tele_No, P_House_No, P_House_Name,P_Street, P_Pincode, P_Police_Station } = req.body;

    try {
        await u_contact_details.create({

            Service_No:Service_No,
            House_No:House_No,
            House_No: House_No,
            House_Name: House_Name,
            Street: Street,
            Pincode:Pincode,
            Pincode: Pincode,
            Police_Station:Police_Station,
            Tele_No: Tele_No,
            P_House_No: P_House_No,
            P_House_Name: P_House_Name,
            P_Street: P_Street,
            P_Pincode: P_Pincode,
            P_Police_Station: P_Police_Station

        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form4          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form5            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form5 = async(req, res) => {
    const { Service_No, Civil_Qualification, Addi_Course, Equi_Test,Civil_Emp_Status,Dept, Pres_Desg, Employer, Month_Income,Official_No, Desg_Retire, Retire_Date, Civil_PPO_No } = req.body;

    try {
        await u_employment_details.create({

            Service_No:Service_No,
            Civil_Qualification :Civil_Qualification,
            Addi_Course: Addi_Course,
            Equi_Test:Equi_Test,
            Civil_Emp_Status: Civil_Emp_Status,
            Dept:Dept,
            Pres_Desg: Pres_Desg,
            Employer:Employer,
            Month_Income: Month_Income,
            Official_No: Official_No,
            Desg_Retire: Desg_Retire,
            Retire_Date: Retire_Date,
            Civil_PPO_No: Civil_PPO_No
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form5          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form6            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form6 = async(req, res) => {
    const { Service_No, Marital_Status, Marriage_Date, Spouse_Name,Spouse_Relation,Spouse_DOB, Spouse_Id_Mark, Spouse_Qualification, Spouse_Emp_Status,Spouse_Emp_Profession,Spouse_Retirement_Date, Spouse_Adhaar, Spouse_Voter_Id,Spouse_PAN,Spouse_CSD,Spouse_ECHS } = req.body;

    try {
        await u_spouse_details.create({

            Service_No:Service_No,
            Marital_Status :Marital_Status,
            Marriage_Date: Marriage_Date,
            Spouse_Name:Spouse_Name,
            Spouse_Relation: Spouse_Relation,
            Spouse_DOB:Spouse_DOB,
            Spouse_Id_Mark: Spouse_Id_Mark,
            Spouse_Qualification:Spouse_Qualification,
            Spouse_Emp_Status: Spouse_Emp_Status,
            Spouse_Emp_Profession: Spouse_Emp_Profession,
            Spouse_Retirement_Date: Spouse_Retirement_Date,
            Spouse_Adhaar: Spouse_Adhaar,
            Spouse_Voter_Id: Spouse_Voter_Id,
            Spouse_PAN:Spouse_PAN,
            Spouse_CSD:Spouse_CSD,
            Spouse_ECHS:Spouse_ECHS
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form6          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form7           %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form7 = async(req, res) => {
    const { Service_No, Dep_Name, Relation, Dep_DOB,Dep_Adhaar,Dep_Qualification, Dep_Academic_Yr, Dep_Employment_Status, Dep_Marital_Status } = req.body;

    try {
        await u_dependent_details.create({

            Service_No:Service_No,
            Dep_Name :Dep_Name,
            Relation: Relation,
            Dep_DOB:Dep_DOB,
            Dep_Adhaar: Dep_Adhaar,
            Dep_Qualification:Dep_Qualification,
            Dep_Academic_Yr: Dep_Academic_Yr,
            Dep_Employment_Status:Dep_Employment_Status,
            Dep_Marital_Status: Dep_Marital_Status
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form7          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       WidowForm          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const WidowForm = async(req, res) => {
    const { Service_No, Widow_Reg_No, Family_Pension, W_Nxt_Kin,Death_Date,Death_Nature, ESM_No} = req.body;

    try {
        await u_widow_details.create({

            Service_No:Service_No,
            Widow_Reg_No :Widow_Reg_No,
            Family_Pension: Family_Pension,
            W_Nxt_Kin:W_Nxt_Kin,
            Death_Date: Death_Date,
            Death_Nature:Death_Nature,
            ESM_No: ESM_No

        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       WidowForm          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       ClerkView         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


export const clerkUsers = async(req, res) => { //dashboard
    try {
        const users = await u_user_reg.findAll({
            attributes:['id','Name','Service_No','Mail_Id'],
            where:{
                Status: "Submitted"
            }
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}



// %%%%%%%%%%%%%%%%%%%%%%%%

// export const clerkUsers = async(req, res) => { //dashboard
//     try {
//         const users = await u_user_reg.findAll({
//             attributes:['id','Name','Service_No','Mail_Id'],
//             where:{
//                 Status: {
//                   [Op.ne]: 'Not Submitted'
//                 }
//             }
//         });
//         res.json(users);
//     } catch (error) { 
//         console.log(error);
//     }
// }




export const Dropdowns = async(req, res) => {
  try {
      const userss = await u_service_details.findAll({
          attributes:['Corps_Name']
         
      });
      res.json(userss);
  } catch (error) {
      console.log(error);
  }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%  %  Dependent Dashboard   % %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const getdep = async(req, res) => {
    try {
        const dep = await u_dependent_details.findAll({
            attributes:['Dep_Name','Relation','Dep_DOB']
        });
        res.json(dep);
    } catch (error) {
        console.log(error);
    }
}