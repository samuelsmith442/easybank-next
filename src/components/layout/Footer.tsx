'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export default function Footer() {
  const socialHoverVariants = {
    hover: { y: -3, scale: 1.15, transition: { duration: 0.2 } }
  };
  
  return (
    <footer className="bg-primary-darkBlue py-10 md:py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_2fr_1.5fr] gap-8 md:gap-6 items-start">
          {/* Logo and Social Links */}
          <motion.div 
            className="flex flex-col items-center sm:items-start gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="text-neutral-white">
              <Image
                src="/images/logo.svg"
                alt="Easybank"
                width={139}
                height={20}
                className="brightness-0 invert"
              />
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social: SocialLink) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-neutral-white hover:text-primary-limeGreen transition-colors"
                  aria-label={social.name}
                  whileHover="hover"
                  variants={socialHoverVariants}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-x-16 text-center sm:text-left">
            <div className="space-y-2">
              <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/about" className="text-neutral-white hover:text-primary-limeGreen block">
                  About Us
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/contact" className="text-neutral-white hover:text-primary-limeGreen block">
                  Contact
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/blog" className="text-neutral-white hover:text-primary-limeGreen block">
                  Blog
                </Link>
              </motion.div>
            </div>
            
            <div className="space-y-2">
              <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/careers" className="text-neutral-white hover:text-primary-limeGreen block">
                  Careers
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/support" className="text-neutral-white hover:text-primary-limeGreen block">
                  Support
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/privacy" className="text-neutral-white hover:text-primary-limeGreen block">
                  Privacy Policy
                </Link>
              </motion.div>
            </div>
          </div>

          {/* CTA and Copyright */}
          <motion.div 
            className="flex flex-col items-center sm:items-end gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-8 py-3 rounded-full hover:opacity-80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Invite
            </motion.button>
            <p className="text-neutral-grayishBlue text-sm">
              © Easybank. All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: '/images/icon-facebook.svg',
  },
  {
    name: 'YouTube',
    href: '#',
    icon: '/images/icon-youtube.svg',
  },
  {
    name: 'Twitter',
    href: '#',
    icon: '/images/icon-twitter.svg',
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: '/images/icon-pinterest.svg',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: '/images/icon-instagram.svg',
  },
];
