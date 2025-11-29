import { Header } from "@/components/header"

export const metadata = {
  title: "Politika Kolačića - Najbolje Igre Hrvatska",
  description: "Politika korištenja kolačića za najboljeigrehrvatskoj.com",
}

export default function PolitikaKolacica() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Politika <span className="text-primary">Kolačića</span>
          </h1>

          <div className="space-y-6">
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Što su kolačići?</h2>
              <p className="text-muted-foreground">
                Kolačići su male tekstualne datoteke koje web stranice pohranjuju na vaš uređaj prilikom posjeta. Služe
                za poboljšanje korisničkog iskustva, personalizaciju sadržaja i analizu prometa.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Primjena kolačića</h2>
              <p className="text-muted-foreground mb-4">najboljeigrehrvatskoj.com koristi kolačiće za:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Pohranu vaših postavki i preferencija</li>
                <li>Analizu prometa i ponašanja korisnika</li>
                <li>Optimizaciju performansi i funkcionalnosti stranice</li>
                <li>Personalizaciju sadržaja i preporuka</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Kategorije kolačića</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-2">1. Nužni kolačići</h3>
                  <p className="text-muted-foreground text-sm">
                    Esencijalni za osnovnu funkcionalnost stranice. Postavljaju se automatski i ne mogu se onemogućiti.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-medium mb-2">2. Analitički kolačići</h3>
                  <p className="text-muted-foreground text-sm">
                    Omogućuju nam razumijevanje načina korištenja stranice i kontinuirano poboljšanje sadržaja.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-medium mb-2">3. Funkcionalni kolačići</h3>
                  <p className="text-muted-foreground text-sm">
                    Omogućuju naprednu funkcionalnost i personalizaciju. Mogu biti postavljeni od nas ili pružatelja
                    usluga treće strane.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Kolačići trećih strana</h2>
              <p className="text-muted-foreground">
                Koristimo analitičke servise trećih strana koji mogu postavljati vlastite kolačiće. Preporučujemo
                upoznavanje s njihovim politikama privatnosti.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Upravljanje kolačićima</h2>
              <p className="text-muted-foreground mb-4">
                Možete kontrolirati ili obrisati kolačiće putem postavki vašeg preglednika:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground text-sm">
                <li>Google Chrome: Postavke → Privatnost i sigurnost → Kolačići</li>
                <li>Mozilla Firefox: Opcije → Privatnost i sigurnost → Kolačići</li>
                <li>Safari: Postavke → Privatnost → Upravljanje podacima</li>
                <li>Microsoft Edge: Postavke → Privatnost i usluge → Kolačići</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Vaša suglasnost</h2>
              <p className="text-muted-foreground">
                Nastavkom korištenja naše stranice pristajete na upotrebu kolačića sukladno ovoj politici. Ako ne
                prihvaćate kolačiće, možete ih onemogućiti u postavkama preglednika.
              </p>
            </section>

            <div className="border border-primary/20 rounded-lg p-5 mt-8 text-center bg-primary/5">
              <p className="text-muted-foreground text-sm mb-2">
                Datum posljednje izmjene: <span className="text-foreground">Siječanj 2025</span>
              </p>
              <p className="text-muted-foreground text-sm">
                Za dodatne informacije pogledajte našu{" "}
                <a href="/politika-privatnosti" className="text-primary hover:underline">
                  Politiku Privatnosti
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
