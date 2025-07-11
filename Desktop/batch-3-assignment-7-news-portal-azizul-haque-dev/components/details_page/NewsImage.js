import Image from "next/image";

function NewsImage({ news }) {
  return (
    <div className="mb-8">
      <Image
        src={news?.image_url}
        alt="Ferris wheel against sky"
        className="w-full h-auto rounded-lg shadow-sm"
        width={100}
        height={100}
      />
    </div>
  );
}

export default NewsImage;
