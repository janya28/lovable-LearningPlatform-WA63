
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import VideoPlayer from '@/components/VideoPlayer';
import { Course, Lesson } from '@/types';
import { Book, Clock, Play, User, Users, Check, Lock } from 'lucide-react';

// Sample course data - in a real app, this would come from an API
const allCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build responsive websites from scratch.',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    duration: '12 hours',
    level: 'Beginner',
    rating: 4.8,
    enrolledCount: 1245,
    tags: ['web development', 'html', 'css', 'javascript'],
    lessons: [
      {
        id: 'l1',
        title: 'Introduction to HTML',
        description: 'Learn the basics of HTML markup language. In this lesson, we will cover the structure of HTML documents, common tags, attributes, and how to create basic web pages.',
        videoId: 'qz0aGYrrlhU',
        duration: '45 min',
        quizzes: [
          {
            id: 'q1',
            question: 'Which tag is used to define a paragraph in HTML?',
            options: ['<paragraph>', '<p>', '<para>', '<pg>'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'Which attribute is used to define inline styles?',
            options: ['class', 'style', 'font', 'styles'],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'l2',
        title: 'CSS Fundamentals',
        description: 'Style your HTML with CSS. Learn about selectors, properties, values, and how to create beautiful, responsive layouts.',
        videoId: '1PnVor36_40',
        duration: '60 min',
        quizzes: [
          {
            id: 'q1',
            question: 'Which CSS property is used to change the text color?',
            options: ['text-color', 'font-color', 'color', 'text-style'],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'l3',
        title: 'JavaScript Basics',
        description: 'Add interactivity to your website. Learn about variables, functions, DOM manipulation, and event handling.',
        videoId: 'W6NZfCO5SIk',
        duration: '75 min'
      }
    ]
  },
  {
    id: '2',
    title: 'Data Science and Machine Learning Bootcamp',
    description: 'Master data analysis, visualization, and machine learning algorithms. Work with real-world datasets and build predictive models.',
    instructor: 'Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    duration: '24 hours',
    level: 'Intermediate',
    rating: 4.9,
    enrolledCount: 982,
    tags: ['data science', 'machine learning', 'python', 'statistics'],
    lessons: [
      {
        id: 'l1',
        title: 'Python for Data Science',
        description: 'Learn Python fundamentals for data analysis.',
        videoId: 'LHBE6Q9XlzI',
        duration: '60 min'
      },
      {
        id: 'l2',
        title: 'Data Visualization',
        description: 'Create powerful visualizations with Matplotlib and Seaborn.',
        videoId: 'a9UrKTZEeeE',
        duration: '55 min'
      }
    ]
  },
];

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would be an API call
    const foundCourse = allCourses.find(c => c.id === courseId);
    
    if (foundCourse) {
      setCourse(foundCourse);
      // Check if user is enrolled and get their progress
      const userData = localStorage.getItem('user');
      if (userData) {
        // Mock enrolled state
        setIsEnrolled(Math.random() > 0.5);
        
        // Mock completed lessons
        const randomCompleted = foundCourse.lessons
          .filter(() => Math.random() > 0.6)
          .map(lesson => lesson.id);
        setCompletedLessons(randomCompleted);
      }
    }
  }, [courseId]);

  useEffect(() => {
    // Set the first lesson as selected by default
    if (course && course.lessons.length > 0 && !selectedLesson) {
      setSelectedLesson(course.lessons[0]);
    }
  }, [course, selectedLesson]);

  const handleEnroll = () => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    
    if (!userData) {
      toast({
        title: "Login required",
        description: "Please login to enroll in this course",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }
    
    // Simulate enrollment API call
    setIsEnrolled(true);
    
    toast({
      title: "Enrollment successful",
      description: "You are now enrolled in this course",
    });
  };

  const handleCompleteLesson = (lessonId: string) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
      
      toast({
        title: "Lesson completed",
        description: "Your progress has been saved",
      });
    }
  };

  const calculateProgress = () => {
    if (!course) return 0;
    return (completedLessons.length / course.lessons.length) * 100;
  };

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading course details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course header */}
        <div className="bg-gradient-to-br from-learn-primary/90 to-learn-secondary py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-white text-learn-primary hover:bg-white/90">
                    {course.level}
                  </Badge>
                  {course.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="border-white/50 text-white hover:bg-white/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  {course.title}
                </h1>
                
                <p className="text-white/90 text-lg mb-6">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    <span>Instructor: <strong>{course.instructor}</strong></span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Duration: <strong>{course.duration}</strong></span>
                  </div>
                  
                  <div className="flex items-center">
                    <Book className="h-5 w-5 mr-2" />
                    <span>Lessons: <strong>{course.lessons.length}</strong></span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Students: <strong>{course.enrolledCount}</strong></span>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg
                        key={star}
                        className={`h-6 w-6 ${
                          star <= Math.round(course.rating) ? 'text-yellow-400' : 'text-white/30'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{course.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="lg:w-1/3 flex flex-col justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 text-gray-900">
                  {isEnrolled ? (
                    <>
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
                        <div className="progress-bar mb-2">
                          <div 
                            className="progress-value"
                            style={{ width: `${calculateProgress()}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {completedLessons.length} of {course.lessons.length} lessons completed ({calculateProgress().toFixed(0)}%)
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full mb-4 bg-learn-primary hover:bg-learn-primary/90"
                        onClick={() => {
                          // Continue where left off
                          const firstIncomplete = course.lessons.find(
                            lesson => !completedLessons.includes(lesson.id)
                          );
                          
                          if (firstIncomplete) {
                            setSelectedLesson(firstIncomplete);
                            setActiveTab('lessons');
                          } else {
                            setSelectedLesson(course.lessons[0]);
                            setActiveTab('lessons');
                          }
                        }}
                      >
                        Continue Learning
                      </Button>
                      
                      <p className="text-sm text-gray-500 text-center">
                        Enrolled on {new Date().toLocaleDateString()}
                      </p>
                    </>
                  ) : (
                    <>
                      {course.price !== undefined ? (
                        <div className="mb-6">
                          <h3 className="text-3xl font-bold">${course.price.toFixed(2)}</h3>
                        </div>
                      ) : (
                        <div className="mb-6">
                          <Badge className="bg-learn-success hover:bg-learn-success/90 text-lg px-4 py-1">
                            Free
                          </Badge>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full bg-learn-primary hover:bg-learn-primary/90 mb-4"
                        onClick={handleEnroll}
                      >
                        Enroll Now
                      </Button>
                      
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-learn-success mr-2" />
                          <span>Full lifetime access</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-learn-success mr-2" />
                          <span>Certificate of completion</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-learn-success mr-2" />
                          <span>Access on mobile and TV</span>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="lessons">Lessons</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">About This Course</h2>
                  <div className="prose max-w-none mb-8">
                    <p>
                      {course.description} This comprehensive course is designed to take you from beginner to proficient in web development technologies. Whether you're just starting out or looking to expand your existing knowledge, you'll find valuable content and hands-on exercises to help you master these essential skills.
                    </p>
                    <p className="mt-4">
                      Throughout this course, you'll work on real-world projects that will help you build a portfolio and prepare you for a career in web development. You'll learn from industry experts who bring years of practical experience to their teaching.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {[
                      'Build responsive websites from scratch',
                      'Understand core web development principles',
                      'Create interactive user interfaces',
                      'Learn modern development workflows',
                      'Deploy websites to production',
                      'Optimize for performance and SEO',
                      'Implement best practices for accessibility',
                      'Work with common development tools'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-learn-success mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Course Includes</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Video className="h-5 w-5 text-learn-primary mr-3" />
                      <span>{course.lessons.length} video lessons</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 text-learn-primary mr-3" />
                      <span>{course.duration} of content</span>
                    </li>
                    <li className="flex items-center">
                      <Book className="h-5 w-5 text-learn-primary mr-3" />
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-learn-primary mr-3" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Instructor</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-semibold">{course.instructor}</h4>
                      <p className="text-gray-600 text-sm">Web Development Instructor</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Professional web developer with over 10 years of experience building applications for major tech companies. Passionate about teaching and helping others succeed in their coding journey.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="lessons">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {selectedLesson && (
                    <div>
                      <VideoPlayer 
                        videoId={selectedLesson.videoId} 
                        title={selectedLesson.title} 
                      />
                      
                      <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-2">{selectedLesson.title}</h2>
                        <p className="text-gray-600 mb-6">{selectedLesson.description}</p>
                        
                        {isEnrolled && (
                          <div className="flex justify-between items-center">
                            <Button
                              variant={completedLessons.includes(selectedLesson.id) ? "default" : "outline"}
                              className={
                                completedLessons.includes(selectedLesson.id) 
                                ? "bg-learn-success hover:bg-learn-success/90" 
                                : "border-learn-success text-learn-success hover:bg-learn-success/10"
                              }
                              onClick={() => handleCompleteLesson(selectedLesson.id)}
                            >
                              <Check className="mr-2 h-5 w-5" />
                              {completedLessons.includes(selectedLesson.id) 
                                ? "Completed" 
                                : "Mark as Completed"
                              }
                            </Button>
                            
                            <div className="flex gap-2">
                              {course.lessons.indexOf(selectedLesson) > 0 && (
                                <Button 
                                  variant="outline" 
                                  onClick={() => {
                                    const currentIndex = course.lessons.indexOf(selectedLesson);
                                    setSelectedLesson(course.lessons[currentIndex - 1]);
                                  }}
                                >
                                  Previous Lesson
                                </Button>
                              )}
                              
                              {course.lessons.indexOf(selectedLesson) < course.lessons.length - 1 && (
                                <Button 
                                  onClick={() => {
                                    const currentIndex = course.lessons.indexOf(selectedLesson);
                                    setSelectedLesson(course.lessons[currentIndex + 1]);
                                  }}
                                >
                                  Next Lesson
                                </Button>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {/* Quiz section */}
                        {selectedLesson.quizzes && selectedLesson.quizzes.length > 0 && isEnrolled && (
                          <div className="mt-10">
                            <Separator className="my-6" />
                            <h3 className="text-xl font-semibold mb-4">Lesson Quiz</h3>
                            
                            {selectedLesson.quizzes.map((quiz, i) => (
                              <div key={quiz.id} className="mb-6 p-4 border rounded-lg bg-gray-50">
                                <h4 className="font-semibold mb-3">Question {i+1}: {quiz.question}</h4>
                                <div className="space-y-2">
                                  {quiz.options.map((option, j) => (
                                    <div 
                                      key={j}
                                      className="flex items-center p-3 bg-white border rounded-md cursor-pointer hover:bg-learn-primary/5"
                                    >
                                      <input 
                                        type="radio" 
                                        name={quiz.id} 
                                        id={`${quiz.id}-option-${j}`} 
                                        className="mr-3"
                                      />
                                      <label 
                                        htmlFor={`${quiz.id}-option-${j}`}
                                        className="w-full cursor-pointer"
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                                
                                <Button className="mt-4 bg-learn-primary hover:bg-learn-primary/90">
                                  Submit Answer
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Course Content</h3>
                  <div className="text-sm text-gray-600 mb-4">
                    {course.lessons.length} lessons • {course.duration} total
                  </div>
                  
                  <div className="space-y-2">
                    {course.lessons.map((lesson) => (
                      <div 
                        key={lesson.id} 
                        className={`p-3 rounded-md cursor-pointer flex items-center justify-between transition-colors ${
                          selectedLesson?.id === lesson.id 
                            ? 'bg-learn-primary/10 border border-learn-primary/20' 
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => isEnrolled ? setSelectedLesson(lesson) : null}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 flex items-center justify-center mr-3">
                            {!isEnrolled && lesson !== course.lessons[0] ? (
                              <Lock className="h-4 w-4 text-gray-400" />
                            ) : completedLessons.includes(lesson.id) ? (
                              <div className="w-5 h-5 rounded-full bg-learn-success flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                            ) : (
                              <Play className="h-4 w-4 text-learn-primary" />
                            )}
                          </div>
                          <div>
                            <h4 className={`font-medium ${selectedLesson?.id === lesson.id ? 'text-learn-primary' : ''}`}>
                              {lesson.title}
                            </h4>
                            <span className="text-xs text-gray-500">{lesson.duration}</span>
                          </div>
                        </div>
                        
                        {lesson.quizzes && (
                          <Badge 
                            variant="outline"
                            className="border-learn-primary/50 text-learn-primary bg-learn-primary/5"
                          >
                            Quiz
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Course Resources</h3>
                <p className="text-gray-600 mb-8">
                  Additional materials to support your learning will appear here when available.
                </p>
                <Button variant="outline">
                  <Book className="mr-2 h-5 w-5" />
                  Download Course Materials
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="discussions">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Course Discussions</h3>
                <p className="text-gray-600">
                  Join the conversation with other students and instructors.
                </p>
                {!isEnrolled ? (
                  <div className="mt-6">
                    <p className="text-gray-600 mb-4">You need to enroll to participate in discussions.</p>
                    <Button 
                      onClick={handleEnroll}
                      className="bg-learn-primary hover:bg-learn-primary/90"
                    >
                      Enroll Now
                    </Button>
                  </div>
                ) : (
                  <div className="mt-8">
                    <p className="text-gray-500">No discussions yet. Be the first to post!</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetail;
