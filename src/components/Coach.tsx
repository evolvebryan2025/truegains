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
                src="/images/caya-drive/DSC00257.jpg"
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
            <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-6">
              Elom Ahlijah
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                It all started when I was 16, kicking off my own fitness journey. What began as a personal passion soon grew into something much bigger.
              </p>
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                In 2020, during lockdown, I founded my own fitness brand. What started as a way to share my love for fitness has since evolved into a global coaching business that's helped over <span className="text-white font-bold">300 clients transform their health and achieve their fitness goals.</span>
              </p>
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                A little over <span className="text-white font-bold">two years ago</span>, I made the move to <span className="text-white font-bold">Dubai</span>, an incredible hub of energy and growth that inspires me every day.
              </p>
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                Since moving here, I also founded <span className="text-white font-bold">Caya Runclub</span>, a community bringing together people who are passionate about health, fitness, and connection. What started as a simple idea has grown into a space where people come together to run, stay active, meet like-minded individuals, and support each other in building healthier lifestyles.
              </p>
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                Today, <span className="text-white font-bold">TrueGains operates across the UAE, UK, Canada, US, and Thailand</span>, and we're only just getting started. I'm passionate about helping people from all walks of life feel stronger, healthier, and more confident.
              </p>
              <p className="text-[#D8CFC4] text-sm leading-relaxed">
                Whether you're looking to <span className="text-white font-bold">lose weight, build muscle, improve your running, or simply find consistency</span>, I'm here to help you create a plan that fits your lifestyle.
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
