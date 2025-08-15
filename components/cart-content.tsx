"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, Trash2 } from "lucide-react"

export function CartContent() {
  const { items, updateQuantity, removeItem, clearCart, total } = useCart()
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    email: "",
    deliveryMethod: "pickup",
    address: "",
    paymentMethod: "cash",
    comment: "",
  })

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setOrderForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    alert("Заказ оформлен! Мы свяжемся с вами в ближайшее время.")
    clearCart()
    setOrderForm({
      name: "",
      phone: "",
      email: "",
      deliveryMethod: "pickup",
      address: "",
      paymentMethod: "cash",
      comment: "",
    })
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Корзина</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground mb-8">Ваша корзина пуста</p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/menu">Перейти к меню</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Корзина</h1>
        <div className="w-16 h-1 bg-primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 rounded-lg font-medium text-sm text-muted-foreground">
            <div className="col-span-1">Изображение</div>
            <div className="col-span-4">Название</div>
            <div className="col-span-2">Цена</div>
            <div className="col-span-3">Количество</div>
            <div className="col-span-2">Сумма</div>
          </div>

          {/* Cart Items */}
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-4">
                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                  <div className="flex space-x-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-primary font-bold">{item.price} ₽</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="font-bold text-lg">{item.price * item.quantity} ₽</span>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-1">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                  </div>
                  <div className="col-span-2">
                    <span className="text-primary font-bold">{item.price} ₽</span>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <span className="font-bold text-lg">{item.price * item.quantity} ₽</span>
                  </div>
                  <div className="col-span-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Cart Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="outline" onClick={clearCart} className="flex-1 bg-transparent">
              Очистить корзину
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/menu">Продолжить покупки</Link>
            </Button>
          </div>
        </div>

        {/* Order Summary & Form */}
        <div className="space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Итого</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>{item.price * item.quantity} ₽</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span>Стоимость блюд:</span>
                <span>{total} ₽</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Доставка:</span>
                <span>0 ₽</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Итого:</span>
                <span className="text-primary">{total} ₽</span>
              </div>
            </CardContent>
          </Card>

          {/* Order Form */}
          <Card>
            <CardHeader>
              <CardTitle>Оформление заказа</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={orderForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (___) ___-__-__"
                      value={orderForm.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={orderForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Способ доставки</Label>
                  <RadioGroup
                    value={orderForm.deliveryMethod}
                    onValueChange={(value) => handleInputChange("deliveryMethod", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Самовывоз</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery">Доставка</Label>
                    </div>
                  </RadioGroup>
                </div>

                {orderForm.deliveryMethod === "delivery" && (
                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес доставки</Label>
                    <Input
                      id="address"
                      placeholder="Введите адрес доставки"
                      value={orderForm.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="space-y-3">
                  <Label>Способ оплаты</Label>
                  <RadioGroup
                    value={orderForm.paymentMethod}
                    onValueChange={(value) => handleInputChange("paymentMethod", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Наличными</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Картой</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online">Онлайн</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий к заказу</Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительная информация к заказу"
                    value={orderForm.comment}
                    onChange={(e) => handleInputChange("comment", e.target.value)}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Оформить заказ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
