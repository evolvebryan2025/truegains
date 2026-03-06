import { useEffect, useRef, useState } from 'react'

const transformationImages = [
  { src: '/images/transformations/transformation-01.jpg', alt: 'Male client before and after transformation' },
  { src: '/images/transformations/transformation-02.jpg', alt: 'Female client before and after transformation' },
  { src: '/images/transformations/transformation-03.jpg', alt: 'Male client muscle gain transformation' },
  { src: '/images/transformations/transformation-04.jpg', alt: 'Female client weight loss transformation' },
  { src: '/images/transformations/transformation-05.jpg', alt: 'Male client body recomposition transformation' },
  { src: '/images/transformations/transformation-06.jpg', alt: 'Female client fitness transformation' },
  { src: '/images/transformations/transformation-07.jpg', alt: 'Male client lean muscle transformation' },
  { src: '/images/transformations/transformation-08.jpg', alt: 'Female client body transformation' },
  { src: '/images/transformations/transformation-09.jpg', alt: 'Male client dramatic weight loss transformation' },
  { src: '/images/transformations/transformation-10.jpg', alt: 'Female client athletic transformation' },
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

        {/* Client Transformations Grid */}
        <div className="text-center mb-8">
          <p className="text-[#24554B] text-xs font-bold uppercase tracking-widest mb-2">Real Results</p>
          <p className="text-3xl sm:text-4xl font-black text-[#1F1F1F]">500+ Client Transformations</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {transformationImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="relative overflow-hidden aspect-[3/4]"
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
      </div>
    </section>
  )
}
