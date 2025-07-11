function NewsBody({ news }) {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-lg leading-relaxed mb-6">{news?.description}</p>
      <p className="text-lg leading-relaxed mb-8">{news?.content}</p>
    </div>
  );
}

export default NewsBody;
