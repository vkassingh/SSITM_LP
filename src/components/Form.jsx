import { GraduationCap, FileText, Upload, Search ,Mail,   } from "lucide-react";
import {motion } from "framer-motion";

function Form(){
    return(
            <section className="py-16 bg-orange-50 relative overflow-hidden pt-20">

<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 px-4 text-center sm:text-left pb-5 md:pb-15 md:pt-18">
  <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-black-800" />
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900">
    <span className="text-black">ADMISSION </span>
    <span className="text-orange-500">PROCESS</span>
  </h2>
</div>



      {/* Content - Keeping original styling */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Left Side - How to Apply */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-1/2 mx-auto px-4 py-8 bg-white rounded-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply</h2>

          <div className="space-y-6">
            {/* Online Application */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start"
            >
              <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1 text-orange-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Online Application</h3>
                <p className="text-gray-600">
                  Fill out our online application form with your personal and academic details.
                </p>
              </div>
            </motion.div>

            {/* Document Submission */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start"
            >
              <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1 text-orange-600">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Document Submission</h3>
                <p className="text-gray-600">
                  Upload scanned copies of your academic transcripts and identification documents.
                </p>
              </div>
            </motion.div>

            {/* Application Review */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start"
            >
              <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1 text-orange-600">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Application Review</h3>
                <p className="text-gray-600">
                  Our admissions team will review your application within 5-7 working days.
                </p>
              </div>
            </motion.div>

            {/* Admission Offer */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-start"
            >
              <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1 text-orange-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Admission Offer</h3>
                <p className="text-gray-600">
                  Successful applicants will receive an offer letter via email.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-1/2 bg-white p-8 rounded-xl shadow-sm border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Inquiry Form</h3>
          
          <div className="npf_wgts" data-height="600" data-w="c4686ca3db50effadb9f24fc7ca22401"></div>
        </motion.div>
      </div>
    </section>
    )
}

export default Form;