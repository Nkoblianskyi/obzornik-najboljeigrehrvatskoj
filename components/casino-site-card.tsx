import type { BettingSite } from "@/lib/mock-data"
import Link from "next/link"

interface CasinoSiteCardProps {
  site: BettingSite
  rank: number
}

export function CasinoSiteCard({ site, rank }: CasinoSiteCardProps) {
  const starRating = site.rating / 2

  const StarIcon = ({ fillPercentage }: { fillPercentage: number }) => {
    const fillId = `star-fill-${Math.random().toString(36).substr(2, 9)}`
    const clampedFill = Math.max(0, Math.min(100, fillPercentage))

    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={fillId}>
            <stop offset={`${clampedFill}%`} stopColor="#C9A227" />
            <stop offset={`${clampedFill}%`} stopColor="#2a2a2a" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={`url(#${fillId})`}
        />
      </svg>
    )
  }

  const renderStars = () => {
    return [...Array(5)].map((_, i) => {
      const fillPercentage = Math.min(100, Math.max(0, (starRating - i) * 100))
      return <StarIcon key={i} fillPercentage={fillPercentage} />
    })
  }

  const UsersIcon = () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const getBadgeText = () => {
    const badges = [
      "Najbolji Izbor",
      "Popularno",
      "Ekskluzivno",
      "U Trendu",
      "Preporučeno",
      "Provjereno",
      "Pouzdano",
      "Kvalitetno",
      "Sigurno",
      "Vrhunsko",
    ]
    return badges[rank - 1] || `#${rank}`
  }

  const getRankBadge = () => {
    const badgeText = getBadgeText()

    if (rank <= 4) {
      return (
        <div className="absolute -top-3 left-4 z-30">
          <div className="bg-gradient-to-r from-[#C9A227] to-[#8B7355] px-4 py-1.5 rounded-full shadow-lg shadow-[#C9A227]/30 border border-[#C9A227]/50">
            <span className="text-[10px] font-bold text-[#0a0a0a] uppercase tracking-wider whitespace-nowrap">
              {badgeText}
            </span>
          </div>
        </div>
      )
    }
    return (
      <div className="absolute -top-3 left-4 z-30">
        <div className="bg-[#1a1a1a] px-4 py-1.5 rounded-full shadow-lg border border-[#2a2a2a]">
          <span className="text-[10px] font-semibold text-[#C9A227] uppercase tracking-wider whitespace-nowrap">
            {badgeText}
          </span>
        </div>
      </div>
    )
  }

  const isFirstItem = rank === 1

  return (
    <div
      className={`relative overflow-visible transition-all duration-500 group ${
        isFirstItem
          ? "bg-gradient-to-r from-[#0f0f0f] via-[#141414] to-[#0f0f0f] border border-[#C9A227]/40 shadow-2xl shadow-[#C9A227]/10 rounded-2xl"
          : "bg-gradient-to-r from-[#0c0c0c] via-[#111111] to-[#0c0c0c] border border-[#1f1f1f] shadow-xl rounded-2xl hover:border-[#C9A227]/20 hover:shadow-[#C9A227]/5"
      }`}
    >
      {getRankBadge()}

      <div className="p-6 sm:p-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto_auto_auto] lg:gap-8 lg:items-center">
          <div className="flex-shrink-0 relative pt-2">
            <div className="relative bg-[#0a0a0a] p-5 rounded-xl border border-[#1a1a1a] group-hover:border-[#C9A227]/20 transition-colors duration-300">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[130px] h-[70px] object-contain"
              />
            </div>
          </div>

          <div className="text-center px-4">
            <div className="inline-flex items-center gap-2 text-[#C9A227]/70 text-[10px] uppercase tracking-[0.2em] font-medium mb-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A227]/50"></div>
              <span>Bonus Dobrodošlice</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#C9A227]/50"></div>
            </div>
            <p className="text-white font-semibold leading-snug text-xl tracking-tight">{site.bonus}</p>
          </div>

          <div className="text-center flex-shrink-0 px-4">
            <div className="flex items-center justify-center mb-2 gap-1">{renderStars()}</div>
            <div className="flex items-center justify-center text-[#666] text-[11px] gap-1.5 font-medium">
              <UsersIcon />
              <span>{site.votes.toLocaleString()} glasova</span>
            </div>
          </div>

          <div className="text-center flex-shrink-0 px-6">
            <div className="relative">
              <div className="text-5xl font-bold text-[#C9A227] tracking-tight">{site.rating.toFixed(1)}</div>
              <div className="text-[9px] text-[#555] uppercase tracking-[0.15em] mt-1">od 10</div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link href={site.url} target="_blank" rel="noopener noreferrer">
              <button className="relative overflow-hidden bg-[#C9A227] hover:bg-[#B8922A] text-[#0a0a0a] font-semibold px-8 py-4 text-sm rounded-xl transition-all duration-300 uppercase tracking-wider group/btn">
                <span className="relative z-10">Posjeti Casino</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              </button>
            </Link>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden md:grid-cols-[auto_1fr_auto] md:gap-5 md:items-center">
          <div className="flex items-center gap-4 md:col-span-3">
            <div className="flex-shrink-0 relative pt-2">
              <div className="relative bg-[#0a0a0a] p-3 rounded-xl border border-[#1a1a1a]">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[110px] h-[55px] object-contain"
                />
              </div>
            </div>

            <div className="flex-1 text-center">
              <div className="inline-flex items-center gap-2 text-[#C9A227]/70 text-[9px] uppercase tracking-[0.2em] font-medium mb-2">
                <span>Bonus Dobrodošlice</span>
              </div>
              <p className="text-white font-semibold leading-tight text-base">{site.bonus}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 md:col-span-1">
            <div className="flex items-center justify-center mb-1.5 gap-0.5">{renderStars()}</div>
            <div className="flex items-center justify-center text-[#666] text-[10px] gap-1 font-medium">
              <UsersIcon />
              <span>{site.votes.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:col-span-1">
            <div className="text-4xl font-bold text-[#C9A227]">{site.rating.toFixed(1)}</div>
          </div>

          <div className="flex items-center justify-center md:col-span-1">
            <Link href={site.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#C9A227] hover:bg-[#B8922A] text-[#0a0a0a] font-semibold px-6 py-3 text-sm rounded-xl transition-all duration-300 uppercase tracking-wider">
                Posjeti
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <div className="flex gap-3 items-start pt-4">
            <div className="w-[40%] flex-shrink-0 relative">
              <div className="relative bg-[#0a0a0a] p-2.5 rounded-xl border border-[#1a1a1a]">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-[45px] object-contain" />
              </div>
            </div>

            <div className="w-[60%] flex flex-col gap-2 items-center justify-center">
              <div className="text-center">
                <div className="text-[#C9A227]/70 text-[8px] uppercase tracking-[0.15em] font-medium mb-1.5">Bonus</div>
                <p className="text-white font-semibold text-base leading-tight">{site.bonus}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center py-4 border-t border-[#1a1a1a]">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex justify-center mb-1 gap-0.5">{renderStars()}</div>
              <div className="flex items-center justify-center gap-1 text-[8px] text-[#666] font-medium">
                <UsersIcon />
                <span>{site.votes.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-3xl font-bold text-[#C9A227]">{site.rating.toFixed(1)}</div>
            </div>

            <div className="flex items-center justify-center">
              <Link href={site.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-[#C9A227] active:bg-[#B8922A] text-[#0a0a0a] font-semibold px-2 py-2.5 text-[10px] text-center rounded-lg transition-all duration-300 uppercase tracking-wider">
                  Posjeti
                </button>
              </Link>
            </div>
          </div>

          <div className="px-6 py-3 bg-[#080808] border-t border-[#1a1a1a] -mx-6 -mb-6 rounded-b-2xl">
            <p className="text-[10px] text-[#555] text-center leading-relaxed">{site.terms}</p>
          </div>
        </div>
      </div>

      {/* Terms for Desktop and Tablet */}
      <div className="hidden md:block px-6 py-3 bg-[#080808] border-t border-[#1a1a1a] rounded-b-2xl">
        <p className="text-[10px] text-[#555] text-center leading-relaxed">{site.terms}</p>
      </div>
    </div>
  )
}
