import { motion } from "framer-motion"
import { ShoppingBag, Database, CheckCircle2, Truck, PenTool, Globe, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const services = [
  {
    icon: ShoppingBag,
    title: "Account & Store Setup",
    description: "Launch your brand with professional configuration, full compliance, and strategic store design for maximum trust.",
    path: "/services/setup"
  },
  {
    icon: Database,
    title: "Product Hunting",
    description: "Data-driven research to find high-demand, low-competition winners that guarantee long-term market profitability.",
    path: "/services/hunting"
  },
  {
    icon: CheckCircle2,
    title: "Product Listing Optimization",
    description: "Maximize conversion rates with SEO-optimized titles, persuasive sales copy, and scroll-stopping visuals.",
    path: "/services/optimization"
  },
  {
    icon: Truck,
    title: "Order Fulfillment",
    description: "Streamlined logistics, FBA management, and supply chain optimization to reduce costs and delivery times.",
    path: "/services/fulfillment"
  },
  {
    icon: PenTool,
    title: "SEO Content Writing",
    description: "High-ranking keywords blended into professional copy that speaks to people and ranks for machines.",
    path: "/services/seo-writing"
  },
  {
    icon: Globe,
    title: "Etsy Digital Products",
    description: "Build a high-margin passive income stream with expert design and turnkey setup for digital Etsy stores.",
    path: "/services/etsy-digital"
  }
]

export function Services() {
  return (
    <section className="py-20 md:py-32 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 md:mb-20">
           <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FE502D] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs"
           >
             Our Expertise
           </motion.p>
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-[#75221D] tracking-tighter uppercase italic leading-none"
           >
             Core <span className="text-[#FE502D]">Services.</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 md:p-10 rounded-[5px] border border-[#75221D]/5 hover:border-[#FE502D]/20 transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-[5px] flex items-center justify-center group-hover:bg-[#FE502D] transition-colors duration-500 mb-8">
                <service.icon className="w-8 h-8 text-[#FE502D] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-[#75221D] mb-4 uppercase italic tracking-tighter">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[60px]">
                {service.description}
              </p>
              <Link to={service.path}>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-[#FE502D] text-[#FE502D] font-black uppercase tracking-tighter group/btn">
                  Explore Service <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
