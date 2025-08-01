import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Верх: логотип + секции */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
          {/* Логотип и описание */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">KutGo</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Вкусно, быстро и с любовью. Заказывайте лучшие пиццы в городе.
            </p>
          </div>

          {/* Ссылки */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Реквизиты
                </a>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Частые вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Подписка и соц.сети */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaYoutube size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Подписывайтесь, чтобы быть в курсе новостей и акций.
            </p>
          </div>
        </div>

        {/* Низ футера */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} KutGo. Все права защищены.</p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition">
              Пользовательское соглашение
            </a>
            <a href="#" className="hover:text-white transition">
              Cookie политика
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
