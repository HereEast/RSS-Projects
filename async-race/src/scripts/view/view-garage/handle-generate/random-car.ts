import { carMakes } from "./car-makes";
import { getRandomIndex } from "../../../utils/helpers";

export function getColorValue(): string {
  return Math.ceil(Math.random() * 255)
    .toString(16)
    .padStart(2, "0");
}

export function getRandomColor(): string {
  const red = getColorValue();
  const green = getColorValue();
  const blue = getColorValue();

  const hexColor = `#${red}${green}${blue}`;

  return hexColor;
}

export function getRandomMake(): string {
  const carIdx = getRandomIndex(carMakes);
  const { make, models } = carMakes[carIdx];

  const modelIdx = getRandomIndex(models);
  const model = models[modelIdx];

  return `${make} ${model}`;
}
