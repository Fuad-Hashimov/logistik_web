import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Package, Globe, TrendingUp, Users, Clock, Award } from 'lucide-react';

const Statistics = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Package,
      key: 'shipments',
      value: '10M+',
      suffix: '',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      key: 'countries',
      value: '50+',
      suffix: '',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      key: 'efficiency',
      value: '35%',
      suffix: '',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      key: 'companies',
      value: '500+',
      suffix: '',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      key: 'uptime',
      value: '99.9',
      suffix: '%',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Award,
      key: 'satisfaction',
      value: '98',
      suffix: '%',
      gradient: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('statistics.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('statistics.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
                </div>
                <div className="text-blue-100 font-medium text-sm md:text-base">
                  {t(`statistics.${stat.key}`)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

