import { useEffect, useRef, useState } from 'react'
import { TrendingUp, BarChart3, Activity, Utensils, MessageCircle } from 'lucide-react'

const structure = [
  { icon: TrendingUp, text: '3-month progressive training phases' },
  { icon: BarChart3, text: 'Clear performance markers' },
  { icon: Activity, text: 'Body composition tracking' },
  { icon: Utensils, text: 'Lifestyle & nutrition integration' },
  { icon: MessageCircle, text: 'Direct access and accountability' },
]

export default function TrainWithCaya() {
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
    <section id="training" ref={ref} className="py-24 px-6 bg-[#F4F1EC]">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6F8F85] mb-4 block">
            Train With Caya
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-4 text-[#1F1F1F]">
            3 Months. Structured.<br />
            <span className="text-[#24554B]">Intentional.</span>
          </h2>
          <p className="text-[#1F1F1F]/70 text-sm max-w-2xl mx-auto leading-relaxed mb-4">
            All personal training packages run across a focused 3-month framework.
          </p>
          <p className="text-[#1F1F1F]/70 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            Led by <span className="text-[#1F1F1F] font-bold">Elom Ahlijah</span> — Founder of Caya and Personal Training Professional.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white/60 border border-[#24554B]/10 p-8 sm:p-10">
            <p className="text-[#1F1F1F]/70 text-sm leading-relaxed mb-2">
              This is not short-term motivation.
            </p>
            <p className="text-[#1F1F1F] text-sm font-bold leading-relaxed">
              This is phased progression, measurable results, and long-term change.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#1F1F1F] mb-6">
            Program Structure
          </h3>
          <div className="space-y-4">
            {structure.map((s) => (
              <div key={s.text} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#24554B]/10 border border-[#24554B]/20 flex items-center justify-center shrink-0">
                  <s.icon size={14} className="text-[#24554B]" />
                </div>
                <p className="text-[#1F1F1F]/80 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
