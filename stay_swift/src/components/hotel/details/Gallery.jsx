import Image from "next/image";

const Gallery = ({ gallery }) => {
  const galleryImg = [...gallery];
  galleryImg.shift();

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src={gallery[0]}
          width={400}
          height={400}
          className="h-[400px]"
          alt=""
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {galleryImg.map((img, index) => (
            <Image
              key={index}
              src={img}
              width={400}
              height={400}
              className="w-full h-full"
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
