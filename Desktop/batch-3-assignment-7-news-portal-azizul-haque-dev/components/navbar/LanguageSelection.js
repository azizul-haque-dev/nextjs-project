"use client";
import { usePathname, useRouter } from "next/navigation";

function LanguageSelection() {
  const path = usePathname();
  const router = useRouter();
  const currentLang = path.split("/")[1]; // en or bn

  function changeLanguage(lang) {
    const pathParts = path.split("/");
    pathParts[1] = lang;
    const newPath = pathParts.join("/");
    router.push(newPath);
  }

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 ${
          currentLang === "en" ? "bg-black text-white" : "hover:bg-gray-100"
        } rounded transition-colors`}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => changeLanguage("bn")}
        className={`px-2 py-1 ${
          currentLang === "bn" ? "bg-black text-white" : "hover:bg-gray-100"
        } rounded transition-colors`}
      >
        বাং
      </button>
    </div>
  );
}

export default LanguageSelection;
