import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NProgress from 'nprogress';
import { motion, AnimatePresence } from 'framer-motion';

// Standard MUI Icon Imports 
import MenuIcon from '@mui/icons-material/Menu'; 
import PersonIcon from '@mui/icons-material/Person'; 

/* ==========================================================================
   1. DATA CONFIGURATIONS (Isolated from component logic for easy editing)
   ========================================================================== */
const FEATURE_DATA = {
  'sm': { 
    title: 'Subject Management', 
    icon: '📚', 
    tagline: 'Learn from Top Rankers', 
    description: 'Get direct insights from people who have cracked GATE with top double-digit ranks. Our mentors break down highly complex technical syllabi into manageable checkpoints.' 
  },
  'tt': { 
    title: 'Topic Tracker', 
    icon: '🎯', 
    tagline: 'Premium Education Made Affordable', 
    description: 'No hidden subscription traps. Access all core study frameworks, premium testing panels, and lecture logs at a competitive, student-first price tier.' 
  },
  'ns': { 
    title: 'Notes System', 
    icon: '💡', 
    tagline: 'Simplified Structural Frameworks', 
    description: 'We construct clear visual mappings for algorithms and proofs. Our targeted approach bypasses textbook fluff to focus strictly on problem-solving.' 
  },
  'PYQ': { 
    title: 'PYQ Tracker', 
    icon: '🗣️', 
    tagline: 'Personalized Query Resolution', 
    description: 'Stuck on a complex data structure? Raise immediate support tickets to access targeted, one-on-one troubleshooting rooms directly with engineering mentors.' 
  }
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('HOME');
  const [userSession, setUserSession] = useState(null);
  const [activeFeature, setActiveFeature] = useState('sm');

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      try {
        setUserSession(JSON.parse(storedUser));
      } catch {
        sessionStorage.removeItem('user');
      }
    }
  }, []);

  const changePage = (pageName) => {
    if (pageName === currentView) return; 
    NProgress.start(); 
    setTimeout(() => {
      setCurrentView(pageName);
      NProgress.done(); 
    }, 600);
  };

  /* ==========================================================================
     3. STYLE CONTROLLERS (Extracted to keep JSX ultra-clean)
     ========================================================================== */
  const getCardStyles = (key) => {
    const isSelected = activeFeature === key;
    
    // Base layout classes shared across all cards
    const baseClasses = "p-6 rounded-2xl space-y-3 cursor-pointer border-2 transition-all duration-300 shadow-sm";
    
    // State classes
    if (isSelected) {
      return `${baseClasses} bg-[#1c9c9c] text-white border-[#1c9c9c]`;
    }
    
    return `${baseClasses} bg-gray-100 border-transparent hover:bg-gray-200`;
  };

  /* ==========================================================================
     4. RENDER ELEMENT
     ========================================================================== */
  return (
    <div className="min-h-screen w-full bg-[#1c9c9c] text-white overflow-x-hidden flex flex-col justify-between">
      
      {/* Upper Content Group */}
      <div className="w-full">
        
        {/* NAVIGATION BAR */}
        <nav className="w-full flex items-center justify-between py-6 px-8 md:px-16 bg-transparent">
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-[#d4f86d]">@</span> SCfG
          </div>

          <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <button 
              onClick={() => changePage('HOME')} 
              className={currentView === 'HOME' ? 'text-[#d4f86d]' : 'text-white hover:text-[#d4f86d]'}
            >
              Home
            </button>
            <button 
              onClick={() => changePage('Testimonials')} 
              className={currentView === 'Testimonials' ? 'text-[#d4f86d]' : 'text-white hover:text-[#d4f86d]'}
            >
              Testimonials
            </button>
          </div>
            
          <div className="flex items-center space-x-4">
            {userSession === null ? (
              <button 
                onClick={() => navigate('/auth')}
                className="flex items-center space-x-2 bg-[#242424] hover:bg-black text-white px-6 py-2 rounded-full font-medium text-sm transition-all"
              >
                <PersonIcon style={{ fontSize: '18px', color: '#d4f86d' }} />
                <span>Log in</span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2 bg-black/20 hover:bg-black/30 px-4 py-1.5 rounded-full transition-all"
              >
                <div className="w-7 h-7 bg-[#d4f86d] rounded-full text-black flex items-center justify-center font-bold text-xs">
                  {userSession.name.charAt(0)}
                </div>
                <span className="text-sm">{userSession.name}</span>
              </button>
            )}
            <MenuIcon className="block md:hidden cursor-pointer text-white" />
          </div>
        </nav>


        {/* MAIN DISPLAY VIEWPORTS */}
        <main className="w-full px-8 md:px-16 mt-12">
          <AnimatePresence mode="wait">
            
            {/* VIEW PORT A: HOME LAYOUT */}
            {currentView === 'HOME' && (
              <motion.div 
                key="home-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-20"
              >
                {/* Hero Headings */}
                <div className="space-y-6">
                  <span className="text-white/80 text-sm font-medium tracking-wider uppercase block">Your Online Learning Partner</span>
                  <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                     Your One stop Study Companion for <span className="text-[#d4f86d]">GATE</span>
                  </h1>
                  <p className="text-white/80 text-base max-w-md">Well curated features to help you ace your GATE preparation.</p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/auth')}
                    className="bg-[#d4f86d] hover:bg-[#bce059] text-black font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
                  >
                    Get Started Now
                  </motion.button>

                  {/* Student Metrics */}
                  <div className="flex items-center space-x-4 pt-8">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[#1c9c9c] flex items-center justify-center text-[10px]">PH</div>
                      <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[#1c9c9c] flex items-center justify-center text-[10px]">PH</div>
                      <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-[#1c9c9c] flex items-center justify-center text-[10px]">PH</div>
                      <div className="w-10 h-10 rounded-full bg-black text-[#d4f86d] border-2 border-[#1c9c9c] flex items-center justify-center font-bold text-xs">4.8★</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Student Review</h4>
                      <p className="text-xs text-white/70">Based on more than 10,000 feedbacks</p>
                    </div>
                  </div>
                </div>

                {/* Hero Asset Media Displays */}
                <div className="relative flex justify-center">
                  <div className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-full bg-black/10 border-4 border-white/20 flex items-center justify-center text-white/50 text-center p-6 backdrop-blur-sm">
                    [MAIN HERO PORTRAIT IMAGE PLACEHOLDER]
                  </div>

                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute left-0 bottom-12 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-[#d4f86d]">20,000+</h3>
                    <p className="text-xs text-white/80">Total Students</p>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [-10, 0, -10] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute right-0 top-12 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-[#d4f86d]">Building lives</h3>
                    <p className="text-xs text-white/80">Transforming education</p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* VIEW PORT B: TESTIMONIAL LAYOUT */}
            {currentView !== 'HOME' && (
              <motion.div 
                key="fallback-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-[50vh] flex flex-col items-center justify-center text-center space-y-4"
              >
                <h2 className="text-3xl font-bold tracking-wide uppercase text-[#d4f86d]">{currentView} Section</h2>
                <p className="text-white/70 max-w-md text-sm">This section handles dynamic structural review lists.</p>
              </motion.div>
            )}

          </AnimatePresence>
        </main>


        {/* INTERACTIVE BENEFITS FOOTER (Only renders on homepage view status) */}
        {currentView === 'HOME' && (
          <section className="bg-white rounded-t-[40px] text-black py-16 px-8 md:px-16 mt-12">
            
            {/* Feature Click Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {Object.keys(FEATURE_DATA).map((key) => {
                const item = FEATURE_DATA[key];
                return (
                  <motion.div
                    key={key}
                    onClick={() => setActiveFeature(key)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className={getCardStyles(key)}
                  >
                    <div className="text-2xl bg-white text-black w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-xs opacity-80">Click to view execution blueprints.</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Feature Content Display Terminal (cdisplay) */}
            <div className="mt-10 w-full bg-gray-50 border border-gray-200/80 rounded-2xl p-8 min-h-[180px] shadow-inner overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeFeature}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{FEATURE_DATA[activeFeature].icon}</span>
                    <h4 className="text-2xl font-bold text-[#1c9c9c]">
                      {FEATURE_DATA[activeFeature].title} — <span className="text-gray-800 font-medium text-lg">{FEATURE_DATA[activeFeature].tagline}</span>
                    </h4>
                  </div>
                  <hr className="border-gray-200 my-2" />
                  <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
                    {FEATURE_DATA[activeFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </section>
        )}
      </div>

      {/* GLOBAL SITE FOOTER */}
      <footer className="w-full bg-[#147575] border-t border-white/10 text-white/80 py-8 px-8 md:px-16 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-sm text-[#d4f86d]">@ Study Companion for GATE</p>
          <p className="mt-1 text-white/60">Comprehensive open learning utility framework.</p>
        </div>
        <div className="flex space-x-6 text-white/70">
          <a href="#privacy" className="hover:text-[#d4f86d]">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#d4f86d]">Terms of Service</a>
        </div>
        <div className="text-white/40 text-right">
          <p>© 2026 SCfG Environment. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;