import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#christmas-cards" className="hover:underline">
              Christmas Cards
            </Link>
          </li>
          <li>
            <Link href="#corolla-trips" className="hover:underline">
              Corolla Trips
            </Link>
          </li>
          <li>
            <Link href="#other-domains" className="hover:underline">
              Other Domains
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

