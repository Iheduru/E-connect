import { Logo } from '../footer/Logo';
import { SocialLinks } from '../footer/SocialLinks';
import { FooterLinks } from '../footer/FooterLinks';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 space-y-6 md:space-y-0">
          <Logo />
          <SocialLinks />
        </div>

        {/* Footer Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span className="text-gray-500 text-sm md:text-base text-center md:text-left">
            Copyright 2024 E-Connect
          </span>
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}
