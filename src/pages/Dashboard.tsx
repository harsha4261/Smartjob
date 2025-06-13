import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  XCircle,
  Eye,
  Calendar,
  Bookmark,
  FileText,
  Settings,
  User,
  Bell
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock dashboard data
  const stats = {
    applications: 24,
    interviews: 5,
    shortlisted: 8,
    offers: 2
  };

  const recentApplications = [
    {
      id: '1',
      company: 'TechCorp Solutions',
      position: 'Frontend Developer',
      status: 'Interview Scheduled',
      appliedDate: '2024-01-15',
      statusColor: 'text-blue-600 bg-blue-50'
    },
    {
      id: '2',
      company: 'InnovateLab',
      position: 'Software Engineer Trainee',
      status: 'Under Review',
      appliedDate: '2024-01-12',
      statusColor: 'text-yellow-600 bg-yellow-50'
    },
    {
      id: '3',
      company: 'DataMinds Analytics',
      position: 'Data Analyst',
      status: 'Shortlisted',
      appliedDate: '2024-01-10',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      id: '4',
      company: 'DesignStudio Pro',
      position: 'UI/UX Designer',
      status: 'Rejected',
      appliedDate: '2024-01-08',
      statusColor: 'text-red-600 bg-red-50'
    }
  ];

  const upcomingInterviews = [
    {
      id: '1',
      company: 'TechCorp Solutions',
      position: 'Frontend Developer',
      date: '2024-01-20',
      time: '10:00 AM',
      type: 'Technical Round'
    },
    {
      id: '2',
      company: 'CloudTech Systems',
      position: 'Backend Developer',
      date: '2024-01-22',
      time: '2:00 PM',
      type: 'HR Round'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'interviews', label: 'Interviews', icon: Calendar },
    { id: 'saved', label: 'Saved Jobs', icon: Bookmark },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Please sign in to access your dashboard</h2>
          <p className="text-gray-600">You need to be logged in to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">Here's your career progress overview</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Total Applications</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.applications}</p>
                      </div>
                      <FileText className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Interviews</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.interviews}</p>
                      </div>
                      <Calendar className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Shortlisted</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.shortlisted}</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Offers</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.offers}</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-accent-600" />
                    </div>
                  </div>
                </div>

                {/* Recent Applications */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Applications</h3>
                  <div className="space-y-4">
                    {recentApplications.map(application => (
                      <div key={application.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <div>
                          <h4 className="font-medium text-gray-900">{application.position}</h4>
                          <p className="text-gray-600 text-sm">{application.company}</p>
                          <p className="text-gray-500 text-xs">Applied on {application.appliedDate}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${application.statusColor}`}>
                          {application.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Interviews */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Interviews</h3>
                  <div className="space-y-4">
                    {upcomingInterviews.map(interview => (
                      <div key={interview.id} className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{interview.position}</h4>
                          <p className="text-gray-600 text-sm">{interview.company}</p>
                          <p className="text-blue-600 text-sm font-medium">{interview.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{interview.date}</p>
                          <p className="text-gray-600 text-sm">{interview.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'applications' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">All Applications</h3>
                <div className="space-y-4">
                  {recentApplications.map(application => (
                    <div key={application.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{application.position}</h4>
                        <p className="text-gray-600 text-sm">{application.company}</p>
                        <p className="text-gray-500 text-xs">Applied on {application.appliedDate}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${application.statusColor}`}>
                          {application.status}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{user.name}</h4>
                      <p className="text-gray-600">{user.email}</p>
                      <p className="text-gray-500 text-sm">{user.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Experience Level</h5>
                    <p className="text-gray-600">{user.experience}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other tabs content would go here */}
            {(activeTab !== 'overview' && activeTab !== 'applications' && activeTab !== 'profile') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h3>
                <p className="text-gray-600">This section is coming soon!</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;