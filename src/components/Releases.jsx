import { Play, Music2 } from 'lucide-react'

const mockReleases = [
  {
    id: 1,
    title: 'Neon Pathways',
    artist: 'Various Artists',
    cover: 'https://images.unsplash.com/photo-1559599238-4499e02b0f17?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 2,
    title: 'Cosmic Fluids',
    artist: 'Aural Drift',
    cover: 'https://images.unsplash.com/photo-1527443224154-c4f2a9bf1a7c?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 3,
    title: 'Holographic Waves',
    artist: 'Liquid Voyager',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
]

export default function Releases() {
  return (
    <section id="releases" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Latest Releases</h2>
            <p className="mt-2 text-white/70">Fresh transmissions from the Tendance universe</p>
          </div>
          <a href="#" className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white/80 hover:text-white sm:block">
            View All
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockReleases.map((r) => (
            <article key={r.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={r.cover} alt={r.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <button className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-black">
                  <Play className="h-4 w-4" /> Listen
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                <p className="text-sm text-white/70">{r.artist}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
