"use client"

import Image from "next/image"

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating playing cards - smaller and repositioned */}
      <div className="absolute top-[15%] left-[5%] animate-float-slow opacity-15 hidden md:block">
        <svg width="28" height="40" viewBox="0 0 40 56" fill="none" className="text-primary">
          <rect x="1" y="1" width="38" height="54" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="8" y="18" fill="currentColor" fontSize="14" fontWeight="bold">
            A
          </text>
          <text x="20" y="35" fill="currentColor" fontSize="20">
            ♠
          </text>
        </svg>
      </div>

      <div className="absolute top-[20%] right-[8%] animate-float-medium opacity-10 hidden md:block">
        <svg width="28" height="40" viewBox="0 0 40 56" fill="none" className="text-red-500">
          <rect x="1" y="1" width="38" height="54" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="8" y="18" fill="currentColor" fontSize="14" fontWeight="bold">
            K
          </text>
          <text x="20" y="35" fill="currentColor" fontSize="20">
            ♥
          </text>
        </svg>
      </div>

      {/* Floating casino chips - smaller */}
      <div className="absolute top-[40%] right-[12%] animate-float-slow opacity-15 hidden lg:block">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" stroke="hsl(45 70% 50%)" strokeWidth="2" fill="none" />
          <circle cx="24" cy="24" r="16" stroke="hsl(45 70% 50%)" strokeWidth="1" fill="none" />
          <circle cx="24" cy="24" r="8" fill="hsl(45 70% 50% / 0.3)" />
        </svg>
      </div>

      {/* Sparkle effects - fewer and smaller */}
      <div className="absolute top-[25%] left-[30%] animate-pulse opacity-20 hidden md:block">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="hsl(45 70% 50%)" />
        </svg>
      </div>

      <div className="absolute bottom-[30%] right-[20%] animate-pulse delay-500 opacity-15 hidden md:block">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5L6 0Z" fill="hsl(45 70% 50%)" />
        </svg>
      </div>
    </div>
  )
}

function RouletteWheel() {
  return (
    <div className="absolute -bottom-20 -right-20 md:-bottom-28 md:-right-28 opacity-[0.06] pointer-events-none">
      <svg
        width="200"
        height="200"
        viewBox="0 0 400 400"
        className="md:w-[280px] md:h-[280px] animate-spin-slow"
        style={{ animationDuration: "60s" }}
      >
        <circle cx="200" cy="200" r="190" stroke="hsl(45 70% 50%)" strokeWidth="2" fill="none" />
        <circle cx="200" cy="200" r="160" stroke="hsl(45 70% 50%)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="120" stroke="hsl(45 70% 50%)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="80" stroke="hsl(45 70% 50%)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="40" fill="hsl(45 70% 50% / 0.2)" />
        {[...Array(36)].map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="10"
            x2="200"
            y2="80"
            stroke="hsl(45 70% 50%)"
            strokeWidth="1"
            transform={`rotate(${i * 10} 200 200)`}
          />
        ))}
      </svg>
    </div>
  )
}

export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("hr-HR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 relative overflow-hidden border-b border-primary/20">
      <div className="absolute inset-0">
        <Image
          src="/luxury-dark-casino-interior-with-golden-lights--sl.jpg"
          alt="Casino background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
      </div>

      <FloatingElements />
      <RouletteWheel />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="absolute top-1/4 left-1/4 w-32 md:w-48 h-32 md:h-48 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-secondary/60 backdrop-blur-sm border border-primary/30 rounded-full mb-4 md:mb-6 shadow-lg shadow-primary/5">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-primary">
                <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="currentColor" />
              </svg>
              <span className="text-primary text-xs md:text-sm font-semibold">Ekspertna Analiza</span>
            </span>
            <span className="w-px h-3 bg-border"></span>
            <span className="text-muted-foreground text-xs md:text-sm">{formattedDate}</span>
          </div>

          <div className="relative mb-4 md:mb-6">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-1 opacity-25">
              <span className="text-primary text-lg">♠</span>
              <span className="text-red-500 text-lg">♥</span>
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-1 opacity-25">
              <span className="text-red-500 text-lg">♦</span>
              <span className="text-primary text-lg">♣</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">Vrhunski Vodič za</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary animate-gradient">
                Kasina u Hrvatskoj
              </span>
            </h1>
          </div>

          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Profesionalne recenzije, nepristrane ocjene i ekskluzivni uvidi u najpouzdanije licencirane kasino platforme
          </p>

          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-1.5 bg-secondary/40 backdrop-blur-sm border border-border rounded-md">
              <Image src="/flag.png" alt="Hrvatska" width={16} height={16} className="opacity-90" />
              <span className="text-foreground text-xs md:text-sm font-medium">Licencirano u RH</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-1.5 bg-secondary/40 backdrop-blur-sm border border-border rounded-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-500">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-foreground text-xs md:text-sm font-medium">SSL Zaštita</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-1.5 bg-secondary/40 backdrop-blur-sm border border-border rounded-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
              </svg>
              <span className="text-foreground text-xs md:text-sm font-medium">Testirano</span>
            </div>

            <div className="px-2.5 py-1.5 md:px-3 md:py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-md">
              <span className="text-primary text-xs md:text-sm font-bold">18+</span>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 opacity-30">
            <div className="w-10 md:w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-primary">
              <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z" fill="currentColor" />
            </svg>
            <div className="w-10 md:w-12 h-px bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
