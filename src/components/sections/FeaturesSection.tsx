'use client';

import FeatureCard from "../cards/FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/images/icon-online.svg",
    title: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: "/images/icon-budgeting.svg",
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    icon: "/images/icon-onboarding.svg",
    title: "Fast Onboarding",
    description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: "/images/icon-api.svg",
    title: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  return (
    <section className="relative z-10 bg-neutral-lightGrayishBlue py-16 md:py-24">
      <div className="container mx-auto px-5">
        <motion.div 
          className="text-center md:text-left max-w-[400px] md:max-w-none mx-auto md:mx-0 mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] md:text-[36px] leading-tight font-light text-primary-darkBlue mb-5">
            Why choose Easybank?
          </h2>
          <p className="text-[15px] leading-relaxed text-neutral-grayishBlue opacity-70">
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your financial life like never before.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
