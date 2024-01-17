import { createElement } from "../../utils/create-element";
import { ButtonName } from "../../types/enums";

// Buttons
export function createHeaderButtons(): HTMLElement {
  const headerButtons = createElement("div", ["header__buttons"]);

  const buttonReset = createElement("button", ["button", "button--reset"], ButtonName.Reset);
  const buttonHint = createElement("button", ["button", "button--hint"], ButtonName.Hint);

  headerButtons.append(buttonHint, buttonReset);

  return headerButtons;
}
