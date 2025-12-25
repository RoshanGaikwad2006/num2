import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnnouncementBar from "@/components/AnnouncementBar";
import ConsultationTicker from "@/components/ConsultationTicker";
import ChallengesSection from "@/components/ChallengesSection";
import VideoSection from "@/components/VideoSection";
import TransitionDivider from "@/components/TransitionDivider";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ChallengesSection />
      <VideoSection />
      <TransitionDivider />
      <ServicesSection />
      <ProductsSection />
      <ProcessSection />
      <WhoThisIsForSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
