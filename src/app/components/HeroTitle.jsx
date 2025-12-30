"use client"

import { useEffect, useState } from "react"

const phrases = [
  "Esteja presente",
  "Aumente as vendas",
  "Apareça mais"
]

export default function HeroTitle() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <h1 className="text-7xl leading-[100px] text-white">
        <span
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.35s ease, transform 0.35s ease"
          }}
        >
          {phrases[index]}
        </span>
        <br />
        com a Kangoo Digital
      </h1>
    </>
  )
}
