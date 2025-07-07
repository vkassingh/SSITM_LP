function AiCourses() {
    return (
        <div className="bg-gray-50 p-4 sm:p-8 font-inter">
            <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 relative inline-block pb-2">
                        <span className="relative z-10">EXPLORE OUR AI PROGRAMS</span>
                        {/* Orange underline effect */}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 rounded-full"></span>
                    </h2>
                </div>

                {/* Course Cards Container */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

                    {/* Course Card 1: B.Tech - Computer Science and Engineering (Artificial Intelligence) */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format" alt="AI Learning" className="w-full h-48 object-cover object-center" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">B.Tech - Computer Science and Engineering (Artificial Intelligence)</h3>
                            <p className="text-sm text-gray-600 mb-4">Duration: <span className="font-medium text-orange-600">4 Years</span></p>
                            <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700 mb-4">
                                <p><span className="font-semibold text-orange-700">Eligibility:</span> 10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%</p>

                            </div>
                            <a href="https://seglko.in8.nopaperforms.com/" target="_blank" className="px-29 p-2 text-sm text-white bg-orange-500 rounded-lg border-2 border-orange-500 m-3">Apply Now</a>

                        </div>
                    </div>

                    {/* Course Card 2: B.Tech - Computer Science and Engineering (AI & Machine Learning) */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img src="https://cdn.pixabay.com/photo/2019/12/14/08/52/artificial-intelligence-4694502_640.jpg " alt="AI and Machine Learning" className="w-full h-48 object-cover object-center" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">B.Tech - Computer Science and Engineering (Artificial Intelligence & Machine Learning)</h3>
                            <p className="text-sm text-gray-600 mb-4">Duration: <span className="font-medium text-orange-600">4 Years</span></p>
                            <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700 mb-4">
                                <p><span className="font-semibold text-orange-700">Eligibility:</span> 10+2 with Physics, Chemistry, Maths (PCM) or equivalent with min. 45%</p>
                            </div>
                            <a href="https://seglko.in8.nopaperforms.com/" target="_blank" className="px-29 p-2 text-sm text-white bg-orange-500 rounded-lg border-2 border-orange-500 m-3">Apply Now</a>

                        </div> 
                    </div>

                    {/* Course Card 3: M.Tech - Artificial Intelligence and Data Science */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg" alt="AI and Data Science" className="w-full h-48 object-cover object-center" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">M.Tech - Artificial Intelligence and Data Science</h3>
                            <p className="text-sm text-gray-600 mb-4">Duration: <span className="font-medium text-orange-600">2 Years</span></p>
                            <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700 mb-4">
                                <p><span className="font-semibold text-orange-700">Eligibility:</span> B.E./B.Tech in relevant discipline with min. 50%</p>
                            </div>
                            <a href="https://seglko.in8.nopaperforms.com/" target="_blank" className="px-29 p-2 text-sm text-white bg-orange-500 rounded-lg border-2 border-orange-500 m-3">Apply Now</a>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AiCourses;
