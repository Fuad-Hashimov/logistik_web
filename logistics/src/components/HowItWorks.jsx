import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { UserPlus, Settings, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const steps = [
    {
      icon: UserPlus,
      key: 'step1',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      key: 'step2',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      key: 'step3',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('howItWorks.title')}
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute h-0.5 bg-gradient-to-r from-blue-300 to-purple-300" style={{ top: '2.5rem', left: 'calc(50% + 2.5rem)', width: 'calc(50% + 2rem + 50%)' }}></div>
                )}
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t(`howItWorks.${step.key}.title`)}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t(`howItWorks.${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

