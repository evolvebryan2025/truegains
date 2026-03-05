import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '#hero', sectionId: 'hero' },
  { label: 'Runclub', to: '#runclub', sectionId: 'runclub' },
  { label: 'Bootcamps', to: '#bootcamps', sectionId: 'bootcamps' },
  { label: 'Packages', to: '#packages', sectionId: 'packages' },
  { label: 'Contact', to: '#contact', sectionId: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#1F1F1F]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <span className="text-white font-black text-xl tracking-widest uppercase">CAYA</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                activeSection === link.sectionId
                  ? 'text-[#24554B]'
                  : 'text-[#D8CFC4] hover:text-[#24554B]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#packages"
            className="bg-[#24554B] text-white font-bold uppercase tracking-widest px-8 py-3 text-xs hover:bg-[#1D4A40] transition-colors"
          >
            Train With Caya
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1F1F1F] border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              onClick={() => setOpen(false)}
              className={`block text-xs font-bold uppercase tracking-widest transition-colors ${
                activeSection === link.sectionId
                  ? 'text-[#24554B]'
                  : 'text-[#D8CFC4] hover:text-[#24554B]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#packages"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#24554B] text-white font-bold uppercase tracking-widest px-8 py-3 text-xs hover:bg-[#1D4A40] transition-colors"
          >
            Train With Caya
          </a>
        </div>
      )}
    </nav>
  )
}
