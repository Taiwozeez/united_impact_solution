import NavBar from '../components/header';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Video from '../components/Video';
import Feature from '../components/Home/Feature';
import AISection from '../components/Home/AISection';
import Service from '../components/Home/Service';
import Cta from '../components/Home/Cta';
import Faq from '../components/Home/Faq';
import Footer from '../components/footer';
import BackToTop from '../components/BackToTop'; // ✅ Adjust path as needed

const Home = () => {
  return (
    <div className="relative font-urbanist">
      <NavBar />
      <Hero />
      <About />
      <Video />
      <Feature />
      <AISection />
      <Service />
      <Cta />
      <Faq />
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Home;
