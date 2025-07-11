import { dateConverter } from "@/utils/dateConverter";
import Image from "next/image";
import Link from "next/link";
import FallBackImg from "../../assets/avatar/user-account.png";

function News({ news }) {
  return (
    <Link
      href={`/news/${news?.article_id}`}
      className="cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden news-card"
    >
      <div className="relative w-full h-48">
        <Image
          src={news?.image_url}
          alt={news?.title || "Technology news"}
          width={100}
          height={192}
          priority={true}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          {news?.category?.map((item) => (
            <span
              key={item}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
          <span className="text-xs text-gray-500">3 min read</span>
        </div>
        <h3 className="text-xl font-medium mb-3 leading-tight">
          {news?.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {news?.description?.slice(0, 100)}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
              {news?.avatar && (
                <Image
                  src={news.avatar ?? FallBackImg}
                  height={24}
                  width={24}
                  alt={`${news.author}'s avatar`}
                />
              )}
            </div>
            <span className="text-xs text-gray-500">{news?.author}</span>
          </div>
          <span className="text-xs text-gray-400">
            {dateConverter(news?.pubDate)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default News;
