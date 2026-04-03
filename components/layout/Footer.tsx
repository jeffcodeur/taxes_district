"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/taxes", label: "Taxes" },
  { href: "/contacts", label: "Contacts" },
];

const legalLinks = [
  { href: "/cgu", label: "Conditions générales d'utilisation" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

const socialLinks = [
  { href: "https://youtube.com", label: "YouTube", icon: FaYoutube },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "https://facebook.com", label: "Facebook", icon: FaFacebookF },
  { href: "https://x.com", label: "X", icon: FaXTwitter },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
];

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <footer className="footer-section mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8 md:gap-12">

        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-district.png"
              alt="District autonome d'Abidjan"
              width={58}
              height={58}
              className="h-auto"
            />
            <p className="text-lg leading-5">
              District autonome
              <br />
              d'Abidjan
            </p>
          </div>
          <p className="mt-3 text-sm text-gray-600 leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla  rhoncus orci, eu eleifend neque pellentesque non. 
          </p>
        </div>

        <div className="flex-1 flex flex-col md:items-center">
          <ul className="space-y-6 text-base text-left">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`transition ${
                    isActive(link.href)
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col md:items-center">
          <ul className="space-y-2 text-base text-left">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <ul className="flex gap-3 text-gray-800">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  <social.icon className="h-[21px] w-auto" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}