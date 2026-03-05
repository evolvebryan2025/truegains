import { useEffect, useRef, useState } from 'react'

export default function Coach() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/hero-img.png"
                alt="Elom Ahlijah — Founder of CAYA"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6F8F85] mb-4 block">
              Meet Your Coach
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-2">
              Elom Ahlijah
            </h2>
            <p className="text-[#B86B4B] text-sm font-bold uppercase tracking-wide mb-6">
              Founder of Caya &middot; Personal Training Professional
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                CAYA was built with one principle: show up as you are, and leave better than you came. No pretence. No ego. Just work, community, and consistent progress.
              </p>
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                Whether you're joining the Runclub for the first time or committing to a full transformation through personal training, Elom's hands-on approach means you're never doing it alone.
              </p>
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                Every programme is built around you — your goals, your body, your lifestyle — and reviewed as you progress.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#packages"
                className="inline-block bg-[#24554B] text-white font-bold uppercase tracking-widest px-8 py-4 text-xs hover:bg-[#1D4A40] transition-colors text-center"
              >
                View Packages
              </a>
              <a
                href="#contact"
                className="inline-block border border-white/20 hover:bg-[#24554B] hover:text-white hover:border-[#24554B] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all text-center"
              >
                Book A Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
