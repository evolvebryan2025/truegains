import { useEffect, useRef, useState } from 'react'

const galleryImages = [
  { src: '/images/caya-drive/DSC00325.jpg', alt: 'Elom carrying the Caya flag on the run' },
  { src: '/images/caya-drive/DSC00443.jpg', alt: 'Elom with the crew post-training' },
  { src: '/images/caya-drive/DSC00277.jpg', alt: 'Elom leading the Caya Run Club pack' },
  { src: '/images/caya-drive/_DSC0619.JPG', alt: 'Elom connecting with the community' },
  { src: '/images/caya-drive/DSC00523.jpg', alt: 'Elom at the venue post-run' },
  { src: '/images/caya-drive/DSC00289.jpg', alt: 'Elom leading the crew on the vehicle' },
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
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-tight mb-4 text-[#1F1F1F]">
            Train With <span className="text-[#24554B]">Elom</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <p className="text-[#1F1F1F]/80 text-sm sm:text-base leading-relaxed">
            If you're ready to stop messing around and start taking your fitness seriously, <span className="text-[#1F1F1F] font-bold">Elom Ahlijah offers personal training designed to deliver real results.</span>
          </p>
          <p className="text-[#1F1F1F]/80 text-sm sm:text-base leading-relaxed">
            Whether your goal is to <span className="text-[#1F1F1F] font-bold">lose fat, build muscle, improve your running, or simply feel stronger and more confident</span>, Elom creates tailored training plans that fit your lifestyle and push you to level up.
          </p>
          <p className="text-[#1F1F1F]/80 text-sm sm:text-base leading-relaxed">
            With a focus on <span className="text-[#1F1F1F] font-bold">accountability, smart programming, and sustainable habits</span>, this isn't about quick fixes — it's about building a <span className="text-[#1F1F1F] font-bold">stronger version of yourself for the long run.</span>
          </p>
        </div>

        {/* Visual Content - Transformation & Training Photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
