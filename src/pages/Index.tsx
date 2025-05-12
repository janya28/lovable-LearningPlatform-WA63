
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import { Button } from '@/components/ui/button';
import { GraduationCap, Book, Check, List, Video } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedCourses />
        
        {/* How it works section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-learn-dark mb-2">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our learning platform makes it easy to gain new skills and knowledge at your own pace.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <Search className="h-8 w-8 text-learn-primary" />,
                  title: 'Find Your Course',
                  description: 'Browse our catalog of high-quality courses taught by industry experts.'
                },
                {
                  icon: <Book className="h-8 w-8 text-learn-secondary" />,
                  title: 'Enroll & Learn',
                  description: 'Enroll in courses and access comprehensive learning materials.'
                },
                {
                  icon: <Check className="h-8 w-8 text-learn-accent" />,
                  title: 'Complete Quizzes',
                  description: 'Test your knowledge with interactive quizzes after each lesson.'
                },
                {
                  icon: <GraduationCap className="h-8 w-8 text-learn-success" />,
                  title: 'Earn Certificate',
                  description: 'Receive a certificate upon successful completion of your course.'
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-white p-4 shadow-md mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-learn-primary hover:bg-learn-primary/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 bg-gradient-to-br from-learn-primary/[0.02] to-learn-secondary/[0.05]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold text-learn-dark mb-4">Why Choose Our Platform</h2>
                <p className="text-gray-600 mb-8">
                  Our platform offers a comprehensive learning experience with features designed to help you succeed.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: <Video className="h-5 w-5 text-learn-primary" />,
                      title: 'High-Quality Video Lessons',
                      description: 'Enjoy clear, professionally produced video lessons that make complex topics easy to understand.'
                    },
                    {
                      icon: <List className="h-5 w-5 text-learn-primary" />,
                      title: 'Progress Tracking',
                      description: 'Monitor your progress with detailed analytics and see how far you've come.'
                    },
                    {
                      icon: <Book className="h-5 w-5 text-learn-primary" />,
                      title: 'Comprehensive Resources',
                      description: 'Access additional resources including PDF downloads, practice exercises, and reading materials.'
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="rounded-full bg-learn-primary/10 p-2 mr-4">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 lg:pl-16">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-72 h-72 bg-learn-primary/10 rounded-full -z-10"></div>
                  <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-learn-secondary/10 rounded-full -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                    alt="Students learning" 
                    className="rounded-lg shadow-xl relative z-10 w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-learn-dark mb-2">What Our Students Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Hear from some of our successful students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Alex Thompson',
                  role: 'Software Developer',
                  image: 'https://randomuser.me/api/portraits/men/32.jpg',
                  testimonial: 'The web development course was exactly what I needed to transition into tech. The instructor was clear and the projects were challenging but achievable.'
                },
                {
                  name: 'Jamie Rivera',
                  role: 'Data Analyst',
                  image: 'https://randomuser.me/api/portraits/women/44.jpg',
                  testimonial: 'Learning data science here was a game-changer for my career. The course content was up-to-date and the support from the community was fantastic.'
                },
                {
                  name: 'Sam Lee',
                  role: 'UX Designer',
                  image: 'https://randomuser.me/api/portraits/men/15.jpg',
                  testimonial: 'The design courses helped me build a portfolio that landed me my dream job. Highly recommend for anyone looking to break into UX/UI design.'
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg 
                        key={star}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-learn-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of students already learning on our platform. Sign up today and get access to hundreds of courses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-learn-primary hover:bg-white/90 px-8"
              >
                Get Started for Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/20 px-8"
              >
                Browse Courses
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-learn-primary" />
                <span className="text-lg font-bold">LearnHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering learners worldwide with quality education.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
