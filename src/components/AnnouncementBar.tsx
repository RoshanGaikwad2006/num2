import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const AnnouncementBar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
            className="w-full bg-[#E8E2D2] text-warm-brown py-3 px-4 border-b border-warm-brown/10 relative z-40 overflow-hidden"
        >
            <div className="container-wide flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <p className="text-sm font-medium tracking-wide">
                    Limited consultation slots available this week.
                </p>
                <Button
                    variant="hero"
                    size="sm"
                    className="h-8 px-4 text-xs shadow-md bg-warm-brown text-white hover:bg-warm-brown/90"
                >
                    <Calendar className="w-3 h-3 mr-2" />
                    Book Consultation
                </Button>
            </div>
        </motion.div>
    );
};

export default AnnouncementBar;
