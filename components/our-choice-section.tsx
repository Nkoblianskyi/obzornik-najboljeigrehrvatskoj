import { CasinoSiteCard } from "./casino-site-card"
import { bettingSites } from "@/lib/mock-data"

export function OurChoiceSection() {
  const ourChoice = bettingSites[0]

  return (
    <section className="py-16 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Naša <span className="text-primary">Preporuka</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nakon detaljne stručne analize, ovo je naš vodeći izbor za hrvatske igrače u 2025.
          </p>
        </div>

        <CasinoSiteCard site={ourChoice} rank={1} />

        {/* Why we recommend section */}
        <div className="mt-10 bg-card border border-border rounded-lg p-8 md:p-10">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Zašto <span className="text-primary">Preporučujemo</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-primary font-semibold mb-2">Vrhunska Sigurnost</h4>
                <p className="text-muted-foreground text-sm">
                  Potpuno licencirano u Hrvatskoj s najsuvremenijom SSL enkripcijom i sveobuhvatnom zaštitom podataka
                  igrača.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-2">Opsežan Izbor Igara</h4>
                <p className="text-muted-foreground text-sm">
                  Preko 1200+ slot igara, stolnih igara i live kasino sadržaja od vodećih svjetskih provajdera.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-2">Brze Isplate</h4>
                <p className="text-muted-foreground text-sm">
                  Lokalne metode plaćanja s procesiranjem isplata u roku od 2 sata.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-primary font-semibold mb-2">Podrška 24/7</h4>
                <p className="text-muted-foreground text-sm">
                  Hrvatski tim dostupan non-stop putem live chata, e-maila i telefona.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-2">Atraktivni Bonusi</h4>
                <p className="text-muted-foreground text-sm">
                  Velikodušni dobrodošlični bonusi s transparentnim uvjetima i redovite promotivne akcije.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-2">Potpuna Lokalizacija</h4>
                <p className="text-muted-foreground text-sm">
                  Cjelokupno sučelje na hrvatskom jeziku s lokalnom podrškom i nacionalnim metodama plaćanja.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 border border-border rounded-lg text-center bg-secondary/30">
            <p className="text-muted-foreground text-sm">
              <span className="text-primary font-semibold">18+</span> | Igrajte odgovorno | Postavite limite prije
              igranja
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
