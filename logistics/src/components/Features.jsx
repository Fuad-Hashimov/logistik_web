import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  MapPin,
  BarChart3,
  Route,
  Package,
  Zap,
  Shield,
} from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const features = [
    {
      icon: MapPin,
      key: 'realTimeTracking',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      key: 'analytics',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Route,
      key: 'routeOptimization',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Package,
      key: 'inventory',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      key: 'automation',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Shield,
      key: 'security',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="features"
      className={`py-20 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('features.title')}
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                variants={itemVariants}
                className={`group p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-700' 
                    : 'bg-gradient-to-br from-gray-50 to-white border-gray-100 hover:border-blue-200'
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t(`features.${feature.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

