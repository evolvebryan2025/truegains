export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <span className="text-white font-black text-lg uppercase tracking-widest">CAYA</span>
            </a>
            <p className="text-[#D8CFC4] text-xs leading-relaxed">
              Come As You Are. Built on discipline. Backed by community.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Runclub', href: '#runclub' },
                { label: 'Bootcamps', href: '#bootcamps' },
                { label: 'Personal Training', href: '#training' },
                { label: 'Packages', href: '#packages' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#D8CFC4] text-xs hover:text-[#24554B] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About Caya', href: '#training' },
                { label: 'Contact', href: '#contact' },
                { label: 'WhatsApp Community', href: 'https://chat.whatsapp.com/LBf7L9iobehBImuXfpW6ys' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[#D8CFC4] text-xs hover:text-[#24554B] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {['Instagram', 'YouTube', 'TikTok', 'WhatsApp'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#D8CFC4] text-xs hover:text-[#24554B] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#6F8F85] text-xs">
            &copy; {new Date().getFullYear()} CAYA FITNESS. All rights reserved.
          </p>
          <p className="text-[#6F8F85] text-xs">
            Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  )
}
