import ssitmLogo from "../assets/ssitm-logo.png";
import { Phone, Mail, Facebook, Instagram, Users  } from "lucide-react"

const Header = ()=>{
    return (
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
      <a href="tel:+919555699988" className="flex items-center hover:text-orange-500">
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">
          <Phone className="w-4 h-4 text-orange-600" />
        </div>
        <span>+91 95556 99988</span>
      </a>

      {/* Email */}
      <a href="mailto:admission.cell@seglko.org" className="flex items-center hover:text-orange-500">
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
          className="hover:text-orange-500"
        >
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <Facebook className="w-4 h-4 text-orange-600" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/ssitmalg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <Instagram className="w-4 h-4 text-orange-600" />
          </div>
        </a>

        
      </div>

      {/* AKTU Code (only on md and up) */}
      <span className="hidden md:inline whitespace-nowrap hover:text-orange-500">AKTU Code: 007</span> 

      {/* alumni connect  */}
      <a 
        href="https://alumni.seglko.org"
        className="flex items-center text-black hover:text-orange-500 transition-colors" target= "_blank"
      >
        <Users className="w-4 h-4 mr-2" /> 
        <span>Alumni</span>
      </a>

      {/*  Apply now button  */}
      <a href="https://seglko.in8.nopaperforms.com/" target="_blank" className="hidden md:block px-13 p-2 text-sm rounded-lg border-2 border-orange-500 m-3 bg-gradient-to-r from-orange-500 to-red-400 text-white">Apply Now</a>

    </div>
  </div>
</header>
    )
}

export default Header;
