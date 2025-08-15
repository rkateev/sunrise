export function ContactsHero() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
          Контакты
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          Свяжитесь с нами для бронирования столика или получения дополнительной информации
        </p>
      </div>
    </section>
  )
}
