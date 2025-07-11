import { getAllNews } from "@/app/data/data";
import News from "./News";

async function NewsList() {
  const allNews = await getAllNews();
  const single = allNews.map((news) => news);

  return (
    <section aria-label="Latest news stories">
      <h2 className="text-2xl font-bold mb-8">Latest Stories</h2>
      {single.length === 0 ? (
        <p>No news stories available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {single.map((news) => (
            <News key={news.article_id} news={news} />
            // <h1 key={i}>hello</h1>
          ))}
        </div>
      )}
    </section>
  );
}

export default NewsList;
