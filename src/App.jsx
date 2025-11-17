import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Releases from './components/Releases'
import Artists from './components/Artists'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Releases />
        <section id="about" className="relative bg-[#0b0d12] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">About</h2>
                <p className="mt-4 text-white/80">
                  Tendance Music is a psychedelic trance label pushing the boundaries of electronic sound. We release immersive sonic experiences and develop artists who craft narratives from deep-space atmospheres to high-energy dance floor journeys.
                </p>
                <p className="mt-4 text-white/70">
                  Expect futuristic aesthetics, holographic grooves, and a focus on quality production that transports listeners into a cosmic state.
                </p>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 p-[1px]">
                  <div className="rounded-2xl bg-black p-6">
                    <div className="aspect-video w-full overflow-hidden rounded-xl">
                      <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                        alt="Trippy galaxy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-sm text-white/70">
                      Visual universe inspired by neon futurism and liquid waveforms.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
