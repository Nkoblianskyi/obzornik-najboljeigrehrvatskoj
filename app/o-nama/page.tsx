import { Header } from "@/components/header"

export const metadata = {
  title: "O Nama - Najbolje Igre Hrvatska",
  description:
    "Saznajte više o Najbolje Igre Hrvatska - vašem stručnom portalu za profesionalnu analizu online kasina u Hrvatskoj.",
}

export default function ONama() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            O <span className="text-primary">Nama</span>
          </h1>

          <div className="space-y-6">
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Tko smo mi?</h2>
              <p className="text-muted-foreground">
                Najbolje Igre Hrvatska je vodeći neovisni stručni portal za analizu i ocjenjivanje online kasina u
                Hrvatskoj. Naša misija je pružiti hrvatskim igračima najpouzdanije, najobjektivnije i najdetaljnije
                informacije kako bi mogli donijeti informirane odluke pri odabiru kasino platforme.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Naša misija</h2>
              <p className="text-muted-foreground mb-4">
                Vjerujemo da svaki igrač zaslužuje pristup transparentnim, točnim i redovito ažuriranim informacijama o
                online kasino platformama. Stoga naš tim stručnjaka temeljito testira i ocjenjuje svaku platformu prema
                strogim profesionalnim standardima.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Neovisne i nepristrane stručne recenzije</li>
                <li>Redovito ažurirane ocjene i analize</li>
                <li>Testiranje s pravim uplatama i isplatama</li>
                <li>Prioritet na sigurnosti i zaštiti igrača</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Proces ocjenjivanja</h2>
              <p className="text-muted-foreground mb-4">
                Svaki kasino prolazi kroz naš rigorozan višefazni proces evaluacije:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Detaljna provjera licence i regulatornih standarda</li>
                <li>Testiranje kvalitete igara i pouzdanosti provajdera</li>
                <li>Analiza bonusa, promotivnih uvjeta i fer pravila</li>
                <li>Evaluacija korisničke podrške i responzivnosti</li>
                <li>Testiranje brzine, sigurnosti i raznolikosti metoda plaćanja</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Naš tim</h2>
              <p className="text-muted-foreground">
                Naš tim čine iskusni stručnjaci s višegodišnjim iskustvom u online gaming industriji. Svi članovi tima
                dijele predanost odgovornom igranju, transparentnosti i visokim profesionalnim standardima u
                recenziranju kasino platformi.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Odgovorno igranje</h2>
              <p className="text-muted-foreground">
                Promicanje odgovornog igranja je temelj našeg djelovanja. Uvijek savjetujemo igračima da postavljaju
                stroge limite, igraju isključivo sa sredstvima koja mogu priuštiti izgubiti, te da potraže stručnu pomoć
                ako primijete bilo kakve znakove problematičnog ponašanja.
              </p>
            </section>

            <div className="border border-primary/20 rounded-lg p-5 mt-8 text-center bg-primary/5">
              <p className="text-foreground">
                Hvala vam što ste dio <span className="text-primary font-semibold">Najbolje Igre Hrvatska</span>{" "}
                zajednice.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
