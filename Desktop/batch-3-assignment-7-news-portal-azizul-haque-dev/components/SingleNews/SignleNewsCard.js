import NewsBody from "../details_page/NewsBody";
import NewsHeader from "../details_page/NewsHeader";
import NewsImage from "../details_page/NewsImage";
import SocialIcons from "../details_page/SocialIcons";

function SignleNewsCard({ news, lang, className }) {
  return (
    <>
      <article className={"lg:col-span-3"}>
        <NewsHeader news={news} />
        <NewsImage news={news} />
        <NewsBody news={news} />
        <SocialIcons lang={lang} />
      </article>
    </>
  );
}

export default SignleNewsCard;
