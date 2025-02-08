import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DomainLinks() {
  const domains = [
    { name: "3D Design", url: "#" },
    { name: "Amateur Radio", url: "#" },
    { name: "Project Builds", url: "#" },
    { name: "Photography", url: "#" },
    { name: "3D Printing", url: "#" },
    { name: "Maker Activities", url: "#" },
    { name: "Fixer Activities", url: "#" },
  ]

  return (
    <section id="other-domains" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <Card key={domain.name}>
              <CardHeader>
                <CardTitle>
                  <Link href={domain.url} className="hover:underline">
                    {domain.name}
                  </Link>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

