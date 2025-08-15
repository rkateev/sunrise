import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/hooks/use-cart"
import { CartContent } from "@/components/cart-content"

export default function CartPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <CartContent />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
