import { GraduationCap } from "lucide-react";
import {motion } from "framer-motion";
function Research(){
    return (
          <section className="relative bg-gradient-to-br from-orange-900 to-violet-700 text-white py-10 px-4 overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
  </div>

  <div className="container mx-auto max-w-8xl relative z-10 text-center">
    <div className="flex items-center justify-center flex-wrap gap-3 mb-4">
      <GraduationCap className="w-10 h-10 md:w-14 md:h-14 text-black-800" />
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
        <span className="text-white">RESEARCH </span>
        <span className="text-orange-500">EXCELLENCE</span>
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6 text-left"
      >
        <h3 className="text-xl text-center md:text-2xl max-w-4xl">
          Join Our Research Community </h3>
        <img
          src="https://cdn.pixabay.com/photo/2023/10/27/06/02/clinical-trial-consulting-8344100_1280.jpg"
          alt="Research Lab"
          className="h-80 w-full object-cover rounded-lg border-1 border-white shadow-2xl"
        />
        <p className="text-lg text-orange-100">
        At Shivdan Singh Institute of Technology & Management, we're shaping the future through groundbreaking discoveries. 
        We empower students with industry-driven skills and a mindset for innovation. Our commitment to excellence fuels
        a generation of thinkers, creators, and leaders.        </p>
      </motion.div>

      {/* Right content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-left space-y-6"
      >
        <div>
          <h4 className="text-xl font-semibold mb-2 text-white">
            SSITM RESEARCH INITIATIVES
          </h4>
          <p className="text-orange-100">
            Recognized by the Ministry of Education for excellence in Sustainable Energy and Environmental Research.
          </p>
        </div>

        <div>
          <p className="text-orange-100">
            Our faculty is nationally recognized for their academic excellence and contributions to innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/20 p-4 rounded-lg">
            <p className="text-sm text-orange-100">
              Pioneering research recognized across national innovation and patent initiatives.
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <p className="text-sm text-orange-100">
              Supported by the Government of India for impactful scientific advancement.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    )
}

export default Research