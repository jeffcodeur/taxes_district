export function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/taxes", label: "Taxes" },
  { href: "/contacts", label: "Contacts" },
] as const;
