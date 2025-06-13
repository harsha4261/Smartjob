import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Internships from './pages/Internships';
import Companies from './pages/Companies';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CareerGuidance from './pages/CareerGuidance';
import ResumeBuilder from './pages/ResumeBuilder';
import InterviewPrep from './pages/InterviewPrep';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <Header />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/career-guidance" element={<CareerGuidance />} />
              <Route path="/mentorship" element={<CareerGuidance />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/interview-prep" element={<InterviewPrep />} />
              <Route path="/skill-development" element={<InterviewPrep />} />
              <Route path="/online-branding" element={<CareerGuidance />} />
              <Route path="/quick-apply" element={<Jobs />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;