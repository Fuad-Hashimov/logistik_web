import Hero from '../components/Hero';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import HowItWorks from '../components/HowItWorks';
import Integrations from '../components/Integrations';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import CaseStudies from '../components/CaseStudies';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <Hero />
      <Statistics />
      <Features />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <Partners />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;

