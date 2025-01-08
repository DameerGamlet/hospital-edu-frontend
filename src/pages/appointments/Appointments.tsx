import React, { useState } from "react";

const Appointments: React.FC = () => {
  // Состояние для текущей записи
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Иван Иванов",
      date: "2025-01-10",
      time: "10:00",
      patient: "Анна Кузнецова",
    },
    {
      id: 2,
      doctor: "Мария Петрова",
      date: "2025-01-11",
      time: "12:00",
      patient: "Дмитрий Смирнов",
    },
    {
      id: 3,
      doctor: "Сергей Смирнов",
      date: "2025-01-12",
      time: "15:00",
      patient: "Екатерина Иванова",
    },
  ]);

  // Состояние для формы записи
  const [newAppointment, setNewAppointment] = useState({
    clinic: "",
    department: "",
    appointmentType: "",
    doctor: "",
    date: "",
    time: "",
    patient: "",
    onlineConsultation: false,
  });

  // Обработчик изменения значений в форме
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;

    // Если элемент - чекбокс, то обновляем его состояние через `checked`
    setNewAppointment({
      ...newAppointment,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Добавить запись
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = appointments.length + 1;
    setAppointments([...appointments, { ...newAppointment, id: newId }]);
    setNewAppointment({
      clinic: "",
      department: "",
      appointmentType: "",
      doctor: "",
      date: "",
      time: "",
      patient: "",
      onlineConsultation: false,
    });
  };

  return (
    <div className="container">
      <h1 className="text-center text-4xl font-bold mb-6">
        Записаться на прием
      </h1>

      {/* Форма для записи */}
      <div className="mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="clinic" className="block font-medium">
                Поликлиника
              </label>
              <select
                id="clinic"
                name="clinic"
                value={newAppointment.clinic}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Выберите поликлинику</option>
                <option value="Поликлиника 1">Поликлиника 1</option>
                <option value="Поликлиника 2">Поликлиника 2</option>
                <option value="Поликлиника 3">Поликлиника 3</option>
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="department" className="block font-medium">
                Отделение
              </label>
              <select
                id="department"
                name="department"
                value={newAppointment.department}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Выберите отделение</option>
                <option value="Терапевтическое">Терапевтическое</option>
                <option value="Хирургическое">Хирургическое</option>
                <option value="Кардиологическое">Кардиологическое</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="appointmentType" className="block font-medium">
                Тип записи
              </label>
              <select
                id="appointmentType"
                name="appointmentType"
                value={newAppointment.appointmentType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Выберите тип записи</option>
                <option value="УЗИ">УЗИ</option>
                <option value="МРТ">МРТ</option>
                <option value="Консультация">Консультация</option>
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="onlineConsultation" className="block font-medium">
                Онлайн консультация
              </label>
              <input
                type="checkbox"
                id="onlineConsultation"
                name="onlineConsultation"
                checked={newAppointment.onlineConsultation}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="onlineConsultation">
                Хочу онлайн консультацию
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="doctor" className="block font-medium">
                Врач
              </label>
              <input
                type="text"
                id="doctor"
                name="doctor"
                value={newAppointment.doctor}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="ФИО врача"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="date" className="block font-medium">
                Дата
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={newAppointment.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="time" className="block font-medium">
                Время
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={newAppointment.time}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="patient" className="block font-medium">
                Пациент
              </label>
              <input
                type="text"
                id="patient"
                name="patient"
                value={newAppointment.patient}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="ФИО пациента"
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Записаться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
