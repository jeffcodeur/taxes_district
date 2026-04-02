import Image from "next/image";
import Link from "next/link";
import { FaLock } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo-district.png"
            alt="Logo district"
            width={60}
            height={60}
          />

          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              %
            </span>

            <span className="text-xl font-semibold text-gray-700">
              taxes.district.<span className="text-orange-500">ci</span>
            </span>
          </div>
        </div>

        {/* CENTER */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-bold">
          <Link href="/" className="text-primary font-bold">
            Accueil
          </Link>
          <Link href="#">Taxes</Link>
          <Link href="#">Contacts</Link>
        </nav>

        {/* RIGHT */}
        <div>
          <button className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-md hover:bg-orange-600 transition">
            <FaLock className="text-sm" />
            Votre espace
          </button>
        </div>

      </div>
    </header>
  );
}