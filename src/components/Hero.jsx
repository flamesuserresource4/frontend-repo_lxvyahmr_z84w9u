import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-white/80">
            Psychedelic Trance • Label
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white drop-shadow sm:text-6xl">
            Tendance Music
          </h1>
          <p className="mt-4 text-lg text-white/80 sm:text-xl">
            A futuristic portal for trippy soundscapes and cosmic frequencies. Discover artists, releases, and immersive audiovisual experiences.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#releases" className="rounded-xl bg-white/90 px-5 py-3 text-sm font-semibold text-black hover:bg-white">
              Explore Releases
            </a>
            <a href="#artists" className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">
              Meet the Artists
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
    </section>
  )
}
