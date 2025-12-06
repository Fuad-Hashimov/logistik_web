import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [backgroundSize, setBackgroundSize] = useState('130%');
  const [padding, setPadding] = useState('2rem 0');

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 640) {
        setBackgroundSize('180%');
        setPadding('1.5rem 1rem');
      } else if (window.innerWidth < 1024) {
        setBackgroundSize('150%');
        setPadding('2rem 1.5rem');
      } else {
        setBackgroundSize('130%');
        setPadding('2rem 0');
      }
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  return (
    <>
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
 
    
      <div className="container mx-auto px-4    relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 relative"
            style={{
              backgroundImage: 'url(/color-particles-2.svg)',
              backgroundSize: backgroundSize,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              padding: padding,
              width: '100%',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-2xl lg:text-3xl mt-4 sm:mt-6 md:mt-10 font-bold mb-4 sm:mb-5 md:mb-6 leading-tight px-2 sm:px-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6"
            >
              <Link
                to="/contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <a
                href="#features"
                className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 font-semibold text-sm sm:text-base border-2 hover:shadow-lg transform hover:-translate-y-1 flex items-center space-x-2 overflow-hidden w-full sm:w-auto justify-center ${
                  isDark 
                    ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 border-blue-500 hover:border-blue-400' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-blue-600 hover:border-blue-700'
                }`}
              >
                <span className="relative z-10">{t('hero.demo')}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview - Centered */}
          <DashboardPreview />
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;

