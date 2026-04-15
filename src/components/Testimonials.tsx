import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Miller",
    role: "Proprietor of Fitwell",
    text: "EcomPropel completely transformed our Amazon presence. Within 3 months, our organic ranking for top keywords jumped to the first page.",
    rating: 5,
    tag: "SEO Growth"
  },
  {
    name: "Michael Chen",
    role: "Founder of EcoGlow",
    text: "The most professional agency we've worked with. Their data-driven approach to PPC saved us thousands while increasing our sales.",
    rating: 5,
    tag: "PPC Optimization"
  },
  {
    name: "David Smith",
    role: "CEO of TechTool",
    text: "I highly recommend EcomPropel for any serious Amazon seller. They manage our entire catalog, leaving us to focus on product development.",
    rating: 5,
    tag: "Full Management"
  }
]

export function Testimonials() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FE502D]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDF392]/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
           <h2 className="text-4xl md:text-6xl font-black text-[#75221D] leading-[1.1]">
              Trusted by 500+ <br /> <span className="text-[#FE502D]">Global Brands</span>
           </h2>
           <p className="text-gray-500 text-xl">
              Don't just take our word for it. Hear from the Amazon sellers who have scaled their businesses to new heights with our expertise.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-[0_20px_50px_rgba(117,34,29,0.05)] bg-[#FDF392]/10 rounded-[5px] p-4 relative hover:shadow-[0_20px_50px_rgba(254,80,45,0.1)] transition-all group overflow-hidden">
                {/* Large Background Quote */}
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-[#75221D]/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                
                <CardContent className="pt-10 pb-6 space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-1 text-[#FE502D]">
                      {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="px-3 py-1 bg-white rounded-[5px] text-[10px] font-black uppercase tracking-widest text-[#75221D]/40">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-[#75221D] text-lg font-medium leading-relaxed italic">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-[#75221D]/5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FE502D] to-[#75221D] rounded-[5px] flex items-center justify-center text-white font-black text-2xl shadow-lg transform group-hover:rotate-3 transition-transform">
                      {item.name[0]}
                    </div>
                    <div>
                      <h4 className="font-black text-[#75221D] text-lg">{item.name}</h4>
                      <p className="text-sm text-gray-500 font-medium">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for Testimonials */}
        <div className="mt-20 text-center">
           <p className="text-[#75221D]/60 font-bold mb-4">Want to see more results?</p>
           <a href="#" className="inline-flex items-center gap-2 text-[#FE502D] font-black text-lg hover:underline transition-all">
              View Case Studies →
           </a>
        </div>
      </div>
    </section>
  )
}
