import clinicsData from "@data/clinics.json"; // Импортируем тестовые данные
import { Clinic } from "@data/types/clinic";

class ClinicService {
  /**
   * Получить список поликлиник.
   * @returns {Promise<Clinic[]>} Список поликлиник.
   */
  async getClinics(): Promise<Clinic[]> {
    // Заглушка: возвращаем данные из JSON-файла
    return Promise.resolve(clinicsData as Clinic[]);

    /* TODO: раскомментировать после реализации бакенда
    const response = await axios.get<Clinic[]>("/api/clinics");
    return response.data;
    */
  }

  /**
   * Получить поликлинику по ID.
   * @param {number} id - ID поликлиники.
   * @returns {Promise<Clinic | undefined>} Данные поликлиники.
   */
  async getClinicById(id: number): Promise<Clinic | undefined> {
    // Заглушка: ищем поликлинику в JSON-файле
    const clinic = clinicsData.find((c) => c.id === id) as Clinic | undefined;
    return Promise.resolve(clinic);

    /* TODO: раскомментировать после реализации бакенда
    const response = await axios.get<Clinic>(`/api/clinics/${id}`);
    return response.data;
    */
  }
}

export default new ClinicService();
