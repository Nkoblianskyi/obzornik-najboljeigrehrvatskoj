export function InfoSections() {
  return (
    <section className="py-16 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        <div className="space-y-16">
          {/* Methodology Section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Naša <span className="text-primary">Metodologija</span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Svaki kasino prolazi kroz rigorozan proces evaluacije kako bismo osigurali samo vrhunske preporuke za
                hrvatske igrače.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="bg-secondary/50 border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <h4 className="text-foreground font-semibold mb-2">Sigurnost</h4>
                <p className="text-muted-foreground text-sm">Licenciranje, enkripcija i zaštita podataka</p>
              </div>

              <div className="bg-secondary/50 border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <h4 className="text-foreground font-semibold mb-2">Igre</h4>
                <p className="text-muted-foreground text-sm">Kvaliteta, raznolikost i renomirani provajderi</p>
              </div>

              <div className="bg-secondary/50 border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <h4 className="text-foreground font-semibold mb-2">Bonusi</h4>
                <p className="text-muted-foreground text-sm">Vrijednost, transparentni uvjeti i fer pravila</p>
              </div>

              <div className="bg-secondary/50 border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">15%</div>
                <h4 className="text-foreground font-semibold mb-2">Podrška</h4>
                <p className="text-muted-foreground text-sm">Korisnička služba i brzina transakcija</p>
              </div>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-6 max-w-3xl mx-auto text-center">
              <h4 className="text-xl font-semibold text-foreground mb-2">Neovisne i Nepristrane Ocjene</h4>
              <p className="text-muted-foreground">
                Naš stručni tim testira svaku platformu s pravim uplatama. Sve ocjene se redovito ažuriraju kako bismo
                osigurali najaktualnije informacije.
              </p>
            </div>
          </div>

          {/* Responsible Gambling Section */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Odgovorno <span className="text-primary">Igranje</span>
              </h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <h4 className="text-primary font-semibold text-xl mb-4 text-center">
                  Kockanje treba biti isključivo zabava
                </h4>
                <p className="text-muted-foreground text-center mb-6">
                  Online kasino igre namijenjene su za rekreaciju. Nikada ne igrajte s sredstvima koja si ne možete
                  priuštiti izgubiti.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-foreground font-semibold mb-3">Zdravo Igranje:</h5>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">&#10003;</span>
                        Postavite dnevne i mjesečne limite
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">&#10003;</span>
                        Igrajte isključivo za zabavu
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">&#10003;</span>
                        Strogo poštujte svoje limite
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">&#10003;</span>
                        Nikada ne jurite gubitke
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-foreground font-semibold mb-3">Znakovi Upozorenja:</h5>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">&#10005;</span>
                        Igrate duže nego što ste planirali
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">&#10005;</span>
                        Skrivate gubitke od bliskih osoba
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">&#10005;</span>
                        Zanemarujete svakodnevne obveze
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">&#10005;</span>
                        Osjećate anksioznost zbog igranja
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <h4 className="text-foreground font-semibold text-xl mb-4 text-center">Resursi za Pomoć</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://www.hupis.hr/klok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-background/50 rounded border border-border hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground text-sm"
                  >
                    HUPIS - Hrvatska Prevencija
                  </a>
                  <a
                    href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-background/50 rounded border border-border hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground text-sm"
                  >
                    PBSVI - Program za Ovisnost
                  </a>
                </div>
              </div>

              <div className="border border-primary/30 rounded-lg p-6 text-center bg-primary/5">
                <p className="text-foreground font-semibold text-lg mb-1">ZABRANJEN PRISTUP MALOLJETNICIMA</p>
                <p className="text-muted-foreground">Isključivo za osobe starije od 18 godina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
