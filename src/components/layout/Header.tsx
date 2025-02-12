'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 bg-neutral-white">
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
          <div className="hidden md:flex space-x-8">
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
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Image
              src={`/images/icon-${isMenuOpen ? 'close' : 'hamburger'}.svg`}
              alt=""
              width={24}
              height={24}
            />
          </button>

          {/* Request Invite Button */}
          <button className="hidden md:block bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-8 py-3 rounded-full hover:opacity-80">
            Request Invite
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-4 right-4 bg-neutral-white p-8 rounded-lg shadow-lg md:hidden">
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
          </div>
        )}
      </div>
    </header>
  );
}
