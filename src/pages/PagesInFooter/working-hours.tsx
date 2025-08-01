export default function WorkingHoursPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Режим работы</h1>

      <ul className="space-y-2 text-lg">
        <li>
          <strong>Понедельник:</strong> с 9:00 до 20:00
        </li>
        <li>
          <strong>Вторник:</strong> с 9:00 до 20:00
        </li>
        <li>
          <strong>Среда:</strong> с 9:00 до 20:00
        </li>
        <li>
          <strong>Четверг:</strong> с 9:00 до 20:00
        </li>
        <li>
          <strong>Пятница:</strong> с 9:00 до 20:00
        </li>
        <li>
          <strong>Суббота:</strong> с 9:00 до 20:00
        </li>
        <li>
          <strong>Воскресенье:</strong> с 9:00 до 20:00
        </li>
      </ul>

      <div className="mt-8 text-lg">
        <p>
          При возникновении вопросов свяжитесь с нами по телефону:{' '}
          <a href="tel:+79123456789" className="text-blue-600 hover:underline">
            +7 912 345 67 89
          </a>
        </p>
      </div>
    </main>
  );
}
