import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            toast.success("Message sent successfully!");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-model-beige font-sans">
            <Header />

            {/* Compact Hero - Reduced Padding */}
            <section className="pt-28 pb-8 md:pt-32 md:pb-10">
                <div className="container-narrow text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-warm-brown mb-3"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg text-warm-gray max-w-2xl mx-auto"
                    >
                        Reach out for consultations, tools, or general inquiries. We are here to guide you.
                    </motion.p>
                </div>
            </section>

            <section className="pb-16 px-4 md:px-8">
                <div className="container-wide max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* LEFT COLUMN (Info + Map) */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-5 space-y-6"
                        >
                            {/* Contact Info Card */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-brown/10 shadow-sm">
                                <h3 className="font-serif text-xl font-semibold text-warm-brown mb-6">Get in Touch</h3>
                                <div className="space-y-5">
                                    <a href="mailto:consult@numerologyinsights.com" className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-section-light flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                                            <Mail className="w-5 h-5 text-warm-brown group-hover:text-gold transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-warm-brown/60 uppercase tracking-wide mb-0.5">Email</p>
                                            <p className="text-base md:text-lg text-warm-brown font-medium group-hover:text-gold transition-colors break-all">consult@numerologyinsights.com</p>
                                        </div>
                                    </a>

                                    <a href="https://wa.me/919800000000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-section-light flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                                            <Phone className="w-5 h-5 text-warm-brown group-hover:text-gold transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-warm-brown/60 uppercase tracking-wide mb-0.5">WhatsApp / Phone</p>
                                            <p className="text-base md:text-lg text-warm-brown font-medium group-hover:text-gold transition-colors">+91 98XXX XXXXX</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-section-light flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-warm-brown" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-warm-brown/60 uppercase tracking-wide mb-0.5">Location</p>
                                            <p className="text-base md:text-lg text-warm-brown font-medium leading-tight">Available Worldwide via Video Consultation</p>
                                            <p className="text-warm-gray text-sm mt-1">Based in India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed - SATELLITE VIEW + OVERLAY PIN */}
                            <div className="rounded-2xl overflow-hidden border border-warm-brown/10 h-[250px] shadow-sm relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889954723145!3d28.527329341279213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1709282362376!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="filter group-hover:contrast-125 transition-all duration-500"
                                ></iframe>
                                {/* Custom Red Pin Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-8">
                                    <svg viewBox="0 0 24 24" className="w-12 h-12 drop-shadow-2xl">
                                        <path
                                            fill="#DC2626"
                                            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                        />
                                        <circle cx="12" cy="10" r="3" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>


                        {/* RIGHT COLUMN (Form) */}
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-7"
                        >
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-brown/10 shadow-lg">
                                {submitted ? (
                                    <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                                        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-warm-brown">Message Sent</h3>
                                        <p className="text-warm-gray max-w-md">
                                            Thank you for reaching out. We have received your message and will get back to you personally shortly.
                                        </p>
                                        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-6">
                                            <h3 className="font-serif text-2xl font-bold text-warm-brown mb-2">Send us a Message</h3>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label htmlFor="name" className="text-sm font-medium text-warm-brown">Full Name</label>
                                                    <Input id="name" placeholder="John Doe" required className="bg-section-light border-warm-brown/10 focus:border-gold/50 h-11" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="email" className="text-sm font-medium text-warm-brown">Email Address</label>
                                                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-section-light border-warm-brown/10 focus:border-gold/50 h-11" />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label htmlFor="phone" className="text-sm font-medium text-warm-brown">Phone / WhatsApp</label>
                                                    <Input id="phone" type="tel" placeholder="+91 98XXX XXXXX" className="bg-section-light border-warm-brown/10 focus:border-gold/50 h-11" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="service" className="text-sm font-medium text-warm-brown">Interest</label>
                                                    <Select>
                                                        <SelectTrigger className="bg-section-light border-warm-brown/10 focus:border-gold/50 h-11">
                                                            <SelectValue placeholder="Select topic" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="consultation">Consultation</SelectItem>
                                                            <SelectItem value="tools">Tools</SelectItem>
                                                            <SelectItem value="reports">Reports</SelectItem>
                                                            <SelectItem value="general">General Inquiry</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label htmlFor="message" className="text-sm font-medium text-warm-brown">Message</label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="How can we help you?"
                                                    className="bg-section-light border-warm-brown/10 focus:border-gold/50 min-h-[120px] resize-none"
                                                    required
                                                />
                                            </div>

                                            <div className="pt-2">
                                                <Button
                                                    type="submit"
                                                    className="w-full h-12 bg-warm-brown hover:bg-warm-context transition-colors text-white font-medium text-lg shadow-md"
                                                    disabled={submitting}
                                                >
                                                    {submitting ? "Sending..." : "Send Message"}
                                                </Button>
                                            </div>

                                            <p className="text-xs text-center text-warm-brown/50 pt-2">
                                                Your information is kept private and confidential. We reply to every message personally.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
