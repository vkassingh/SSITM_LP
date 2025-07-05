import {Phone, Mail, MapPin,Facebook, Instagram} from "lucide-react"
function Footer(){
    return (
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
    
    )
}

export default Footer;