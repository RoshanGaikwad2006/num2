import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

export const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10px" });
    const springValue = useSpring(0, {
        damping: 30,
        stiffness: 100,
        duration: 1.5,
    });
    const displayValue = useTransform(springValue, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref} className="tabular-nums">
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};
