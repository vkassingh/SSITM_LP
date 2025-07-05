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
  
    return (
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
    )
}

export default Hero;
  