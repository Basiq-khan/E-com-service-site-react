import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ShoppingBag, Globe, Database, PenTool, Layout, Truck, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const platformServices = [
  {
    id: "amazon",
    name: "Amazon",
    icon: ShoppingBag,
    color: "text-orange-500",
    items: [
      { name: "Account & Store Setup", icon: Layout, path: "/services/setup" },
      { name: "Product Hunting", icon: Database, path: "/services/hunting" },
      { name: "Product Listing Optimization", icon: CheckCircle2, path: "/services/optimization" },
      { name: "Order Fulfillment", icon: Truck, path: "/services/fulfillment" },
      { name: "SEO Content Writing", icon: PenTool, path: "/services/seo-writing" }
    ]
  },
  {
    id: "ebay",
    name: "eBay",
    icon: ShoppingBag,
    color: "text-blue-500",
    items: [
      { name: "Account & Store Setup", icon: Layout, path: "/services/setup" },
      { name: "Product Hunting", icon: Database, path: "/services/hunting" },
      { name: "Product Listing Optimization", icon: CheckCircle2, path: "/services/optimization" },
      { name: "Order Fulfillment", icon: Truck, path: "/services/fulfillment" },
      { name: "SEO Content Writing", icon: PenTool, path: "/services/seo-writing" }
    ]
  },
  {
    id: "walmart",
    name: "Walmart",
    icon: ShoppingBag,
    color: "text-blue-600",
    items: [
      { name: "Account & Store Setup", icon: Layout, path: "/services/setup" },
      { name: "Product Hunting", icon: Database, path: "/services/hunting" },
      { name: "Product Listing Optimization", icon: CheckCircle2, path: "/services/optimization" },
      { name: "Order Fulfillment", icon: Truck, path: "/services/fulfillment" },
      { name: "SEO Content Writing", icon: PenTool, path: "/services/seo-writing" }
    ]
  },
  {
    id: "etsy",
    name: "Etsy",
    icon: ShoppingBag,
    color: "text-orange-600",
    items: [
      { name: "Account & Store Setup", icon: Layout, path: "/services/setup" },
      { name: "Product Hunting", icon: Database, path: "/services/hunting" },
      { name: "Product Listing Optimization", icon: CheckCircle2, path: "/services/optimization" },
      { name: "Order Fulfillment", icon: Truck, path: "/services/fulfillment" },
      { name: "SEO Content Writing", icon: PenTool, path: "/services/seo-writing" },
      { name: "Etsy Digital Products", icon: Globe, highlight: true, path: "/services/etsy-digital" }
    ]
  }
]

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activePlatform, setActivePlatform] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsMegaMenuOpen(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'h-16 bg-white border-b border-[#75221D]/10' : 'h-24 bg-transparent'}`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 12 }}
            className="w-10 h-10 bg-[#FE502D] rounded-[5px] flex items-center justify-center shadow-lg"
          >
            <span className="text-white font-black text-xl">EP</span>
          </motion.div>
          <span className="font-black text-2xl tracking-tighter text-[#75221D]">EcomPropel</span>
        </Link>

        {/* Center Nav (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services", isServices: true },
            { name: "About us", path: "/about" },
            { name: "Blogs", path: "/blog" },
            { name: "Contact", path: "/contact" }
          ].map((link) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={() => link.isServices && setIsMegaMenuOpen(true)}
            >
              {link.isServices ? (
                <div 
                  className="px-6 py-2.5 rounded-[5px] text-sm font-bold transition-all flex items-center gap-1.5 text-[#75221D] hover:text-[#FE502D] cursor-pointer"
                >
                  {link.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                </div>
              ) : (
                <Link 
                  to={link.path} 
                  className={`px-6 py-2.5 rounded-[5px] text-sm font-bold transition-all flex items-center gap-1.5 ${location.pathname === link.path ? 'text-[#FE502D]' : 'text-[#75221D] hover:text-[#FE502D]'}`}
                >
                  {link.name}
                </Link>
              )}
              {location.pathname === link.path && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#FE502D]" />
              )}
            </div>
          ))}
        </nav>

        {/* Mega Menu Overlay - Now container-aligned */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => {
                setIsMegaMenuOpen(false)
                setActivePlatform(null)
              }}
              className="absolute top-full left-0 right-0 px-4 pt-2 z-50 hidden lg:block"
            >
              <div className="container mx-auto">
                <div className="bg-white rounded-[5px] shadow-2xl border border-[#75221D]/10 overflow-hidden ring-1 ring-black/5">
                  <div className="flex h-[480px]">
                    {/* Platform Selector */}
                    <div className="w-[320px] bg-gray-50/50 border-r border-gray-100 p-6 space-y-3">
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#75221D]/40 mb-6 pl-2">Select Platform</p>
                       {platformServices.map((platform) => (
                         <div 
                           key={platform.id}
                           onMouseEnter={() => setActivePlatform(platform.id)}
                           className={`p-5 rounded-[5px] cursor-pointer transition-all flex items-center justify-between group ${activePlatform === platform.id ? 'bg-[#75221D] text-white shadow-xl' : 'hover:bg-white text-[#75221D] shadow-sm'}`}
                         >
                            <div className="flex items-center gap-4">
                               <div className={`w-10 h-10 rounded-[5px] flex items-center justify-center transition-colors ${activePlatform === platform.id ? 'bg-[#FE502D]' : 'bg-white shadow-sm'}`}>
                                 <platform.icon className={`w-5 h-5 ${activePlatform === platform.id ? 'text-white' : platform.color}`} />
                               </div>
                               <span className="text-lg font-black italic uppercase tracking-tighter">{platform.name}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-all ${activePlatform === platform.id ? 'opacity-100 translate-x-1' : ''}`} />
                         </div>
                       ))}
                    </div>

                    {/* Services Display */}
                    <div className="flex-1 p-10 bg-white relative overflow-hidden flex flex-col">
                       <AnimatePresence mode="wait">
                          {activePlatform ? (
                            <motion.div
                              key={activePlatform}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="flex-1"
                            >
                               <div className="flex items-center justify-between mb-8">
                                  <h3 className="text-3xl font-black text-[#75221D] uppercase italic tracking-tighter">
                                     {activePlatform} <span className="text-[#FE502D]">Solutions</span>
                                  </h3>
                                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
                                     {platformServices.find(p => p.id === activePlatform)?.items.length} Services Available
                                  </div>
                               </div>
                               <div className="grid grid-cols-2 gap-4">
                                  {platformServices.find(p => p.id === activePlatform)?.items.map((item, j) => (
                                    <Link 
                                      key={j}
                                      to={item.path}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="group/item flex items-center gap-5 p-5 bg-gray-50/50 rounded-[5px] hover:bg-[#FE502D]/10 transition-all border border-transparent hover:border-[#FE502D]/20"
                                    >
                                       <div className="w-14 h-14 bg-white rounded-[5px] flex items-center justify-center group-hover/item:scale-110 transition-transform shadow-sm">
                                         <item.icon className="w-6 h-6 text-[#75221D] group-hover/item:text-[#FE502D] transition-colors" />
                                       </div>
                                       <div className="space-y-0.5">
                                         <p className="font-black text-[#75221D] text-lg uppercase italic tracking-tighter leading-none">{item.name}</p>
                                         <p className="text-xs text-gray-400 font-medium tracking-tight">Enterprise grade {item.name.toLowerCase()} strategy.</p>
                                       </div>
                                    </Link>
                                  ))}
                               </div>
                            </motion.div>
                          ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                               <div className="w-24 h-24 bg-[#FE502D]/5 rounded-full flex items-center justify-center animate-pulse">
                                  <ShoppingBag className="w-10 h-10 text-[#FE502D]" />
                               </div>
                               <div className="max-w-xs">
                                 <p className="font-black text-2xl text-[#75221D] uppercase italic tracking-tighter mb-2">Platform Specific Strategy</p>
                                 <p className="text-sm text-gray-400 font-medium">Hover over a platform on the left to explore our tactical e-commerce solutions.</p>
                               </div>
                            </div>
                          )}
                       </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Bottom Strip */}
                  <div className="bg-[#75221D] px-8 py-5 flex justify-between items-center text-white border-t border-white/5">
                     <div className="flex items-center gap-6">
                        <p className="text-xs font-black opacity-40 italic uppercase tracking-[0.2em]">Industry Leaders in Multi-Channel Growth</p>
                        <div className="w-px h-4 bg-white/10"></div>
                        <div className="flex -space-x-2">
                         <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" className="w-6 h-6 rounded-full border-2 border-[#75221D] object-cover" alt="User" />
                         <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" className="w-6 h-6 rounded-full border-2 border-[#75221D] object-cover" alt="User" />
                         <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" className="w-6 h-6 rounded-full border-2 border-[#75221D] object-cover" alt="User" />
                      </div>
                        <p className="text-[10px] font-bold text-white/60 uppercase">Trusted by 500+ Top Sellers</p>
                     </div>
                     <Link 
                      to="/contact" 
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="group flex items-center gap-4 bg-[#FE502D] hover:bg-white hover:text-[#75221D] px-6 py-2.5 rounded-[5px] transition-all duration-300 font-black italic uppercase tracking-tighter text-sm"
                     >
                        Book Free Audit <span className="group-hover:rotate-45 transition-transform duration-300">→</span>
                     </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:block">
            <Button className="bg-[#FE502D] hover:bg-[#75221D] text-white rounded-[5px] px-8 py-6 font-black shadow-lg shadow-[#FE502D]/20 transition-all hover:scale-105 active:scale-95 italic text-lg uppercase tracking-tighter">
              Get Started
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-[#75221D] z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-32 pb-10 px-6"
            >
              <div className="space-y-12">
                <div className="grid grid-cols-1 gap-6">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Navigation</p>
                   {["Home", "Services", "About Us", "Blogs", "Contact"].map((item) => (
                     <Link 
                       key={item} 
                       to={item === "Home" ? "/" : `/${item.toLowerCase().replace(' ', '')}`} 
                       className="text-5xl font-black text-[#75221D] italic uppercase tracking-tighter hover:text-[#FE502D] transition-colors"
                     >
                       {item}
                     </Link>
                   ))}
                </div>
                <div className="pt-10 space-y-6">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Connect with us</p>
                   <Button className="w-full bg-[#75221D] text-white h-16 h-18 text-xl font-black italic uppercase tracking-tighter rounded-[5px]">
                      Book Strategy Call
                   </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}
