import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky bg-card/95 backdrop-blur-md border-b border-primary/20 top-0 z-50 w-full">
      <div className="container mx-auto max-w-[1220px] px-4 py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex justify-center items-center gap-3 group">
            <Image
              src="/favicon.ico"
              alt="Najbolje Igre Hrvatska Logo"
              width={48}
              height={48}
              className="opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="">
              <span className="text-primary font-semibold tracking-wide text-xl uppercase">Najbolje Igre Hrvatska</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
