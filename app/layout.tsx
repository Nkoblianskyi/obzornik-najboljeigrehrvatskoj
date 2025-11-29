import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Najbolje Igre Hrvatska - Profesionalni Pregled Online Kasina 2025",
  description:
    "Najbolje Igre Hrvatska - Vodeći stručni portal za analizu i ocjenjivanje online kasina u Hrvatskoj. Detaljna istraživanja, nepristrane recenzije i ekspertne preporuke.",
  metadataBase: new URL("https://najboljeigrehrvatskoj.com"),
  openGraph: {
    title: "Najbolje Igre Hrvatska - Stručni Pregled Kasina 2025",
    description: "Profesionalne analize i ekspertne ocjene vodećih online kasina u Hrvatskoj",
    url: "https://najboljeigrehrvatskoj.com",
    siteName: "Najbolje Igre Hrvatska",
    locale: "hr_HR",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen w-full">
          {children}
          <Footer />
          <CookieBanner />
          <CasinoModal />
        </div>
      </body>
    </html>
  )
}
