import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Zap, 
  Shield, 
  Globe, 
  Clock, 
  DollarSign, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

const Benefits = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const benefits = [
    {
      icon: Zap,
      key: 'speed',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      key: 'security',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      key: 'global',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      key: 'time',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: DollarSign,
      key: 'cost',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: TrendingUp,
      key: 'growth',
      gradient: 'from-red-500 to-pink-500',
    },
  ];

  const features = [
    { key: 'feature1' },
    { key: 'feature2' },
    { key: 'feature3' },
    { key: 'feature4' },
  ];

  return (
    <section className={`py-20 md:py-32 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {t('benefits.title', { defaultValue: 'Neden Bizi Seçmelisiniz?' })}
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t('benefits.subtitle', { defaultValue: 'İşletmenizi bir üst seviyeye taşıyın' })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className={`
                  relative p-6 rounded-2xl border-2 transition-all duration-300
                  ${isDark 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }
                `}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {t(`benefits.${benefit.key}.title`, { defaultValue: benefit.key })}
                </h3>
                <p className={`text-base leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {t(`benefits.${benefit.key}.description`, { defaultValue: 'Açıklama metni' })}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`
            grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto
            p-8 rounded-2xl
            ${isDark ? 'bg-gray-800/50' : 'bg-white shadow-lg'}
          `}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`} />
              <p className={`text-base transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t(`benefits.${feature.key}`, { defaultValue: `Özellik ${index + 1}` })}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

