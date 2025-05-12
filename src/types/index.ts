
export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price?: number;
  rating: number;
  enrolledCount: number;
  tags: string[];
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoId: string; // YouTube video ID
  duration: string;
  quizzes?: Quiz[];
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface UserProgress {
  courseId: string;
  completedLessons: string[];
  quizScores: {
    quizId: string;
    score: number;
  }[];
  overallProgress: number;
}
