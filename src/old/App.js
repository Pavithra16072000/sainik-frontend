import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Client/Dashboard";
import ADashboard from "./components/try/ADashboard";
import ClerkDash from "./components/Admin/ClerkDash";
import SuperDash from "./components/Admin/SuperDash";
// import SuperForm3 from "./components/Admin/SuperForm3";
import AdminForm1 from "./components/Admin/AdminForms/AdminForm1";
import AdminForm2 from "./components/Admin/AdminForms/AdminForm2";
import AdminForm3 from "./components/Admin/AdminForms/AdminForm3";
import AdminForm4 from "./components/Admin/AdminForms/AdminForm4";
import AdminForm5 from "./components/Admin/AdminForms/AdminForm5";
import AdminForm6 from "./components/Admin/AdminForms/AdminForm6";
import AdminForm7 from "./components/Admin/AdminForms/AdminForm7";
import AWidowForm from "./components/Admin/AdminForms/AWidowForm";
// import AdminFormDoc from "./components/Admin/AdminForms/AdminFormDoc";
import ADocForm1 from "./components/Admin/AdminForms/AdocForm1";
import AS_DocForm from "./components/Admin/AdminForms/AS_docForm";
import AD_DocForm from "./components/Admin/AdminForms/AD_docForm";
import ESM_No from "./components/Admin/AdminForms/ESM_No";

import Corrections from "./components/Admin/Corrections";
import Filter from "./components/Admin/Filter";
// import ReactFilter from "./components/Admin/ReactFilter";
import TableFilter2 from "./components/Admin/TableFilter2";

import Single from "./components/Admin/InsertComponents/single";
import Insert from "./components/Admin/Insert";


import NavbarHome from "./components/NavbarHome";
import HomeName from './components/HomeName';
// import HomeMenu from './components/HomeMenu';
import Home from "./components/Home";
// import HomeCarousel from './components/HomeCarousel';
import HomeContact from './components/HomeContact';

import Login from "./components/Client/Login";
import ForgotPage from "./components/Client/ForgotPage";

import ALogin from "./components/Admin/ALogin";
import Navbar from "./components/Navbar";
import NavbarAReg from "./components/NavbarAReg";

import Register from "./components/Client/Register";
import ARegister from "./components/Admin/ARegister";

import Form0 from "./components/Client/Form0";
import Form1 from "./components/Client/Form1";
import Form2 from "./components/Client/Form2";
import Form3 from "./components/Client/Form3";
import Form4 from "./components/Client/Form4";
import Form5 from "./components/Client/Form5";
import Form6 from "./components/Client/Form6";
import Form7 from "./components/Client/Form7";
import Form8 from "./components/Client/Form8";
import Form9 from "./components/Client/Form9";
import DocForm from "./components/Client/DocForm";
import SpouseDocForm from "./components/Client/S_DocForm";
import DepDocForm from "./components/Client/D_DocForm";

// import UI from "./components/Client/forms/UI";
//
// import UI from "./components/Client/forms/UI";
//
//
// import UI from "./components/Client/forms/UI";
// import UI from "./components/Client/forms/UI";
// import UI from "./components/Client/forms/UI";
// import UI from "./components/Client/forms/UI";
// import UI from "./components/Client/forms/UI";

import UI from "./components/Client/UI";

import Form7Edit from "./components/Client/Form7Edit";

import WidowForm from "./components/Client/WidowForm";

import A from "./components/try/A";
import B from "./components/try/B";
import Param from "./components/try/Param";
import Dropdown from "./components/try/Dropdown";
import LocalStorage from "./components/try/LocalStorage";
import LocalStorage3 from "./components/try/LocalStorage3";
import Form7a from "./components/try/Form7a";
import MyReactFilter from "./components/try/MyReactFilter";
import UploadImg from "./components/try/UploadImg";

