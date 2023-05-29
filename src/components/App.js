import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "./arch";
import ViewDocuments from "./ViewDocuments";



import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/fontawsome.all.min.css"
import '../css/arch.css';
import SecurityController from "./SecurityController";
import EmployePanel from "./EmployePanel";
import SecurityControllerAdmin from "./SecurityControllerAdmin";
import AdminPanel from "./AdminPanel";
import EmployeeForm from "./EmployeForm";
import FileUploadComponent from "./FileUpload";
import DocumentTable from "./ViewDocuments";



export default function App() {
  const [admin, setAdmin] = useState(null);
  const token = admin ? admin.token : null;
  const adminUsername = admin ? admin.compte.nom : null;
  const [employe, setEmploye] = useState(null);
  const employeUsername = employe ? employe.compte.username : null;
  const tokenEmploye = employe ? employe.token : null;

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/home" element={<Acceuil />} />
        <Route exact path="/connection/Employe" element={<SecurityController employe={employe} setEmploye={setEmploye} />} />
        <Route exact path="/connection/Admin" element={<SecurityControllerAdmin admin={admin} setAdmin={setAdmin} />} />


        <Route path="/admin" element={<AdminPanel admin = {admin} />} />
        <Route path="/employe" element={<EmployePanel employe = {employe} />} />
        <Route path="/employe/documents" element={<DocumentTable employeUsername ={employeUsername} token={tokenEmploye} />} />
        <Route path="/admin/register" element={<EmployeeForm token={token} /> } />
        <Route path="/admin/upload" element={<FileUploadComponent token={token} adminUsername={adminUsername} />}/>
        {/* Add other sub-routes for the admin panel here */}
      </Routes>
    </BrowserRouter>


  );
}