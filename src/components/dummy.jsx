import {CheckSquare, Hotel, Gavel,Film,Phone, Mail, GraduationCap, Briefcase, FlaskConical, Laptop, MapPin, Facebook, Instagram} from 'lucide-react';
import { useEffect, useState, useRef } from "react";
import ssitmLogo from "./assets/ssitm-logo.png";
import { FileText, Upload, Search, } from 'lucide-react';  
import { motion ,AnimatePresence} from "framer-motion";
 
// Animation variants for RESEARCH SECTION starts
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Delay before individual items start animating
        staggerChildren: 0.2, // Stagger the animation of each child item
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverEffect = {
    scale: 1.05, // Scale up the card slightly on hover
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  };

    // Data for departments including programs offered
  const departments = [
    {
      icon: <Laptop className="w-8 h-8 text-gray-450" />,
      title: "Engineering & Technology",
      institute: "Institute of Technology & Management",
      programs: ["B.Tech (CSE, ECE, ME, CE)", "M.Tech", "Diploma"],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-gray-450" />,
      title: "Management Studies",
      institute: "Institute of Management Studies",
      programs: ["MBA", "BBA", "PGDM"],
    },
    {
      icon: <Laptop className="w-8 h-8 text-gray-450" />, // Using Laptop for Computer Applications as well
      title: "Computer Applications",
      institute: "Institute of Computer Applications",
      programs: ["BCA", "MCA", "DCA"],
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-gray-450" />, // Changed color for variety
      title: "Sciences",
      institute: "Institute of Science & Technology",
      programs: ["B.Sc (PCS, PCM, CBZ)", "M.Sc", "B.Sc (Hons)"],
    },
    {
      icon: <Hotel className="w-8 h-8 text-gray-450" />, // New icon for Hotel Management
      title: "Hotel Management",
      institute: "Institute of Hotel Management",
      programs: ["BHMCT", "DHM", "Food Technology"],
    },
    {
      icon: <Gavel className="w-8 h-8 text-gray-450" />, // New icon for Law
      title: "Law",
      institute: "Institute of Law",
      programs: ["BA LLB", "LLB", "LLM"],
    },
    {
      icon: <Film className="w-8 h-8 text-gray-450" />, // New icon for Media Studies
      title: "Media Studies",
      institute: "Institute of Media & Communication",
      programs: ["BJMC", "MJMC", "Digital Media"],
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-gray-450" />, // New icon for Education
      title: "Education",
      institute: "Institute of Education",
      programs: ["B.Ed", "D.El.Ed", "M.Ed"],
    },
  ];

 

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

 

   

