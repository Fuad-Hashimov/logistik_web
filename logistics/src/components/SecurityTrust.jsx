import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Shield, 
  Lock, 
  Award, 
  CheckCircle,
  FileCheck,
  Server
} from 'lucide-react';

const SecurityTrust = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const badges = [
    {
      icon: Shield,
      key: 'ssl',
      label: 'SSL Encrypted',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lock,
      key: 'gdpr',
      label: 'GDPR Compliant',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      key: 'iso',
      label: 'ISO 27001',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FileCheck,
      key: 'soc',
      label: 'SOC 2 Type II',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Server,
      key: 'uptime',
      label: '99.9% Uptime',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: CheckCircle,
      key: 'backup',
      label: 'Daily Backups',
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section className={`py-20 md:py-32 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {t('security.title', { defaultValue: 'Güvenlik ve Güvenilirlik' })}
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t('security.subtitle', { defaultValue: 'Verileriniz en yüksek güvenlik standartlarıyla korunur' })}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`
                  flex flex-col items-center p-6 rounded-2xl
                  transition-all duration-300
                  ${isDark 
                    ? 'bg-gray-900/50 hover:bg-gray-900 border border-gray-700' 
                    : 'bg-gray-50 hover:bg-white border border-gray-200 shadow-md hover:shadow-lg'
                  }
                `}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className={`text-sm font-semibold text-center transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t(`security.${badge.key}`, { defaultValue: badge.label })}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={`
            mt-16 grid grid-cols-1 md:grid-cols-3 gap-8
            p-8 rounded-2xl
            ${isDark ? 'bg-gray-900/50' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}
          `}
        >
          <div className="text-center">
            <div className={`text-4xl md:text-5xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              99.9%
            </div>
            <p className={`text-base transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('security.uptime', { defaultValue: 'Uptime Garantisi' })}
            </p>
          </div>
          <div className="text-center">
            <div className={`text-4xl md:text-5xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              256-bit
            </div>
            <p className={`text-base transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('security.encryption', { defaultValue: 'SSL Şifreleme' })}
            </p>
          </div>
          <div className="text-center">
            <div className={`text-4xl md:text-5xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              24/7
            </div>
            <p className={`text-base transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('security.support', { defaultValue: 'Destek Hizmeti' })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityTrust;

