import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stepper, StepLabel, Step } from "@material-ui/core";

//************************  Client ************************
import Home from "./components/Home";
import HomeName from "./components/HomeName";

import Dashboard from "./components/Client/Dashboard";
import Register from "./components/Client/Register";
 // import ESM_No from "./components/Client/ESM_No";
import Navbar from "./components/Navbar";
import NavbarAReg from "./components/NavbarAReg";

// import ULogin from "./components/Client/ULogin";
import Login from "./components/Client/Login";

import ForgotPage from "./components/Client/ForgotPage";

//Form with steps
import Form         from "./components/Client/Form";
import FormStart         from "./components/Client/FormStart";

import Form1Display from "./components/Client/Form1";
import Form2Display from "./components/Client/Form2";
import Form3Display from "./components/Client/Form3";
import Form4Display from "./components/Client/Form4";
import Form5Display from "./components/Client/Form5";
import Form6Display from "./components/Client/Form6";
import Form7Display from "./components/Client/Form7";
import Form7Edit       from "./components/Client/Form7Edit";
import Form8Display from "./components/Client/Form8";
import Form9        from "./components/Client/Form9";
import WidowForm from "./components/Client/WidowForm";
import WidowForm1 from "./components/Client/WidowForm1";

// import Form7c       from "./components/Client/Form7c";
import DocForm from "./components/Client/DocForm";
import D_DocForm from "./components/Client/D_DocForm";
import S_DocForm from "./components/Client/S_DocForm";

//************************  Client ************************
//************************  Admin ************************

import SuperDash from "./components/Admin/SuperDash";
import AdminForm0 from "./components/Admin/AdminForms/AdminForm0";
import AdminForm1 from "./components/Admin/AdminForms/AdminForm1";
import AdminForm2 from "./components/Admin/AdminForms/AdminForm2";
import AdminForm3 from "./components/Admin/AdminForms/AdminForm3";
import AdminForm4 from "./components/Admin/AdminForms/AdminForm4";
import AdminForm5 from "./components/Admin/AdminForms/AdminForm5";
import AdminForm6 from "./components/Admin/AdminForms/AdminForm6";
import AdminForm7 from "./components/Admin/AdminForms/AdminForm7";
import AWidowForm from "./components/Admin/AdminForms/AWidowForm";
import ESM_No from "./components/Admin/AdminForms/ESM_No";

import Corrections from "./components/Admin/Corrections";
import Filter from "./components/Admin/Filter";
// import TableFilter from "./components/Admin/TableFilter";
import TableFilter2 from "./components/Admin/TableFilter2";


import Single from "./components/Admin/single";
import Insert from "./components/Admin/Insert";

import NavbarHome from "./components/NavbarHome";
import ALogin from "./components/Admin/ALogin";
import ARegister from "./components/Admin/ARegister";
//************************  Admin ************************
import FileUpload from "./components/FileUpload";

const App = () => (
  <BrowserRouter>
    <Routes>

//************************  Client ************************

      <Route exact path="/" element={
          <>
          <HomeName/>
          <Home/>
          </>
        } />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="register" element={<Register />} />


      <Route path="Login" element={<Login />} />

      <Route path="ForgotPage" element={<ForgotPage />} />
      <Route path="form9" element={<Form9 />} />

//Form with steps
      <Route path="step" element={<Form />} />
      <Route path="FormStart" element={<FormStart />} />

      <Route path="Form1" element={<Form1Display />} />
      <Route path="Form2" element={<Form2Display />} />
      <Route path="Form3" element={<Form3Display />} />
      <Route path="Form4" element={<Form4Display />} />
      <Route path="Form5" element={<Form5Display />} />
      <Route path="Form6" element={<Form6Display />} />
      <Route path="Form7" element={<Form7Display/>} />
      <Route path="Form7Edit" element={<Form7Edit />} />
      <Route path="Form8" element={<Form8Display/>} />
      <Route path="WidowForm1" element={<WidowForm1/>} />
      <Route path="WidowForm" element={<WidowForm/>} />

//************************  Client ************************
//************************  Admin ************************

<Route path="/superDash" element={
          <>
          <Navbar/>
          <SuperDash/>
          </>
        } />
        <Route path="/adminform0" element={
          <>
          <Navbar/>
          <AdminForm0/>
          </>
        } />
        <Route path="/adminform1" element={
          <>
          <Navbar/>
          <AdminForm1/>
          </>
        } />

        <Route path="/adminform2" element={
          <>
          <Navbar/>
          <AdminForm2/>
          </>
        } />

        <Route path="/adminform3" element={
          <>
          <Navbar/>
          <AdminForm3/>
          </>
        } />

        <Route path="/adminform4" element={
          <>
          <Navbar/>
          <AdminForm4/>
          </>
        } />

        <Route path="/adminform5" element={
          <>
          <Navbar/>
          <AdminForm5/>
          </>
        } />

        <Route path="/adminform6" element={
          <>
          <Navbar/>
          <AdminForm6/>
          </>
        } />

        <Route path="/adminform7" element={
          <>
          <Navbar/>
          <AdminForm7/>
          </>
        } />

        <Route path="/awidowform" element={
          <>
          <Navbar/>
          <AWidowForm/>
          </>
        } />

        <Route path="/ESM_No" element={
          <>
          <Navbar/>
          <ESM_No/>
          </>
        } />


        <Route path="/aregister" element={<ARegister/>} />
        <Route path="/alogin" element={<ALogin/>} />

        <Route path="/single" element={
          <Single/>
        } />
        <Route path="/insert" element={
          <>
          <NavbarAReg />
          <Insert/>
            </>
        } />
        <Route path="/filter" element={
          <>
          <Navbar />
          <Filter/>
            </>
        } />


        <Route path="/TableFilter2" element={
          <>
          <Navbar />
          <TableFilter2/>
            </>
        } />



        <Route path="/FileUpload" element={
          <>
          <Navbar />
          <FileUpload/>
            </>
        } />
        <Route path="/DocForm" element={
          <>
          <Navbar />
          <DocForm/>
            </>
        } />
        <Route path="/D_DocForm" element={
          <>
          <Navbar />
          <D_DocForm/>
            </>
        } />
        <Route path="/S_DocForm" element={
          <>
          <Navbar />
          <S_DocForm/>
            </>
        } />
        //************************  Admin ************************


    </Routes>
  </BrowserRouter>
);

export default App;
