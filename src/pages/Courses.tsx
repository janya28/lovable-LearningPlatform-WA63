
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Course } from '@/types';
import { Search } from 'lucide-react';

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
        description: 'Learn the basics of HTML markup language.',
        videoId: 'qz0aGYrrlhU',
        duration: '45 min'
      },
      {
        id: 'l2',
        title: 'CSS Fundamentals',
        description: 'Style your HTML with CSS.',
        videoId: '1PnVor36_40',
        duration: '60 min'
      },
      {
        id: 'l3',
        title: 'JavaScript Basics',
        description: 'Add interactivity to your website.',
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
  {
    id: '3',
    title: 'UX/UI Design Masterclass',
    description: 'Learn the principles of user experience design and create beautiful, intuitive interfaces that users love.',
    instructor: 'Emily Rodriguez',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    duration: '18 hours',
    level: 'Beginner',
    price: 49.99,
    rating: 4.7,
    enrolledCount: 756,
    tags: ['ux', 'ui', 'design', 'figma'],
    lessons: [
      {
        id: 'l1',
        title: 'Introduction to UX Design',
        description: 'Learn the fundamentals of user experience design.',
        videoId: 'v6n-kRqTI-g',
        duration: '50 min'
      },
      {
        id: 'l2',
        title: 'Wireframing and Prototyping',
        description: 'Create interactive prototypes.',
        videoId: 'c9Wg6Cb_YlU',
        duration: '65 min'
      }
    ]
  },
  {
    id: '4',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native. Deploy to iOS and Android with a single codebase.',
    instructor: 'James Wilson',
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    duration: '20 hours',
    level: 'Intermediate',
    price: 59.99,
    rating: 4.6,
    enrolledCount: 634,
    tags: ['react native', 'mobile', 'javascript', 'app development'],
    lessons: [
      {
        id: 'l1',
        title: 'React Native Basics',
        description: 'Introduction to React Native concepts.',
        videoId: 'ur6I5m2nTvk',
        duration: '60 min'
      }
    ]
  },
  {
    id: '5',
    title: 'Advanced JavaScript: From Fundamentals to Functional JS',
    description: 'Take your JavaScript skills to the next level with advanced concepts like closures, prototypes, and functional programming.',
    instructor: 'Alex Turner',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    duration: '15 hours',
    level: 'Advanced',
    price: 69.99,
    rating: 4.9,
    enrolledCount: 452,
    tags: ['javascript', 'functional programming', 'es6'],
    lessons: [
      {
        id: 'l1',
        title: 'Closures and Scope',
        description: 'Understanding JavaScript closures and scope chain.',
        videoId: 'fdtMRrAQSrI',
        duration: '55 min'
      }
    ]
  },
  {
    id: '6',
    title: 'Graphic Design Fundamentals',
    description: 'Learn design theory, color principles, typography, and composition to create stunning visual content.',
    instructor: 'Lisa Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
    duration: '10 hours',
    level: 'Beginner',
    rating: 4.5,
    enrolledCount: 823,
    tags: ['graphic design', 'design theory', 'typography'],
    lessons: [
      {
        id: 'l1',
        title: 'Design Principles',
        description: 'Understanding the core principles of design.',
        videoId: 'YqQx75OPRa0',
        duration: '45 min'
      }
    ]
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [level, setLevel] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  
  // Filter and sort courses
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLevel = level ? course.level.toLowerCase() === level.toLowerCase() : true;
    
    return matchesSearch && matchesLevel;
  }).sort((a, b) => {
    if (sortBy === 'popular') {
      return b.enrolledCount - a.enrolledCount;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'newest') {
      return parseInt(b.id) - parseInt(a.id); // Using ID as a proxy for date in this example
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-learn-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-learn-dark mb-6">
                Explore Our Courses
              </h1>
              <p className="text-lg text-center text-gray-600 mb-8">
                Find the perfect course to enhance your skills and achieve your goals
              </p>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search courses by keyword, topic, or instructor..."
                  className="pl-10 py-6 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold">
                {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} available
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-48">
                <Select value={level} onValueChange={setLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-48">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="course-grid">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No courses found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setLevel('');
                }}
                className="bg-learn-primary hover:bg-learn-primary/90"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      {/* Basic footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
