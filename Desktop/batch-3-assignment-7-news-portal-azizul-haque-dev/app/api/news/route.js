import allNews from "../../data/data.json";

export async function GET() {
  return Response.json(allNews);
}
