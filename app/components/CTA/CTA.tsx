import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto mb-10 items-center justify-center text-center">
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
                    Have more questions?
                </h2>
                <h4 className="max-w-screen-sm mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
                    Contact us at:
                    <a className="text-md text-white" href='mailto:ieee@srmist.edu.in'> ieee@srmist.edu.in</a>
                </h4>
            </div>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <a
                    href="https://registrations.ieeesrmist.com/"
                    className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-neonCyan text-neutral-800 px-4 py-2 transition-transform transform hover:scale-105 focus:scale-105"
                >
                    Register Now
                </a>
            </div>
        </motion.section>
    );
};

export default CTA;