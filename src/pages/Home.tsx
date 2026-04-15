import { Hero } from "../components/Hero"
import { CaseStudies } from "../components/CaseStudies"
import { Services } from "../components/Services"
import { ContactAudit } from "../components/ContactAudit"
import { Testimonials } from "../components/Testimonials"
import { FAQ } from "../components/FAQ"

export function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Services />
      <ContactAudit />
      <Testimonials />
      <FAQ />
    </>
  )
}
