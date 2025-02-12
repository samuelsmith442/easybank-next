import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-darkBlue py-10 md:py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.5fr] gap-8 md:gap-6 items-start">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center md:items-start gap-8">
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-neutral-white hover:text-primary-limeGreen transition-colors"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-16 text-center md:text-left">
            <div className="space-y-2">
              <Link href="/about" className="text-neutral-white hover:text-primary-limeGreen block">
                About Us
              </Link>
              <Link href="/contact" className="text-neutral-white hover:text-primary-limeGreen block">
                Contact
              </Link>
              <Link href="/blog" className="text-neutral-white hover:text-primary-limeGreen block">
                Blog
              </Link>
            </div>
            <div className="space-y-2">
              <Link href="/careers" className="text-neutral-white hover:text-primary-limeGreen block">
                Careers
              </Link>
              <Link href="/support" className="text-neutral-white hover:text-primary-limeGreen block">
                Support
              </Link>
              <Link href="/privacy" className="text-neutral-white hover:text-primary-limeGreen block">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* CTA and Copyright */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <button className="bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-8 py-3 rounded-full hover:opacity-80">
              Request Invite
            </button>
            <p className="text-neutral-grayishBlue text-sm">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
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
