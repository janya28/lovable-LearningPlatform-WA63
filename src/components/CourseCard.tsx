
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '@/types';
import { Book, Users, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();
  
  const handleViewCourse = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-learn-primary hover:bg-learn-primary/90">
            {course.level}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.instructor}</p>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          
          <div className="flex items-center">
            <Book className="h-4 w-4 mr-1" />
            <span>{course.lessons.length} lessons</span>
          </div>
          
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.enrolledCount}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star}
                className={`h-4 w-4 ${star <= Math.round(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-600 ml-1">{course.rating.toFixed(1)}</span>
          </div>
          
          {course.price !== undefined ? (
            <span className="font-bold text-learn-dark">${course.price.toFixed(2)}</span>
          ) : (
            <Badge className="bg-learn-success hover:bg-learn-success/90">Free</Badge>
          )}
        </div>
        
        <Button 
          onClick={handleViewCourse} 
          className="w-full mt-4 bg-learn-primary hover:bg-learn-primary/90 text-white"
        >
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
