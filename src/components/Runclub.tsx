import { useEffect, useRef, useState } from 'react'
import { MapPin, Calendar, Clock } from 'lucide-react'

const galleryImages = [
  { src: '/images/caya-drive/_DSC0619.JPG', alt: 'Caya community warm-up session' },
  { src: '/images/caya-drive/_DSC0629.JPG', alt: 'Caya Runclub warm-up at Coterie Kitchen' },
  { src: '/images/caya-drive/_DSC0631.JPG', alt: 'Runners getting ready to go' },
  { src: '/images/caya-drive/_DSC0642.JPG', alt: 'Group energy before the run' },
  { src: '/images/caya-drive/_DSC0652.JPG', alt: 'Community members stretching' },
  { src: '/images/caya-drive/_DSC0655.JPG', alt: 'Pre-run group moment' },
  { src: '/images/caya-drive/_DSC0664.JPG', alt: 'Dynamic warm-up with the crowd' },
  { src: '/images/caya-drive/DSC00189.jpg', alt: 'Early morning run vibes' },
  { src: '/images/caya-drive/DSC00219.jpg', alt: 'Community group photo' },
  { src: '/images/caya-drive/DSC00249.jpg', alt: 'Runners on the route' },
  { src: '/images/caya-drive/DSC00257.jpg', alt: 'Mid-run energy' },
  { src: '/images/caya-drive/DSC00277.jpg', alt: 'Group running with Caya Run Club banner' },
  { src: '/images/caya-drive/DSC00361.jpg', alt: 'Community run in progress' },
  { src: '/images/caya-drive/DSC00433.jpg', alt: 'Runners enjoying the run together' },
  { src: '/images/caya-drive/DSC00815.jpg', alt: 'Pull-up training at Caya event' },
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
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-tight mb-4">
            Caya <span className="text-[#24554B]">Runclub</span>
          </h2>
          <p className="text-[#D8CFC4] text-lg sm:text-xl font-medium mb-6">
            Not about pace. Not about ego. About showing up.
          </p>
          <p className="text-[#D8CFC4] text-sm max-w-xl mx-auto leading-relaxed">
            A weekly community run for all levels. Show up, move, connect.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Schedule Details */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#1F1F1F] border border-white/5 p-8 space-y-5 mb-8">
            <div className="flex items-center gap-4">
              <MapPin size={16} className="text-[#24554B]" />
              <span className="text-[#D8CFC4] text-sm">Coterie Kitchen, Dubai</span>
            </div>
            <div className="flex items-center gap-4">
              <Calendar size={16} className="text-[#24554B]" />
              <span className="text-[#D8CFC4] text-sm">Every Sunday</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock size={16} className="text-[#24554B]" />
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
        </div>
      </div>
    </section>
  )
}
