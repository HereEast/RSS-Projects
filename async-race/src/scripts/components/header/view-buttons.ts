import { Button, Selector } from "../../../types/types";
import { createButton, createElement } from "../../utils/create-element";

export function createHeaderButtons(): HTMLElement {
  const container = createElement("div", [Selector.HeaderButtons]);
  const bubbleElement = createElement("span", [Selector.Bubble]);

  const garageButton = createButton(Button.Garage, [Selector.ViewButton]);
  const winnersButton = createButton(Button.Winners, [Selector.ViewButton]);

  container.append(bubbleElement, garageButton, winnersButton);

  return container;
}
