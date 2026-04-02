"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiLock, FiMenu, FiX } from "react-icons/fi";

const navLinks: {
  href: string;
  label: string;
  active?: boolean;
}[] = [
  { href: "/", label: "Accueil", active: true },
  { href: "#", label: "Taxes" },
  { href: "#", label: "Contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-4 md:justify-self-start">
          <Image
            src="/images/logo-district.png"
            alt="Logo district"
            width={60}
            height={60}
            className="h-10 w-10 shrink-0 sm:h-14 sm:w-14 md:h-[60px] md:w-[60px]"
          />

          <div className="flex min-w-0 items-center gap-1.5 text-base sm:gap-2 sm:text-lg md:text-xl">
            <Image
              src="/images/2.svg"
              alt=""
              width={25}
              height={28}
              className="h-[1em] w-auto shrink-0"
            />

            <span className="truncate text-base font-semibold text-gray-700 sm:text-lg md:text-xl">
              taxes.district.<span className="text-secondary">ci</span>
            </span>
          </div>
        </div>

        {/* CENTER — desktop */}
        <nav
          className="hidden items-center gap-6 text-gray-700 font-bold lg:gap-10 md:flex md:justify-self-center"
          aria-label="Navigation principale"
        >
          {navLinks.map(({ href, label, active }) => (
            <Link
              key={href + label}
              href={href}
              className={
                active ? "text-primary font-bold" : "hover:text-primary"
              }
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
            <span className="max-[380px]:sr-only">Votre espace</span>
          </Link>

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
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

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={`border-t border-gray-100 md:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Navigation mobile"
        >
          {navLinks.map(({ href, label, active }) => (
            <Link
              key={href + label}
              href={href}
              className={`rounded-lg px-3 py-3 text-base font-bold ${
                active
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
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
