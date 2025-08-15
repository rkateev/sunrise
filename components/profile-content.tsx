"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Settings, History, Heart } from "lucide-react"

export function ProfileContent() {
  const [userInfo, setUserInfo] = useState({
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    phone: "+7 (999) 123-45-67",
    birthday: "1990-05-15",
  })

  const [isEditing, setIsEditing] = useState(false)

  const orderHistory = [
    {
      id: "ORD-001",
      date: "2023-12-15",
      total: 2850,
      status: "Доставлен",
      items: ["Стейк Рибай", "Бургер Sunrise", "Салат с говядиной"],
    },
    {
      id: "ORD-002",
      date: "2023-12-10",
      total: 1200,
      status: "Доставлен",
      items: ["Стейк Рибай"],
    },
    {
      id: "ORD-003",
      date: "2023-12-05",
      total: 1500,
      status: "Отменен",
      items: ["Ребрышки барбекю", "Шоколадный десерт"],
    },
  ]

  const favoriteItems = [
    { name: "Стейк Рибай", price: 1200, orders: 3 },
    { name: "Бургер Sunrise", price: 850, orders: 2 },
    { name: "Салат с говядиной", price: 650, orders: 1 },
  ]

  const handleSave = () => {
    setIsEditing(false)
    alert("Профиль обновлен!")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Доставлен":
        return "bg-green-100 text-green-800"
      case "В процессе":
        return "bg-blue-100 text-blue-800"
      case "Отменен":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground animate-fade-in-up">
          Личный кабинет
        </h1>
        <div className="w-16 h-1 bg-primary" />
      </div>

      <Tabs defaultValue="profile" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Профиль</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            <span className="hidden sm:inline">История заказов</span>
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Избранное</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="animate-fade-in-up">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Информация о профиле
              </CardTitle>
              <Button
                variant="outline"
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                {isEditing ? "Сохранить" : "Редактировать"}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthday">Дата рождения</Label>
                  <Input
                    id="birthday"
                    type="date"
                    value={userInfo.birthday}
                    onChange={(e) => setUserInfo({ ...userInfo, birthday: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                История заказов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderHistory.map((order, index) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <span className="font-semibold text-foreground">Заказ {order.id}</span>
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(order.date).toLocaleDateString("ru-RU")}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="mb-2 sm:mb-0">
                        <p className="text-sm text-muted-foreground">Блюда: {order.items.join(", ")}</p>
                      </div>
                      <div className="font-bold text-primary">{order.total} ₽</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites" className="animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Избранные блюда
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-primary font-bold">{item.price} ₽</span>
                      <span className="text-sm text-muted-foreground">Заказано: {item.orders} раз</span>
                    </div>
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      Заказать снова
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
