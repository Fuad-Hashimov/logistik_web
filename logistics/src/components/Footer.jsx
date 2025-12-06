import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <footer className={`text-gray-300 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-900'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold text-white">Logistic</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('hero.subtitle')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@logitech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="hover:text-white transition-colors">
                  {t('footer.features')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  {t('footer.pricing')}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.documentation')}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.support')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 text-center transition-colors duration-300 ${isDark ? 'border-gray-900' : 'border-gray-800'}`}>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Logistic. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