//drop in effect for hero section text
 const dropIn = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 8.8,
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

 


  // Hiring section
  const logos = [
              {id: 1, alt: "TCS", src: "/logos/tcs.png" },
              { id: 2, alt: "Infosys", src: "/logos/infosys.png" },
              { id: 3,alt: "Wipro", src: "/logos/wipro.png" },
              { id: 4,alt: "Amazon", src: "/logos/amazon.png" },
              { id: 5,alt: "Microsoft", src: "/logos/microsoft.png" },
              { id: 6,alt: "HCL", src: "/logos/hcl.png" },
              { id: 7,alt: "Accenture", src: "/logos/accenture.png" },
               { id: 8,alt: "Capgemini", src: "/logos/capgemini.png" },
                { id: 9,alt: "Deloitte", src: "/logos/deloitte.png" },
                 { id: 10,alt: "Tech Mahindra", src: "/logos/tech_mahindra.png" },
                  
            ];


  const containerRef = useRef(null);
  const angleRef = useRef(0);
  const radius = 160;
  const speed = 0.005;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const logoElements = container.querySelectorAll('.logo-item');
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    const animate = () => {
      angleRef.current += speed;

      logoElements.forEach((logo, index) => {
        const angle = angleRef.current + (index * (2 * Math.PI / logoElements.length));
        const x = centerX + Math.cos(angle) * radius - logo.offsetWidth / 2;
        const y = centerY + Math.sin(angle) * radius - logo.offsetHeight / 2;
        
        const scale = 0.8 + 0.2 * Math.sin(angle);
        const opacity = 0.7 + 0.3 * Math.sin(angle);
        
        logo.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        logo.style.opacity = opacity;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
<header className="bg-white shadow-sm">
  <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
    
    {/* Logo */}
    <div className="flex justify-center md:justify-start">
      <img
        src={ssitmLogo}
        alt="Shivdan Singh Institute of Technology & Management Logo"
        className="h-12"
      />
    </div>

    {/* Contact Info */}
    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end text-gray-700 gap-4 text-sm font-medium">

      {/* Phone */}
      <a href="tel:+919555699988" className="flex items-center hover:text-orange-800">
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">
          <Phone className="w-4 h-4 text-orange-600" />
        </div>
        <span>+91 95556 99988</span>
      </a>

      {/* Email */}
      <a href="mailto:admission.cell@seglko.org" className="flex items-center hover:text-orange-800">
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">
          <Mail className="w-4 h-4 text-orange-600" />
        </div>
        <span>admission.cell@seglko.org</span>
      </a>

      {/* Social Media (only on md and up) */}
      <div className="hidden md:flex items-center space-x-3">
        <a
          href="https://www.facebook.com/ssitmalg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-800"
        >
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <Facebook className="w-4 h-4 text-orange-600" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/ssitmalg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-800"
        >
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <Instagram className="w-4 h-4 text-orange-600" />
          </div>
        </a>
      </div>

      {/* AKTU Code (only on md and up) */}
      <span className="hidden md:inline whitespace-nowrap">AKTU Code: 007</span>
    </div>
  </div>
</header>

  
      {/* Hero Section */}
 <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]  overflow-hidden">
      <img
        src="https://img.freepik.com/premium-photo/group-happy-students-sitting-college-campus-garden-with-books_1223255-59407.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-x-0 top-0 flex justify-center pt-30 px-4">
        <div className="text-white text-center w-full max-w-9xl">
          <motion.h1
            variants={dropIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, ...dropIn.visible.transition }}
            className="text-2xl md:text-6xl font-extrabold mb-4"
          >
           Shivdan Singh Institute of Technology & Management
          </motion.h1>

          <motion.h2
            variants={dropIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5, ...dropIn.visible.transition }}
            className="text-xl md:text-4xl font-medium mb-8"
          >
            Empowering future leaders with quality education and cutting-edge technology.
          </motion.h2>

         
        </div>
      </div>
    </section>

 {/* Application Section */}
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


    {/* Hiring Partners */}
       <section className="py-10 bg-orange-50 pb-40 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       
  <div className="text-center mb-12 font-funneldisplay px-4 sm:px-6">
  {/* Heading Row with Icon & Text */}
  <div className="flex items-center justify-center gap-3 flex-wrap pt-12">
    <GraduationCap className="w-10 h-10 md:w-20 md:h-20 text-black-800" />
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
      OUR ESTEEMED <span className="text-orange-500">HIRING PARTNERS</span>
    </h2>
  </div>
 

  {/* Description Paragraph */}
  <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
    Shivdan Singh Institute of Technology & Management collaborates with industry leaders to bridge 
    the gap between academia and the professional world.
  </p>
</div>



        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Why Partner With Us?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Industry-Ready Graduates</h4>
                    <p className="text-gray-600">
                      Our curriculum is co-designed with industry leaders to ensure immediately applicable skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Custom Talent Pipeline</h4>
                    <p className="text-gray-600">
                      Work with us to develop specialized training programs for your specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Research Collaboration</h4>
                    <p className="text-gray-600">
                      Access cutting-edge university research and innovation projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          
          </div>

          {/* Right Logo Carousel */}
