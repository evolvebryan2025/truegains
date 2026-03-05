export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="/images/caya-drive/DSC00277.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Fallback background image if no video */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/caya-drive/DSC00277.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/40 via-[#1F1F1F]/30 to-[#1F1F1F]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95] tracking-tight mb-6">
          <span className="text-white">Come As</span>
          <br />
          <span className="text-white">You Are.</span>
        </h1>

        <p className="text-[#D8CFC4] text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Built on discipline. Backed by community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://chat.whatsapp.com/LBf7L9iobehBImuXfpW6ys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#24554B] text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#1D4A40] transition-colors"
          >
            Join The Runclub Community
          </a>
          <a
            href="#packages"
            className="inline-block border border-white/20 hover:bg-[#24554B] hover:text-white hover:border-[#24554B] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all"
          >
            Train With Elom
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50" />
      </div>
    </section>
  )
}
