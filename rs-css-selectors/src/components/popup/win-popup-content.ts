import { createElement } from "../../utils/create-element";

export function createWinPopupContent(): HTMLElement {
  const popupContent = createElement("div", ["popup__content"]);
  const imageContainer = createElement("div", ["popup__image"]);
  const bearElement = createElement("bear", ["dance"]);
  const textElement = createElement("p", ["popup__text"]);
  const congratsText = document.createTextNode("Big congrats!!!");

  const spanElement = createElement("span", []);
  const spanText = document.createTextNode("You’ve completed all 10 levels successfully.");

  spanElement.append(spanText);
  textElement.append(congratsText);
  textElement.append(document.createElement("br"));
  textElement.append(spanElement);

  imageContainer.append(bearElement);
  popupContent.append(imageContainer, textElement);

  return popupContent;
}
