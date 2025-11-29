import { CasinoSiteCard } from "./casino-site-card"
import { bettingSites } from "@/lib/mock-data"
import { Shield } from "lucide-react"

export function RatingSection() {
  return (
    <section className="py-16 px-4 w-full bg-[#0a0a0a]">
      <div className="container mx-auto max-w-[1220px]">

        <div className="space-y-6">
          {bettingSites.map((site, index) => (
            <CasinoSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
