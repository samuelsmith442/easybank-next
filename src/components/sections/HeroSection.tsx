'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section className="relative bg-neutral-veryLightGray overflow-visible min-h-screen md:min-h-0 pt-[72px]">
      {/* Desktop Background */}
      <div className="hidden md:block absolute right-0 w-[50%] h-[100%]">
        <Image
          src="/images/bg-intro-desktop.svg"
          alt=""
          fill
          className="object-cover object-left scale-[1.6] translate-x-[20%] translate-y-[-15%]"
          priority
        />
      </div>

      {/* Mobile Background */}
      <div className="md:hidden absolute w-full h-[50vh] top-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/bg-intro-mobile.svg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Mockups Image */}
      <motion.div 
        className="absolute z-30 w-full md:w-[767px] h-[423px] md:h-[939px] -top-16 md:-top-[150px] left-1/2 -translate-x-1/2 md:left-auto md:right-[-120px] md:translate-x-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Image
          src="/images/image-mockups.png"
          alt="Mobile app mockups"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-5 pt-[360px] pb-20 md:py-[170px] lg:py-[170px]">
        <motion.div 
          className="text-center md:text-left md:w-[450px] max-w-[400px] mx-auto md:mx-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-[40px] leading-[1.2] md:text-5xl font-light text-primary-darkBlue mb-4 md:mb-6"
            variants={itemVariants}
          >
            Next generation digital banking
          </motion.h1>
          <motion.p 
            className="text-[15px] leading-relaxed text-neutral-grayishBlue mb-8 opacity-70"
            variants={itemVariants}
          >
            Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-8 py-3 rounded-full hover:opacity-80"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Invite
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
