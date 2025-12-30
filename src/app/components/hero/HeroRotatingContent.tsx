"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type HeroRotatingContentProps = {
  fontTitle: string
  fontText: string
}

const slides = [
  {
    title: "Cansado de investir em anúncios",
    subtitle: "e não ver resultado de verdade?",
    image: "/hero-1.webp",
  },
  {
    title: "Seu tráfego gera leads",
    subtitle: "mas não gera vendas?",
    image: "/hero-2.webp",
  },
  {
    title: "Campanhas rodando",
    subtitle: "sem clareza do que funciona?",
    image: "/hero-3.webp",
  },
]

export default function HeroRotatingContent({
  fontTitle,
  fontText,
}: HeroRotatingContentProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="grid flex-1 items-center gap-10 md:grid-cols-2">
      {/* Texto */}
      <div className="space-y-6">
        <h1 className={`text-6xl leading-[64px] text-white ${fontTitle}`}>
          <span className="block overflow-hidden h-[64px]">
            <span key={index} className="block animate-slide-up">
              {slides[index].title}
            </span>
          </span>
          {slides[index].subtitle}
        </h1>

        <p className={`${fontText} text-[17px] leading-[28px] text-zinc-300`}>
          Muitos negócios perdem dinheiro com campanhas sem suporte, leads ruins e contratos presos.
        </p>
      </div>

      {/* Imagem */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-[16px]">
        <Image
          key={slides[index].image}
          src={slides[index].image}
          alt="Dashboard de anúncios"
          fill
          className="object-cover animate-fade-scale"
          priority
        />
      </div>
    </section>
  )
}