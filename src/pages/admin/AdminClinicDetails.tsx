import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Clinic } from "@data/types/clinic";

const AdminClinicDetails: React.FC = () => {
  const { clinicId } = useParams<{ clinicId: string }>();
  const [clinic, setClinic] = useState<Clinic | null>(null);

  useEffect(() => {
    const mockClinic: Clinic = {
      id: Number(clinicId),
      name: "Поликлиника №1",
      city: "Москва",
      street: "ул. Примерная, 1",
      description: "Общая информация о поликлинике.",
      imageUrl: "/images/clinic.jpg", // URL изображения
      mapLink: "https://maps.google.com/?q=ул+Примерная+1", // Ссылка на карту
    };
    setClinic(mockClinic);
  }, [clinicId]);

  return clinic ? (
    <div className="container px-5">
      <h1 className="text-2xl font-bold">{clinic.name}</h1>
      <p className="text-sm">
        {clinic.city}, {clinic.street}
      </p>

      <div className="my-4">
        <img
          src={clinic.imageUrl}
          alt={clinic.name}
          className="w-full h-64 object-cover"
        />
      </div>

      <p>{clinic.description}</p>

      <div className="mt-4">
        <a
          href={clinic.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Открыть на карте
        </a>
      </div>
    </div>
  ) : (
    <p>Загрузка...</p>
  );
};

export default AdminClinicDetails;
