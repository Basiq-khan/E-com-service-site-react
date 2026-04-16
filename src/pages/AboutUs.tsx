import { motion } from "framer-motion"
import heroMan from "../assets/hero_man.png"
import teamMan from "../assets/hero_man.png" 
import { Testimonials } from "../components/Testimonials"
import { FAQ } from "../components/FAQ"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { Target, ShieldCheck, ArrowRight } from "lucide-react"

export function AboutUs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#75221D] h-[70vh] flex items-center relative overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#FE502D]/20 rounded-full blur-[100px]"
        />
        
        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-4xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-[5px] text-[#FDF392] text-xs font-black uppercase tracking-[0.3em] mb-4"
              >
                Our Legacy & Mission
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter"
              >
                WE BUILD <br /> 
                <span className="text-[#FDF392] italic">AMAZON</span> EMPIRES.
              </motion.h1>
           </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative group max-w-xl">
                 <div className="absolute -inset-4 bg-[#75221D] rounded-[5px] -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
                 <div className="overflow-hidden rounded-[5px]">
                    <img src={heroMan} alt="About Us" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="absolute bottom-10 -right-10 bg-[#FE502D] text-white p-10 rounded-[5px] shadow-2xl hidden md:block">
                   <p className="text-6xl font-black leading-none">10+</p>
                   <p className="text-sm font-black uppercase tracking-widest mt-2">Years Of Growth</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-5xl font-black text-[#75221D] leading-tight tracking-tighter uppercase italic">
                  From Sellers <br /> To <span className="text-[#FE502D]">Partners.</span>
                </h2>
                <div className="w-20 h-2 bg-[#FDF392]"></div>
              </div>
              
              <p className="text-gray-500 text-xl leading-relaxed font-medium">
                EcomPropel didn't start in an office; it started in a warehouse. Our founders were Amazon sellers first, experiencing the frustrations of scaling firsthand. Today, we use that "seller-first" mindset to help brands navigate the complexities of global e-commerce.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 p-6 border-l-4 border-[#FE502D] bg-gray-50/50 rounded-r-[5px]">
                   <Target className="w-8 h-8 text-[#75221D]" />
                   <h4 className="text-xl font-black text-[#75221D] uppercase tracking-tighter">Our Mission</h4>
                   <p className="text-gray-400 text-sm leading-relaxed">To democratize enterprise-level e-commerce expertise for ambitious brands globally.</p>
                </div>
                <div className="space-y-4 p-6 border-l-4 border-[#75221D] bg-gray-50/50 rounded-r-[5px]">
                   <ShieldCheck className="w-8 h-8 text-[#FE502D]" />
                   <h4 className="text-xl font-black text-[#75221D] uppercase tracking-tighter">Our Promise</h4>
                   <p className="text-gray-400 text-sm leading-relaxed">Full transparency, zero fluff, and results that reflect on your bottom line every single month.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#75221D] text-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-24 space-y-4">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#FDF392] font-black uppercase tracking-[0.5em] text-xs"
              >
                The Brain Trust
              </motion.p>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">Our <span className="text-[#FE502D]">Team.</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {[
                { name: "Sikander Ali", role: "CEO & Founder", bio: "Ex-Amazon Category Manager with 8+ years of scaling 7-figure brands." },
                { name: "John Doe", role: "Head of PPC", bio: "Specialist in high-velocity bidding strategies and market penetration." },
                { name: "David Smith", role: "Logistics Director", bio: "Masters of the supply chain, optimizing global FBA pipelines." }
              ].map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                   <div className="aspect-[3/4] overflow-hidden rounded-[5px] grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img src={teamMan} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   </div>
                   <div className="mt-8 space-y-2">
                      <p className="text-[#FE502D] font-black text-xs uppercase tracking-widest">{member.role}</p>
                      <h3 className="text-3xl font-black uppercase italic tracking-tighter">{member.name}</h3>
                      <p className="text-white/40 text-sm leading-relaxed max-w-xs">{member.bio}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#FE502D]">
        <div className="container mx-auto px-4 text-center space-y-12">
           <h2 className="text-6xl md:text-[100px] font-black text-white leading-none tracking-tighter italic uppercase">
              Ready to <br /> 
              <span className="text-[#75221D]">Scale?</span>
           </h2>
           <Link to="/contact">
             <Button className="bg-white text-[#FE502D] hover:bg-[#75221D] hover:text-white h-20 px-16 rounded-[5px] text-2xl font-black uppercase italic tracking-tighter transition-all shadow-2xl">
                Partner with us <ArrowRight className="ml-4 w-8 h-8" />
             </Button>
           </Link>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </div>
  )
}
