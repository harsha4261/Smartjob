import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Building,
  MessageCircle,
  FileText,
  Video,
  Award,
  Globe,
  BookOpen,
  Zap
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Smart Skill Matching',
      description: 'AI-powered matching that connects your skills with specific company needs and requirements'
    },
    {
      icon: Users,
      title: 'Personalized Career Guidance',
      description: 'One-on-one mentorship and career coaching tailored to your goals and aspirations'
    },
    {
      icon: TrendingUp,
      title: 'Career Progress Tracking',
      description: 'Monitor your applications, skill development, and career growth in real-time'
    },
    {
      icon: Building,
      title: 'Targeted Company Outreach',
      description: 'Direct connections with companies actively seeking fresh talent in your field'
    },
    {
      icon: FileText,
      title: 'Resume & Profile Optimization',
      description: 'Professional resume building tools and profile enhancement guidance'
    },
    {
      icon: Video,
      title: 'Interview Preparation',
      description: 'Mock interviews, coaching sessions, and industry-specific preparation resources'
    },
    {
      icon: Globe,
      title: 'Online Presence Building',
      description: 'LinkedIn optimization, portfolio creation, and digital branding support'
    },
    {
      icon: Award,
      title: 'Skill Assessment & Certification',
      description: 'Validate your skills with industry-recognized assessments and certifications'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Job Opportunities' },
    { number: '15K+', label: 'Happy Freshers' },
    { number: '2K+', label: 'Partner Companies' },
    { number: '95%', label: 'Success Rate' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Developer at TechCorp',
      content: 'The personalized career guidance and resume coaching helped me land my dream job within 2 weeks of graduation!',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      role: 'Marketing Intern at StartupXYZ',
      content: 'The skill matching system connected me with the perfect internship. The interview preparation was invaluable.',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      role: 'Data Analyst at Analytics Pro',
      content: 'Building my online presence through their guidance transformed my career prospects completely.',
      rating: 5
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: 'Career Mentorship',
      description: 'Connect with industry professionals for personalized guidance',
      link: '/mentorship'
    },
    {
      icon: FileText,
      title: 'Resume Builder',
      description: 'Create ATS-friendly resumes with professional templates',
      link: '/resume-builder'
    },
    {
      icon: Video,
      title: 'Interview Coaching',
      description: 'Practice with mock interviews and expert feedback',
      link: '/interview-prep'
    },
    {
      icon: BookOpen,
      title: 'Skill Development',
      description: 'Access courses and resources to enhance your skills',
      link: '/skill-development'
    },
    {
      icon: Globe,
      title: 'Online Branding',
      description: 'Build a strong digital presence and professional network',
      link: '/online-branding'
    },
    {
      icon: Zap,
      title: 'Quick Apply',
      description: 'Apply to multiple relevant positions with one click',
      link: '/quick-apply'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Empowering{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Freshers
                </span>
                <br />
                Smarter Discovery
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Connect with relevant opportunities through AI-powered matching, personalized career guidance, 
                and comprehensive support for building your professional presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                to="/jobs"
                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Search className="mr-2 h-5 w-5" />
                Find Smart Matches
              </Link>
              <Link
                to="/career-guidance"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Career Guidance
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce-subtle">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full opacity-30"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-subtle" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full opacity-15"></div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Career Support Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From skill matching to interview preparation, we provide everything you need to launch your career successfully
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-primary-600 font-medium group-hover:text-accent-600 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FresherJobs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges freshers face and provide comprehensive solutions for career success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our proven pathway to land your dream job or internship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Build Your Profile</h3>
              <p className="text-gray-600">
                Create a comprehensive profile with skills, education, and career goals for smart matching
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Personalized Guidance</h3>
              <p className="text-gray-600">
                Receive career coaching, resume optimization, and interview preparation from experts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect with Opportunities</h3>
              <p className="text-gray-600">
                Get matched with relevant jobs and internships through targeted company outreach
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Launch Your Career</h3>
              <p className="text-gray-600">
                Land your dream job with ongoing support and continue growing your professional network
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from freshers who transformed their careers with our comprehensive support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of freshers who found success with personalized guidance and smart matching
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jobs"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/career-guidance"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center justify-center"
              >
                Get Free Consultation
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;