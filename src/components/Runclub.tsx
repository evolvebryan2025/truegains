import { useEffect, useRef, useState } from 'react'
import { MapPin, Calendar, Clock, Users, Route, Heart, Coffee, Repeat } from 'lucide-react'

const features = [
  { icon: Users, text: 'Inclusive, all-level environment' },
  { icon: Route, text: 'Structured but relaxed run format (2.5K/5K)' },
  { icon: Heart, text: 'Stretches and post-run cool-down' },
  { icon: Coffee, text: 'Post-run connection & conversation' },
  { icon: Repeat, text: 'Building routine, not hype' },
]

export default function Runclub() {
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
    <section id="runclub" ref={ref} className="py-24 px-6">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6F8F85] mb-4 block">
            Caya Runclub
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
            Not about pace.<br />
            Not about ego.<br />
            <span className="text-[#24554B]">About showing up.</span>
          </h2>
          <p className="text-[#D8CFC4] text-sm max-w-2xl mx-auto leading-relaxed">
            Caya Runclub is a weekly community run designed to build consistency, connection, and quiet confidence. Whether you're new to running or already moving, you're welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* What It's About */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              What It's About
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

          {/* Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Details
            </h3>
            <div className="bg-[#1F1F1F] border border-white/5 p-8 space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <MapPin size={16} className="text-[#B86B4B]" />
                <span className="text-[#D8CFC4] text-sm">Coterie Kitchen, Dubai</span>
              </div>
              <div className="flex items-center gap-4">
                <Calendar size={16} className="text-[#B86B4B]" />
                <span className="text-[#D8CFC4] text-sm">Every Sunday</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={16} className="text-[#B86B4B]" />
                <span className="text-[#D8CFC4] text-sm">8:00AM start (sharp)</span>
              </div>
            </div>

            <a
              href="https://chat.whatsapp.com/LBf7L9iobehBImuXfpW6ys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-[#24554B] text-white font-bold uppercase tracking-widest py-4 text-xs hover:bg-[#1D4A40] transition-colors"
            >
              Join The WhatsApp Community
            </a>
            <p className="text-[#6F8F85] text-xs mt-3 text-center">
              Access weekly reminders, updates, and event details.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
