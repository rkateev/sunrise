import Image from "next/image"

export function AboutContent() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Добро пожаловать в ресторан Sunrise
              </h2>
              <div className="w-16 h-1 bg-primary" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ресторан Sunrise — это место, где современная европейская кухня встречается с традициями. Наша
                  концепция основана на использовании только свежих, сезонных продуктов и высококачественных продуктов и
                  инновационных кулинарных техник.
                </p>
                <p>
                  Мы создали неповторимую атмосферу для наших гостей, сочетая изысканную кухню, безупречный сервис и
                  стильный интерьер. Каждое блюдо в нашем меню — это произведение кулинарного искусства, созданное с
                  любовью и вниманием к деталям.
                </p>
                <p>
                  Наша команда профессиональных поваров постоянно совершенствует свое мастерство, чтобы удивить вас
                  новыми вкусовыми ощущениями и оригинальными подачами блюд.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              <Image
                src="/chef-cooking.png"
                alt="Шеф-повар за работой"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Качество",
                description: "Только свежие продукты от проверенных поставщиков",
                icon: "🥘",
              },
              {
                title: "Сервис",
                description: "Внимательное обслуживание и индивидуальный подход",
                icon: "⭐",
              },
              {
                title: "Атмосфера",
                description: "Уютная обстановка для незабываемых моментов",
                icon: "🏛️",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground animate-fade-in-up">
              Наша команда
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              Профессиональные повара и официанты, которые делают ваш визит незабываемым
            </p>
            <div className="relative h-64 md:h-80 animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              <Image
                src="/restaurant-team.png"
                alt="Команда ресторана Sunrise"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
