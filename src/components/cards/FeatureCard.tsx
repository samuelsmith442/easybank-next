'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div 
      className="text-center md:text-left p-4 rounded-lg transition-all duration-300 hover:bg-neutral-white hover:shadow-md"
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="flex justify-center md:justify-start mb-6 md:mb-8"
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src={icon}
          alt={title}
          width={72}
          height={72}
        />
      </motion.div>
      <h3 className="text-[20px] font-light text-primary-darkBlue mb-4">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-neutral-grayishBlue opacity-70">
        {description}
      </p>
    </motion.div>
  );
}
