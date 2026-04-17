import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Star, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FDF392]/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#FE502D]/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full border border-[#75221D]/5 shadow-sm"
          >
            <div className="flex -space-x-2">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
               <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
            </div>
            <div className="flex items-center gap-1.5">
               <div className="flex text-orange-400"><Star className="w-4 h-4 fill-current" /></div>
               <span className="text-sm font-bold text-[#75221D]">Trusted by 500+ global brands</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-[clamp(2.5rem,8vw,6.25rem)] font-black leading-[0.9] tracking-tighter text-[#75221D] text-balance"
            >
              WE SCALE <span className="text-[#FE502D]">BRANDS</span> <br /> 
              THROUGH <span className="relative inline-block">
                STRATEGY
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-2 md:h-4 bg-[#FDF392] -z-10 origin-left"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-gray-500 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed px-4"
            >
              Full-service Amazon management that turns complex data into massive revenue growth. We don't just manage listings — we build legacies.
            </motion.p>
          </div>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4"
          >
            <Button size="lg" className="w-full sm:w-auto h-16 px-12 bg-[#FE502D] hover:bg-[#75221D] text-white rounded-[5px] text-lg font-black transition-all group shadow-xl shadow-[#FE502D]/20">
              Get Your Free Audit <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto h-16 px-12 text-[#75221D] font-black text-lg hover:bg-[#FDF392]/20 hover:text-[#FE502D] rounded-[5px] group">
              View Our Work <ArrowUpRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
            </Button>
          </motion.div>

          {/* Brands Section (Placeholder logos placeholder) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-16 space-y-8"
          >
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Collaborating with the best</p>
             <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale">
                {["AMAZON", "EBAY", "WALMART", "ETSY", "SHOPIFY"].map((brand) => (
                  <span key={brand} className="text-2xl font-black text-[#75221D]">{brand}</span>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
