// data/clinics.ts
export interface Clinic {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  address: string;
  mapLink: string;
}

export const clinics: Clinic[] = [
  {
    id: 1,
    name: "Поликлиника в Саратове 3",
    description:
      "Современная поликлиника, оборудованная всем необходимым для диагностики и лечения пациентов. Мы предлагаем широкий спектр медицинских услуг, включая терапевтические и специализированные консультации.",
    imageUrl: "/images/clinic_saratov3.jpg",
    address: "Саратов, ул. Пушкина, 3",
    mapLink: "https://www.google.com/maps?q=Саратов, ул. Пушкина, 3",
  },
  {
    id: 2,
    name: "Поликлиника в Самаре 1",
    description:
      "Уютная и доступная поликлиника с опытными специалистами, предоставляющая медицинскую помощь на всех этапах: от профилактики до лечения заболеваний.",
    imageUrl: "/images/clinic_samara1.jpg",
    address: "Самара, ул. Ленина, 45",
    mapLink: "https://www.google.com/maps?q=Самара, ул. Ленина, 45",
  },
  {
    id: 3,
    name: "Поликлиника в Энгельсе 1",
    description:
      "Поликлиника в Энгельсе предоставляет широкий спектр медицинских услуг, включая диагностику, лечение и профилактику заболеваний. Мы гордимся нашей командой врачей и вниманием к каждому пациенту.",
    imageUrl: "/images/clinic_engels1.jpg",
    address: "Энгельс, ул. Советская, 10",
    mapLink: "https://www.google.com/maps?q=Энгельс, ул. Советская, 10",
  },
  {
    id: 4,
    name: "Поликлиника в Балаково 1",
    description:
      "Поликлиника в Балаково предлагает пациентам высококачественные медицинские услуги. Здесь работают квалифицированные врачи, которые помогут вам в любом вопросе здоровья.",
    imageUrl: "/images/clinic_balakovo1.jpg",
    address: "Балаково, ул. Мира, 25",
    mapLink: "https://www.google.com/maps?q=Балаково, ул. Мира, 25",
  },
];
