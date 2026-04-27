import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen" dir="rtl">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
