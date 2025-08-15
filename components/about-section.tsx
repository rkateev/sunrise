export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">О нас</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Добро пожаловать в ресторан Sunrise</strong>
            </p>

            <p>
              Ресторан Sunrise — это место, где современная европейская кухня встречается с традициями. Наша концепция
              основана на использовании только свежих, сезонных продуктов и высококачественных продуктов и инновационных
              кулинарных техник.
            </p>

            <p>
              Мы создали неповторимую атмосферу для наших гостей, сочетая изысканную кухню, безупречный сервис и
              стильный интерьер. Каждое блюдо в нашем меню — это произведение кулинарного искусства, созданное с любовью
              и вниманием к деталям.
            </p>

            <p>
              Наша команда профессиональных поваров постоянно совершенствует свое мастерство, чтобы удивить вас новыми
              вкусовыми ощущениями и оригинальными подачами блюд.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
