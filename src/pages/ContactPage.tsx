import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/Textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#75221D] min-h-[60vh] md:h-[70vh] flex items-center relative overflow-hidden py-20 md:py-0">
        <motion.div 
          animate={{ x: [0, 100, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FE502D]/20 rounded-full blur-[120px]"
        />
        <div className="container mx-auto px-4 relative z-10 text-center uppercase italic">
           <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#FDF392] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 md:mb-8"
           >
              Let's Talk Growth
           </motion.p>
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-[clamp(2.5rem,8vw,7.5rem)] font-black text-white leading-[0.85] tracking-tighter"
           >
             READY TO <br /> <span className="text-[#FDF392]">SCALE?</span>
           </motion.h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-24">
            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/3 space-y-10 md:space-y-12 px-4 md:px-0"
            >
               <div className="space-y-4 md:space-y-6">
                 <h2 className="text-[clamp(2rem,5vw,3rem)] font-black text-[#75221D] uppercase italic tracking-tighter">Reach <span className="text-[#FE502D]">Out.</span></h2>
                 <p className="text-gray-500 text-base md:text-lg leading-relaxed">Our strategists are ready to audit your brand and build a roadmap to 7-figure success.</p>
               </div>

               <div className="space-y-6 md:space-y-8 text-[#75221D]">
                 <div className="flex items-center gap-4 md:gap-6 group">
                   <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-[5px] flex items-center justify-center group-hover:bg-[#FE502D]/10 transition-colors shrink-0">
                       <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#FE502D]" />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase text-gray-400">Call Us</p>
                     <p className="text-lg md:text-xl font-bold">+1 (555) 000-0000</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 md:gap-6 group">
                   <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-[5px] flex items-center justify-center group-hover:bg-[#FE502D]/10 transition-colors shrink-0">
                       <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#FE502D]" />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase text-gray-400">Email Us</p>
                     <p className="text-lg md:text-xl font-bold">hello@ecompropel.com</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 md:gap-6 group">
                   <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-[5px] flex items-center justify-center group-hover:bg-[#FE502D]/10 transition-colors shrink-0">
                       <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#FE502D]" />
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase text-gray-400">Our HQ</p>
                     <p className="text-lg md:text-xl font-bold">New York, NY 10001</p>
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-[5px] border border-gray-100 shadow-2xl mx-auto lg:mx-0 px-4"
            >
              <form className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#75221D]">Full Name</label>
                    <Input placeholder="John Doe" className="h-14 md:h-16 rounded-[5px] border-none bg-white shadow-sm px-6 text-base md:text-lg focus-visible:ring-1 focus-visible:ring-[#FE502D]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#75221D]">Business Email</label>
                    <Input placeholder="john@brand.com" className="h-14 md:h-16 rounded-[5px] border-none bg-white shadow-sm px-6 text-base md:text-lg focus-visible:ring-1 focus-visible:ring-[#FE502D]/20" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#75221D]">Primary Platform</label>
                    <Input placeholder="Amazon / eBay / Etsy" className="h-14 md:h-16 rounded-[5px] border-none bg-white shadow-sm px-6 text-base md:text-lg focus-visible:ring-1 focus-visible:ring-[#FE502D]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#75221D]">Monthly Revenue</label>
                    <Input placeholder="$10k - $50k" className="h-14 md:h-16 rounded-[5px] border-none bg-white shadow-sm px-6 text-base md:text-lg focus-visible:ring-1 focus-visible:ring-[#FE502D]/20" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#75221D]">What's your biggest challenge?</label>
                   <Textarea placeholder="Scaling PPC / Inventory issues / New Listing..." className="min-h-[120px] md:min-h-[150px] rounded-[5px] border-none bg-white shadow-sm p-6 text-base md:text-lg focus-visible:ring-1 focus-visible:ring-[#FE502D]/20" />
                </div>
                <Button className="w-full bg-[#75221D] hover:bg-[#FE502D] text-white h-16 md:h-20 rounded-[5px] text-xl md:text-2xl font-black uppercase italic tracking-tighter transition-all shadow-xl">
                  Send Message <Send className="ml-4 w-6 h-6" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
