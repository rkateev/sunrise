export function AboutHero() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/restaurant-team.png')`,
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">О нас</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          История создания ресторана Sunrise и наша философия
        </p>
      </div>
    </section>
  )
}
