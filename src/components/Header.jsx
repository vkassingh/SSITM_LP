import ssitmLogo from "../assets/ssitm-logo.png";
import { Phone, Mail, Facebook, Instagram,  } from "lucide-react"

const Header = ()=>{
    return (
<header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    {/* Logo */}
    <div className="w-full md:mx-auto flex justify-center md:justify-start ">
      <img
        src={ssitmLogo}
        alt="Shivdan Singh Institute of Technology & Management Logo"
        className="h-12"
      />
    </div>

    {/* Contact Info */}
    <div className="hidden md:flex items-center space-x-6 text-gray-700"> 
      
      <div className="flex flex-col items-start justify-center text-sm font-medium">
         
          <a href="tel:+919555699988" className="flex items-center hover:text-orange-800">
              {/* Phone Icon with orange circle background */}
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2"> 
                  <Phone className="w-4 h-4 text-orange-600" />  
              </div>
              <span className="whitespace-nowrap">+919555699988</span>
          </a>
      </div>

      {/* Email */}
      <a href="mailto:admission.cell@seglko.org" className="flex items-center hover:text-orange-800">
          
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">
              <Mail className="w-4 h-4 text-orange-600" />  
          </div>
          <span>admission.cell@seglko.org</span>
      </a>

      {/* Social Media - Grouped */}
      <div className="flex items-center space-x-3">
          <a href="https://www.facebook.com/ssitmalg" target="_blank" rel="noopener noreferrer" className="hover:text-orange-800">

              {/* Facebook Icon  */}
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-orange-600" /> 
              </div>
          </a>
          <a href="https://www.instagram.com/ssitmalg" target="_blank" rel="noopener noreferrer" className="hover:text-orange-800">
              {/* Instagram Icon */}
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-orange-600" /> 
              </div>
          </a>
      </div>

       
      <span className="whitespace-nowrap">AKTU Code: 007</span>
      <a
        href="https://seglko.in8.nopaperforms.com/" // Replace with your actual apply now page URL
        className="bg-orange-600 text-white px-4 py-2 rounded-md  
                   hover:bg-orange-700 transition-colors duration-300
                   shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 whitespace-nowrap"
                   target="blank"
      >
        APPLY NOW
      </a>
    </div>
  </div>
</header>
    )
}

export default Header;
