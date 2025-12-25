import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Products = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Header */}
            <section className="pt-32 pb-6 bg-section-light">
                <div className="container-narrow text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-warm-brown mb-4"
                    >
                        Recommended Numerology Tools
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-warm-gray"
                    >
                        Carefully curated tools to support your consultation and decision-making process.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <section className="pt-6 pb-24">
                <div className="container-wide">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group h-full"
                            >
                                <div className="h-full bg-white rounded-2xl overflow-hidden border border-warm-brown/10 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col">
                                    {/* Image */}
                                    <div className="h-56 relative overflow-hidden bg-warm-brown/5">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-warm-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl font-serif font-semibold text-warm-brown mb-2 group-hover:text-gold transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <p className="text-warm-gray text-sm leading-relaxed mb-6 flex-grow">
                                            {product.shortDescription}
                                        </p>

                                        <Link to={`/product/${product.id}`}>
                                            <Button
                                                variant="secondary"
                                                className="w-full bg-white border border-warm-brown/20 text-warm-brown hover:bg-warm-brown hover:text-white transition-all duration-300"
                                            >
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Products;
