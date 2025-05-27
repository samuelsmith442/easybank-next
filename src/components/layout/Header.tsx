'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full transition-all duration-300 z-50 bg-neutral-white ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Easybank"
              width={139}
              height={20}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link href="/" className="text-neutral-grayishBlue hover:text-primary-darkBlue">
              Home
            </Link>
            <Link href="#about" className="text-neutral-grayishBlue hover:text-primary-darkBlue">
              About
            </Link>
            <Link href="#contact" className="text-neutral-grayishBlue hover:text-primary-darkBlue">
              Contact
            </Link>
            <Link href="#blog" className="text-neutral-grayishBlue hover:text-primary-darkBlue">
              Blog
            </Link>
            <Link href="#careers" className="text-neutral-grayishBlue hover:text-primary-darkBlue">
              Careers
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={`/images/icon-${isMenuOpen ? 'close' : 'hamburger'}.svg`}
              alt=""
              width={24}
              height={24}
            />
          </motion.button>

          {/* Request Invite Button */}
          <motion.button 
            className="hidden md:block bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-6 py-2 md:px-7 md:py-2.5 lg:px-8 lg:py-3 rounded-full hover:opacity-80"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Invite
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="absolute top-20 left-4 right-4 bg-neutral-white p-8 rounded-lg shadow-lg md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
            <div className="flex flex-col space-y-6 text-center">
              <Link href="/" className="text-primary-darkBlue">
                Home
              </Link>
              <Link href="#about" className="text-primary-darkBlue">
                About
              </Link>
              <Link href="#contact" className="text-primary-darkBlue">
                Contact
              </Link>
              <Link href="#blog" className="text-primary-darkBlue">
                Blog
              </Link>
              <Link href="#careers" className="text-primary-darkBlue">
                Careers
              </Link>
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
