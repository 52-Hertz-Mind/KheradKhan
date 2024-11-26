import Navbar from '../components/Navbar.tsx';
import Hero from '../components/Hero.tsx';
import HowItWorks from '../components/HowItWorks.tsx';
import Footer from '../components/Footer.tsx';

function Landing() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Navbar />
        <Hero />
      </div>

      <HowItWorks />
      <Footer />
    </>
  );
}

export default Landing;
