import { motion } from "framer-motion"
import serviceAds from "../assets/service_ads.png"
import serviceSeo from "../assets/service_seo.png"
import { Testimonials } from "../components/Testimonials"
import { FAQ } from "../components/FAQ"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "How to Optimize Your Amazon Listings for 2026",
    excerpt: "Stay ahead of the curve with our latest guide on SEO and A+ content strategies that dominate search.",
    image: serviceSeo,
    date: "Oct 12, 2026",
    category: "Amazon Tips"
  },
  {
    title: "The Future of PPC: Artificial Intelligence",
    excerpt: "Explore how AI is changing the bidding landscape on Amazon Advertising and how to adapt your spend.",
    image: serviceAds,
    date: "Oct 08, 2026",
    category: "Paid Traffic"
  },
  {
    title: "Scaling Globally: FBA Europe vs US",
    excerpt: "Everything you need to know about VAT, shipping, and listing translations for the European market.",
    image: serviceSeo,
    date: "Sep 28, 2026",
    category: "Logistics"
  },
  {
    title: "Why Brand Storytelling is Your Moat",
    excerpt: "In a world of generic products, your brand story is what protects your margins and builds loyalty.",
    image: serviceAds,
    date: "Sep 15, 2026",
    category: "Branding"
  },
  {
    title: "The 2026 Prime Day Playbook",
    excerpt: "Our internal strategy for maximizing clicks and conversions during Amazon's biggest sales event.",
    image: serviceSeo,
    date: "Aug 30, 2026",
    category: "Growth"
  },
  {
    title: "Inventory Management Secrets",
    excerpt: "Stop losing sales to 'Out of Stock' badges. Learn how we manage logistics for $100M+ brands.",
    image: serviceAds,
    date: "Aug 12, 2026",
    category: "Fulfillment"
  }
]

export function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section - 70vh */}
      <section className="bg-[#75221D] h-[70vh] flex items-center relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#FE502D]/10 rounded-full blur-[120px]"
        />
        <div className="container mx-auto px-4 relative z-10 text-center uppercase italic">
           <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-[5px] text-[#FDF392] text-xs font-black tracking-[0.5em] mb-8"
           >
              Insights & Intelligence
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter"
           >
             STRATEGIC <br /> <span className="text-[#FDF392]">READS.</span>
           </motion.h1>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {posts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[5px] mb-8 bg-gray-50 border border-gray-100 aspect-[16/10]">
                  <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-[#FE502D] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-[5px] shadow-2xl skew-x-[-10deg]">
                     {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-1 bg-[#FDF392]"></div>
                     <p className="text-[#FE502D] font-black text-xs uppercase tracking-[0.2em]">{post.date}</p>
                  </div>
                  <h3 className="text-3xl font-black text-[#75221D] uppercase italic tracking-tighter leading-[1.1] group-hover:text-[#FE502D] transition-colors">{post.title}</h3>
                  <p className="text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="pt-4 flex items-center gap-3 text-[#75221D] font-black uppercase italic tracking-tighter text-lg group-hover:gap-6 transition-all duration-300">
                    Read Article <ArrowRight className="w-6 h-6 text-[#FE502D]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </div>
  )
}
