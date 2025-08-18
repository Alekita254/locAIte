import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentCases from "@/components/RecentCases";
import HowItWorks from "@/components/HowItWorks";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RecentCases />
      <HowItWorks />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
