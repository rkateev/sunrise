"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, User } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

const BullIcon = () => (
  <img src="/sunrise-logo.png" alt="Sunrise Logo" width="40" height="32" className="object-contain" />
)

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const navigation = [
    { name: "Меню", href: "/menu" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <BullIcon />
            <span className="font-serif text-xl font-bold text-primary">SUNRISE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center animate-scale-in">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link href="/profile" className="p-2 text-foreground hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Забронировать столик</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Link href="/cart" className="relative p-2 text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6 text-justify">
                  <Link href="/" className="flex items-center space-x-2">
                    <BullIcon />
                    <span className="font-serif text-xl font-bold text-primary">SUNRISE</span>
                  </Link>

                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors text-center"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/profile"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Личный кабинет
                    </Link>
                  </nav>

                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Забронировать столик
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
