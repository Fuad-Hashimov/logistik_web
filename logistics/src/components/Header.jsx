import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangMenuOpen && !event.target.closest('.language-menu-container')) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const languages = [
    { code: 'en', name: 'English', flagCode: 'gb' },
    { code: 'az', name: 'Azərbaycan', flagCode: 'az' },
    { code: 'ru', name: 'Русский', flagCode: 'ru' },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'features', href: '/features' },
    { key: 'pricing', href: '/pricing' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Logistic</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href === '/' && location.pathname === '/');
              return item.href.startsWith('#') ? (
                <a
                  key={item.key}
                  href={item.href}
                  className={`group flex items-center space-x-1 transition-colors font-medium ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <span>{t(`nav.${item.key}`)}</span>
                
                </a>
              ) : (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`group flex items-center space-x-1 transition-colors font-medium ${
                    isActive
                      ? isDark ? 'text-blue-400' : 'text-blue-600'
                      : isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span>{t(`nav.${item.key}`)}</span>
             
                </Link>
              );
            })}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 transition-all duration-300 rounded-lg active:scale-95 ${isDark ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 transition-transform duration-300 rotate-0" />
              ) : (
                <Moon className="w-5 h-5 transition-transform duration-300 rotate-0" />
              )}
            </button>
            
            {/* Language Dropdown */}
            <div className="language-menu-container relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`p-2 transition-all duration-300 rounded-lg active:scale-95 flex items-center space-x-1 ${isDark ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}
                aria-label="Change language"
              >
                <Globe className="w-5 h-5" />
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl border z-50 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
                  >
                    <div className="p-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                            i18n.language === lang.code
                              ? isDark 
                                ? 'bg-blue-900/30 text-blue-400 font-semibold'
                                : 'bg-blue-50 text-blue-600 font-semibold'
                              : isDark
                                ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                        >
                          <img 
                            src={`https://flagcdn.com/w20/${lang.flagCode}.png`}
                            alt={lang.name}
                            className="w-5 h-4 object-cover rounded-sm"
                            loading="lazy"
                          />
                          <span>{lang.name}</span>
                          {i18n.language === lang.code && (
                            <span className={`ml-auto font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/contact"
              className={`transition-colors font-medium ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Sign In
            </Link>
            <Link
              to="/contact"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t('hero.cta')}</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`tablet:hidden p-2.5 z-50 relative rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop/Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="tablet:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className={`tablet:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl z-50 flex flex-col ${isDark ? 'bg-gray-900' : 'bg-white'}`}
            >
              {/* Menu Header */}
              <div className={`flex items-center justify-between p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">L</span>
                  </div>
                  <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Logistic</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                  aria-label="Close menu"
                >
                  <X className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                </button>
              </div>

              {/* Menu Content - Scrollable */}
              <div className="flex-1 overflow-y-auto py-6">
                {/* Navigation Links */}
                <nav className="px-4 space-y-1">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.href || 
                      (item.href === '/' && location.pathname === '/');
                    return item.href.startsWith('#') ? (
                      <a
                        key={item.key}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? isDark ? 'bg-blue-900/30 text-blue-400 font-semibold' : 'bg-blue-50 text-blue-600 font-semibold'
                            : isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </a>
                    ) : (
                      <Link
                        key={item.key}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? isDark ? 'bg-blue-900/30 text-blue-400 font-semibold' : 'bg-blue-50 text-blue-600 font-semibold'
                            : isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </Link>
                    );
                  })}
                </nav>

                {/* Theme Toggle in Mobile Menu */}
                <div className={`px-4 mt-6 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button
                    onClick={toggleTheme}
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between border border-transparent ${isDark ? 'text-gray-300 hover:bg-gray-800 hover:border-gray-700' : 'text-gray-700 hover:bg-gray-50 hover:border-gray-200'}`}
                  >
                    <div className="flex items-center space-x-2">
                      {isDark ? (
                        <Sun className="w-4 h-4" />
                      ) : (
                        <Moon className="w-4 h-4" />
                      )}
                      <span className="font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                    </div>
                  </button>
                </div>

                {/* Language Switcher */}
                <div className={`px-4 mt-6 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`px-4 text-sm font-semibold uppercase mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('nav.language')}
                  </h3>
                  <div className="space-y-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                        }}
                        className={`group w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                          i18n.language === lang.code
                            ? isDark 
                              ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 text-blue-400 font-semibold shadow-sm border border-blue-800'
                              : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold shadow-sm border border-blue-200'
                            : isDark
                              ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400 border border-transparent hover:border-gray-700'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 border border-transparent hover:border-gray-200'
                        }`}
                      >
                        <img 
                          src={`https://flagcdn.com/w20/${lang.flagCode}.png`}
                          alt={lang.name}
                          className="w-5 h-4 object-cover rounded-sm"
                          loading="lazy"
                        />
                        <span>{lang.name}</span>
                        {i18n.language === lang.code && (
                          <span className={`ml-auto font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Menu Footer - CTA Button */}
              <div className={`p-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative block w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10">{t('hero.cta')}</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

