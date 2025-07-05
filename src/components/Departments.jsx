import { motion ,AnimatePresence} from "framer-motion";
import { GraduationCap, Laptop, Briefcase, FlaskConical, Hotel,  Gavel, Film,CheckSquare } from "lucide-react";

function Departments(){
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
    
    return(
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
    )
}

export default Departments;