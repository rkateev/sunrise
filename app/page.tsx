import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/hooks/use-cart"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PopularDishes } from "@/components/popular-dishes"
import { ContactsSection } from "@/components/contacts-section"

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <PopularDishes />
          <ContactsSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
