import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="bg-black rounded-full p-2 text-white hover:bg-indigo-600 transition"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}