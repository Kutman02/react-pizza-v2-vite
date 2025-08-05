import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Верх футера */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
          {/* Логотип и описание */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">KutGo</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Вкусно, быстро и с любовью. Заказывайте лучшие пиццы в городе.
            </p>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              {['О нас', 'Контакты', 'Реквизиты'].map((text, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm">
              {['Доставка', 'Возврат', 'Частые вопросы'].map((text, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition">
                <FaYoutube size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Подписывайтесь, чтобы быть в курсе новостей и акций.
            </p>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} KutGo. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {['Политика конфиденциальности', 'Пользовательское соглашение', 'Cookie политика'].map(
              (text, idx) => (
                <a key={idx} href="#" className="hover:text-white transition">
                  {text}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
