import Navbar from "@components/header/Navbar";
import NavbarAdmin from "@components/header/NavbarAdmin";
import SelectClinicModal from "@components/modal/SelectClinicModal";
import UserRoleSwitcher from "@components/UserRoleSwitcher";
import { Clinic } from "@data/types/clinic";
import AdminClinicDetails from "@pages/admin/AdminClinicDetails";
import AdminDashboard from "@pages/admin/AdminDashboard";
import Appointments from "@pages/appointments/Appointments";
import ClinicsList from "@pages/clinics/ClinicsList";
import Doctors from "@pages/doctors/Doctors";
import Home from "@pages/home/Home";
import MyAppointments from "@pages/users/MyAppointments";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const GUEST = "guest";
const USER = "user";
const ADMIN = "admin";

const AppRouter: React.FC = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState(() => {
    return localStorage.getItem("selected.global.role") || GUEST;
  });

  const [selectedClinic, setSelectedClinic] = useState<string | null>(() => {
    return localStorage.getItem("selected.admin.dev.clinic.name");
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    console.log(`Роль изменена на: ${role}`);
    localStorage.setItem("selected.global.role", role);
  }, [role]);

  const handleAdminClick = () => {
    setShowModal(true);
  };

  const handleClinicSelect = (clinic: Clinic) => {
    console.log(`Выбрана поликлиника: ${clinic.name}`);
    setSelectedClinic(clinic.name);
    localStorage.setItem("selected.admin.dev.clinic.name", clinic.name);
    setRole(ADMIN);
    setShowModal(false);
    navigate("/admin/clinic");
  };

  return (
    <>
      <UserRoleSwitcher
        role={role}
        setRole={setRole}
        selectedClinic={selectedClinic}
        onAdminClick={handleAdminClick}
      />
      {role === ADMIN && selectedClinic ? (
        <NavbarAdmin selectedClinic={selectedClinic} />
      ) : (
        <Navbar role={role} />
      )}
      <div className="px-4 py-6 max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/clinics" element={<ClinicsList />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/my-records" element={<MyAppointments />} />
          {role === ADMIN && selectedClinic && (
            <Route path="/admin" element={<AdminDashboard />} />
          )}

          <Route path="/" element={<Home />} />
          <Route path="/admin/clinic" element={<AdminClinicDetails />} />
        </Routes>
      </div>

      {showModal && (
        <SelectClinicModal
          show={showModal}
          handleClose={() => {
            console.log("Закрытие модального окна");
            setShowModal(false);
          }}
          handleSelectClinic={handleClinicSelect}
        />
      )}
    </>
  );
};

export default AppRouter;
