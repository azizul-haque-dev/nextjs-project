import { getLocations } from "./location.util";

export async function GET() {
  const data = await getLocations();
  return Response.json(data);
}
