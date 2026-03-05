import { useEffect, useRef, useState } from 'react'

export default function FinalSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-32 px-6">
      <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="space-y-2 mb-8">
          <p className="text-[#D8CFC4] text-sm">No big speeches.</p>
          <p className="text-[#D8CFC4] text-sm">No fake transformations.</p>
          <p className="text-white text-sm font-bold">Just consistency.</p>
          <p className="text-white text-sm font-bold">Just standards.</p>
          <p className="text-white text-sm font-bold">Just showing up.</p>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-12">
          <span className="text-white">Come As</span>
          <br />
          <span className="text-white">You Are.</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://chat.whatsapp.com/LBf7L9iobehBImuXfpW6ys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#24554B] text-white font-bold uppercase tracking-widest px-8 py-4 text-xs hover:bg-[#1D4A40] transition-colors"
          >
            Join Runclub
          </a>
          <a
            href="https://calendly.com/elomahlijah/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/20 hover:bg-[#B86B4B] hover:text-white hover:border-[#B86B4B] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
          >
            Book A Consultation
          </a>
          <a
            href="#packages"
            className="inline-block border border-white/20 hover:bg-[#24554B] hover:text-white hover:border-[#24554B] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
          >
            View Packages
          </a>
        </div>
      </div>
    </section>
  )
}
