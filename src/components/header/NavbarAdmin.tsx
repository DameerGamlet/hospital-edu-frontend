import React from "react";
import { Link } from "react-router-dom";

interface NavbarAdminProps {
  selectedClinic: string | null;
}

const NavbarAdmin: React.FC<NavbarAdminProps> = ({ selectedClinic }) => {
  return (
    <nav className="bg-blue-500 p-3">
      <div className="px-5 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <Link className="text-white flex items-center" to="/">
            <img
              src="/logo.svg"
              alt="Логотип"
              width={50}
              height={50}
              className="mr-4 rounded-full border-2 border-white p-1"
            />
            <span className="text-xl font-bold underline decoration-2 decoration-white">
              Больничная система (Админ)
            </span>
          </Link>

          <div className="flex space-x-6">
            <Link className="text-white hover:text-gray-300" to="/admin/clinic">
              Поликлиника
            </Link>
            <Link
              className="text-white hover:text-gray-300"
              to="/admin/doctors"
            >
              Врачи
            </Link>
            <Link
              className="text-white hover:text-gray-300"
              to="/admin/appointments"
            >
              Записи
            </Link>
            <Link
              className="text-white hover:text-gray-300"
              to="/admin/schedule"
            >
              Расписания
            </Link>
            <Link className="text-white hover:text-gray-300" to="/admin/users">
              Пользователи
            </Link>
            <Link
              className="text-white hover:text-gray-300"
              to="/admin/history"
            >
              История действий
            </Link>
          </div>
        </div>

        {selectedClinic && (
          <div className="mb-1">
            <span className="text-white text-sm">
              Текущая поликлиника: {selectedClinic}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarAdmin;
