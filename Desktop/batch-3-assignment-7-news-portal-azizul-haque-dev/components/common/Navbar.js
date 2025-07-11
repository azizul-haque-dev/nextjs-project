import { getDictionary } from "@/app/[lang]/disctionaries";
import Image from "next/image";
import Link from "next/link";
import LanguageSelection from "../navbar/LanguageSelection";

async function Navbar({ lang }) {
  const dictionary = await getDictionary(lang);
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left section with play button and navigation */}
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8 inline-block mr-2"
            />
            <h1 className="text-xl font-bold tracking-wider">
              The News Island
            </h1>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {/* Subscriber Button : Students don't have to do anything with it */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-podcast-icon lucide-podcast"
              >
                <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
                <path d="M8 14a5 5 0 1 1 8 0" />
                <circle cx={12} cy={11} r={1} />
                <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
              </svg>
            </div>
            <span className="text-sm font-medium">5,810</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {dictionary.World}
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {dictionary.Business}
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {dictionary.Lifestyle}
            </Link>
            {/* Language Switcher */}
            <LanguageSelection />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
