import { Phone, Mail, ChevronRight, Check, GraduationCap, Users, Briefcase, FlaskConical, Microscope, Laptop, BookOpen, Scale, Award } from 'lucide-react';
import { useEffect, useState } from "react";
import sarojLogo from "./assets/sarojLogo.png";
import { FileText, Upload, Search, } from 'lucide-react';  
import { motion } from "framer-motion";
 
// Animation variants for RESEARCH SECTION starts
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const hoverEffect = {
  scale: 1.03,
  y: -5,
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
};
// Animation variants for RESEARCH SECTION ends

// Star particle APPLY SECTION
const StarParticle = () => {
  const [x] = useState(Math.random() * 100);
  const [delay] = useState(Math.random() * 5);
  const [duration] = useState(Math.random() * 4+ 3); // Faster
  const [size] = useState(Math.random() * 8 + 7); // Larger
  
  // Multiple color options
  const colors = ['#FFD700', '#FFA500', '#FF6347', '#FF69B4'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        boxShadow: `0 0 ${size}px ${size/2}px ${color}`,
      }}
      initial={{ y: -10, opacity: 0 }}
      animate={{ 
        y: '100vh', 
        opacity: [0, 0.8, 0],
        rotate: 360, // Add rotation
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};


// Animation for APPLY SECTION ends

const App = () => {

   const [scriptLoaded, setScriptLoaded] = useState(false)
    const [widgetLoaded, setWidgetLoaded] = useState(false)

    useEffect(() => {
        const loadScript = () => {
          if (document.querySelector('script[src="https://widgets.in8.nopaperforms.com/emwgts.js"]')) {
            setScriptLoaded(true)
            return
          }
    
          const s = document.createElement("script")
          s.type = "text/javascript"
          s.async = true
          s.src = "https://widgets.in8.nopaperforms.com/emwgts.js"
    
          s.onload = () => {
            setScriptLoaded(true)
            setTimeout(() => {
              const widgetElement = document.querySelector(".npf_wgts")
              if (widgetElement && widgetElement.innerHTML.trim()) {
                setWidgetLoaded(true)
              }
            }, 1000)
          }
    
          s.onerror = () => console.error("Failed to load NoPaperForms script")
          document.body.appendChild(s)
        }
    
        loadScript()
      }, [])

//APPLY SECTION state for start particles
 const [particles, setParticles] = useState([]);
  useEffect(() => {
    // Create 80 yellow star particles
    setParticles(Array.from({ length: 80 }, (_, i) => i));
  }, []);



  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="w-full md:mx-auto flex justify-center md:justify-start ">
            <img 
              src= {sarojLogo}
              alt="Saroj University Logo"
              className="h-12"
            />
          </div>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <a href="tel:+919513731275" className="flex items-center text-gray-700 hover:text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              <span>+919513731275</span>  
             
            </a>
            <a href="mailto:info@sarojuniversity.edu.in" className="flex items-center text-gray-700 hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              <span>info@sarojuniversity.edu.in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Image Only */}
    <section className="relative w-full h-screen overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1496469888073-80de7e952517"
    alt="Hero Background"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-x-0 top-0 flex justify-center pt-40 px-4">
    <div className="text-white text-center w-full ">
      <h1 className="text-4xl md:text-7xl font-extrabold mb-4">
        SAROJ INTERNATIONAL UNIVERSITY
      </h1>
      <h2 className="text-2xl md:text-5xl font-medium">
       India’s Gateway to Next-Gen Education
      </h2>
    </div>
  </div>
</section>

      {/* Application Section */}
       <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Yellow Star Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <StarParticle key={particle} />
        ))}
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
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 text-blue-600">
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
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 text-blue-600">
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
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 text-blue-600">
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
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 text-blue-600">
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

  {/* Research Excellence */}
       <section className="relative bg-gradient-to-br from-blue-900 to-violet-700 text-white py-20 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light tracking-wider">RESEARCH EXCELLENCE</h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Join Our Pioneering <br /> Research Community
            </h2>
            <p className="text-lg text-blue-100 max-w-lg">
              At Saroj International University, we're shaping the future through groundbreaking discoveries.
            </p>
          </motion.div>

          {/* Right content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">SAROJ RESEARCH INITIATIVES</h3>
              <p className="text-blue-100">
                Recognized by the Ministry of Education for excellence in Sustainable Energy and Environmental Research
              </p>
            </div>

            <div className="mb-6">
              <p className="text-blue-100">
                Our faculty includes 12 Awardees and 65 Fellows of National Academies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="text-3xl font-bold mb-1">40K+</h4>
                <p className="text-sm text-blue-100">National Ranking for Patents</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-1">Recognized by</h4>
                <p className="text-sm text-blue-100">Government of India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

{/* Specialized Departments */}
<section className="py-16 bg-blue-50">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialized Departments</h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
      />
    </motion.div>
    
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {[
        { 
          icon: <Laptop className="w-8 h-8 text-blue-600" />,
          title: "Computer Science & Engineering",
          description: "Cutting-edge programs in AI, ML, and software development"
        },
        { 
          icon: <Briefcase className="w-8 h-8 text-green-600" />,
          title: "Business Administration",
          description: "Industry-aligned MBA and BBA programs"
        },
        { 
          icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
          title: "Pharmaceutical Sciences",
          description: "Comprehensive pharmacy education and research"
        },
        { 
          icon: <BookOpen className="w-8 h-8 text-purple-600" />,
          title: "Arts & Humanities",
          description: "Creative programs in literature and social sciences"
        },
        { 
          icon: <Scale className="w-8 h-8 text-yellow-600" />,
          title: "Legal Studies",
          description: "BA LLB and LLM programs with moot court training"
        },
        { 
          icon: <Users className="w-8 h-8 text-indigo-600" />,
          title: "Health Sciences",
          description: "Nursing and allied health programs"
        }
      ].map((dept, index) => (
        <motion.div 
          key={index}
          variants={item}
          whileHover={hoverEffect}
          className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
        >
          <motion.div 
            whileHover={{ rotate: 10 }}
            className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4"
          >
            {dept.icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">{dept.title}</h3>
          <p className="text-gray-600">{dept.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Testimonials */}
  <section className="py-25 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-blue-900 mb-2">What Our Students Say</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Testimonial 1 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
      >
        <p className="text-purple-800 italic mb-4">"The faculty support for research projects with industry collaborations has been exceptional."</p>
        <p className="font-medium text-blue-900">Rahul Sharma</p>
        <p className="text-sm text-pink-600">B.Tech Computer Science, 2022</p>
      </motion.div>

      {/* Testimonial 2 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
      >
        <p className="text-purple-800 italic mb-4">"Secured my dream job at a top IT company with the placement cell's guidance."</p>
        <p className="font-medium text-blue-900">Priya Patel</p>
        <p className="text-sm text-pink-600">MBA, 2021</p>
      </motion.div>

      {/* Testimonial 3 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
      >
        <p className="text-purple-800 italic mb-4">"Published multiple research papers with guidance from our award-winning faculty."</p>
        <p className="font-medium text-blue-900">Arjun Mehta</p>
        <p className="text-sm text-pink-600">PhD Research, 2023</p>
      </motion.div>

      {/* Testimonial 4 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
      >
        <p className="text-purple-800 italic mb-4">"The patent support team helped me file 3 patents during my engineering program."</p>
        <p className="font-medium text-blue-900">Neha Gupta</p>
        <p className="text-sm text-pink-600">M.Tech, 2022</p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Hiring Partners */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Hiring Partners</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading organizations that recruit Saroj University graduates
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "TCS", logo: "/logos/tcs.png" },
              { name: "Infosys", logo: "/logos/infosys.png" },
              { name: "Wipro", logo: "/logos/wipro.png" },
              { name: "Amazon", logo: "/logos/amazon.png" },
              { name: "Microsoft", logo: "/logos/microsoft.png" },
              { name: "HCL", logo: "/logos/hcl.png" },
            ].map((company, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-16 object-cover transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold">Saroj University</h3>
            </div>
            <p className="text-gray-400">
              Empowering students through quality education and industry-relevant skills since 2005.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Placements</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 522 311 6178</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@sarojuniversity.edu.in</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Lucknow, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Saroj University. All Rights Reserved.
        </div>
      </footer> */}
    </div>
  );
};

export default App;