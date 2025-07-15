import { getLocationByName } from "../location.util";

export async function GET(req, { params }) {
  const locationData = getLocationByName(params?.name);

  return Response.json(locationData);
}