// import csdMain from "./components/Admin/csdMain";
import FileUpload from "./components/FileUpload";
import Fileup from "./components/try/Fileup";
import Img from "./components/try/img";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <>
          <HomeName/>
          <Home/>
          </>
        } />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/ForgotPage" element={<ForgotPage/>} />

        <Route path="/register" element={<Register/>} />


        <Route path="/dashboard" element={
          <>
          <Navbar/>
          <Dashboard/>
          </>
        } />
        <Route path="/adashboard" element={
          <>
          <Navbar/>
          <ADashboard/>
          </>
        } />
        <Route path="/clerkDash" element={
          <>
          <Navbar/>
          <ClerkDash/>
          </>
        } />
        <Route path="/superDash" element={
          <>
          <Navbar/>
          <SuperDash/>
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
        <Route path="/ESM_No" element={
          <>
          <Navbar/>
          <ESM_No/>
          </>
        } />
        <Route path="/as_docform" element={
          <>
          <Navbar/>
          <AS_DocForm/>
          </>
        } />
        <Route path="/ad_docform" element={
          <>
          <Navbar/>
          <AD_DocForm/>
          </>
        } />
        <Route path="/adocform1" element={
          <>
          <Navbar/>
          <ADocForm1/>
          </>
        } />

        <Route path="/awidowform" element={
          <>
          <Navbar/>
          <AWidowForm/>
          </>
        } />

        <Route path="/aregister" element={<ARegister/>} />
        <Route path="/alogin" element={<ALogin/>} />
        <Route path="/step" element={
          <>
          <Form0/>

          </>
        } />
        <Route path="/form1" element={
          <>
          <Form1/>
          </>
        } />
        <Route path="/form2" element={
          <>
          <Form2/>
          </>
        } />
        <Route path="/form3" element={
          <>
          <Form3/>
          </>
        } />
        <Route path="/form4" element={
          <>
          <Form4/>
          </>
        } />
        <Route path="/form5" element={
          <>
          <Form5/>
          </>
        } />
        <Route path="/Form6" element={
          <>
          <Form6/>
          </>
        } />
        <Route path="/Form7" element={
          <>
          <Form7/>
          </>
        } />
        <Route path="/form7Edit" element={
          <>
          <Form7Edit/>
          </>
        } />
        <Route path="/Form8" element={
          <>
          <Form8/>
          </>
        } />
        <Route path="/Form9" element={
          <>
          <Form9/>
          </>
        } />

        <Route path="/WidowForm" element={
          <>
          <Navbar/>
          <WidowForm/>
          </>
        } />

        <Route path="/UI" element={
          <>
          <Navbar/>
          <UI/>
          </>
        } />

        <Route path="/A" element={<A/>} />
        <Route path="/B" element={<B/>} />
        <Route path="/param/:id" element={
          <>
          <Navbar/>
          <Param/>
          </>
        } />
        <Route path="/dropdown" element={
          <>
          <Navbar/>
          <Dropdown/>
          </>
        } />
        <Route path="/localStorage" element={
          <>
          <Navbar/>
          <LocalStorage/>
          </>
        } />
        <Route path="/localStorage3" element={
          <>
          <Navbar/>
          <LocalStorage3/>
          </>
        } />
        <Route path="/Form7a" element={
          <>
          <Navbar/>
          <Form7a/>
          </>
        } />
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
        <Route path="/myreactfilter" element={
          <>
          <MyReactFilter/>
            </>
        } />

        <Route path="/TableFilter2" element={
          <>
          <TableFilter2/>
            </>
        } />
        <Route path="/uploadImg" element={
          <>
          <Navbar />
          <UploadImg/>
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
        <Route path="/SpouseDocForm" element={
          <>
          <Navbar />
          <SpouseDocForm/>
            </>
        } />
        <Route path="/DepDocForm" element={
          <>
          <Navbar />
          <DepDocForm/>
            </>
        } />
        <Route path="/Fileup" element={
          <>
          <Navbar />
          <Fileup/>
            </>
        } />
        <Route path="/img" element={
          <>
          <Navbar />
          <Img/>
            </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
