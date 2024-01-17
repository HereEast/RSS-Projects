import { getElement, getElementsArray } from "../../utils/get-element";
import { Button, Selector, View } from "../../../types/types";

export function toggleViewButton(view: View): void {
  const bubble = getElement(Selector.Bubble);

  const buttons = getElementsArray(Selector.ViewButton);
  buttons.forEach((btn) => btn.classList.remove("active"));

  const button = buttons.find((btn) => btn.id === `button__${view}`);

  if (!button) {
    throw Error("Couldn't find a View Button.");
  }

  button.classList.add("active");

  if (button.textContent?.includes(Button.Garage)) {
    bubble.classList.remove("winners");
  } else {
    bubble.classList.add("winners");
  }
}
