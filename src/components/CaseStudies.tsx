import { Badge } from "@/components/ui/badge"
import serviceAds from "@/assets/service_ads.png"
import serviceSeo from "@/assets/service_seo.png"
import { ArrowRight } from "lucide-react"

const cases = [
  {
    title: "Eco-Tech Solutions Scale-up",
    category: "Full Management",
    image: serviceAds,
    description: "Successfully scaled an eco-friendly tech brand from $10k to $250k monthly revenue in 6 months.",
    stats: "+2,400% Growth"
  },
  {
    title: "Luxe Fashion Rebranding",
    category: "Storefront Design",
    image: serviceSeo,
    description: "Revamped the entire Amazon storefront and A+ content leading to massive conversion boost.",
    stats: "35% Conv. Rate"
  }
]

export function CaseStudies() {
  return (
    <section className="py-24 bg-[#75221D]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <Badge className="bg-[#FE502D] text-white border-none py-1 mb-6 rounded-[5px]">Our Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Real Results for Real Brands</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We don't just talk about growth — we deliver it. Explore how we've helped our clients dominate their niches on Amazon.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {cases.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[5px] border border-white/10 hover:border-white/20 transition-all duration-500`}>
               <div className="md:w-1/2 relative overflow-hidden rounded-[5px] aspect-[16/9] shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6">
                     <div className="bg-[#FE502D] text-white px-6 py-2 rounded-[5px] font-black text-xl shadow-lg animate-pulse">
                        {item.stats}
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 space-y-6">
                  <span className="text-[#FDF392] font-black uppercase tracking-widest text-sm">{item.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{item.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{item.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#FE502D] font-bold text-lg hover:text-[#FDF392] transition-colors group">
                    View Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
