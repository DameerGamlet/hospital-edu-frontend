import React from "react";
import AdminPanel from "../../components/admin/AdminPanel";

const AdminDashboard: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center text-4xl font-bold mb-6">
        Панель администратора
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <AdminPanel />
        <AdminPanel />
        <AdminPanel />
      </div>
    </div>
  );
};

export default AdminDashboard;
