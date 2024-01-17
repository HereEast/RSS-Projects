import { createElement, createSVG } from "../../../utils/create-element";
import { Selector, Car } from "../../../../types/types";
import { createTrackButtons } from "../track-buttons/track-buttons";

const NS = "http://www.w3.org/2000/svg";
const CAR_SIZE = "40px";

export function createTrackHeader(car: Car): HTMLElement {
  const trackHeader = createElement("div", [Selector.TrackHeader]);
  const buttons = createTrackButtons();
  const carName = createElement("span", [Selector.CarName], car.name);
  carName.id = `${Selector.CarName.slice(1)}--${car.id}`;

  trackHeader.append(buttons, carName);

  return trackHeader;
}

export function createTrackBody(car: Car): HTMLElement {
  const trackBody = createElement("div", [Selector.TrackBody]);

  const carProps = {
    divClass: Selector.Car,
    ns: NS,
    width: CAR_SIZE,
    height: CAR_SIZE,
    color: car.color,
  };

  const carElement = createSVG(carProps);
  carElement.id = `car--${car.id}`;

  const finishElement = createElement("div", [Selector.Flag]);

  trackBody.append(carElement, finishElement);
  return trackBody;
}

export function createTrack(car: Car): HTMLElement {
  const track = createElement("div", [Selector.Track]);
  track.id = `track--${car.id}`;

  const trackContainer = createElement("div", [Selector.TrackContainer]);
  const trackHeader = createTrackHeader(car);
  const trackBody = createTrackBody(car);

  trackContainer.append(trackHeader, trackBody);
  track.append(trackContainer);

  return track;
}
