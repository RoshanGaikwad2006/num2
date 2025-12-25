import { motion } from "framer-motion";
import { Briefcase, Building2, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";

const challenges = [
  {
    icon: Briefcase,
    title: "Career Direction",
    description: "Align your profession with your natural strengths for fulfillment and success.",
  },
  {
    icon: Building2,
    title: "Business Naming",
    description: "Choose a name that carries the right energy to attract growth and prosperity.",
  },
  {
    icon: Heart,
    title: "Relationships",
    description: "Understand compatibility and timing to foster deeper, more meaningful connections.",
  },
  {
    icon: Clock,
    title: "Decision Timing",
    description: "Launch, invest, or act when the cosmic energy supports your goals.",
  },
];

const ChallengesSection = () => {
  const { openBooking } = useBooking();

  return (
    <section className="bg-section-medium section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-warm-brown mb-4">
            Real Challenges, Real Solutions
          </h2>
          <p className="text-lg text-warm-gray max-w-[90%] mx-auto leading-relaxed">
            Numerology isn't fortune-telling — it's a decision-support system
            that has guided professionals and entrepreneurs for centuries.
          </p>
        </motion.div>

        {/* Divider before cards */}
        <div className="w-[120px] h-[2px] bg-[#C9A45C]/30 mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full rounded-2xl p-8 transition-all duration-300 ease-out relative overflow-hidden flex flex-col justify-between hover:-translate-y-[2px] bg-white border-[#C9A45C]/50 shadow-lg ring-1 ring-[#C9A45C]/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0 transition-all duration-500 bg-[#C9A45C] text-white shadow-lg">
                  <challenge.icon className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-serif font-bold text-warm-brown mb-3 group-hover:text-[#C9A45C] transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed mb-6">
                    {challenge.description}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-warm-brown/20 text-warm-brown hover:bg-[#C9A45C]/10 hover:text-warm-brown hover:border-[#C9A45C]/40 transition-all duration-300"
                  onClick={openBooking}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
