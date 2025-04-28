import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fundam-darkBlue text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Фундам.ПРО</h3>
            <p className="text-gray-300 mb-4">
              Профессиональное строительство фундаментов любой сложности на территории Москвы и Московской области.
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <MapPin size={16} />
              <span>г. Москва, ул. Строителей, д. 10</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <Phone size={16} />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <Mail size={16} />
              <span>info@fundam.pro</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock size={16} />
              <span>Пн-Вс: 9:00-20:00</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/lentochniy-fundament" className="text-gray-300 hover:text-fundam-yellow transition-colors">
                  Ленточный фундамент
                </Link>
              </li>
              <li>
                <Link to="/services/plitniy-fundament" className="text-gray-300 hover:text-fundam-yellow transition-colors">
                  Плитный фундамент
                </Link>
              </li>
              <li>
                <Link to="/services/svayno-rostverkoviy-fundament" className="text-gray-300 hover:text-fundam-yellow transition-colors">
                  Свайно-ростверковый фундамент
                </Link>
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-4">О нас</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-fundam-yellow transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-fundam-yellow transition-colors">
                  Отзывы клиентов
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-fundam-yellow transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-fundam-yellow transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-fundam-yellow transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Почему выбирают нас</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check size={18} className="text-fundam-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">Гарантия на все виды работ до 10 лет</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} className="text-fundam-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">Опыт работы более 15 лет</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} className="text-fundam-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">Собственная строительная техника</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} className="text-fundam-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">Соблюдение сроков и технологий</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} className="text-fundam-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">Бесплатный выезд инженера на участок</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} className="text-fundam-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">Поэтапная оплата работ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Фундам.ПРО. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
