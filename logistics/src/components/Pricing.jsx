import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const plans = [
    {
      key: 'starter',
      popular: false,
    },
    {
      key: 'professional',
      popular: true,
    },
    {
      key: 'enterprise',
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
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
            {t('pricing.title')}
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const planData = t(`pricing.${plan.key}`, { returnObjects: true });
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative rounded-2xl border-2 p-8 transition-all duration-300 ${
                  plan.popular
                    ? isDark
                      ? 'border-blue-500 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 scale-105 shadow-xl'
                      : 'border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50 scale-105 shadow-xl'
                    : isDark
                      ? 'border-gray-700 bg-gray-800 hover:border-blue-600'
                      : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {planData.popular}
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {planData.name}
                  </h3>
                  <p className={`mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{planData.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {planData.price}
                    </span>
                    {planData.period && (
                      <span className={`ml-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {planData.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {planData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 transition-colors duration-300 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                      <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`group relative block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    plan.popular
                      ? isDark
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                      : isDark
                        ? 'bg-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500 border border-gray-600 hover:border-gray-500 hover:shadow-md'
                        : 'bg-gray-100 text-gray-900 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <span className="relative z-10">{planData.cta}</span>
                  {plan.popular && (
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

