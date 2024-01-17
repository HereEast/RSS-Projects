import { PopupButtons } from "../../types/enums";
import { createElement } from "../../utils/create-element";

export function createPopupButtons(buttonsData: PopupButtons): HTMLElement {
  const popupButtons = createElement("div", ["popup__buttons"]);

  buttonsData.forEach((data) => {
    const button = createElement("button", data.classNames, data.name);
    popupButtons.append(button);
  });

  return popupButtons;
}
