import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/hooks/use-cart"
import { MenuHero } from "@/components/menu-hero"
import { MenuCategories } from "@/components/menu-categories"

export default function MenuPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <MenuHero />
          <MenuCategories />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
