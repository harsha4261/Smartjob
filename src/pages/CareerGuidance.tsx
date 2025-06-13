import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Video, 
  Calendar,
  User,
  Star,
  Clock,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Briefcase
} from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: string;
  specialization: string[];
  rating: number;
  reviews: number;
  avatar: string;
  price: string;
  availability: string;
}

interface GuidanceService {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  icon: React.ElementType;
  popular?: boolean;
}

const CareerGuidance: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mentors: Mentor[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      title: 'Senior Software Engineer',
      company: 'Google',
      experience: '8+ years',
      specialization: ['Software Development', 'System Design', 'Career Growth'],
      rating: 4.9,
      reviews: 127,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      price: '₹2,000/hour',
      availability: 'Available this week'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      title: 'Product Manager',
      company: 'Microsoft',
      experience: '6+ years',
      specialization: ['Product Management', 'Strategy', 'Leadership'],
      rating: 4.8,
      reviews: 89,
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      price: '₹1,800/hour',
      availability: 'Available tomorrow'
    },
    {
      id: '3',
      name: 'Amit Patel',
      title: 'Data Science Lead',
      company: 'Amazon',
      experience: '7+ years',
      specialization: ['Data Science', 'Machine Learning', 'Analytics'],
      rating: 4.9,
      reviews: 156,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      price: '₹2,200/hour',
      availability: 'Available today'
    },
    {
      id: '4',
      name: 'Sneha Reddy',
      title: 'UX Design Manager',
      company: 'Adobe',
      experience: '5+ years',
      specialization: ['UX Design', 'Design Thinking', 'User Research'],
      rating: 4.7,
      reviews: 73,
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      price: '₹1,500/hour',
      availability: 'Available this week'
    }
  ];

  const services: GuidanceService[] = [
    {
      id: '1',
      title: 'Career Consultation',
      description: 'One-on-one session to discuss your career goals and create a personalized roadmap',
      duration: '60 minutes',
      price: '₹1,500',
      features: [
        'Career goal assessment',
        'Industry insights',
        'Personalized roadmap',
        'Follow-up resources'
      ],
      icon: MessageCircle
    },
    {
      id: '2',
      title: 'Resume Review & Optimization',
      description: 'Professional review and optimization of your resume for maximum impact',
      duration: '45 minutes',
      price: '₹1,000',
      features: [
        'ATS optimization',
        'Content enhancement',
        'Format improvement',
        'Industry-specific tips'
      ],
      icon: BookOpen,
      popular: true
    },
    {
      id: '3',
      title: 'Mock Interview Session',
      description: 'Practice interviews with detailed feedback to boost your confidence',
      duration: '90 minutes',
      price: '₹2,000',
      features: [
        'Technical interviews',
        'Behavioral questions',
        'Real-time feedback',
        'Performance analysis'
      ],
      icon: Video
    },
    {
      id: '4',
      title: 'LinkedIn Profile Optimization',
      description: 'Enhance your LinkedIn presence to attract recruiters and opportunities',
      duration: '30 minutes',
      price: '₹800',
      features: [
        'Profile optimization',
        'Content strategy',
        'Network building tips',
        'Visibility enhancement'
      ],
      icon: Users
    },
    {
      id: '5',
      title: 'Skill Development Plan',
      description: 'Create a structured plan to develop skills relevant to your target role',
      duration: '75 minutes',
      price: '₹1,800',
      features: [
        'Skill gap analysis',
        'Learning roadmap',
        'Resource recommendations',
        'Progress tracking'
      ],
      icon: Target
    },
    {
      id: '6',
      title: 'Salary Negotiation Coaching',
      description: 'Learn effective strategies for negotiating your salary and benefits',
      duration: '60 minutes',
      price: '₹1,200',
      features: [
        'Market research',
        'Negotiation strategies',
        'Practice scenarios',
        'Confidence building'
      ],
      icon: TrendingUp
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'consultation', label: 'Career Consultation' },
    { id: 'interview', label: 'Interview Prep' },
    { id: 'resume', label: 'Resume & Profile' },
    { id: 'skills', label: 'Skill Development' }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with proven track records'
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Tailored guidance based on your specific goals and background'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book sessions at your convenience with 24/7 availability'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: '95% of our mentees land their desired roles within 3 months'
    }
  ];

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
            Personalized Career Guidance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert mentorship, professional coaching, and personalized guidance to accelerate your career growth
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Services Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Guidance Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of services designed to support every aspect of your career journey
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative ${
                  service.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Book Session
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mentors Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Mentors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with industry professionals who have successfully navigated their careers and are ready to guide you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.title}</p>
                  <p className="text-sm text-primary-600 font-medium">{mentor.company}</p>
                </div>

                <div className="flex items-center justify-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{mentor.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {mentor.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {mentor.availability}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {mentor.specialization.slice(0, 2).map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded"
                    >
                      {spec}
                    </span>
                  ))}
                  {mentor.specialization.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      +{mentor.specialization.length - 2}
                    </span>
                  )}
                </div>

                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-2">{mentor.price}</div>
                  <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    Book Session
                  </button>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl text-primary-100 mb-6">
            Join thousands of freshers who have transformed their careers with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center">
              Schedule Free Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 flex items-center justify-center">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerGuidance;