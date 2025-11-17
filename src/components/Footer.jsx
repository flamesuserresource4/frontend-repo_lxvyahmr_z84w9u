export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-white">Tendance Music</h4>
            <p className="mt-2 text-sm text-white/70">Psychedelic trance record label. Cosmic sound design and immersive releases.</p>
          </div>
          <div>
            <h4 className="text-white">Explore</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li><a href="#releases" className="hover:text-white">Releases</a></li>
              <li><a href="#artists" className="hover:text-white">Artists</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">Contact</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li><a href="mailto:info@tendancemusic.com" className="hover:text-white">info@tendancemusic.com</a></li>
              <li>Bookings • Demos</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Tendance Music. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
