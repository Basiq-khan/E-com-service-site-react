import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { AboutUs } from "./pages/AboutUs"
import { BlogPage } from "./pages/BlogPage"
import { ContactPage } from "./pages/ContactPage"

// Service Sub-Pages
import { AccountStoreSetup } from "./pages/AccountStoreSetup"
import { ProductHunting } from "./pages/ProductHunting"
import { ProductListingOptimization } from "./pages/ProductListingOptimization"
import { OrderFulfillment } from "./pages/OrderFulfillment"
import { SEOContentWriting } from "./pages/SEOContentWriting"
import { EtsyDigitalProducts } from "./pages/EtsyDigitalProducts"

import { ScrollToTop } from "./components/ScrollToTop"

function App() {
  return (
    <div className="min-h-screen bg-white text-[#75221D] selection:bg-[#FE502D]/20 selection:text-[#75221D]">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Service Routes */}
          <Route path="/services/setup" element={<AccountStoreSetup />} />
          <Route path="/services/hunting" element={<ProductHunting />} />
          <Route path="/services/optimization" element={<ProductListingOptimization />} />
          <Route path="/services/fulfillment" element={<OrderFulfillment />} />
          <Route path="/services/seo-writing" element={<SEOContentWriting />} />
          <Route path="/services/etsy-digital" element={<EtsyDigitalProducts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
