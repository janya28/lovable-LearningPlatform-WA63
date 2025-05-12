
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative bg-gradient-to-br from-learn-primary/90 to-learn-secondary py-16 md:py-24 overflow-hidden text-white">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-slide-in">
            Unlock Your Potential With Online Learning
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Access high-quality courses taught by industry experts and transform your skills at your own pace.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigate('/courses')}
              size="lg" 
              className="bg-white text-learn-primary hover:bg-white/90 font-medium px-6"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => navigate('/register')}
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-learn-primary font-medium px-6"
            >
              Join for Free
            </Button>
          </div>
          
          <div className="flex items-center mt-10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-learn-${i % 2 ? 'primary' : 'secondary'}/30`} />
              ))}
            </div>
            <p className="ml-4 text-sm text-white/90">
              Join over <span className="font-bold">10,000+</span> students already learning with us
            </p>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-md mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="w-full py-3 pl-10 pr-4 bg-gray-100 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-learn-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {['Web Development', 'Data Science', 'UX Design', 'Marketing'].map((category) => (
                <div 
                  key={category}
                  className="p-3 bg-gray-100 rounded-md text-gray-700 font-medium text-sm text-center hover:bg-learn-primary/10 hover:text-learn-primary cursor-pointer transition-colors"
                >
                  {category}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mb-3">Popular courses:</p>
            <div className="space-y-3">
              {[
                {title: 'Introduction to Python', students: '2.4K', rating: 4.8},
                {title: 'Full-Stack Web Development', students: '1.8K', rating: 4.6},
                {title: 'Digital Marketing Masterclass', students: '3.1K', rating: 4.9},
              ].map((course, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <h3 className="font-medium text-gray-800">{course.title}</h3>
                    <p className="text-xs text-gray-500">{course.students} students</p>
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
