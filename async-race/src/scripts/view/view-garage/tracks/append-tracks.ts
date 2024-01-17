import { Selector, CarsData, Car } from "../../../../types/types";
import { getElement } from "../../../utils/get-element";
import { cleanContent } from "../../../utils/helpers";
import { createTrack } from "./create-track";

export function appendTrack(car: Car): void {
  const viewBody = getElement(Selector.ViewBody);
  const newTrack = createTrack(car);

  viewBody.append(newTrack);
}

export function appendTracks(cars: CarsData): HTMLElement {
  const viewBody = getElement(Selector.ViewBody);
  cleanContent(viewBody);

  const carsArr = [...cars.items];

  carsArr.forEach((car) => {
    const track = createTrack(car);
    viewBody.append(track);
  });

  return viewBody;
}
