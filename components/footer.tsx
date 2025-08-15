import Link from "next/link"
import { Instagram, Facebook, Youtube, MapPin } from "lucide-react"

const BullIcon = () => (
  <img src="/sunrise-logo.png" alt="Sunrise Logo" width="32" height="24" className="object-contain" />
)

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BullIcon />
              <span className="font-serif text-xl font-bold text-primary">SUNRISE</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ресторан Sunrise — место, где качество и превосходность сочетаются с уютной атмосферой и безупречным
              сервисом.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-primary transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-300 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 hover:text-primary transition-colors">
                  Корзина
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-primary transition-colors">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Грозный, пр. Кадырова 110</span>
              </li>
              <li>+7 (999) 123-45-67</li>
              <li>info@sunrise-restaurant.ru</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Режим работы</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Пн-Чт: 12:00 - 23:00</li>
              <li>Пт-Сб: 12:00 - 01:00</li>
              <li>Вс: 12:00 - 22:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2023 Ресторан Sunrise. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <MapPin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
