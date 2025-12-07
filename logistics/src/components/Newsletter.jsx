import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className={`py-20 md:py-32 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={`
            relative p-8 md:p-12 rounded-3xl overflow-hidden
            ${isDark 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
              : 'bg-white shadow-2xl border border-gray-200'
            }
          `}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 shadow-lg"
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('newsletter.title', { defaultValue: 'Haberlerden Haberdar Olun' })}
            </h2>
            <p className={`text-lg md:text-xl mb-8 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('newsletter.subtitle', { defaultValue: 'Yeni özellikler, güncellemeler ve özel tekliflerden ilk siz haberdar olun' })}
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletter.placeholder', { defaultValue: 'E-posta adresiniz' })}
                    required
                    className={`
                      w-full px-6 py-4 rounded-xl border-2 transition-all duration-300
                      ${isDark 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-600'
                      }
                      focus:outline-none focus:ring-2 focus:ring-blue-500/20
                    `}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={submitted}
                  className={`
                    px-8 py-4 rounded-xl font-semibold
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    text-white shadow-lg hover:shadow-xl
                    transition-all duration-300
                    flex items-center justify-center gap-2
                    disabled:opacity-70 disabled:cursor-not-allowed
                  `}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      {t('newsletter.submitted', { defaultValue: 'Gönderildi!' })}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('newsletter.button', { defaultValue: 'Abone Ol' })}
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            <p className={`text-sm mt-6 transition-colors duration-300 ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              {t('newsletter.privacy', { defaultValue: 'E-posta adresiniz güvende. Spam göndermiyoruz.' })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

