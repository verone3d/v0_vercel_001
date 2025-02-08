import Header from "@/components/header"
import Hero from "@/components/hero"
import ChristmasCards from "@/components/christmas-cards"
import CorollaTrips from "@/components/corolla-trips"
import DomainLinks from "@/components/domain-links"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ChristmasCards />
        <CorollaTrips />
        <DomainLinks />
      </main>
      <Footer />
    </div>
  )
}

