import { Button } from "@/components/ui/button"
import heroMan from "@/assets/hero_man.png"

export function ContactAudit() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-[#FDF392]/30 rounded-[5px] p-8 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border border-[#FDF392]">
           <div className="w-full md:w-3/5 space-y-6 md:space-y-8 relative z-10 text-center md:text-left px-4 md:px-0">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#75221D] leading-[1.1] uppercase italic tracking-tighter"> Ready to Dominate <br /> <span className="text-[#FE502D]">The Amazon Market?</span></h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                Join 500+ successful brands and transform your Amazon presence today.
              </p>
              <Button size="lg" className="w-full sm:w-auto bg-[#FE502D] hover:bg-[#75221D] text-white px-10 h-16 rounded-[5px] font-black italic uppercase tracking-tighter shadow-xl translate-y-0 hover:-translate-y-1 transition-all">
                Claim Your Free Audit
              </Button>
           </div>
           <div className="w-full md:w-2/5 flex justify-center relative">
              <div className="relative w-64 h-64 md:w-96 md:h-96 bg-[#FE502D] rounded-[5px] flex items-center justify-center overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                 <img src={heroMan} className="w-full h-full object-cover scale-110" alt="CTA Person" />
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#75221D] rounded-full -z-10 blur-2xl opacity-20"></div>
           </div>
        </div>
      </div>
    </section>
  )
}
