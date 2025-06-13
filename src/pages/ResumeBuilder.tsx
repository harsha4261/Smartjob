import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  Edit,
  Save,
  Plus,
  X,
  Upload,
  CheckCircle,
  Star,
  Zap,
  Target,
  Award
} from 'lucide-react';

interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  category: 'modern' | 'classic' | 'creative' | 'ats-friendly';
  rating: number;
  downloads: number;
  premium?: boolean;
}

interface ResumeSection {
  id: string;
  title: string;
  content: any;
  enabled: boolean;
}

const ResumeBuilder: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('1');
  const [activeSection, setActiveSection] = useState<string>('personal');
  const [resumeData, setResumeData] = useState({
    personal: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      portfolio: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: []
  });

  const templates: ResumeTemplate[] = [
    {
      id: '1',
      name: 'Modern Professional',
      description: 'Clean, modern design perfect for tech roles',
      preview: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'modern',
      rating: 4.8,
      downloads: 15420
    },
    {
      id: '2',
      name: 'ATS Optimized',
      description: 'Designed to pass through ATS systems easily',
      preview: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'ats-friendly',
      rating: 4.9,
      downloads: 23150
    },
    {
      id: '3',
      name: 'Creative Designer',
      description: 'Eye-catching design for creative professionals',
      preview: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'creative',
      rating: 4.7,
      downloads: 8930,
      premium: true
    },
    {
      id: '4',
      name: 'Classic Executive',
      description: 'Traditional format for corporate roles',
      preview: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      category: 'classic',
      rating: 4.6,
      downloads: 12780
    }
  ];

  const sections = [
    { id: 'personal', title: 'Personal Info', icon: FileText },
    { id: 'summary', title: 'Professional Summary', icon: Edit },
    { id: 'experience', title: 'Work Experience', icon: Award },
    { id: 'education', title: 'Education', icon: Target },
    { id: 'skills', title: 'Skills', icon: Zap },
    { id: 'projects', title: 'Projects', icon: Star },
    { id: 'certifications', title: 'Certifications', icon: CheckCircle }
  ];

  const features = [
    {
      icon: Target,
      title: 'ATS-Friendly Templates',
      description: 'All templates are optimized to pass Applicant Tracking Systems'
    },
    {
      icon: Zap,
      title: 'Real-time Preview',
      description: 'See your changes instantly with live preview functionality'
    },
    {
      icon: CheckCircle,
      title: 'Expert Tips',
      description: 'Get professional guidance and tips for each section'
    },
    {
      icon: Download,
      title: 'Multiple Formats',
      description: 'Download in PDF, Word, or share with a custom link'
    }
  ];

  const tips = [
    'Use action verbs to start bullet points (e.g., "Developed", "Implemented", "Led")',
    'Quantify your achievements with numbers and percentages',
    'Tailor your resume for each job application',
    'Keep your resume to 1-2 pages maximum',
    'Use consistent formatting throughout',
    'Include relevant keywords from the job description'
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
            Professional Resume Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create ATS-friendly resumes with professional templates and expert guidance
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Template</h2>
              <div className="space-y-4">
                {templates.map(template => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedTemplate === template.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {template.premium && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-accent-600 text-white px-2 py-1 rounded text-xs font-medium">
                          Premium
                        </span>
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <img
                        src={template.preview}
                        alt={template.name}
                        className="w-16 h-20 object-cover rounded border"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{template.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                            {template.rating}
                          </div>
                          <span>•</span>
                          <span>{template.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume Tips</h3>
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Resume Builder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg">
              {/* Section Navigation */}
              <div className="border-b border-gray-200 p-6">
                <div className="flex flex-wrap gap-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <section.icon className="h-4 w-4" />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Section Content */}
              <div className="p-6">
                {activeSection === 'personal' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Mumbai, India"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="linkedin.com/in/johndoe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Portfolio/Website
                        </label>
                        <input
                          type="url"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="johndoe.com"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'summary' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Professional Summary</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Summary
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="Write a compelling summary that highlights your key skills, experience, and career objectives..."
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Tip: Keep it concise (2-3 sentences) and focus on your value proposition
                      </p>
                    </div>
                  </div>
                )}

                {/* Add more sections as needed */}
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Resume
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                  <button className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center">
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-xl text-primary-100 mb-6">
            Get your resume reviewed by industry experts for maximum impact
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            Get Expert Review - ₹999
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeBuilder;