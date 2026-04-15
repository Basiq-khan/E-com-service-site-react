import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, ArrowRightCircle } from "lucide-react"

const faqs = [
  {
    question: "What is a full-service Amazon agency?",
    answer: "A full-service Amazon agency manages all aspects of your Amazon business, from inventory management and logistics to SEO, design, and advertising (PPC). We act as an extension of your team."
  },
  {
    question: "How long does it take to see results?",
    answer: "While some optimizations (like listing improvements) can show impact within weeks, significant growth usually takes 3-6 months as keywords gain ranking and data matures for PPC algorithms."
  },
  {
    question: "Do you work with new sellers?",
    answer: "Yes, we help new sellers launch effectively from day one. However, we also specialize in revitalizing existing brands that have reached a performance plateau."
  },
  {
    question: "What are your management fees?",
    answer: "Our fees are structured based on catalog size and scope. We typically use a hybrid model: a base retainer for operational work plus a performance-based percentage to align our incentives with your growth."
  }
]

export function FAQ() {
  return (
    <section className="py-32 bg-[#FDF392]/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-8">
            <div className="w-16 h-16 bg-[#FE502D] rounded-[5px] flex items-center justify-center text-white shadow-xl shadow-[#FE502D]/20 animate-bounce">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-[#75221D] leading-tight">
                Any Questions? <br /> <span className="text-[#FE502D]">We have answers.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                Can't find what you're looking for? Reach out to our team directly for a personalized consultation.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-[5px] border border-[#75221D]/5 shadow-xl shadow-[#75221D]/5 group cursor-pointer transition-all hover:border-[#FE502D]/20">
               <h4 className="font-bold text-[#75221D] mb-2">Still confused?</h4>
               <p className="text-sm text-gray-400 mb-6">Our experts are happy to help you with any custom requirements.</p>
               <a href="#" className="flex items-center gap-2 text-[#FE502D] font-black group-hover:gap-3 transition-all">
                 Contact Support <ArrowRightCircle className="w-5 h-5" />
               </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-none bg-white rounded-[5px] px-8 shadow-sm hover:shadow-md transition-shadow transition-all duration-300 group overflow-hidden"
                >
                  <AccordionTrigger className="text-xl font-black text-[#75221D] hover:text-[#FE502D] hover:no-underline transition-colors py-8 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#75221D]/60 text-lg leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  )
}
