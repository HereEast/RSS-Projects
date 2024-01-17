import { createButton, createElement } from "../../../utils/create-element";
import { Selector, Button } from "../../../../types/types";

export function createGarageButtons(): HTMLElement {
  const container = createElement("div", [Selector.ViewButtons]);

  const buttonRace = createButton(Button.Race, [Selector.ButtonRace]);
  const buttonReset = createButton(Button.Reset, [Selector.ButtonReset]);

  container.append(buttonRace, buttonReset);

  return container;
}
