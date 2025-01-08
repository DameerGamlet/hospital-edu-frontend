import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Панель администратора</h2>
      <ul className="list-disc pl-6">
        <li>Управление пользователями</li>
        <li>Просмотр системных логов</li>
        <li>Контроль доступа</li>
      </ul>
    </div>
  );
};

export default AdminPanel;
