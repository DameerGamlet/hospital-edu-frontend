import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<{ role: string }> = ({ role }) => {
  return (
    <nav className="bg-blue-500 p-3">
      <div className="px-5 flex justify-between items-center">
        <Link className="text-white flex items-center" to="/">
          <img
            src="/logo.svg"
            alt="Логотип"
            width={50}
            height={50}
            className="mr-4 rounded-full border-2 border-white p-1"
          />
          <span className="text-xl font-bold underline decoration-2 decoration-white">
            Больничная система
          </span>
        </Link>
        <div className="hidden lg:flex space-x-6">
          <Link className="text-white hover:text-gray-300" to="/doctors">
            Врачи
          </Link>
          <span className="text-white">|</span>
          <Link className="text-white hover:text-gray-300" to="/clinics">
            Наши поликлиники
          </Link>
          <span className="text-white">|</span>
          <Link className="text-white hover:text-gray-300" to="/appointments">
            Записаться
          </Link>
          {role === "user" && (
            <>
              <span className="text-white">|</span>
              <Link className="text-white hover:text-gray-300" to="/my-records">
                Мои записи
              </Link>
            </>
          )}
          {role !== "guest" && (
            <>
              <span className="text-white">|</span>
              <Link className="text-white hover:text-gray-300" to="/account">
                Мой аккаунт
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
