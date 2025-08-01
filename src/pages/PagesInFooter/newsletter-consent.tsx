export default function NewsletterConsentPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-3xl font-bold mb-2">Согласие на получение рекламной информации</h1>
      <p className="text-sm text-gray-500 mb-8">Редакция от 1 августа 2025</p>

      <section className="space-y-6 text-base leading-7">
        <p>
          Я, являясь пользователем сервиса KutGo, настоящим свободно, своей волей и в своём интересе
          выражаю согласие Кутманбеку [Фамилия], администратору сервиса (далее — Оператор) на
          обработку моих персональных данных в целях получения рекламной и информационной рассылки.
        </p>

        <div>
          <h2 className="font-semibold text-xl mb-2">1. Обрабатываемые персональные данные:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Telegram ID</li>
            <li>Имя и фамилия пользователя (если указано)</li>
            <li>Номер телефона</li>
            <li>Email (если указан)</li>
            <li>История заказов (для персонализированных предложений)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">2. Цели обработки:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Информирование о специальных акциях, скидках и предложениях</li>
            <li>Проведение маркетинговых кампаний</li>
            <li>Направление персонализированной рекламы и рекомендаций</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">3. Каналы рассылки:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Сообщения в Telegram</li>
            <li>Push-уведомления в WebApp</li>
            <li>SMS</li>
            <li>Email</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">4. Условия обработки:</h2>
          <p>
            Обработка осуществляется Кутманбеком [Фамилия]. Данные могут быть переданы техническим
            подрядчикам (например, сервисам рассылки), при условии соблюдения конфиденциальности и
            защиты персональных данных.
          </p>
          <p>
            Обработка включает: сбор, хранение, систематизацию, использование, передачу,
            блокирование и удаление данных.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">5. Срок действия:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Согласие действует бессрочно до момента отзыва.</li>
            <li>Пользователь может отозвать согласие в любой момент.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">6. Отзыв согласия:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Нажать кнопку «Не получать рассылки» в Telegram-боте в разделе Профиль.</li>
            <li>Оператор обработает запрос в течение 10 рабочих дней.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">7. Ознакомление:</h2>
          <p>
            Я подтверждаю, что ознакомлен(а) с Политикой обработки персональных данных, включая
            цели, условия и сроки обработки персональных данных.
          </p>
        </div>
      </section>
    </main>
  );
}
