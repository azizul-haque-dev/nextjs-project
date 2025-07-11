import allNews from "../../../data/data.json";

// GET single news
export async function GET(req, { params }) {
  const newsId = params.id;
  console.log(newsId);

  const currentNews = allNews.find((news) => news.article_id === newsId);

  return Response.json(currentNews || { message: "Not found " }, {
    status: currentNews ? 200 : 404
  });
}

// edit news
export async function PATCH(req, { params }) {
  const articleId = params.id;
  const body = await req.json();
  const allowedFields = ["title", "description"];
  const objectKeys = Object.keys(body);
  const isEditable = objectKeys.filter((key) => !allowedFields.includes(key));

  if (isEditable.length > 0) {
    return Response.json(
      { message: "This Field is not editable" },
      { status: 400 }
    );
  }

  // Find the article
  const currentIndex = allNews.findIndex(
    (news) => news.article_id === articleId
  );

  if (currentIndex === -1) {
    return Response.json({ message: "News not found" }, { status: 404 });
  }

  if (title !== undefined) allNews[currentIndex].title = title;
  if (description !== undefined)
    allNews[currentIndex].description = description;

  return Response.json({
    message: "News updated",
    article: allNews[currentIndex]
  });
}

// DELETE
export async function DELETE(req, { params }) {
  const newsId = params.id;
  const currentIndex = allNews.findIndex((news) => news.article_id === newsId);

  if (currentIndex === -1) {
    return Response.json({ message: "News not found" }, { status: 404 });
  }

  const [deletedNews] = allNews.splice(currentIndex, 1);

  return Response.json({
    message: "Delted",
    article: allNews[currentIndex]
  });
}
