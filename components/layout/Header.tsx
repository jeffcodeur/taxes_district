"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiLock, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/taxes", label: "Taxes" },
  { href: "/contacts", label: "Contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  // Fermeture menu au resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Overflow body
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Fermeture au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Fermeture à la touche Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="relative z-50 bg-white" ref={menuRef}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-4 md:justify-self-start">
          <Image
            src="/images/logo-district.png"
            alt="Logo district autonome d'Abidjan"
            width={60}
            height={60}
            className="h-10 w-10 shrink-0 sm:h-14 sm:w-14 md:h-[60px] md:w-[60px]"
            priority
          />

          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <Image
              src="/images/2.svg"
              alt=""
              aria-hidden
              width={25}
              height={28}
              className="h-[1.2em] w-auto shrink-0"
            />
            <span className="truncate text-base font-semibold text-gray-700 sm:text-lg md:text-xl">
              taxes.district.<span className="text-secondary">ci</span>
            </span>
          </div>
        </div>

        {/* CENTER — desktop */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-10 font-bold text-gray-700 md:justify-self-center"
          aria-label="Navigation principale"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={
                isActive(href)
                  ? "text-primary font-bold"
                  : "hover:text-primary transition-colors"
              }
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:justify-self-end">
          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-md bg-secondary px-3 py-2 text-sm font-medium text-white transition hover:bg-orange-500 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-base"
            onClick={() => setMenuOpen(false)}
          >
            <FiLock className="size-[1em] shrink-0" aria-hidden />
            <span className="hidden min-[380px]:inline">Votre espace</span>
          </Link>

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? (
              <FiX className="size-6" aria-hidden />
            ) : (
              <FiMenu className="size-6" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav — avec transition */}
      <div
        id="mobile-nav"
        role="region"
        aria-label="Navigation mobile"
        className={`overflow-hidden border-t border-gray-100 transition-all duration-200 ease-in-out md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={`rounded-lg px-3 py-3 text-base font-bold transition-colors ${
                isActive(href)
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              aria-current={isActive(href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
