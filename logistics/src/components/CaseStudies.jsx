import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const caseStudies = [
    {
      key: 'case1',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'case2',
      icon: Clock,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      key: 'case3',
      icon: DollarSign,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('caseStudies.title')}
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('caseStudies.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const studyData = t(`caseStudies.${study.key}`, { returnObjects: true });
            return (
              <motion.div
                key={study.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`group relative rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-600' 
                    : 'bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:border-blue-300'
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity ${
                  isDark ? 'bg-gradient-to-br from-blue-900/30 to-indigo-900/30' : 'bg-gradient-to-br from-blue-100 to-indigo-100'
                }`}></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${study.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-3 relative z-10 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {studyData.company}
                </h3>
                
                <p className={`mb-6 leading-relaxed relative z-10 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {studyData.description}
                </p>

                <div className="space-y-3 mb-6 relative z-10">
                  {studyData.results.map((result, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{result}</span>
                    </div>
                  ))}
                </div>

                <div className={`flex items-center font-semibold group-hover:translate-x-2 transition-all duration-300 relative z-10 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  <span className="text-sm">{t('caseStudies.readMore')}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

