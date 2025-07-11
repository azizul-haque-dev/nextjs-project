import "server-only";

export const getAllNews = async () => {
  const data = await import("../data/data.json");

  return data.default;
};
