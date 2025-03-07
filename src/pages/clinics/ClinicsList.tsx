// src/components/ClinicsList.tsx
import { Clinic } from "@data/types/clinic";
import clinicService from "@services/clinic/clinicService";
import React, { useEffect, useState } from "react";

const ClinicsList: React.FC = () => {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await clinicService.getClinics();
        setClinics(data);
      } catch (error) {
        console.error("Ошибка при загрузке поликлиник:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClinics();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="container py-6">
      <h1 className="text-center text-4xl font-bold mb-6">Наши поликлиники</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clinics.map((clinic) => (
          <div key={clinic.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <img
                src={clinic.imageUrl}
                alt={clinic.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{clinic.name}</h2>
              <p className="text-gray-700 mb-4">{clinic.description}</p>
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-500 mb-2">
                  {clinic.city} {clinic.street}
                </p>
                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 mb-4"
                >
                  Открыть на карте
                </a>
                <a
                  href={`/clinics/${clinic.id}`}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicsList;
