import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Cloud, 
  Database, 
  Mail, 
  CreditCard,
  Smartphone, 
  BarChart3,
  Settings,
  Zap,
  CheckCircle
} from 'lucide-react';

const Integrations = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  // 8 entegrasyon ikonu - görseldeki gibi dairesel düzenleme
  const integrations = [
    {
      icon: Cloud,
      key: 'cloudStorage',
      color: 'bg-blue-500',
      angle: 0, // 0 derece (üst)
    },
    {
      icon: Database,
      key: 'erp',
      color: 'bg-purple-500',
      angle: 45, // 45 derece
    },
    {
      icon: Mail,
      key: 'email',
      color: 'bg-green-500',
      angle: 90, // 90 derece (sağ)
    },
    {
      icon: CreditCard,
      key: 'payment',
      color: 'bg-orange-500',
      angle: 135, // 135 derece
    },
    {
      icon: Smartphone,
      key: 'mobile',
      color: 'bg-indigo-500',
      angle: 180, // 180 derece (alt)
    },
    {
      icon: BarChart3,
      key: 'analytics',
      color: 'bg-yellow-500',
      angle: 225, // 225 derece
    },
    {
      icon: Settings,
      key: 'settings',
      color: 'bg-pink-500',
      angle: 270, // 270 derece (sol)
    },
    {
      icon: Zap,
      key: 'automation',
      color: 'bg-cyan-500',
      angle: 315, // 315 derece
    },
  ];

  const features = t('integrations.features', { returnObjects: true }) || [];

  // Merkezden uzaklık (radius)
  const radius = 180;

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
          >
            • {t('integrations.title')}
          </motion.span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('integrations.subtitle')}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('integrations.description')}
          </p>
        </motion.div>

        {/* Animated Integration Hub */}
        <div className="relative flex items-center justify-center min-h-[600px] my-16">
          {/* Ripple Effects - Concentric Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[1, 2, 3, 4].map((ring, index) => (
              <motion.div
                key={ring}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.1 }}
                viewport={{ once: true }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.05, 0.1],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute w-96 h-96 border-2 border-blue-300 rounded-full"
                style={{
                  width: `${200 + ring * 80}px`,
                  height: `${200 + ring * 80}px`,
                }}
              />
            ))}
          </div>

          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 w-32 h-32 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full shadow-2xl flex items-center justify-center"
          >
            {/* Grid Icon Inside Hub */}
            <div className="grid grid-cols-3 gap-1 p-4">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              ))}
            </div>
            
            {/* Pulsing Effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-purple-400 rounded-full -z-10"
            />
          </motion.div>

          {/* Orbiting Integration Icons */}
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            const baseAngle = integration.angle;
            
            return (
              <motion.div
                key={integration.key}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                viewport={{ once: true, margin: "-100px" }}
                animate={{
                  x: [
                    Math.cos((baseAngle * Math.PI) / 180) * radius,
                    Math.cos(((baseAngle + 360) * Math.PI) / 180) * radius,
                  ],
                  y: [
                    Math.sin((baseAngle * Math.PI) / 180) * radius,
                    Math.sin(((baseAngle + 360) * Math.PI) / 180) * radius,
                  ],
                }}
                transition={{ 
                  opacity: {
                    delay: 0.3 + index * 0.1,
                    duration: 0.6,
                  },
                  scale: {
                    delay: 0.3 + index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  },
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.3 + index * 0.1 + 0.6,
                  },
                  y: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.3 + index * 0.1 + 0.6,
                  },
                }}
                className={`absolute w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-2 hover:shadow-xl transition-all cursor-pointer group z-20 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                    : 'bg-white border-gray-100 hover:border-blue-300'
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'center center',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 ${integration.color} rounded-full flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                    {t(`integrations.${integration.key}`)}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                      <div className="border-4 border-transparent border-b-gray-900"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Connection Lines (Optional - Subtle) */}
          <svg 
            className="absolute pointer-events-none" 
            style={{ 
              zIndex: 1,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${radius * 2 + 100}px`,
              height: `${radius * 2 + 100}px`,
            }}
          >
            {integrations.map((integration, index) => {
              const angleInRad = (integration.angle * Math.PI) / 180;
              const x = Math.cos(angleInRad) * radius;
              const y = Math.sin(angleInRad) * radius;
              
              return (
                <motion.line
                  key={`line-${index}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.08 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.8 }}
                  x1={radius + 50}
                  y1={radius + 50}
                  x2={radius + 50 + x}
                  y2={radius + 50 + y}
                  stroke="#3b82f6"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        </div>

        {/* Features List */}
        {features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className={`rounded-2xl p-8 shadow-lg border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('integrations.featuresTitle')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Integrations;

