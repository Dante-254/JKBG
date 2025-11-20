import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyInfo from "@/components/CompanyInfo";
import CurrentSite from "@/components/CurrentSite";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CompanyInfo />
        <CurrentSite />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
