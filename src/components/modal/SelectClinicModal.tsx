import clinics from "@data/clinics.json";
import { Clinic } from "@data/types/clinic";
import React from "react";
import { Button, Modal } from "react-bootstrap";

interface SelectClinicModalProps {
  show: boolean;
  handleClose: () => void;
  handleSelectClinic: (clinic: Clinic) => void;
}

const SelectClinicModal: React.FC<SelectClinicModalProps> = ({
  show,
  handleClose,
  handleSelectClinic,
}) => {
  const cities = Array.from(
    new Set(clinics.map((clinic) => clinic.city))
  ).sort();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Выберите поликлинику</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cities.map((city, index) => (
          <div key={index}>
            <h5>{city}</h5>
            {clinics
              .filter((clinic) => clinic.city === city)
              .map((clinic) => (
                <Button
                  key={clinic.id}
                  variant="outline-primary"
                  onClick={() => handleSelectClinic(clinic)}
                  className="w-100 mb-2"
                >
                  <div className="font-semibold">{clinic.name}</div>
                  <div className="text-sm">{clinic.street}</div>
                </Button>
              ))}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectClinicModal;
