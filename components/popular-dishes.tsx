"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"

const popularDishes = [
  {
    id: "steak-ribeye",
    name: "Стейк Рибай",
    description:
      "Сочный стейк из мраморной говядины, приготовленный на открытом огне до идеальной прожарки. Подается с авторским соусом и свежими травами.",
    price: 1200,
    image: "/grilled-ribeye.png",
  },
  {
    id: "burger-sunrise",
    name: 'Бургер "Sunrise"',
    description:
      "Фирменный бургер с сочной говяжьей котлетой, выдержанным сыром чеддер, свежими овощами и специальным соусом. Подается с картофелем фри.",
    price: 850,
    image: "/gourmet-burger.png",
  },
  {
    id: "ribs-barbecue",
    name: "Ребрышки барбекю",
    description:
      "Нежные свиные ребрышки, томленые в специальном маринаде и глазированные карамелизированным соусом барбекю. Подается с гарниром на выбор.",
    price: 950,
    image: "/glazed-pork-ribs.png",
  },
]

export function PopularDishes() {
  const { addItem } = useCart()
  const [addingItems, setAddingItems] = useState<string[]>([])

  const handleAddToCart = async (dish: (typeof popularDishes)[0]) => {
    setAddingItems((prev) => [...prev, dish.id])

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 300))

    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
    })

    setAddingItems((prev) => prev.filter((id) => id !== dish.id))
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Популярные блюда
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {popularDishes.map((dish, index) => (
            <Card
              key={dish.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">{dish.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{dish.price} ₽</span>
                  <Button
                    onClick={() => handleAddToCart(dish)}
                    disabled={addingItems.includes(dish.id)}
                    className="bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 hover:scale-105"
                  >
                    {addingItems.includes(dish.id) ? "Добавляем..." : "В корзину"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
