const mockArtists = [
  { id: 1, name: 'Aural Drift', avatar: 'https://images.unsplash.com/photo-1541007512991-7f608c9a48df?q=80&w=600&auto=format&fit=crop', tag: 'Psytrance' },
  { id: 2, name: 'Liquid Voyager', avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop', tag: 'Full-On' },
  { id: 3, name: 'Spectral Bloom', avatar: 'https://images.unsplash.com/photo-1495592528443-4ae716e5ae6b?q=80&w=600&auto=format&fit=crop', tag: 'Forest' },
  { id: 4, name: 'Neon Seraph', avatar: 'https://images.unsplash.com/photo-1483356256511-b48749959172?q=80&w=600&auto=format&fit=crop', tag: 'Night Psy' },
]

export default function Artists() {
  return (
    <section id="artists" className="relative bg-gradient-to-b from-black to-[#0b0d12] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Artists</h2>
          <p className="mt-2 text-white/70">Meet the sonic architects behind our catalog</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mockArtists.map((a) => (
            <div key={a.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={a.avatar} alt={a.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">{a.name}</h3>
                <p className="text-sm text-white/70">{a.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
