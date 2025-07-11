import { getDictionary } from "@/app/[lang]/disctionaries";
import Link from "next/link";

async function Footer({ lang }) {
  const dictionary = await getDictionary(lang);
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © 2025{" "}
          <Link
            href="https://learnwithsumit.com/"
            title="Learn with Sumit"
            className="text-gray-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn with Sumit
          </Link>
          . {dictionary.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
