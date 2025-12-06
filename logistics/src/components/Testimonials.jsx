import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const testimonials = [
    {
      key: 'testimonial1',
      rating: 5,
    },
    {
      key: 'testimonial2',
      rating: 5,
    },
    {
      key: 'testimonial3',
      rating: 5,
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
            {t('testimonials.title')}
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const testimonialData = t(`testimonials.${testimonial.key}`, { returnObjects: true });
            return (
              <motion.div
                key={testimonial.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                }`}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-current transition-colors duration-300 ${isDark ? 'text-yellow-500' : 'text-yellow-400'}`}
                    />
                  ))}
                </div>

                <p className={`mb-6 leading-relaxed italic transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{testimonialData.text}"
                </p>

                <div className={`flex items-center space-x-4 pt-6 border-t transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonialData.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonialData.name}</h4>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{testimonialData.role}</p>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{testimonialData.company}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

