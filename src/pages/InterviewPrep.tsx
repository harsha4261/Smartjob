import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Play, 
  Clock, 
  CheckCircle,
  Star,
  BookOpen,
  Users,
  Target,
  Award,
  MessageCircle,
  FileText,
  Zap,
  TrendingUp
} from 'lucide-react';

interface MockInterview {
  id: string;
  title: string;
  type: 'technical' | 'behavioral' | 'hr' | 'case-study';
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: number;
  description: string;
  skills: string[];
}

interface PrepResource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'quiz' | 'checklist';
  duration: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

const InterviewPrep: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const mockInterviews: MockInterview[] = [
    {
      id: '1',
      title: 'Frontend Developer Technical Round',
      type: 'technical',
      duration: '45 minutes',
      difficulty: 'intermediate',
      questions: 15,
      description: 'Practice coding questions and technical concepts for frontend roles',
      skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Problem Solving']
    },
    {
      id: '2',
      title: 'Behavioral Interview Essentials',
      type: 'behavioral',
      duration: '30 minutes',
      difficulty: 'beginner',
      questions: 10,
      description: 'Master common behavioral questions using the STAR method',
      skills: ['Communication', 'Leadership', 'Teamwork', 'Problem Solving']
    },
    {
      id: '3',
      title: 'Data Science Case Study',
      type: 'case-study',
      duration: '60 minutes',
      difficulty: 'advanced',
      questions: 8,
      description: 'Solve real-world data science problems and present solutions',
      skills: ['Python', 'Statistics', 'Machine Learning', 'Data Analysis']
    },
    {
      id: '4',
      title: 'HR Round for Freshers',
      type: 'hr',
      duration: '25 minutes',
      difficulty: 'beginner',
      questions: 12,
      description: 'Common HR questions and company culture fit assessment',
      skills: ['Communication', 'Self-awareness', 'Career Goals', 'Company Research']
    },
    {
      id: '5',
      title: 'Backend Developer Deep Dive',
      type: 'technical',
      duration: '50 minutes',
      difficulty: 'intermediate',
      questions: 18,
      description: 'System design and backend development concepts',
      skills: ['Java', 'Spring Boot', 'Databases', 'System Design', 'APIs']
    },
    {
      id: '6',
      title: 'Product Management Case Study',
      type: 'case-study',
      duration: '40 minutes',
      difficulty: 'intermediate',
      questions: 6,
      description: 'Product strategy and decision-making scenarios',
      skills: ['Product Strategy', 'Analytics', 'User Research', 'Business Acumen']
    }
  ];

  const prepResources: PrepResource[] = [
    {
      id: '1',
      title: 'STAR Method Masterclass',
      type: 'video',
      duration: '25 min',
      category: 'Behavioral',
      description: 'Learn to structure your answers using the STAR method',
      icon: Video
    },
    {
      id: '2',
      title: 'Common Technical Questions',
      type: 'article',
      duration: '15 min',
      category: 'Technical',
      description: 'Comprehensive list of frequently asked technical questions',
      icon: BookOpen
    },
    {
      id: '3',
      title: 'Body Language & Confidence',
      type: 'video',
      duration: '20 min',
      category: 'Soft Skills',
      description: 'Master non-verbal communication for interviews',
      icon: Users
    },
    {
      id: '4',
      title: 'Salary Negotiation Guide',
      type: 'article',
      duration: '12 min',
      category: 'Negotiation',
      description: 'Strategies for discussing compensation effectively',
      icon: TrendingUp
    },
    {
      id: '5',
      title: 'Pre-Interview Checklist',
      type: 'checklist',
      duration: '5 min',
      category: 'Preparation',
      description: 'Essential items to prepare before your interview',
      icon: CheckCircle
    },
    {
      id: '6',
      title: 'Technical Skills Assessment',
      type: 'quiz',
      duration: '30 min',
      category: 'Technical',
      description: 'Test your technical knowledge with practice questions',
      icon: Target
    }
  ];

  const features = [
    {
      icon: Video,
      title: 'AI-Powered Mock Interviews',
      description: 'Practice with realistic interview simulations and get instant feedback'
    },
    {
      icon: Target,
      title: 'Industry-Specific Questions',
      description: 'Questions tailored to your target role and industry'
    },
    {
      icon: Award,
      title: 'Expert Feedback',
      description: 'Detailed analysis of your performance with improvement suggestions'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your improvement over time with detailed analytics'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Types' },
    { id: 'technical', label: 'Technical' },
    { id: 'behavioral', label: 'Behavioral' },
    { id: 'hr', label: 'HR Round' },
    { id: 'case-study', label: 'Case Study' }
  ];

  const difficulties = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];

  const filteredInterviews = mockInterviews.filter(interview => {
    const matchesCategory = selectedCategory === 'all' || interview.type === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || interview.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'technical': return 'bg-blue-100 text-blue-800';
      case 'behavioral': return 'bg-purple-100 text-purple-800';
      case 'hr': return 'bg-green-100 text-green-800';
      case 'case-study': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interview Preparation Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master your interviews with AI-powered mock sessions, expert feedback, and comprehensive preparation resources
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Mock Interviews Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mock Interview Sessions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practice with realistic interview scenarios and get instant feedback to improve your performance
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 py-2">Type:</span>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 py-2">Level:</span>
              {difficulties.map(difficulty => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedDifficulty === difficulty.id
                      ? 'bg-accent-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {difficulty.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mock Interview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInterviews.map((interview, index) => (
              <motion.div
                key={interview.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(interview.type)}`}>
                      {interview.type.replace('-', ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(interview.difficulty)}`}>
                      {interview.difficulty}
                    </span>
                  </div>
                  <Video className="h-5 w-5 text-primary-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{interview.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{interview.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {interview.duration}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {interview.questions} questions
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {interview.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {interview.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{interview.skills.length - 3}
                    </span>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                  <Play className="h-4 w-4 mr-2" />
                  Start Interview
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Preparation Resources */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preparation Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive guides, videos, and tools to help you prepare for every aspect of the interview process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <resource.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                    {resource.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {resource.duration}
                  </div>
                  <span className="text-primary-600 font-medium text-sm group-hover:text-accent-600 transition-colors">
                    {resource.type === 'video' ? 'Watch' : resource.type === 'quiz' ? 'Take Quiz' : 'Read'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
          <p className="text-xl text-primary-100 mb-6">
            Start practicing today and boost your confidence with our comprehensive interview preparation tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center">
              <Play className="h-5 w-5 mr-2" />
              Start Free Mock Interview
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 flex items-center justify-center">
              <Users className="h-5 w-5 mr-2" />
              Book 1-on-1 Coaching
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InterviewPrep;