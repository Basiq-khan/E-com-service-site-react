
export function StatsHeader() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gray-500 font-medium mb-8">We Are Certified <span className="text-blue-600 font-bold">Google Ads</span> Specialists</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {/* Using simple text placeholders or standard icons if available */}
            <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xl font-bold transition-all group-hover:scale-110">T</div>
                <span className="text-[10px] font-bold">TikTok</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-[#0668E1] text-white rounded-lg flex items-center justify-center text-xl font-bold transition-all group-hover:scale-110">M</div>
                <span className="text-[10px] font-bold">Meta</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-[#00A4EF] text-white rounded-lg flex items-center justify-center text-xl font-bold transition-all group-hover:scale-110">b</div>
                <span className="text-[10px] font-bold">Bing</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-[#FF9900] text-black rounded-lg flex items-center justify-center text-xl font-bold transition-all group-hover:scale-110">a</div>
                <span className="text-[10px] font-bold">Amazon</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-bold transition-all group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.21 5.39-7.84 5.39-4.84 0-8.76-4.01-8.76-8.91s3.92-8.91 8.76-8.91c2.76 0 4.61 1.15 5.67 2.16l2.59-2.5c-1.66-1.55-3.82-2.49-6.26-2.49-5.32 0-9.63 4.31-9.63 9.63s4.31 9.63 9.63 9.63c5.55 0 9.24-3.9 9.24-9.41 0-.63-.07-1.11-.15-1.58h-9.09z" fill="#4285F4"/></svg>
                </div>
                <span className="text-[10px] font-bold">Google</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-gray-100">
           <div className="text-center space-y-1">
              <h2 className="text-5xl font-extrabold text-[#111]">15+</h2>
              <p className="text-gray-400 font-medium">Years Of Experience</p>
           </div>
           <div className="text-center space-y-1">
              <h2 className="text-5xl font-extrabold text-[#111]">380+</h2>
              <p className="text-gray-400 font-medium">Projects Loaded</p>
           </div>
           <div className="text-center space-y-1">
              <h2 className="text-5xl font-extrabold text-[#111]">$10M+</h2>
              <p className="text-gray-400 font-medium">Profit Generated</p>
           </div>
        </div>
      </div>
    </section>
  )
}
