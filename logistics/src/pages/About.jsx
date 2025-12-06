import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Shield, Users, TrendingUp, Globe, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const values = [
    {
      icon: Lightbulb,
      key: 'innovation',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      key: 'reliability',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      key: 'customerFocus',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Shield,
      key: 'security',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  const stats = [
    { icon: Users, key: 'companies', value: '500+', color: 'text-blue-600' },
    { icon: TrendingUp, key: 'shipments', value: '10M+', color: 'text-green-600' },
    { icon: Globe, key: 'countries', value: '50+', color: 'text-purple-600' },
    { icon: Heart, key: 'satisfaction', value: '98%', color: 'text-pink-600' },
  ];

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
              {t('about.title')}
            </h1>
            <p className={`text-xl md:text-2xl transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${stat.color} transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                  <div className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t(`about.stats.${stat.key}`)}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-8 rounded-2xl shadow-lg transition-colors duration-300`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('about.mission.title')}
              </h2>
              <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.mission.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-8 rounded-2xl shadow-lg transition-colors duration-300`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('about.vision.title')}
              </h2>
              <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('about.vision.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('about.values.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`p-6 bg-gradient-to-br ${isDark ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-white'} rounded-xl border ${isDark ? 'border-gray-700 hover:border-blue-700' : 'border-gray-100 hover:border-blue-200'} hover:shadow-lg transition-all`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t(`about.values.${value.key}.title`)}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t(`about.values.${value.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 bg-gradient-to-br ${isDark ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-blue-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('about.team.title')}
            </h2>
            <p className={`text-xl mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('about.team.subtitle')}
            </p>
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('about.team.description')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

