import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Qualifications from '@/components/Qualifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Projects from '@/components/Project';

const Index = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Qualifications />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