<div className="relative w-full max-w-full h-96 overflow-hidden lg:w-1/2 mx-auto px-4">
  <div ref={containerRef} className="relative w-full h-full">
    {logos.map((logo) => (
      <div
        key={logo.id}
        className="logo-item absolute w-20 h-10 sm:w-24 sm:h-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          willChange: 'transform, opacity',
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-full h-full object-contain transition-all duration-300"
        />
      </div>
    ))}
  </div>

  {/* Center Stats */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
    <div className="bg-white p-4 sm:p-6 rounded-full shadow-xl border border-gray-100 text-center w-32 h-32 sm:w-40 sm:h-40 flex flex-col items-center justify-center">
      <span className="text-2xl sm:text-3xl font-bold text-orange-600">45+</span>
      <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">Global Partners</p>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>

 {/* Research Excellence */}
      <section className="relative bg-gradient-to-br from-orange-900 to-violet-700 text-white py-10 px-4 overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
  </div>

  <div className="container mx-auto max-w-6xl relative z-10 text-center">
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
        <h3 className="text-xl md:text-4xl max-w-3xl">
          Join Our Pioneering Research Community
        </h3>
        <img
          src="https://cdn.pixabay.com/photo/2023/10/27/06/02/clinical-trial-consulting-8344100_1280.jpg"
          alt="Research Lab"
          className="h-80 w-full object-cover rounded-lg border-1 border-white shadow-2xl"
        />
        <p className="text-lg text-orange-100 max-w-lg">
          At Shivdan Singh Institute of Technology & Management, we're shaping the future through groundbreaking discoveries.
        </p>
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


      
 

{/* Specialized Departments */}
   <section className="py-16 bg-orange-50"> {/* Very light orange background, matching the image */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 px-4 text-center sm:text-left pb-5 ">
            {/* The GraduationCap icon should be consistent with the other icons in orange-600 */}
            <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-600" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900">
              <span className="text-gray-900">OUR </span> {/* Changed 'black' to 'gray-900' for better contrast with light background */}
              <span className="text-orange-600">SPECIALIZED DEPARTMENTS</span> {/* Used orange-600 for a slightly deeper orange */}
            </h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-orange-400 w-24 mx-auto mt-4 rounded-full" // Added a subtle orange line below the heading
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" // Adjusted grid columns for more items and better flow
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hoverEffect}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-500 hover:bg-white transition-all shadow-md flex flex-col" // Kept card background white, border changes to orange on hover, light shadow
            >
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 bg-orange-100 rounded-full shadow-sm flex items-center justify-center mr-4" // Maintained light orange circle for icon background
                >
                  {dept.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{dept.title}</h3>
                  <p className="text-sm text-gray-500">{dept.institute}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">PROGRAMS OFFERED</p>
                <ul className="space-y-2">
                  {dept.programs.map((program, pIndex) => (
                    <li key={pIndex} className="flex items-center text-gray-600 text-sm">
                      <CheckSquare className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" /> {/* Changed checkmark to orange-500 */}
                      {program}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>


      {/* Footer cta */}
       <section className="bg-gradient-to-r from-purple-900 via-indigo-600 to-blue-600 py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Start Your Journey today in Technology and Management?
        </h2>
        <p className="text-lg mb-8">
          Join Shivdan Singh Institute of Technology and Management and be a part of the future of innovation.
        </p>
      
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center space-x-3">
            <img 
              src= "/ssitm-logo.png"
              alt="Shivdan Singh Institute of Technology & Management Logo"
              className="h-10 w-auto object-contain"
            />
              <p className="text-xl">Shivdan Singh Institute of Technology & Management</p>
            </div>

            <p className="text-white">
              Empowering students through quality education and industry-relevant skills.
            </p>
               <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/ssitmalg" className="text-white" target= "_blank">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ssitmalg" className="text-white" target = "_blank">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-white">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+919513731275">+91-9555699988</a>

              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>admission.cell@seglko.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>10th KM Stone, Aligarh–Mathura Road, Aligarh, Uttar Pradesh,India 202001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Shivdan Singh Institute of Technology & Management. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;