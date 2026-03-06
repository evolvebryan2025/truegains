import { useEffect, useRef, useState } from 'react'
import { Check, Crown } from 'lucide-react'

const packages = [
  {
    number: '01',
    name: 'Online',
    price: '1,500',
    priceAED: '7,400 AED',
    tagline: 'For those who want structure with flexibility.',
    includes: '',
    features: [
      'Fully tailored 3-phase training programme',
      'Personalised progression plan',
      '24/7 app-based tracking',
      'Weekly 1:1 check-in calls',
      'Tailored meal plans aligned to goals',
      'Ongoing adjustments & performance feedback',
      'Direct guidance throughout the programme',
    ],
    bestFor: 'Clients outside Dubai, busy professionals, self-motivated individuals who still want expert structure.',
    highlighted: false,
    tier: 'standard' as const,
  },
  {
    number: '02',
    name: 'Hybrid',
    price: '3,000',
    priceAED: '14,700 AED',
    tagline: 'Online structure. Real-world accountability.',
    includes: 'Everything in Online, plus:',
    features: [
      '2-3 face-to-face personal training sessions per week',
      'Fitbit delivered to you for performance tracking',
      'Bi-weekly in-depth progress sync sessions',
      'Priority WhatsApp communication',
      'Closer performance monitoring',
    ],
    bestFor: 'Dubai-based clients, those wanting faster results, individuals who benefit from in-person coaching pressure.',
    highlighted: true,
    tier: 'popular' as const,
  },
  {
    number: '03',
    name: 'Face-to-Face',
    price: '6,000',
    priceAED: '29,400 AED',
    tagline: 'High commitment. High output.',
    includes: 'Everything in Hybrid, plus:',
    features: [
      '4-5 face-to-face sessions per week',
      'Tailored meal plan physically delivered',
      'Free access to all Caya Bootcamps',
      'Welcome package including fitness set',
      'Elevated support & closer weekly oversight',
    ],
    bestFor: 'Clients serious about transformation, those wanting maximum structure, individuals ready to prioritise training fully.',
    highlighted: false,
    tier: 'premium' as const,
  },
  {
    number: '04',
    name: 'Training & Mentorship',
    price: '10,000',
    priceAED: '50,000 AED',
    tagline: 'Elite tier.',
    includes: '',
    features: [],
    bestFor: '',
    exclusive: true,
    highlighted: false,
    tier: 'elite' as const,
  },
]

function PackageCard({ pkg }: { pkg: typeof packages[0] }) {
  const borderColor = pkg.highlighted
    ? 'border-[#24554B]/40'
    : pkg.tier === 'elite'
    ? 'border-[#D4A843]/30'
    : 'border-white/5 hover:border-white/10'

  return (
    <div className={`relative p-8 sm:p-10 border transition-all duration-300 bg-[#1F1F1F]/50 ${borderColor} ${
      pkg.highlighted ? 'ring-1 ring-[#24554B]/20' : ''
    } ${pkg.tier === 'elite' ? 'ring-1 ring-[#D4A843]/10' : ''}`}>
      {pkg.highlighted && (
        <div className="absolute top-0 right-0 bg-[#24554B] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5">
          Popular
        </div>
      )}
      {pkg.tier === 'elite' && (
        <div className="absolute top-0 right-0 bg-[#D4A843] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 flex items-center gap-1.5">
          <Crown size={10} />
          Elite
        </div>
      )}

      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-[#6F8F85] text-xs font-bold">{pkg.number}</span>
        <h3 className="text-white font-black text-xl uppercase tracking-wide">
          {pkg.name}
        </h3>
      </div>

      <div className="mb-1">
        <span className="text-3xl font-black text-white">£{pkg.price}</span>
        <span className="text-[#6F8F85] text-xs ml-2">({pkg.priceAED})</span>
      </div>
      <p className="text-[#D8CFC4] text-sm mb-6 italic">{pkg.tagline}</p>

      <div className="h-px bg-white/5 mb-6" />

      {pkg.exclusive ? (
        <div className="mb-6 flex flex-col items-center justify-center text-center py-8">
          <p className="text-[#D8CFC4] text-sm italic mb-2">This is more than fitness.</p>
          <p className="text-white text-base font-bold mb-6">It's leveling up your lifestyle.</p>
          <p className="text-[#D4A843] text-xs font-bold uppercase tracking-widest mb-2">
            By application only
          </p>
          <p className="text-[#6F8F85] text-xs leading-relaxed max-w-xs">
            Request a consultation to receive the full details of what's included in the Elite package.
          </p>
        </div>
      ) : (
        <>
          {pkg.includes && (
            <p className="text-[#6F8F85] text-xs font-bold uppercase tracking-wide mb-4">
              {pkg.includes}
            </p>
          )}

          <div className="space-y-3 mb-6">
            {pkg.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <Check size={14} className={`shrink-0 mt-0.5 ${
                  pkg.tier === 'elite' ? 'text-[#D4A843]' : 'text-[#24554B]'
                }`} />
                <span className="text-[#D8CFC4] text-xs leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-xs text-[#6F8F85]">
              <span className="font-bold text-white">Best suited for: </span>
              {pkg.bestFor}
            </p>
          </div>
        </>
      )}

      <a
        href="https://calendly.com/elomahlijah/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center font-bold uppercase tracking-widest py-4 text-xs transition-all ${
          pkg.highlighted
            ? 'bg-[#24554B] text-white hover:bg-[#1D4A40]'
            : pkg.tier === 'elite'
            ? 'bg-[#D4A843] text-white hover:bg-[#C49833]'
            : 'border border-white/20 text-white hover:bg-[#24554B] hover:border-[#24554B]'
        }`}
      >
        {pkg.exclusive ? 'Request Details' : 'Book A Consultation'}
      </a>
    </div>
  )
}

export default function Packages() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="packages" ref={ref} className="py-24 px-6">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A843] mb-4 block">
            The Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
            All packages are <span className="text-[#24554B]">3 months.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {packages.slice(0, 2).map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {packages.slice(2).map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
