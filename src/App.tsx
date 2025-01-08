import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/header/Navbar";
import Home from "@pages/home/Home";
import Doctors from "@pages/doctors/Doctors";
import Appointments from "@pages/appointments/Appointments";
import MyAppointments from "@pages/users/MyAppointments";
import AdminDashboard from "@pages/admin/AdminDashboard";
import ClinicsList from "@pages/clinics/ClinicsList";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="px-4 py-6 max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/clinics" element={<ClinicsList />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/my-records" element={<MyAppointments />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
