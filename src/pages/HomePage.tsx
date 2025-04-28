import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CalculatorCta from "@/components/CalculatorCta";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <AdvantagesSection />
        <PortfolioSection />
        <CalculatorCta />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
