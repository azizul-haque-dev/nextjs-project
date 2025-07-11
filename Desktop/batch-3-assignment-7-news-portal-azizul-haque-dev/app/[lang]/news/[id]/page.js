import { getAllNews } from "@/app/data/data";
import DetailsSidebar from "@/components/details_page/DetailsSidebar";
import SignleNewsCard from "@/components/SingleNews/SignleNewsCard";

export default async function SingleNews({ params }) {
  const { lang, id } = params;
  console.log(params);

  const allNews = await getAllNews();
  const singleNews = allNews.find((item) => item.article_id === id);

  if (!singleNews) {
    // You can render a 404-style fallback if news is not found
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center text-gray-500">
        <h1 className="text-2xl font-semibold mb-4">News not found</h1>
        <p>The article you’re looking for doesn’t exist.</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <SignleNewsCard news={singleNews} lang={lang} />
        <DetailsSidebar news={singleNews} lang={lang} />
      </div>
    </main>
  );
}
