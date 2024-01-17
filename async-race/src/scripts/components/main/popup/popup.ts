import { createElement } from "../../../utils/create-element";
import { Selector } from "../../../../types/types";

export function createWinPopup(): HTMLElement {
  const popup = createElement("div", [Selector.Popup]);
  const popupContainer = createElement("div", [Selector.PopupContainer]);
  const content = createElement("div", [Selector.PopupContent]);

  const car = createElement("span", [Selector.PopupWinner], "Winner");
  const message = createElement("span", [Selector.PopupMessage], "won the race in ");
  const time = createElement("span", [Selector.PopupTime], "2.345 sec");

  message.append(time);
  content.append(car, message);
  popupContainer.append(content);
  popup.append(popupContainer);

  return popup;
}
