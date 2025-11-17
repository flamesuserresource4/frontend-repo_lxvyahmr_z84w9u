import { Menu, Music, Instagram, Facebook, Youtube } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Releases", href: "#releases" },
    { label: "Artists", href: "#artists" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="grid place-items-center rounded-xl bg-white/10 p-2 text-white">
                <Music className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-wide text-white">Tendance Music</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="hidden items-center gap-3 md:flex">
                <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="text-white/70 hover:text-white"><Youtube className="h-5 w-5" /></a>
              </div>
            </nav>

            <button
              className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white/80 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="space-y-2 px-4 pb-4 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="text-white/70 hover:text-white"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
