import {CheckSquare, Hotel, Gavel,Film,Phone, Mail, GraduationCap, Briefcase, FlaskConical, Laptop, MapPin, Facebook, Instagram} from 'lucide-react';
import { useEffect, useState, useRef } from "react";
import { FileText, Upload, Search, } from 'lucide-react';  
import { motion ,AnimatePresence} from "framer-motion";
import AILearningComponent from './components/AiTag';
import Header from './components/Header';
import Hero from './components/Hero';
import AiCourses from './components/AiCourses';
import HiringPartners from './components/HiringPartners';
import FooterCta from './components/FooterCta';
import Footer from './components/Footer';
import Departments from './components/Departments';
import Research from './components/Research';
import Form from './components/Form';
 
 

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


  return (
    <div>

      <Header />
      <Hero />
      <AILearningComponent /> 
      <AiCourses />   
      <Form />
      <HiringPartners />
      <Research />
      <Departments/>
      <FooterCta/>
      <Footer />

</div>
  );
};

export default App;