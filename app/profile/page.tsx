import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/hooks/use-cart"
import { ProfileContent } from "@/components/profile-content"

export default function ProfilePage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <ProfileContent />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
