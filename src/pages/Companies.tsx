import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Users, 
  Star,
  ExternalLink,
  Building,
  Globe,
  Calendar,
  TrendingUp
} from 'lucide-react';

interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  location: string;
  size: string;
  founded: string;
  website: string;
  rating: number;
  jobOpenings: number;
  internshipOpenings: number;
  benefits: string[];
  featured: boolean;
}

const Companies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');

  // Mock company data
  const companies: Company[] = [
    {
      id: '1',
      name: 'TechCorp Solutions',
      logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Leading technology company specializing in cloud solutions and AI-powered applications.',
      industry: 'Technology',
      location: 'Mumbai, India',
      size: '1000-5000',
      founded: '2010',
      website: 'techcorp.com',
      rating: 4.5,
      jobOpenings: 15,
      internshipOpenings: 8,
      benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work', 'Learning Budget'],
      featured: true
    },
    {
      id: '2',
      name: 'InnovateLab',
      logo: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Startup focused on innovative fintech solutions and digital banking.',
      industry: 'Fintech',
      location: 'Bangalore, India',
      size: '100-500',
      founded: '2018',
      website: 'innovatelab.in',
      rating: 4.2,
      jobOpenings: 8,
      internshipOpenings: 12,
      benefits: ['Stock Options', 'Gym Membership', 'Flexible Hours', 'Career Growth'],
      featured: false
    },
    {
      id: '3',
      name: 'GreenEnergy Co.',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Renewable energy company working towards sustainable future.',
      industry: 'Energy',
      location: 'Pune, India',
      size: '500-1000',
      founded: '2015',
      website: 'greenenergy.co.in',
      rating: 4.0,
      jobOpenings: 6,
      internshipOpenings: 4,
      benefits: ['Environmental Impact', 'Health Insurance', 'Training Programs', 'Work-Life Balance'],
      featured: true
    },
    {
      id: '4',
      name: 'DesignStudio Pro',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Creative agency providing design and branding solutions for global clients.',
      industry: 'Design',
      location: 'Delhi, India',
      size: '50-100',
      founded: '2012',
      website: 'designstudio.pro',
      rating: 4.3,
      jobOpenings: 4,
      internshipOpenings: 6,
      benefits: ['Creative Freedom', 'Flexible Hours', 'Learning Budget', 'Modern Office'],
      featured: false
    },
    {
      id: '5',
      name: 'DataMinds Analytics',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Data analytics company helping businesses make data-driven decisions.',
      industry: 'Analytics',
      location: 'Chennai, India',
      size: '200-500',
      founded: '2016',
      website: 'dataminds.com',
      rating: 4.4,
      jobOpenings: 12,
      internshipOpenings: 10,
      benefits: ['Research Opportunities', 'Conference Attendance', 'Health Insurance', 'Mentorship'],
      featured: true
    },
    {
      id: '6',
      name: 'EcoMart Solutions',
      logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'E-commerce platform focused on sustainable and eco-friendly products.',
      industry: 'E-commerce',
      location: 'Hyderabad, India',
      size: '300-1000',
      founded: '2014',
      website: 'ecomart.in',
      rating: 3.9,
      jobOpenings: 9,
      internshipOpenings: 7,
      benefits: ['Product Discounts', 'Health Insurance', 'Team Building', 'Remote Work'],
      featured: false
    }
  ];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = !industryFilter || company.industry === industryFilter;

    return matchesSearch && matchesIndustry;
  });

  const industries = [...new Set(companies.map(company => company.industry))];

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
            Discover Top Companies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore companies that are hiring freshers and offering great opportunities
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">All Industries</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Featured Companies */}
        {filteredCompanies.some(company => company.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.filter(company => company.featured).map(company => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border-2 border-primary-100"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{company.rating}</span>
                        </div>
                        <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{company.jobOpenings} jobs</span>
                    <span>{company.internshipOpenings} internships</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    View Company
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Companies */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">All Companies</h2>
          <p className="text-gray-600">
            Found <span className="font-semibold text-primary-600">{filteredCompanies.length}</span> companies
          </p>
        </div>

        <div className="space-y-6">
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex items-start space-x-6 flex-1">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-20 h-20 rounded-lg object-cover border-2 border-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {company.name}
                        </h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{company.rating}</span>
                        </div>
                        {company.featured && (
                          <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {company.industry}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {company.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {company.size} employees
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Founded {company.founded}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">{company.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {company.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="px-3 py-1 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                        {company.benefits.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                            +{company.benefits.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {company.jobOpenings} jobs
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {company.internshipOpenings} internships
                        </div>
                      </div>
                      <div className="flex items-center text-primary-600 text-sm font-medium">
                        <Globe className="h-4 w-4 mr-1" />
                        {company.website}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-primary-300 hover:text-primary-600 transition-colors">
                        View Jobs
                      </button>
                      <button className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center">
                        View Company
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No companies found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setIndustryFilter('');
              }}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Companies;