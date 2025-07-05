import { BookOpen, Brain, Settings } from 'lucide-react'; 
const AILearningComponent = () => {
  return (
    <div className="w-full max-w-8xl bg-black rounded-lg shadow-xl overflow-hidden border-2 border-orange-600">
    <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">

  {/* Left Section: Icon and Title */}
  <div className="flex items-center gap-4 flex-shrink-0 min-w-[22ch] h-[3rem]">
    {/* Custom AI Brain Icon */}
    <div className="relative text-orange-500">
      <Settings size={40} strokeWidth={1.5} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Brain size={24} strokeWidth={2} className="relative z-10" />
    </div>
    <h2 className="w-[22ch] text-2xl sm:text-3xl font-bold text-orange-500 leading-tight typewriter">
      AI-ENABLED LEARNING
    </h2>
  </div>

  {/* Middle Section: Description */}
  <div className="flex-grow text-center md:text-left">
    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
      Empowering our students with the latest AI tools and technology to shape the future of Technology and Management.
    </p>
  </div>

  {/* Right Section: Book Icon */}
  <div className="flex-shrink-0">
    <BookOpen size={44} strokeWidth={1.5} className="text-orange-500" />
  </div>
</div>

    </div>
  );
};

export default AILearningComponent;