import React, { useState } from "react";

const MyAppointments: React.FC = () => {
  // Пример данных с записями
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Иван Иванов",
      date: "2025-01-10",
      time: "10:00",
      patient: "Анна Кузнецова",
      status: "active", // Статус: active (активная) или archived (архив)
    },
    {
      id: 2,
      doctor: "Мария Петрова",
      date: "2024-12-28",
      time: "12:00",
      patient: "Дмитрий Смирнов",
      status: "archived", // Запись прошла
    },
    {
      id: 3,
      doctor: "Сергей Смирнов",
      date: "2025-01-12",
      time: "15:00",
      patient: "Екатерина Иванова",
      status: "active", // Статус: active (активная)
    },
  ]);

  // Функция для фильтрации активных записей
  const activeAppointments = appointments.filter(
    (appointment) => appointment.status === "active"
  );

  // Функция для фильтрации архивных записей
  const archivedAppointments = appointments.filter(
    (appointment) => appointment.status === "archived"
  );

  return (
    <div className="container my-6">
      <h1 className="text-center text-4xl font-bold mb-6">
        Мои записи к врачам
      </h1>

      <div className="space-y-6">
        {/* Раздел активных записей */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Активные записи</h2>
          {activeAppointments.length === 0 ? (
            <p>У вас нет активных записей.</p>
          ) : (
            <table className="min-w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4">Врач</th>
                  <th className="py-2 px-4">Дата</th>
                  <th className="py-2 px-4">Время</th>
                  <th className="py-2 px-4">Пациент</th>
                </tr>
              </thead>
              <tbody>
                {activeAppointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b">
                    <td className="py-2 px-4">{appointment.doctor}</td>
                    <td className="py-2 px-4">{appointment.date}</td>
                    <td className="py-2 px-4">{appointment.time}</td>
                    <td className="py-2 px-4">{appointment.patient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Раздел архивных записей */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Архив записей</h2>
          {archivedAppointments.length === 0 ? (
            <p>У вас нет архивных записей.</p>
          ) : (
            <table className="min-w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4">Врач</th>
                  <th className="py-2 px-4">Дата</th>
                  <th className="py-2 px-4">Время</th>
                  <th className="py-2 px-4">Пациент</th>
                </tr>
              </thead>
              <tbody>
                {archivedAppointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b">
                    <td className="py-2 px-4">{appointment.doctor}</td>
                    <td className="py-2 px-4">{appointment.date}</td>
                    <td className="py-2 px-4">{appointment.time}</td>
                    <td className="py-2 px-4">{appointment.patient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
