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
import single_values from "../models/Single.js"; 
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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% REGISTER %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Register = async(req, res) => {
    const { Name, Service_No, Mobile, Mail_Id, Password, ConfPassword, Reg_Date,Status} = req.body;
     if(Name === "" && Service_No === "" && Mail_Id === "" && Mobile === "" && Password === ""  )
    return res.status(400).json({msg: "Please fill the All the fields"});
    if(Name === "" )
    return res.status(400).json({msg: "Please fill the Name field"});
    if(Service_No === "")
    return res.status(400).json({msg: "Please fill the Service Number"});
    if(Mail_Id === "")
    return res.status(400).json({msg: "Please fill the Mail_Id "});
    if(Mobile === "") 
    return res.status(400).json({msg: "Please fill the Mobile field"});
    if(Password === "")
    return res.status(400).json({msg: "Please Enter the Password "});
    if(ConfPassword === "")
    return res.status(400).json({msg: "Please Enter the Confirm Password "});




    if(Password !== ConfPassword) 
    return res.status(400).json({msg: "Password and Confirm Password do not match"});
   
   const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(Password, salt);
    try {
        await u_user_reg.create({
            Name: Name,
            Service_No:Service_No,
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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% REGISTER %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% LOGIN %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Login = async(req, res) => {
    try {
        const user = await u_user_reg.findAll({
            where:{
                Service_No: req.body.Service_No
            }
        });
        const match = await bcrypt.compare(req.body.Password, user[0].Password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const Name = user[0].Name;
        const Service_No = user[0].Service_No;
        const accessToken = jwt.sign({userId, Name, Service_No}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, Name, Service_No}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await u_user_reg.update({refresh_token: refreshToken},{
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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% LOGIN %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% LOGOUT %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await u_user_reg.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await u_user_reg.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%     LOGOUT      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Forms[1-8]         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


export const Forms = async(req, res) => {
    const { Service_No, Service_Name, Corps_Name,Record_Office_Name,Group_Name, Trade_Name,Rank_Category, Rank_Name, Name, Gender, DOB, Enroll_Date, World_War2, Opt_Attend ,Deco } = req.body;
    const { Unit_Last_Served, Discharge_Date, Discharge_Reason,Discharge_Med_Cat,Discharge_Character, Discharge_Book_No, If_Pensioner, PPO_No,Pension_Sanctioned, Present_Pension, If_Sanctioned_Dis_Pension, Disability_Pension,Disability_Percentage, Pension_AC_No, Bank_Name, Branch,IFSC } = req.body;
    const { Father_Name, Mother_Name, Religion, Caste_Category, Birth_Dist_Surname, Birth_Place, Adhaar, Voter_Id,PAN, CSD, ECHS, Id_Mark1,Id_Mark2 } = req.body;
    const { House_No , House_Name, Street,Pincode,Police_Station, State, District, Taluk_Name,City_Village,Same,P_State,P_District,P_Taluk_Name, Tele_No, P_House_No,P_City_Village, P_House_Name,P_Street, P_Pincode, P_Police_Station } = req.body;
    const { Civil_Qualification, Addi_Course, Equi_Test,Civil_Emp_Status,Sector,Dept, Pres_Desg, Employer, Month_Income,Official_No, Desg_Retire, Retire_Date, Civil_PPO_No } = req.body;
    const { Marital_Status, Marriage_Date, Spouse_Name,Spouse_Relation,Spouse_DOB, Spouse_Pres_Desg, Spouse_Employer, Spouse_Month_Income,Spouse_Official_No,Spouse_Desg_Retire,Spouse_Retire_Date,Spouse_Civil_PPO_No,Spouse_Id_Mark, Spouse_Qualification, Spouse_Emp_Status,Spouse_Emp_Profession,Spouse_Retirement_Date, Spouse_Adhaar, Spouse_Voter_Id,Spouse_PAN,Spouse_CSD,Spouse_ECHS } = req.body;
    const { Dep_Name, Relation, Dep_DOB,Dep_Adhaar,Dep_Qualification, Dep_Academic_Yr, Dep_Employment_Status, Dep_Marital_Status } = req.body;

    try {
        await u_service_details.create({

            Service_No:Service_No,
            Service_Name: Service_Name,
            Corps_Name: Corps_Name,
            Record_Office_Name: Record_Office_Name,
            Rank_Category: Rank_Category, 
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
            If_Sanctioned_Dis_Pension: If_Sanctioned_Dis_Pension,
            Disability_Pension: Disability_Pension,
            Disability_Percentage: Disability_Percentage,
            Pension_AC_No: Pension_AC_No,
            Bank_Name: Bank_Name,
            Branch: Branch,
            IFSC:IFSC
        });


  await u_personal_details.create({

            Service_No:Service_No,
            Father_Name:Father_Name,
            Mother_Name: Mother_Name,
            Religion: Religion,
            Caste_Category: Caste_Category,
            State: State,
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


  await u_contact_details.create({

            Service_No:Service_No,
            House_No:House_No,
            House_Name: House_Name,
            Street: Street,
            State:State,
            District:District,
            Taluk_Name:Taluk_Name,
            City_Village:City_Village,
            Pincode: Pincode,
            Police_Station:Police_Station,
            Tele_No: Tele_No,
            Same:Same,
            P_House_No: P_House_No,
            P_House_Name: P_House_Name,
            P_Street: P_Street,
            P_City_Village:P_City_Village,
            P_Pincode: P_Pincode,
            P_State:P_State,
            P_District:P_District,
            P_Taluk_Name:P_Taluk_Name,
            P_Police_Station: P_Police_Station

        });


 await u_employment_details.create({

            Service_No:Service_No,
            Civil_Qualification :Civil_Qualification,
            Addi_Course: Addi_Course,
            Equi_Test:Equi_Test,
            Civil_Emp_Status: Civil_Emp_Status, 
            Sector:Sector,

            Dept:Dept,
            Pres_Desg: Pres_Desg,
            Employer:Employer,
            Month_Income: Month_Income,
            Official_No: Official_No,
            Desg_Retire: Desg_Retire,
            Retire_Date: Retire_Date,
            Civil_PPO_No: Civil_PPO_No
        });


await u_spouse_details.create({

            Service_No:Service_No,
            Marital_Status :Marital_Status,
            Marriage_Date: Marriage_Date,
            Spouse_Name:Spouse_Name,
            Spouse_Relation: Spouse_Relation,
            Spouse_DOB:Spouse_DOB,
            Sector: Sector,
            Dept: Dept,
            Spouse_Pres_Desg: Spouse_Pres_Desg,
            Spouse_Employer: Spouse_Employer,
            Spouse_Month_Income: Spouse_Month_Income,
            Spouse_Official_No: Spouse_Official_No ,
            Spouse_Desg_Retire: Spouse_Desg_Retire,
            Spouse_Retire_Date: Spouse_Retire_Date,
            Spouse_Civil_PPO_No: Spouse_Civil_PPO_No, 
            Spouse_Id_Mark: Spouse_Id_Mark,
            Spouse_Qualification:Spouse_Qualification,
            Spouse_Emp_Status: Spouse_Emp_Status,
            Spouse_Emp_Profession: Spouse_Emp_Profession,
            Spouse_Adhaar: Spouse_Adhaar,
            Spouse_Voter_Id: Spouse_Voter_Id,
            Spouse_PAN:Spouse_PAN,
            Spouse_CSD:Spouse_CSD,
            Spouse_ECHS:Spouse_ECHS
        });



// await form7delete.delete({

//             Service_No:Service_No,
//             Dep_Name :Dep_Name, 
//             Relation: Relation,
//             Dep_DOB:Dep_DOB,
//             Dep_Adhaar: Dep_Adhaar,
//             Dep_Qualification:Dep_Qualification,
//             Dep_Academic_Yr: Dep_Academic_Yr,
//             Dep_Employment_Status:Dep_Employment_Status,
//             Dep_Marital_Status: Dep_Marital_Status
//         });






       } catch (error) {
        console.log(error);
    }

}




//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Forms         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form8         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


export const Form8 = async(req, res) => {
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
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form8          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const form8dep = async(req, res) => {
let param=req.query.sn
    try {
        const dep=await u_dependent_details.findAll({
            where:{
            Dep_Name:param
          }
        });
        res.json(dep);
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form7Delete          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const form7delete = async(req, res) => {
     const { Service_No, Dep_Name, Relation, Dep_DOB,Dep_Adhaar,Dep_Qualification, Dep_Academic_Yr, Dep_Employment_Status, Dep_Marital_Status } = req.body;

    try {
        await u_dependent_details.destroy({
  
where:{
        Service_No: "445345354H"
    }
        });
    } catch (error) {
        console.log(error);
    }
}

//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form7Delete          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form1     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form1 = async(req, res) => {
    const { Service_No, Service_Name, Corps_Name,Record_Office_Name,Group_Name, Trade_Name, Rank_Name, Name, Gender, DOB, Enroll_Date, World_War2, Opt_Attend ,Deco } = req.body;

    try {
        await u_service_details.create({

            Service_No:Service_No,
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
            // Deco: Deco
        });

        const newpath = __dirname + "/files/";
  const file = req.files.deco;
  const filename = file.name;
 
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
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


//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form6          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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

//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form7          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const Form7 = async(req, res) => {
let param=req.query.D_Service_No
    try {
        const dep=await u_dependent_details.findAll({
            where:{
            Service_No:param
          }
        });
        res.json(dep);
    } catch (error) {
        console.log(error);
    }
}
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Form7          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       Edit-Form8         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const EditForm8 = async(req, res) => {
let param=req.query.Dep_Name
    try {
        const UserEdit=await u_dependent_details.findAll({

            where:{
            Dep_Name:param
          }
        });
        res.json(UserEdit);
    } catch (error) {
        console.log(error);
    }
}




//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%     Edit-Form8         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

















//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       WidowForm          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// export const DeleteForm8 = async(req, res) => {
//    const {  Dep_Name, Relation, Dep_DOB,Dep_Adhaar,Dep_Qualification, Dep_Academic_Yr, Dep_Employment_Status, Dep_Marital_Status } = req.body;

//     try {
       

//  await u_dependent_details.delete({

//             Service_No:Service_No,
//             Dep_Name :Dep_Name, 
//             Relation: Relation,
//             Dep_DOB:Dep_DOB,
//             Dep_Adhaar: Dep_Adhaar,
//             Dep_Qualification:Dep_Qualification,
//             Dep_Academic_Yr: Dep_Academic_Yr,
//             Dep_Employment_Status:Dep_Employment_Status,
//             Dep_Marital_Status: Dep_Marital_Status
//         });

//     } catch (error) {
//         console.log(error);
//     }
//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       WidowForm          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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
                ////                   [Op.ne]: 'Not Submitted'

            }
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

//   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%       getForm1         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

export const getForm1 = async(req, res) => { //dashboard
    try {
        const users = await u_service_details.findAll({
            // attributes:['id','Name','Service_No','Mail_Id'],
            where:{
                
                Service_No: "a98h"
                ////                   [Op.ne]: 'Not Submitted'

            }
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}



// // %%%%%%%%%%%%%%%%%%%%%%%%     Crops-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 


export const Image = async(req, res) => {
const file = req.files.file

const filePath = path.join(__dirname,'..','public','image')

return file.mv(`${filePath}${file.name}`,(err)=>{
    if(err)console.log('file was not uploaded')
      return status(400).res.json({msg: "File Uploaded Successfully"});

// file.mv(`${filePath}${file.name}`, (err) => {
//     if (err) {
//       res.status(500).send({ message: "File upload failed", code: 200 });
//     }
//     res.status(200).send({ message: "File Uploaded", code: 200 });
//   });


})






    // try {
    //     await u_employment_details.create({
    //         Addi_Course: Addi_Course 
             
    //     });
    //     res.json({msg: "Registration Successful"});
    // } catch (error) {
    //     console.log(error);
    // }
}

























// export const Crop_D = async(req, res) => {
//   try {
//       const crop = await u_service_details.findAll({
//           attributes:['Corps_Name']
         
//       });
//       res.json(crop);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Crops-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 


// // %%%%%%%%%%%%%%%%%%%%%%%%     Record_Office_Name-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Record_D = async(req, res) => {
//   try {
//       const record = await d_record_office_army.findAll({
//           attributes:['Record_Office_Name']
         
//       });
//       res.json(record);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Record_Office_Name-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// // %%%%%%%%%%%%%%%%%%%%%%%%     Rank-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Rank_D = async(req, res) => {
//   try {
//       const rank = await d_rank.findAll({
//           attributes:['Rank_Name']
         
//       });
//       res.json(rank);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Rank-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 


// // %%%%%%%%%%%%%%%%%%%%%%%%     Trade-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Trade_D = async(req, res) => {
//   try {
//       const trade = await d_trade.findAll({
//           attributes:['Trade_Name']
         
//       });
//       res.json(trade);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Trade-->Drop_Down                  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// // %%%%%%%%%%%%%%%%%%%%%%%%     Discharge_Medical_Cat-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Med_D = async(req, res) => {
//   try {
//       const medicals = await d_medical_category.findAll({
//           attributes:['Discharge_Med_Cat']
         
//       });
//       res.json(medicals);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Discharge_Medical_Cat-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// // %%%%%%%%%%%%%%%%%%%%%%%%     Discharge_Character-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Char_D = async(req, res) => {
//   try {
//       const characters = await single_values.findAll({
//          attributes:['Value'],
//           where:{
//               Item: 'Discharge_Character'
//           }
         
//       });
//       res.json(characters);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%      Discharge_Character-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// // %%%%%%%%%%%%%%%%%%%%%%%%     Bank-->Drop_Down                  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Bank_D = async(req, res) => {
//   try {
//       const banks = await d_bank.findAll({
//           attributes:['Bank_Name']
         
//       });
//       res.json(banks);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Bank-->Drop_Down                   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// // %%%%%%%%%%%%%%%%%%%%%%%%     Bank_Branch-->Drop_Down            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Branch_D = async(req, res) => {
//   try {
//       const branchs = await d_bank.findAll({
//           attributes:['Branch']
         
//       });
//       res.json(branchs);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Bank_Branch-->Drop_Down            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// // %%%%%%%%%%%%%%%%%%%%%%%%     IFSC-->Drop_Down            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Ifscs_D = async(req, res) => {
//   try {
//       const ifscs = await d_bank.findAll({
//           attributes:['IFSC']
         
//       });
//       res.json(ifscs);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     IFSC-->Drop_Down            %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  

// // %%%%%%%%%%%%%%%%%%%%%%%%     Civil_Qualification-->Drop_Down    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Civil_D = async(req, res) => {
//   try {
//       const civil = await single_values.findAll({
//           attributes:['Value'],
//           where:{
//               Item: 'Civil Qualification'
//           }
         
//       });
//       res.json(civil);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Civil_Qualification-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
 
// // %%%%%%%%%%%%%%%%%%%%%%%%     Caste_Category-->Drop_Down       %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Caste_D = async(req, res) => {
//   try {
//       const caste = await single_values.findAll({
//          attributes:['Value'],
//           where:{
//               Item: 'Caste_Category'
//           }
         
//       });
//       res.json(caste);
//   } catch (error) {
//       console.log(error);
//   }
// }


// // %%%%%%%%%%%%%%%%%%%%%%%%     Religion-->Drop_Down       %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// export const Religions_D = async(req, res) => {
//   try {
//       const religions = await single_values.findAll({
//         attributes:['Value'],
//           where:{
//               Item: 'Religion'
//           }
         
//       });
//       res.json(religions);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Religion-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 



// // %%%%%%%%%%%%%%%%%%%%%%%%     Birth_Place-->Drop_Down     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const Place_D = async(req, res) => {
//   try {
//       const places = await u_personal_details.findAll({
//           attributes:['Place']
         
//       });
//       res.json(places);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Birth_Place-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 



// // %%%%%%%%%%%%%%%%%%%%%%%%     Birth_District-->Drop_Down     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// export const District_D = async(req, res) => {
//   try {
//       const dist = await d_disrict.findAll({
//           attributes:['District']
         
//       });
//       res.json(dist);
//   } catch (error) {
//       console.log(error);
//   }
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%     Birth_District-->Drop_Down  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 



// //%%%%%%%%%%%%%%%%%%%%%%%%%%%  %  Dependent Dashboard   % %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// export const Dependents = async(req, res) => {
//     try {
//         const dep = await u_dependent_details.findAll({
//             attributes:['Service_No','Dep_Name','Relation','Dep_DOB','Dep_Adhaar','Dep_Qualification','Dep_Academic_Yr','Dep_Employment_Status','Dep_Marital_Status','Dep_DOB']
//         });
//         res.json(dep);
//     } catch (error) {
//         console.log(error);
//     }
// }
// //%%%%%%%%%%%%%%%%%%%%%%%%%%%  %  Dependent Dashboard   % %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// // %%%%%%%%%%%%%%%%%%%%%%%%%%        Insert a file        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// export const getFile = async(req, res) => {
    
//   const newpath = __dirname + "/files/";
//   const file = req.files.file;
//   const filename = file.name;
 
//   file.mv(`${newpath}${filename}`, (err) => {
//     if (err) {
//       res.status(500).send({ message: "File upload failed", code: 200 });
//     }
//     res.status(200).send({ message: "File Uploaded", code: 200 });
//   });

// }

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%        Insert a file     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
// const storage = multer.diskStorage({
//     designation:path.join(__dirname,'../public_html/','uploads')
//     filename:function(req,file,cb)
//     {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })


