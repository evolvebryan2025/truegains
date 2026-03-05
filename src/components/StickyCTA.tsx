import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed bottom-6 right-6 z-40 md:hidden transition-all duration-300 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <a
        href="https://chat.whatsapp.com/LBf7L9iobehBImuXfpW6ys"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#24554B] text-white font-bold uppercase tracking-widest px-5 py-3.5 text-xs shadow-lg shadow-black/30 hover:bg-[#1D4A40] transition-colors"
      >
        <MessageCircle size={16} />
        Join Community
      </a>
    </div>
  )
}
