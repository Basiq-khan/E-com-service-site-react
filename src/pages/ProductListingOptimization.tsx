import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import serviceAds from "../assets/service_ads.png"
import serviceSeo from "../assets/service_seo.png"
import { FAQ } from "../components/FAQ"
import { Search, Eye, Sparkles, MessageSquare, ArrowRight } from "lucide-react"

export function ProductListingOptimization() {
  return (
    <div className="pt-20">
      {/* Banner Section - 70vh */}
      <section className="bg-[#75221D] h-[70vh] flex items-center relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#FE502D]/10 rounded-full blur-[100px]"
        />
        <div className="container mx-auto px-4 relative z-10 text-center uppercase italic">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-[5px] text-[#FDF392] text-xs font-black tracking-[0.3em] mb-8"
           >
              Conversion Optimization
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter"
           >
             CONVERT EVERY <br /> <span className="text-[#FDF392]">CLICK.</span>
           </motion.h1>
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="mt-12"
           >
             <Link to="/contact" className="inline-block w-full sm:w-auto">
               <Button size="lg" className="w-full sm:w-auto bg-[#FE502D] hover:bg-white hover:text-[#75221D] text-white px-8 md:px-16 h-16 md:h-20 rounded-[5px] text-xl md:text-2xl font-black transition-all shadow-2xl uppercase italic tracking-tighter">
                 Optimize Now <ArrowRight className="ml-4 w-6 h-6 md:w-8 md:h-8" />
               </Button>
             </Link>
           </motion.div>
        </div>
      </section>

      {/* Section 1: Image Left, Text Right */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                  <div className="absolute -inset-4 bg-[#75221D] rounded-[5px] -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
                  <img src={serviceAds} alt="Listing" className="relative rounded-[5px] shadow-2xl border border-gray-100 z-10 transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:w-1/2 space-y-12"
            >
               <h2 className="text-5xl font-black text-[#75221D] leading-tight uppercase italic tracking-tighter">
                  THE ANATOMY OF A <br /> <span className="text-[#FE502D]">BEST-SELLER</span>
               </h2>
               <div className="space-y-10">
                  {[
                    { title: "SEO Title Optimization", desc: "Strategically placing high-volume keywords while maintaining shopper readability and impact." },
                    { title: "Convertive Bullet Points", desc: "Highlighting benefits over features to trigger emotional purchase decisions using power words." },
                    { title: "Visual Storytelling", desc: "Main images and lifestyle shots designed to stop the scroll and drive immediate traffic." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 border-l-4 border-[#FE502D] pl-8">
                       <div>
                          <h4 className="font-black text-[#75221D] text-2xl uppercase italic tracking-tighter">{item.title}</h4>
                          <p className="text-gray-500 text-lg mt-2 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Image Right, Text Left */}
      <section className="py-32 bg-[#75221D] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
               <div className="relative group">
                  <div className="absolute -inset-4 bg-[#FE502D] rounded-[5px] -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
                  <img src={serviceSeo} alt="A+ Content" className="relative rounded-[5px] shadow-2xl border border-white/10 z-10 transition-transform duration-700 group-hover:scale-105" />
               </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:w-1/2 space-y-12"
            >
               <h2 className="text-5xl font-black text-white leading-tight uppercase italic tracking-tighter">
                  PREMIUM <br /> <span className="text-[#FDF392]">A+ CONTENT</span>
               </h2>
               <div className="space-y-10">
                  {[
                    { title: "Brand Story Integration", desc: "Building long-term brand equity with custom brand modules and narratives that resonate." },
                    { title: "Mobile Optimization", desc: "Ensuring your EBC looks stunning on mobile devices where 70% of shoppers buy assets." },
                    { title: "Visual Comparison", desc: "Dynamic conversion charts that highlight why your product is the superior choice today." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 border-l-4 border-[#FDF392] pl-8">
                       <div>
                          <h4 className="font-black text-white text-2xl uppercase italic tracking-tighter">{item.title}</h4>
                          <p className="text-white/40 text-lg mt-2 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Card Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-24 space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#FE502D] font-black uppercase tracking-[0.5em] text-xs"
              >
                Dominance Engine
              </motion.p>
              <h2 className="text-5xl md:text-8xl font-black text-[#75221D] tracking-tighter uppercase italic">MAXIMIZE <span className="text-[#FE502D]">CONVERSION.</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              {[
                { title: "SEO Keywords", desc: "Target high-intent keywords to boost organic search rankings.", icon: Search },
                { title: "High CTR Design", icon: Eye, desc: "Main images designed to stop the scroll and drive traffic." },
                { title: "Psychology Based", icon: Sparkles, desc: "Sales copy that speaks to your customer's pain points and desires." },
                { title: "Review Ready", icon: MessageSquare, desc: "Optimization that sets the stage for positive social proof." }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-gray-50 border border-gray-100 rounded-[5px] hover:bg-[#75221D] group transition-all duration-500 h-full"
                >
                   <div className="w-16 h-16 bg-white rounded-[5px] flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-[#FE502D] transition-colors duration-500 shadow-sm">
                      <card.icon className="w-8 h-8 text-[#FE502D] group-hover:text-white transition-colors" />
                   </div>
                   <h3 className="text-2xl font-black text-[#75221D] group-hover:text-white uppercase italic tracking-tighter mb-4">{card.title}</h3>
                   <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
           </div>

           <div className="text-center">
             <Link to="/contact" className="inline-block w-full sm:w-auto">
               <Button className="w-full sm:w-auto bg-[#75221D] text-white hover:bg-[#FE502D] h-16 md:h-20 px-8 md:px-16 rounded-[5px] text-xl md:text-2xl font-black uppercase italic tracking-tighter transition-all shadow-2xl">
                 Boost My Ranking <ArrowRight className="ml-4 w-6 h-6 md:w-8 md:h-8" />
               </Button>
             </Link>
           </div>
        </div>
      </section>

      <FAQ />
    </div>
  )
}
