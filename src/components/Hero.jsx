import { Link } from 'react-router-dom';
import { motion ,AnimatePresence} from "framer-motion";
const Hero = ()=>  {
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

    const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };
  
    return (
     <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]  overflow-hidden">
      <img
        src="https://img.freepik.com/premium-photo/group-happy-students-sitting-college-campus-garden-with-books_1223255-59407.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover bg-blue-400 absolute inset-0"
        
      />

      
      <div class="absolute inset-0 bg-black-500"></div>
      <div className="absolute inset-x-0 top-0 flex justify-center pt-30 px-4">
        <div className="text-white text-center w-full max-w-9xl">
          <motion.h1
            variants={dropIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, ...dropIn.visible.transition }}
            className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4"
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

          {/* CTA Buttons */}
            <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:ml-50" variants={itemVariants}>
              <a href="https://seglko.org/ssitm/courses/AllCourses">
                <motion.button
                  className="px-6 py-2 sm:px-8 sm:py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-md font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Courses
                </motion.button>
              </a>
              <a href="tel:+919555699988">
                <motion.button
                  className="px-6 py-2 sm:px-8 sm:py-2 border border-orange-600 text-orange-600 rounded-md font-semibold hover:bg-gradient-to-r from-orange-500 to-red-500 transition-colors duration-300 hover:text-white bg-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </a>
            </motion.div>
        </div>
      </div>
    </section>
    )
}

export default Hero;
  