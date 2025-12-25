import { motion, useSpring, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, ChevronLeft, ChevronRight, Check } from "lucide-react";
import ConsultationTicker from "@/components/ConsultationTicker";
import consultantPortraitHeroFinal from "@/assets/consultant-portrait-hero-final.jpg";
import consultationSession from "@/assets/consultation-session.jpg";
import careerSuccessMeeting from "@/assets/career-success-meeting.jpg";
import careerClarityImage from "@/assets/career-clarity.png";
import globalTrustImage from "@/assets/global-trust.png";
import { useEffect, useRef, useState } from "react";
import { useBooking } from "@/contexts/BookingContext";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const slides = [
  {
    id: 1,
    layout: "standard",
    headline: "Numerology for Life Decisions",
    subtext: "International Numerologist | Name Correction | Predictive Guidance",
    description: "Make confident decisions in your career, business, and relationships through the ancient science of numbers — refined for the modern world.",
    ctaPrimary: "Book Consultation",
    ctaSecondary: "WhatsApp for Guidance",
    image: consultantPortraitHeroFinal,
    stats: true
  },
  {
    id: 2,
    layout: "standard",
    headline: "Numerology for Career Success",
    subtext: "International Numerologist | Business & Career Guidance",
    description: "Make informed career and business decisions using numerology insights designed for clarity and long-term growth.",
    ctaPrimary: "View Services",
    ctaSecondary: null,
    image: careerSuccessMeeting,
    stats: false
  },
  {
    id: 3,
    layout: "consultation",
    headline: "Personal Guidance Beyond Predictions",
    subtext: "REAL CONSULTATIONS. REAL IMPACT.",
    description: "Confidential, practical, and tailored sessions focused on clarity, timing, and long-term outcomes.",
    ctaPrimary: "Book a Personal Consultation",
    ctaSecondaryTitle: "Limited weekly slots available",
    image: consultationSession,
    stats: false,
    trustPoints: ["Confidential Sessions", "Structured Analysis", "Clear Next Steps"]
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openBooking } = useBooking();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentContent = slides[currentSlide];

  // Per-slide image sizing to ensure consistent framing and avoid overly tall images
  const imageSizeClass = (id: number) => {
    // Slide 1 & 2: slightly decreased from previous values for tighter framing
    if (id === 1 || id === 2) return 'max-h-[400px] sm:max-h-[440px] md:max-h-[480px] lg:max-h-[520px]';
    // Slide 3 (consultation): slightly increased so it matches visually with others
    return 'max-h-[560px] sm:max-h-[600px] md:max-h-[640px] lg:max-h-[680px]';
  };

  return (
    <section className={`relative min-h-screen overflow-hidden flex items-center group transition-colors duration-700 ease-in-out ${currentContent.id === 1 ? 'bg-[#FAF9F7]' : 'bg-gradient-to-br from-[#F9F5F0] to-[#F2EFE9]'}`}>
      {/* Refined Background - Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,_rgba(255,255,255,0.8)_0%,_transparent_60%)] pointer-events-none" />

      {/* Subtle number pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none mix-blend-multiply">
        <div className="absolute inset-0 font-serif text-[200px] font-bold leading-none text-[#C9A45C] tracking-widest">
          <div className="absolute top-10 left-10">3</div>
          <div className="absolute top-20 right-20">7</div>
          <div className="absolute bottom-40 left-1/4">9</div>
          <div className="absolute top-1/3 right-1/4">1</div>
          <div className="absolute bottom-20 right-10">5</div>
          <div className="absolute top-1/2 left-10">8</div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 rounded-full bg-white/40 hover:bg-white/60 text-[#4A4238] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 rounded-full bg-white/40 hover:bg-white/60 text-[#4A4238] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="container-wide section-padding relative z-10 w-full">
        <AnimatePresence mode="wait">
          <div
            key={currentSlide}
            className="grid gap-12 items-center lg:items-stretch grid-cols-1 lg:grid-cols-2 lg:gap-10"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: currentContent.layout === 'consultation' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currentContent.layout === 'consultation' ? -20 : 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`space-y-6 order-1 text-center lg:text-left flex flex-col justify-center ${currentContent.layout === 'consultation' ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <div className="space-y-4">
                {currentContent.layout === 'consultation' ? (
                  <motion.span
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
                    className="text-xs font-bold tracking-widest text-[#C9A45C] uppercase block mb-2"
                  >
                    {currentContent.subtext}
                  </motion.span>
                ) : null}

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#4A4238] leading-[1.1] tracking-tight max-w-[95%] mx-auto lg:mx-0"
                >
                  {currentContent.headline}
                </motion.h1>

                {currentContent.layout !== 'consultation' && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-[#6D635B] font-medium font-sans min-h-[3.5rem] flex items-center justify-center lg:justify-start max-w-[90%] mx-auto lg:mx-0 leading-relaxed"
                  >
                    {/* Split subtext on mobile if needed */}
                    <span className="block sm:inline">{currentContent.subtext}</span>
                  </motion.p>
                )}

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`text-base md:text-lg font-sans leading-relaxed max-w-[90%] mx-auto lg:mx-0 ${currentContent.layout === 'consultation' ? 'text-[#5C5349]' : 'text-[#8C857D] min-h-[4.5rem]'}`}
                >
                  {currentContent.description}
                </motion.p>

              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
              >
                <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="xl"
                    className="bg-[#4A4238] text-white shadow-lg hover:bg-[#5C5349] hover:-translate-y-0.5 transition-all duration-300 border-none w-full sm:w-auto min-w-[240px] min-h-[48px]"
                    onClick={() => {
                      if (currentContent.id === 2) {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        openBooking();
                      }
                    }}
                  >
                    <Calendar className="w-5 h-5 mr-3 text-[#C9A45C]" />
                    {currentContent.ctaPrimary}
                  </Button>

                  {/* Secondary Text Below Button */}
                  {currentContent.ctaSecondaryTitle && (
                    <span className="text-xs text-[#8C857D] font-medium tracking-wide">
                      {currentContent.ctaSecondaryTitle}
                    </span>
                  )}
                </div>

                {currentContent.ctaSecondary && (
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-[#C9A45C] text-[#4A4238] hover:bg-[#C9A45C]/10 transition-all duration-300 bg-transparent w-full sm:w-auto min-h-[48px]"
                    onClick={() => {
                      window.open('https://wa.me/919560416174', '_blank');
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-3 text-[#C9A45C]" />
                    {currentContent.ctaSecondary}
                  </Button>
                )}
              </motion.div>

              {/* Verified Trust/Stats Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 lg:mt-4 w-full"
              >
                {/* Separator */}
                <div className="w-[180px] h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent mx-auto my-5 opacity-50" />

                {/* Content Container */}
                <div className="flex items-center justify-center text-[#4A4238]/90 w-full">
                  {currentContent.stats ? (
                    /* Slide 1: Stats - Grid on Mobile */
                    <div className="grid grid-cols-3 gap-4 w-full lg:flex lg:w-auto lg:gap-10">
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-serif font-bold text-[#C9A45C] flex items-center justify-center">
                          <AnimatedCounter value={15} suffix="+" />
                        </p>
                        <p className="text-[10px] md:text-xs font-bold text-[#8C857D] uppercase tracking-widest mt-1">Years Exp.</p>
                      </div>
                      <div className="hidden lg:block w-[1px] h-10 bg-[#C9A45C]/40" />
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-serif font-bold text-[#C9A45C] flex items-center justify-center">
                          <AnimatedCounter value={5000} suffix="+" />
                        </p>
                        <p className="text-[10px] md:text-xs font-bold text-[#8C857D] uppercase tracking-widest mt-1">Clients</p>
                      </div>
                      <div className="hidden lg:block w-[1px] h-10 bg-[#C9A45C]/40" />
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-serif font-bold text-[#C9A45C] flex items-center justify-center">
                          <AnimatedCounter value={40} suffix="+" />
                        </p>
                        <p className="text-[10px] md:text-xs font-bold text-[#8C857D] uppercase tracking-widest mt-1">Countries</p>
                      </div>
                    </div>
                  ) : (
                    /* Slide 2 & 3: Trust Strip - Stack on Mobile? Checks? User didn't specify Trust Strip stacking, but 'Stats appear BELOW buttons'. I will keep row for Trust Strip as it fits, or wrap it. */
                    <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold tracking-wide text-[#6D635B]">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#C9A45C]" />
                        <span>Used by professionals</span>
                      </div>
                      <div className="hidden sm:block w-[1px] h-5 bg-[#C9A45C]/40" />
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#C9A45C]" />
                        <span>Practical guidance</span>
                      </div>
                      <div className="hidden sm:block w-[1px] h-5 bg-[#C9A45C]/40" />
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#C9A45C]" />
                        <span>Global consultations</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Right (or Left) - Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className={`flex items-center justify-center relative order-2 w-full ${currentContent.layout === 'consultation' ? 'lg:justify-start lg:order-1' : 'lg:justify-end lg:order-2'}`}
            >
              {/* Soft Radial Glow Behind Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_rgba(201,164,92,0.12)_0%,_transparent_70%)] blur-2xl pointer-events-none" />

              <div className={`relative rounded-[22px] overflow-hidden shadow-2xl border border-white/40 w-full h-full ${currentContent.layout === 'consultation' ? 'max-w-2xl' : 'max-w-lg lg:max-w-none'} ${imageSizeClass(currentContent.id)}`}> 
                <img
                  src={currentContent.image}
                  alt="Professional Numerology Consultant"
                  className={`w-full h-full object-cover object-center contrast-[1.05] shadow-2xl rounded-[22px]`}
                />
                {/* Subtle overlay for matte look */}
                <div className="absolute inset-0 bg-[#4A4238]/5 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[22px] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
      
      {/* Ticker positioned at the bottom of the hero section - fixed spacing so it never overlaps images */}
      <div className={`absolute left-0 right-0 z-20 opacity-90 mix-blend-multiply transition-all duration-700 ease-in-out bottom-12`}> 
        <div className="mx-auto max-w-full px-4">
          <ConsultationTicker />
        </div>
      </div>
      {/* Add bottom padding so ticker never overlaps content on small screens */}
      <div className="pointer-events-none h-32 lg:h-36" />
    </section>
  );
};

export default HeroSection;
