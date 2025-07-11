function NewsHeader({ news }) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
        {news.title}
      </h1>
    </header>
  );
}

export default NewsHeader;
