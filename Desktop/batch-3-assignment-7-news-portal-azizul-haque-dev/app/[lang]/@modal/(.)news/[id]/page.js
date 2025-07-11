import { getAllNews } from "@/app/data/data";
import Modal from "@/components/common/Modal";
import NewsBody from "@/components/details_page/NewsBody";
import NewsHeader from "@/components/details_page/NewsHeader";
import NewsImage from "@/components/details_page/NewsImage";
import SocialIcons from "@/components/details_page/SocialIcons";

async function InterceptingPage({ params: { id, lang } }) {
  const allNews = await getAllNews();
  const singleNews = allNews.find((item) => item.article_id === id);
  return (
    <Modal>
      <article className="max-w-4xl mx-auto h-screen px-4 pb-8 bg-white text-black rounded-md shadow-lg relative z-50 mt-8 overflow-scroll">
        <NewsHeader news={singleNews} />
        <NewsImage news={singleNews} />
        <NewsBody news={singleNews} />
        <SocialIcons lang={lang} />
      </article>
    </Modal>
  );
}

export default InterceptingPage;
