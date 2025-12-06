import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Building2, Truck, Package, Globe } from 'lucide-react';

const Partners = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  // Simulated partner logos - in real app, these would be actual company logos
  const partners = [
    { name: 'Global Logistics Co', icon: Globe, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'FastShip Express', icon: Truck, gradient: 'from-green-500 to-emerald-500' },
    { name: 'Warehouse Pro', icon: Package, gradient: 'from-orange-500 to-red-500' },
    { name: 'TradeLink International', icon: Building2, gradient: 'from-purple-500 to-pink-500' },
    { name: 'Cargo Masters', icon: Truck, gradient: 'from-indigo-500 to-blue-500' },
    { name: 'Supply Chain Solutions', icon: Globe, gradient: 'from-yellow-500 to-amber-500' },
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
            {t('partners.title')}
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('partners.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`flex flex-col items-center justify-center p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-600' 
                    : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${partner.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className={`text-sm font-semibold text-center leading-tight transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {partner.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;

