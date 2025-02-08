import Image from "next/image"

export default function ChristmasCards() {
  const cards = [
    { year: 2023, image: "/placeholder.svg?height=300&width=200" },
    { year: 2022, image: "/placeholder.svg?height=300&width=200" },
    { year: 2021, image: "/placeholder.svg?height=300&width=200" },
  ]

  return (
    <section id="christmas-cards" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Yearly Christmas Card Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.year} className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={`Christmas card ${card.year}`}
                width={200}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{card.year} Christmas Card</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

