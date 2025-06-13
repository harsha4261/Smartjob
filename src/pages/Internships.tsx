import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Clock, 
  Calendar,
  Filter,
  Bookmark,
  ExternalLink,
  Building,
  Users,
  GraduationCap
} from 'lucide-react';

interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  type: 'Paid' | 'Unpaid' | 'Performance-based';
  skills: string[];
  description: string;
  posted: string;
  applicants: number;
  logo: string;
  remote: boolean;
  startDate: string;
}

const Internships: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock internship data
  const internships: Internship[] = [
    {
      id: '1',
      title: 'Frontend Development Intern',
      company: 'WebTech Innovations',
      location: 'Mumbai, India',
      duration: '3 months',
      stipend: '₹15,000/month',
      type: 'Paid',
      skills: ['React', 'JavaScript', 'CSS', 'Figma'],
      description: 'Work on real-world projects and learn modern web development practices...',
      posted: '1 day ago',
      applicants: 67,
      logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      remote: true,
      startDate: 'Immediate'
    },
    {
      id: '2',
      title: 'Data Science Intern',
      company: 'Analytics Corp',
      location: 'Bangalore, India',
      duration: '6 months',
      stipend: '₹20,000/month',
      type: 'Paid',
      skills: ['Python', 'Machine Learning', 'SQL', 'Pandas'],
      description: 'Dive deep into data analysis and machine learning projects...',
      posted: '2 days ago',
      applicants: 89,
      logo: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      remote: false,
      startDate: 'January 2025'
    },
    {
      id: '3',
      title: 'Digital Marketing Intern',
      company: 'Growth Hub',
      location: 'Delhi, India',
      duration: '4 months',
      stipend: '₹12,000/month',
      type: 'Paid',
      skills: ['Social Media', 'Content Creation', 'SEO', 'Analytics'],
      description: 'Learn digital marketing strategies and execute campaigns...',
      posted: '3 days ago',
      applicants: 45,
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      remote: true,
      startDate: 'February 2025'
    },
    {
      id: '4',
      title: 'UI/UX Design Intern',
      company: 'Creative Studios',
      location: 'Pune, India',
      duration: '3 months',
      stipend: 'Certificate + Letter of Recommendation',
      type: 'Unpaid',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: 'Design beautiful user interfaces and improve user experiences...',
      posted: '4 days ago',
      applicants: 34,
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      remote: true,
      startDate: 'Flexible'
    },
    {
      id: '5',
      title: 'Software Development Intern',
      company: 'TechSolutions Ltd',
      location: 'Chennai, India',
      duration: '6 months',
      stipend: '₹18,000/month + Performance Bonus',
      type: 'Performance-based',
      skills: ['Java', 'Spring Boot', 'MySQL', 'Git'],
      description: 'Build enterprise-level applications and learn software architecture...',
      posted: '5 days ago',
      applicants: 72,
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      remote: false,
      startDate: 'March 2025'
    },
    {
      id: '6',
      title: 'Content Writing Intern',
      company: 'Media House Pro',
      location: 'Kolkata, India',
      duration: '2 months',
      stipend: '₹8,000/month',
      type: 'Paid',
      skills: ['Writing', 'Research', 'SEO', 'WordPress'],
      description: 'Create engaging content for various digital platforms...',
      posted: '1 week ago',
      applicants: 28,
      logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      remote: true,
      startDate: 'January 2025'
    }
  ];

  const filteredInternships = useMemo(() => {
    return internships.filter(internship => {
      const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = !locationFilter || internship.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchesType = !typeFilter || internship.type === typeFilter;
      const matchesDuration = !durationFilter || internship.duration === durationFilter;

      return matchesSearch && matchesLocation && matchesType && matchesDuration;
    });
  }, [searchTerm, locationFilter, typeFilter, durationFilter, internships]);

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
            Find Perfect Internships
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gain hands-on experience and kickstart your career
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search internships, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full lg:w-48 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Additional Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Performance-based">Performance-based</option>
              </select>

              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Durations</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
                <option value="4 months">4 months</option>
                <option value="6 months">6 months</option>
              </select>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-primary-600">{filteredInternships.length}</span> internships
          </p>
        </div>

        {/* Internship Listings */}
        <div className="space-y-6">
          {filteredInternships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <img
                      src={internship.logo}
                      alt={internship.company}
                      className="w-16 h-16 rounded-lg object-cover border-2 border-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {internship.title}
                        </h3>
                        {internship.remote && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            Remote
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          internship.type === 'Paid' 
                            ? 'bg-blue-100 text-blue-800'
                            : internship.type === 'Performance-based'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {internship.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {internship.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {internship.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {internship.duration}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {internship.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-accent-50 text-accent-700 text-sm font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {internship.skills.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                            +{internship.skills.length - 4} more
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 line-clamp-2">{internship.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end space-y-3">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">
                        {internship.stipend}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Start: {internship.startDate}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {internship.applicants} applicants
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        {internship.posted}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="bg-gradient-to-r from-accent-600 to-secondary-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center">
                        Apply Now
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No internships found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setLocationFilter('');
                setTypeFilter('');
                setDurationFilter('');
              }}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Internships;