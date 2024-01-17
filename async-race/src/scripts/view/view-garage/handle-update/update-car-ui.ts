import { NewCar } from "../../../../types/types";

export function updateCarUI(id: number, patch: NewCar): void {
  const track = document.getElementById(`track--${id}`);
  const car = track?.querySelector(`#car--${id} svg`);
  const carName = track?.querySelector(".car__name");

  if (!car || !(car instanceof SVGElement)) {
    throw Error("Couldn't get car SVG element.");
  }

  if (!carName) {
    throw Error("Couldn't get a span with car name.");
  }

  car.style.backgroundColor = patch.color;
  carName.textContent = patch.name;
}
