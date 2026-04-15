import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-[#75221D] text-white pt-24 pb-8 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-t border-white/10 pt-16">
          
          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white hover:text-[#FDF392] transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-[#FDF392] transition-colors font-medium">About Us</Link></li>
              <li><Link to="/contact" className="text-white hover:text-[#FDF392] transition-colors font-medium">Contact</Link></li>
              <li><Link to="/blog" className="text-white hover:text-[#FDF392] transition-colors font-medium">Blog & Insights</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6 md:border-l md:border-white/10 md:pl-16">
            <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/setup" className="text-white hover:text-[#FDF392] transition-colors font-medium">Account & Store Setup</Link></li>
              <li><Link to="/services/hunting" className="text-white hover:text-[#FDF392] transition-colors font-medium">Product Hunting</Link></li>
              <li><Link to="/services/optimization" className="text-white hover:text-[#FDF392] transition-colors font-medium">Optimization</Link></li>
              <li><Link to="/services/fulfillment" className="text-white hover:text-[#FDF392] transition-colors font-medium">Fulfillment</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-6 md:border-l md:border-white/10 md:pl-16">
            <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-white hover:text-[#FDF392] transition-colors font-medium">Support</Link></li>
              <li><a href="#" className="text-white hover:text-[#FDF392] transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-[#FDF392] transition-colors font-medium">Terms and Services</a></li>
            </ul>
          </div>
        </div>

        {/* Large Logo Backdrop */}
        <div className="relative h-40 md:h-64 flex items-center justify-center pointer-events-none select-none">
          <h2 className="text-[120px] md:text-[280px] font-black text-white/[0.03] leading-none tracking-tighter uppercase whitespace-nowrap">
            ECOMPROPEL
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-16 border-t border-white/5 space-y-4">
          <div className="flex justify-center items-center gap-2 text-white/40 text-[13px] font-medium">
            <span>© 2026 EcomPropel. Full-service Amazon Agency.</span>
            <span className="w-1 h-1 bg-[#FE502D] rounded-full mx-2"></span>
            <span>Built for High Performance</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
