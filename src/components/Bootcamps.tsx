import { useEffect, useRef, useState } from 'react'
import { Dumbbell, Target, Flame, Users, Shield, CalendarDays, MapPin } from 'lucide-react'

// Update this when scheduling changes
const NEXT_SESSION = '7th March'

const features = [
  { icon: Dumbbell, text: 'Structured strength & conditioning sessions' },
  { icon: Target, text: 'Full-body programming' },
  { icon: Flame, text: 'Performance-focused training' },
  { icon: Users, text: 'Perfect for all levels' },
  { icon: Shield, text: 'Group accountability' },
]

export default function Bootcamps() {
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
    <section id="bootcamps" ref={ref} className="py-24 px-6 border-y border-white/5">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-tight mb-4">
            Caya <span className="text-[#24554B]">Bootcamp</span>
          </h2>
          <p className="text-[#D8CFC4] text-lg sm:text-xl font-medium mb-6">
            Higher intensity. Still community.
          </p>
          <p className="text-[#D8CFC4] text-sm max-w-2xl mx-auto leading-relaxed">
            Bootcamps are for those who want to push properly. Strength. Conditioning. Engine work. A tougher room — but still the same Caya energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* What To Expect */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              What To Expect
            </h3>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.text} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#24554B]/10 border border-[#24554B]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon size={14} className="text-[#24554B]" />
                  </div>
                  <p className="text-[#D8CFC4] text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Schedule
            </h3>
            <div className="bg-[#1F1F1F] border border-white/5 p-8 space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <CalendarDays size={16} className="text-[#24554B]" />
                <span className="text-[#D8CFC4] text-sm">Every 1st & 3rd Saturday of the month</span>
              </div>
              <div className="flex items-center gap-4">
                <Flame size={16} className="text-[#24554B]" />
                <span className="text-[#D8CFC4] text-sm">Next session: {NEXT_SESSION}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={16} className="text-[#24554B]" />
                <span className="text-[#D8CFC4] text-sm">Dubai location (shared upon booking)</span>
              </div>
            </div>

            <a
              href="https://calendly.com/elomahlijah/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-[#24554B] text-white font-bold uppercase tracking-widest py-4 text-xs hover:bg-[#1D4A40] transition-colors"
            >
              Book Your Spot
            </a>
            <p className="text-[#6F8F85] text-xs mt-3 text-center">
              Limited capacity to keep the quality high.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
