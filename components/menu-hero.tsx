export function MenuHero() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
          МЕНЮ
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          Изысканные блюда из отборных ингредиентов. Наша кухня сочетает классические традиции и современные кулинарные
          тенденции, чтобы создать неповторимый гастрономический опыт.
        </p>
      </div>
    </section>
  )
}
