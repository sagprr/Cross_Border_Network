import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";


const Home = () => {
  return (

    <>
      <div style={{ backgroundColor:"smokeWhite" }}>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
