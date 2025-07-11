import { getDictionary } from "@/app/[lang]/disctionaries";

async function DetailsSidebar({ lang, news }) {
  const dictionary = await getDictionary(lang);
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-8 space-y-6">
        {/* Author Info */}
        <div>
          <h3 className="text-lg font-medium mb-2">{news.author}</h3>
          <p className="text-sm text-gray-600 mb-4">{news.pubDate}</p>
        </div>
        {/* Comments */}
        <div>
          <p className="text-lg font-medium mb-2">
            {news.comments} {dictionary.comments}
          </p>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            {dictionary.join}
          </a>
        </div>
        {/* Category */}
        <div>
          <p className="text-sm text-gray-600 mb-1">{dictionary.category}</p>
          {news?.category?.map((item) => (
            <p key={item} className="font-medium">
              {item}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default DetailsSidebar;
