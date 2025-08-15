import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function ContactsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Контакты</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Как нас найти</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Адрес</h3>
            <p className="text-muted-foreground">Грозный, пр. Кадырова 110</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Телефон</h3>
            <p className="text-muted-foreground">+7 (999) 123-45-67</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Часы работы</h3>
            <div className="text-muted-foreground space-y-1">
              <p>Пн-Чт: 12:00 - 23:00</p>
              <p>Пт-Сб: 12:00 - 01:00</p>
              <p>Вс: 12:00 - 22:00</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Email</h3>
            <p className="text-muted-foreground">info@sunrise-restaurant.ru</p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b8c8d8e8f8g8h8i8j8k8l8m8n8o8p8q&amp;source=constructor"
              width="100%"
              height="256"
              frameBorder="0"
              title="Карта расположения ресторана Sunrise"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
