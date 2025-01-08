import React, { useState } from "react";

const Doctors: React.FC = () => {
  const [selectedClinic, setSelectedClinic] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  const doctorsData = [
    {
      id: 1,
      name: "Иван Иванов",
      specialty: "Терапевт",
      experience: 10,
      clinic: "Поликлиника №1",
      department: "Терапевтическое отделение",
      photo: "/path/to/doctor1.jpg", // замените на реальный путь к фото
    },
    {
      id: 2,
      name: "Мария Петрова",
      specialty: "Кардиолог",
      experience: 8,
      clinic: "Поликлиника №1",
      department: "Кардиологическое отделение",
      photo: "/path/to/doctor2.jpg", // замените на реальный путь к фото
    },
    {
      id: 3,
      name: "Сергей Смирнов",
      specialty: "Хирург",
      experience: 15,
      clinic: "Поликлиника №2",
      department: "Хирургическое отделение",
      photo: "/path/to/doctor3.jpg", // замените на реальный путь к фото
    },
    {
      id: 4,
      name: "Екатерина Иванова",
      specialty: "Офтальмолог",
      experience: 5,
      clinic: "Поликлиника №2",
      department: "Офтальмологическое отделение",
      photo: "/path/to/doctor4.jpg", // замените на реальный путь к фото
    },
    // Добавьте других врачей
  ];

  const clinics = ["Поликлиника №1", "Поликлиника №2", "Поликлиника №3"];

  const departments = [
    "Терапевтическое отделение",
    "Кардиологическое отделение",
    "Хирургическое отделение",
    "Офтальмологическое отделение",
  ];

  const handleClinicChange = (clinic: string) => {
    setSelectedClinic(clinic);
    setSelectedDepartment(null); // сбрасываем выбранное отделение при смене поликлиники
  };

  const filteredDoctors = selectedClinic
    ? doctorsData.filter((doctor) => doctor.clinic === selectedClinic)
    : [];

  const filteredDepartments = selectedClinic
    ? departments.filter((department) =>
        filteredDoctors.some((doctor) => doctor.department === department)
      )
    : [];

  return (
    <div className="container">
      <h1 className="text-center text-4xl font-bold mb-6">Наши врачи</h1>

      {/* Выбор поликлиники */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Выберите поликлинику:</h2>
        <div className="flex gap-4">
          {clinics.map((clinic) => (
            <button
              key={clinic}
              className={`px-6 py-2 rounded-lg ${
                selectedClinic === clinic
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleClinicChange(clinic)}
            >
              {clinic}
            </button>
          ))}
        </div>
      </div>

      {/* Выбор отделения */}
      {selectedClinic && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Выберите отделение:</h2>
          <div className="flex gap-4">
            {filteredDepartments.map((department) => (
              <button
                key={department}
                className={`px-6 py-2 rounded-lg ${
                  selectedDepartment === department
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedDepartment(department)}
              >
                {department}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Список врачей */}
      {selectedClinic && selectedDepartment && (
        <div className="space-y-6">
          <h3 className="text-center text-3xl font-semibold">
            Врачи в {selectedDepartment} {selectedClinic}
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {filteredDoctors
              .filter((doctor) => doctor.department === selectedDepartment)
              .map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex items-center border p-4 rounded-lg bg-white shadow-md"
                >
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover mr-6"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold">{doctor.name}</h2>
                    <p className="text-lg">Специализация: {doctor.specialty}</p>
                    <p className="text-lg">
                      Опыт работы: {doctor.experience} лет
                    </p>
                    <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
