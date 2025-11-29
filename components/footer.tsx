import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-10 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/favicon.ico" alt="Logo" width={28} height={28} className="opacity-80" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Najbolje Igre Hrvatska</span>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="px-3 py-1.5 bg-secondary border border-border rounded text-muted-foreground text-sm font-bold">
              18+
            </div>
            <div className="text-muted-foreground text-sm text-center">
              <p className="text-primary font-medium">Odgovorno igranje</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground text-sm">
              <Link href="/politika-privatnosti" className="hover:text-primary transition-colors">
                Privatnost
              </Link>
              <Link href="/politika-kolacica" className="hover:text-primary transition-colors">
                Kolačići
              </Link>
              <Link href="/o-nama" className="hover:text-primary transition-colors">
                O Nama
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center">
          <div>
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={32}
                height={32}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-primary font-semibold uppercase tracking-wide">Najbolje Igre Hrvatska</span>
            </Link>
          </div>

          <div className="flex items-center gap-8 text-muted-foreground text-sm">
            <Link href="/politika-privatnosti" className="hover:text-primary transition-colors">
              Politika Privatnosti
            </Link>
            <Link href="/politika-kolacica" className="hover:text-primary transition-colors">
              Politika Kolačića
            </Link>
            <Link href="/o-nama" className="hover:text-primary transition-colors">
              O Nama
            </Link>
          </div>

          <div className="px-3 py-1.5 bg-secondary border border-border rounded text-muted-foreground text-sm font-bold">
            18+
          </div>
        </div>

        {/* Responsible gambling logos */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wide">Odgovorno Igranje</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 p-3 rounded border border-border hover:border-primary/30 transition-colors flex items-center justify-center group"
            >
              <Image
                src="/gamble.webp"
                alt="GambleAware"
                width={90}
                height={36}
                className="h-8 w-auto object-contain transition-opacity"
              />
            </a>
            <a
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 p-3 rounded border border-border hover:border-primary/30 transition-colors flex items-center justify-center group"
            >
              <Image
                src="/hupis.png"
                alt="HUPIS"
                width={100}
                height={50}
                className="h-10 w-auto object-contain  transition-opacity"
              />
            </a>
            <a
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 p-3 rounded border border-border hover:border-primary/30 transition-colors flex items-center justify-center group"
            >
              <Image
                src="/pbsvi.svg"
                alt="PBSVI"
                width={90}
                height={36}
                className="h-8 w-auto object-contain  transition-opacity"
              />
            </a>
            <a
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 p-3 rounded border border-border hover:border-primary/30 transition-colors flex items-center justify-center group"
            >
              <Image
                src="/gamstop.svg"
                alt="GamStop"
                width={100}
                height={50}
                className="h-10 w-auto object-contain  transition-opacity"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 p-3 rounded border border-border hover:border-primary/30 transition-colors flex items-center justify-center group"
            >
              <Image
                src="/gamecare.svg"
                alt="GamCare"
                width={100}
                height={50}
                className="h-10 w-auto object-contain  transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-6 pt-6 text-center text-muted-foreground text-sm">
          <p className="text-foreground/80">&copy; 2025 najboljeigrehrvatskoj.com</p>
          <p className="mt-2 text-xs">Vaš stručni vodič za online kasino analizu u Hrvatskoj</p>
          <p className="mt-2 text-primary/80 text-xs font-medium">
            Isključivo za osobe starije od 18 godina | Kockanje može izazvati ovisnost
          </p>
        </div>
      </div>
    </footer>
  )
}
