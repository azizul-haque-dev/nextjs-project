// app/[lang]/page.js
import Banner from "@/components/home/Banner";
import FeaturedNews from "@/components/home/FeaturedNews";
import NewsList from "@/components/home/NewsList";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <FeaturedNews />
        <NewsList />
      </main>
    </>
  );
}
