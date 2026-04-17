import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import serviceAds from "../assets/service_ads.png"
import serviceSeo from "../assets/service_seo.png"
import { FAQ } from "../components/FAQ"
import { ShieldCheck, Zap, Globe, BarChart3, ArrowRight } from "lucide-react"

export function AccountStoreSetup() {
  return (
    <div className="pt-20">
      {/* Banner Section - 70vh like About Us */}
      <section className="bg-[#75221D] min-h-[60vh] md:h-[70vh] flex items-center relative overflow-hidden py-20 md:py-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FE502D]/20 rounded-full blur-[100px] md:blur-[120px]"
        />
        <div className="container mx-auto px-4 relative z-10 text-center uppercase italic">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-[5px] text-[#FDF392] text-[10px] md:text-xs font-black tracking-[0.3em] mb-6 md:mb-8"
           >
              Launch Architecture
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-[clamp(2.5rem,8vw,7.5rem)] font-black text-white leading-[0.85] tracking-tighter"
           >
             READY TO <br /> <span className="text-[#FDF392]">DOMINATE.</span>
           </motion.h1>
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="mt-10 md:mt-12 px-4"
           >
             <Link to="/contact">
               <Button size="lg" className="w-full sm:w-auto bg-[#FE502D] hover:bg-white hover:text-[#75221D] text-white px-12 h-16 md:h-20 rounded-[5px] text-xl md:text-2xl font-black transition-all shadow-2xl uppercase italic tracking-tighter">
                 Launch My Store <ArrowRight className="ml-4 w-6 h-6 md:w-8 md:h-8" />
               </Button>
             </Link>
           </motion.div>
        </div>
      </section>

      {/* Section 1: Visual & Content (About Us Style) */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group px-4 md:px-0">
                  <div className="absolute -inset-2 md:-inset-4 bg-[#75221D] rounded-[5px] -z-10 transition-transform group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:translate-y-2 md:group-hover:translate-y-4 duration-500"></div>
                  <img src={serviceAds} alt="Setup" className="w-full h-auto relative rounded-[5px] shadow-2xl border border-gray-100 z-10 transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full lg:w-1/2 space-y-8 md:space-y-12 px-4 md:px-0"
            >
               <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#75221D] leading-tight uppercase italic tracking-tighter">
                  WHAT'S INCLUDED IN <br /> <span className="text-[#FE502D]">STORE SETUP</span>
               </h2>
               <div className="space-y-8 md:space-y-10">
                  {[
                    { title: "Complete Marketplace Registration", desc: "We navigate the complex registration process for Amazon, eBay, and Etsy with 100% success rate." },
                    { title: "Brand Registry & Protection", desc: "Protect your intellectual property from day one with our professional brand registry services." },
                    { title: "Shipping & Tax Configuration", desc: "Optimized logistics and tax settings tailored to your specific regional and global requirements." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 md:gap-6 border-l-4 border-[#FE502D] pl-6 md:pl-8">
                       <div>
                          <h4 className="font-black text-[#75221D] text-xl md:text-2xl uppercase italic tracking-tighter leading-tight">{item.title}</h4>
                          <p className="text-gray-500 text-base md:text-lg mt-2 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Alternative Visual & Content (Section 75221D Style) */}
      <section className="py-20 md:py-32 bg-[#75221D] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2"
            >
               <div className="relative group px-4 md:px-0">
                  <div className="absolute -inset-2 md:-inset-4 bg-[#FE502D] rounded-[5px] -z-10 transition-transform group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:translate-y-2 md:group-hover:translate-y-4 duration-500"></div>
                  <img src={serviceSeo} alt="Advanced Setup" className="w-full h-auto relative rounded-[5px] shadow-2xl border border-white/10 z-10 transition-transform duration-700 group-hover:scale-105" />
               </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full lg:w-1/2 space-y-8 md:space-y-12 px-4 md:px-0"
            >
               <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-tight uppercase italic tracking-tighter">
                  ADVANCED <br /> <span className="text-[#FDF392]">ACCOUNT MGMNT</span>
               </h2>
               <div className="space-y-8 md:space-y-10">
                  {[
                    { title: "Category Unlocking", desc: "We help you bypass restricted category barriers so you can sell what you want, when you want." },
                    { title: "Payment Gateway Integration", desc: "Secure and optimized payment setups ensuring smooth cash flow and financial reporting." },
                    { title: "Policy & Documentation", desc: "Ongoing compliance monitoring to keep your account health in the green 24/7." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 md:gap-6 border-l-4 border-[#FDF392] pl-6 md:pl-8">
                       <div>
                          <h4 className="font-black text-white text-xl md:text-2xl uppercase italic tracking-tighter leading-tight">{item.title}</h4>
                          <p className="text-white/40 text-base md:text-lg mt-2 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Card Section (Middle - High Style) */}
      <section className="py-20 md:py-32 bg-white underline-section overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#FE502D] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs"
              >
                Scalability Engine
              </motion.p>
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black text-[#75221D] tracking-tighter uppercase italic leading-none">Scaling <span className="text-[#FE502D]">Simplified.</span></h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-16 md:mb-20 px-4 md:px-0">
              {[
                { title: "Fast Setup", desc: "Get your account live and verified in record time with our expert assistance.", icon: Zap },
                { title: "Global Reach", desc: "Configuration for Amazon, eBay, and Etsy markets worldwide.", icon: Globe },
                { title: "Strict Compliance", desc: "We ensure all your documentation meets marketplace standards perfectly.", icon: ShieldCheck },
                { title: "Market Growth", desc: "Initial settings optimized for immediate scaling and discoverability.", icon: BarChart3 }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 md:p-10 bg-gray-50 border border-gray-100 rounded-[5px] hover:bg-[#75221D] group transition-all duration-500 h-full"
                >
                   <div className="w-16 h-16 bg-white rounded-[5px] flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-[#FE502D] transition-colors duration-500 shadow-sm">
                      <card.icon className="w-8 h-8 text-[#FE502D] group-hover:text-white transition-colors" />
                   </div>
                   <h3 className="text-2xl font-black text-[#75221D] group-hover:text-white uppercase italic tracking-tighter mb-4">{card.title}</h3>
                   <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
           </div>

           <div className="text-center px-4">
             <Link to="/contact">
               <Button className="w-full sm:w-auto bg-[#75221D] text-white hover:bg-[#FE502D] h-16 md:h-20 px-12 md:px-16 rounded-[5px] text-xl md:text-2xl font-black uppercase italic tracking-tighter transition-all shadow-2xl">
                 Book a Consultation <ArrowRight className="ml-4 w-6 h-6 md:w-8 md:h-8" />
               </Button>
             </Link>
           </div>
        </div>
      </section>

      <FAQ />
    </div>
  )
}
