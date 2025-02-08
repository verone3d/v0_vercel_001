import Image from "next/image"

export default function CorollaTrips() {
  const trips = [
    { year: 2023, image: "/placeholder.svg?height=200&width=300" },
    { year: 2022, image: "/placeholder.svg?height=200&width=300" },
    { year: 2021, image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <section id="corolla-trips" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Past Trips to Corolla, NC</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.year} className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg">
              <Image
                src={trip.image || "/placeholder.svg"}
                alt={`Corolla trip ${trip.year}`}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{trip.year} Corolla Trip</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

