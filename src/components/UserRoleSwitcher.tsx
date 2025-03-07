import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";

const GUEST = "guest";
const USER = "user";
const ADMIN = "admin";

const UserRoleSwitcher: React.FC<{
  role: string;
  setRole: (role: string) => void;
  selectedClinic: string | null;
  onAdminClick: () => void;
}> = ({ role, setRole, selectedClinic, onAdminClick }) => {
  const handleRoleChange = (newRole: string) => {
    console.log(`Пытаемся изменить роль на: ${newRole}`);

    if (newRole === ADMIN) {
      onAdminClick(); // Показываем модальное окно для выбора поликлиники
    } else {
      setRole(newRole);
    }

    if (newRole === GUEST) {
      console.log("Выход из системы...");
      localStorage.removeItem("selected.global.role");
      localStorage.removeItem("selected.admin.dev.clinic.name");
    }
  };

  return (
    <div className="flex justify-between items-center p-1 bg-gray-100">
      <span>
        {role === GUEST
          ? "Вы вошли как гость"
          : `Вы вошли как ${role === USER ? "пользователь" : "администратор"}`}
      </span>
      <div>
        <Button onClick={() => handleRoleChange(USER)}>
          Войти как пользователь
        </Button>
        <Button onClick={() => handleRoleChange(ADMIN)} className="ml-2">
          Войти как администратор
        </Button>
        <Button onClick={() => handleRoleChange(GUEST)} className="ml-2">
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default UserRoleSwitcher;
