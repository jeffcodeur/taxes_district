import Image from "next/image";
import { FaYoutube, FaLinkedinIn, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="footer-section mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-district.png"
              alt="Logo district"
              width={58}
              height={58}
              className="h-auto"
            />
            <p className="text-sm font-semibold leading-5">
              District autonome
              <br />
              d'Abidjan
            </p>
          </div>
          <p className="mt-3 text-xs text-[#4a5967] max-w-xs leading-5">
            21, 28 Plateau Nord (A), et concession abidjan
            <br />
            01 BP 1234 Abidjan 01.
          </p>
        </div>

        <div className="min-w-[120px]">
          <ul className="space-y-2 text-sm font-medium">
            <li>Accueil</li>
            <li>Taxes</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="min-w-[200px]">
          <ul className="space-y-2 text-sm text-[#364351]">
            <li>Conditions generales d'utilisation</li>
            <li>Politique de confidentialite</li>
            <li>Mentions legales</li>
          </ul>
        </div>

        <div className="flex items-start md:items-center gap-3 text-[#1f2937]">
          <a href="#" aria-label="YouTube" className="hover:text-primary transition">
            <FaYoutube />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-primary transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="X" className="hover:text-primary transition">
            <FaXTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}