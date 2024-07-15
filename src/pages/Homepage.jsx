import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Footer1 from "@/components/Footer1";
import Hero from "@/components/Hero";
import PreFooter from "@/components/Prefooter";
// import { Footer } from "@/components/Footer";
// import Searchbar from "@/components/Searchbar";
import Visitors from "@/components/Visitors";

const Homepage = () => {
  console.log(import.meta.env.VITE_REACT_APP_BACKEND_URL);
  return (
    <section>
      <Hero/>
      <Clients />

      <Features />
      <Visitors />
      <PreFooter />
      <Footer1 />
    </section>
  );
};

export default Homepage;
