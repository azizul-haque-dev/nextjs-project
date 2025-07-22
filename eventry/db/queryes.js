import { eventsModel } from "./event.model";

async function getAllEvents() {
  console.log("getAllEvents", eventsModel);
  const allEvent = await eventsModel.find({});
  return allEvent;
}

export { getAllEvents };
