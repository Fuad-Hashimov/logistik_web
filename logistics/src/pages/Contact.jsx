import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: t('contact.form.success'),
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'info@logistic.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+1 (555) 123-4567',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: t('contact.office.address'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      label: t('contact.info.workingHours'),
      value: t('contact.info.hours'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
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
              {t('contact.title')}
            </h1>
            <p className={`text-xl md:text-2xl transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('contact.form.message')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.namePlaceholder')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDark ? 'border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.emailPlaceholder')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDark ? 'border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form.companyPlaceholder')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDark ? 'border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDark ? 'border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'}`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDark ? 'border-gray-700 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${isDark ? 'border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'}`}
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg flex items-center space-x-2 transition-colors duration-300 ${
                      status.type === 'success'
                        ? isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-50 text-green-800'
                        : isDark ? 'bg-red-900/30 text-red-300' : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('contact.info.title')}
              </h2>
              <p className={`mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('contact.info.description')}
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`p-6 ${isDark ? 'bg-gray-800' : info.bgColor} rounded-xl border ${isDark ? 'border-gray-700' : 'border-gray-100'} hover:shadow-lg transition-all`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`${info.color} flex-shrink-0`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className={`font-semibold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {info.label}
                          </h3>
                          <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{info.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl h-64 flex items-center justify-center border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
                <div className="text-center">
                  <MapPin className={`w-12 h-12 mx-auto mb-2 transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                  <p className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t('contact.office.title')}
                  </p>
                  <p className={`text-sm mt-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('contact.office.address')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

