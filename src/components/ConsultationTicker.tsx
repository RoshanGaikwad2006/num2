import { motion } from "framer-motion";

const ConsultationTicker = () => {
    const message = "One-on-one consultation slots are limited this week. Book your session in advance.";
    const items = [message];

    return (
        <div className="w-full bg-warm-brown/3 border-t border-warm-brown/8 overflow-hidden relative z-30 backdrop-blur-sm">
            {/* small gap so ticker feels detached from hero; area below the ticker kept blank */}
            <div className="h-10 md:h-12 flex items-center overflow-hidden mt-2">
                <motion.div
                    animate={{ x: ["0%", "-66.6667%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 140,
                            ease: "linear",
                        },
                    }}
                    className="inline-flex whitespace-nowrap items-center gap-6 min-w-[300%]"
                >
                    {/* Render content three times for a seamless loop */}
                    {[...items, ...items, ...items].map((text, idx) => (
                        <p key={idx} className="text-sm md:text-sm font-normal text-warm-brown/60 cursor-default leading-none">
                            {text}
                        </p>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ConsultationTicker;
