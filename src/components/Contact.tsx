import { useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-24 px-6 border-t border-white/5">
      <div className={`max-w-3xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6F8F85] mb-4 block">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
            Book A <span className="text-[#24554B]">Consultation</span>
          </h2>
          <p className="text-[#D8CFC4] text-sm max-w-xl mx-auto leading-relaxed">
            Tell us about your goals and we'll figure out the best way to get you there.
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/truegains/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#24554B] text-white font-bold uppercase tracking-widest px-12 py-5 text-sm hover:bg-[#1D4A40] transition-colors"
          >
            <Send size={16} />
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
