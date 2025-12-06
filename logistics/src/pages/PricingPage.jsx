import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const PricingPage = () => {
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

  const faqItems = t('pricingPage.faq.items', { returnObjects: true });

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
              {t('pricing.title')}
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('pricing.subtitle')}
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">{t('pricingPage.trial')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const planData = t(`pricing.${plan.key}`, { returnObjects: true });
              return (
                <motion.div
                  key={plan.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
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
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? isDark
                          ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg'
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                        : isDark
                          ? 'bg-gray-700 text-white hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {planData.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('pricingPage.faq.title')}
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border ${isDark ? 'border-gray-700' : 'border-gray-100'}`}
                >
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.question}
                  </h3>
                  <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.answer}</p>
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
              {t('pricingPage.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              {t('pricingPage.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg shadow-xl"
            >
              <span>{t('pricingPage.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

