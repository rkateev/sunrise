"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"

const menuData = {
  "main-dishes": {
    title: "Основные блюда",
    items: [
      {
        id: "steak-ribeye",
        name: "Стейк Рибай",
        description:
          "Сочный стейк из мраморной говядины, приготовленный на открытом огне до идеальной прожарки. Подается с авторским соусом и свежими травами.",
        price: 1200,
        image: "/grilled-ribeye.png",
      },
      {
        id: "ribs-barbecue",
        name: "Ребрышки барбекю",
        description:
          "Нежные свиные ребрышки, томленые в специальном маринаде и глазированные карамелизированным соусом барбекю. Подается с гарниром на выбор.",
        price: 950,
        image: "/glazed-pork-ribs.png",
      },
    ],
  },
  burgers: {
    title: "Бургеры",
    items: [
      {
        id: "burger-sunrise",
        name: 'Бургер "Sunrise"',
        description:
          "Фирменный бургер с сочной говяжьей котлетой, выдержанным сыром чеддер, свежими овощами и специальным соусом. Подается с картофелем фри.",
        price: 850,
        image: "/gourmet-burger.png",
      },
    ],
  },
  salads: {
    title: "Салаты",
    items: [
      {
        id: "beef-salad",
        name: "Салат с говядиной",
        description:
          "Изысканный салат с кусочками маринованной говядины, свежими листьями салата, помидорами черри, авокадо и заправкой на основе бальзамического уксуса.",
        price: 650,
        image: "/beef-salad.png",
      },
    ],
  },
  desserts: {
    title: "Десерты",
    items: [
      {
        id: "chocolate-dessert",
        name: "Шоколадный десерт",
        description:
          "Изысканный шоколадный муссовый торт с нежными слоями ганаша, украшенный золотыми листьями и свежими ягодами. Идеальное завершение трапезы.",
        price: 450,
        image: "/chocolate-dessert.png",
      },
    ],
  },
}

type CategoryKey = keyof typeof menuData

export function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("main-dishes")
  const [addingItems, setAddingItems] = useState<string[]>([])
  const { addItem } = useCart()

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "main-dishes", label: "Основные блюда" },
    { key: "burgers", label: "Бургеры" },
    { key: "salads", label: "Салаты" },
    { key: "desserts", label: "Десерты" },
  ]

  const handleAddToCart = async (dish: (typeof menuData)[CategoryKey]["items"][0]) => {
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Category Content */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              {menuData[activeCategory].title}
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {menuData[activeCategory].items.map((dish, index) => (
              <Card
                key={dish.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-foreground">{dish.name}</h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                        {dish.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl md:text-3xl font-bold text-primary">{dish.price} ₽</span>
                      <Button
                        onClick={() => handleAddToCart(dish)}
                        disabled={addingItems.includes(dish.id)}
                        className="bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 hover:scale-105 animate-cart-bounce"
                      >
                        {addingItems.includes(dish.id) ? "Добавляем..." : "В корзину"}
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
