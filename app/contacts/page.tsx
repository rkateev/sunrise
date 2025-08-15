import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/hooks/use-cart"
import { ContactsHero } from "@/components/contacts-hero"
import { ContactsInfo } from "@/components/contacts-info"

export default function ContactsPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <ContactsHero />
          <ContactsInfo />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
