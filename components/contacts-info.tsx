"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Youtube } from "lucide-react"

export function ContactsInfo() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.")
    setContactForm({ name: "", email: "", phone: "", message: "" })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      content: "Грозный, пр. Кадырова 110", // Updated address to Grozny
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (999) 123-45-67",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@sunrise-restaurant.ru",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Режим работы",
      content: "Пн-Чт: 12:00-23:00\nПт-Сб: 12:00-01:00\nВс: 12:00-22:00",
      color: "text-orange-600",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground animate-fade-in-up">
                Как нас найти
              </h2>
              <div className="w-16 h-1 bg-primary mb-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${info.color} bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <info.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{info.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, color: "hover:text-pink-600" },
                  { icon: Facebook, color: "hover:text-blue-600" },
                  { icon: Youtube, color: "hover:text-red-600" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Свяжитесь с нами</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input
                      id="contact-name"
                      placeholder="Ваше имя"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input
                      id="contact-phone"
                      placeholder="+7 (999) 123-45-67"
                      value={contactForm.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Ваше сообщение..."
                    value={contactForm.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 max-w-6xl mx-auto animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
          <div className="bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b8c8d8e8f8g8h8i8j8k8l8m8n8o8p8q&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта расположения ресторана Sunrise"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
