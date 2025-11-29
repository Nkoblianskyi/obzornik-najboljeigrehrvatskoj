import { Header } from "@/components/header"

export const metadata = {
  title: "Politika Privatnosti - Najbolje Igre Hrvatska",
  description: "Politika privatnosti i zaštite podataka za najboljeigrehrvatskoj.com",
}

export default function PolitikaPrivatnosti() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Politika <span className="text-primary">Privatnosti</span>
          </h1>

          <div className="space-y-6">
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">1. Uvod</h2>
              <p className="text-muted-foreground">
                najboljeigrehrvatskoj.com ("mi", "naša stranica") posvećeni smo zaštiti privatnosti naših posjetitelja.
                Ova politika opisuje kako prikupljamo, koristimo i štitimo vaše osobne podatke u skladu s hrvatskim
                zakonodavstvom i EU regulativama o zaštiti podataka (GDPR).
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">2. Podaci koje prikupljamo</h2>
              <p className="text-muted-foreground mb-4">Prikupljamo sljedeće kategorije informacija:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Tehnički podaci (IP adresa, tip preglednika, operativni sustav)</li>
                <li>Analitički podaci (posjećene stranice, trajanje sesije)</li>
                <li>Kolačići za optimizaciju funkcionalnosti stranice</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">3. Svrha obrade podataka</h2>
              <p className="text-muted-foreground mb-4">Vaše podatke obrađujemo u sljedeće svrhe:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Unapređenje sadržaja i funkcionalnosti platforme</li>
                <li>Analiza korištenja i optimizacija korisničkog iskustva</li>
                <li>Pružanje relevantnih i kvalitetnih preporuka kasina</li>
                <li>Osiguranje sigurnosti i sprječavanje zloupotrebe</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">4. Dijeljenje podataka</h2>
              <p className="text-muted-foreground">
                Ne prodajemo niti ustupamo vaše osobne podatke trećim stranama osim kada je to zakonski obvezno ili
                neophodno za pružanje naših usluga (npr. analitički alati treće strane).
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">5. Kolačići</h2>
              <p className="text-muted-foreground">
                Koristimo kolačiće za analitiku i poboljšanje funkcionalnosti. Postavke kolačića možete kontrolirati u
                svom pregledniku. Detaljnije informacije dostupne su u našoj{" "}
                <a href="/politika-kolacica" className="text-primary hover:underline">
                  Politici Kolačića
                </a>
                .
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">6. Vaša prava</h2>
              <p className="text-muted-foreground mb-4">Sukladno GDPR-u, imate pravo na:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Pristup vašim osobnim podacima</li>
                <li>Ispravak netočnih ili nepotpunih podataka</li>
                <li>Brisanje podataka ("pravo na zaborav")</li>
                <li>Ograničavanje obrade podataka</li>
                <li>Prenosivost podataka</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">7. Sigurnosne mjere</h2>
              <p className="text-muted-foreground">
                Primjenjujemo napredne tehničke i organizacijske sigurnosne mjere za zaštitu vaših podataka od
                neovlaštenog pristupa, gubitka ili zloupotrebe.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">8. Izmjene politike</h2>
              <p className="text-muted-foreground">
                Zadržavamo pravo izmjene ove politike. Sve promjene bit će objavljene na ovoj stranici s naznačenim
                datumom ažuriranja.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">9. Kontakt</h2>
              <p className="text-muted-foreground">
                Za sva pitanja vezana uz politiku privatnosti ili ostvarivanje vaših prava, možete nas kontaktirati
                putem informacija dostupnih na našoj stranici.
              </p>
            </section>

            <div className="border border-primary/20 rounded-lg p-5 mt-8 text-center bg-primary/5">
              <p className="text-muted-foreground text-sm">
                Datum posljednje izmjene: <span className="text-foreground">Siječanj 2025</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
