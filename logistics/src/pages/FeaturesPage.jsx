import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  MapPin,
  BarChart3,
  Route,
  Package,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const FeaturesPage = () => {
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

  const additionalFeatures = t('featuresPage.additionalFeatures.items', { returnObjects: true });

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${isDark ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-blue-50 via-white to-indigo-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('features.title')}
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('features.subtitle')}
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <span>{t('featuresPage.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`group p-8 bg-gradient-to-br ${isDark ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-white'} rounded-2xl border ${isDark ? 'border-gray-700 hover:border-blue-700' : 'border-gray-100 hover:border-blue-200'} hover:shadow-xl transition-all duration-300`}
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
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('featuresPage.additionalFeatures.title')}
            </h2>
            <p className={`text-xl mb-12 text-center max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('featuresPage.additionalFeatures.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex items-center space-x-4 p-4 ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg hover:shadow-md transition-shadow border ${isDark ? 'border-gray-700' : 'border-gray-100'}`}
                >
                  <CheckCircle className={`w-6 h-6 flex-shrink-0 transition-colors duration-300 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                  <span className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('featuresPage.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              {t('featuresPage.cta.subtitle')}
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg shadow-xl"
            >
              <span>{t('featuresPage.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;

