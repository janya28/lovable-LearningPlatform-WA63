
import React from 'react';
import CourseCard from './CourseCard';
import { Course } from '@/types';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample data for featured courses
const featuredCourses: Course[] = [
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
];

const FeaturedCourses = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-learn-dark mb-2">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our most popular courses and start your learning journey today.
            </p>
          </div>
          <Button 
            onClick={() => navigate('/courses')}
            variant="outline" 
            className="mt-4 md:mt-0 border-learn-primary text-learn-primary hover:bg-learn-primary hover:text-white"
          >
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="course-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
