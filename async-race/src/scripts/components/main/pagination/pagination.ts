import { createButton, createElement } from "../../../utils/create-element";
import { Button, Selector } from "../../../../types/types";

export function createPagination(): HTMLElement {
  const container = createElement("div", [Selector.PagesContainer]);

  const pageContainer = createElement("div", [Selector.Page]);
  const title = createElement("span", [], "Page");
  const pageNum = createElement("span", [Selector.CurrentPage], "1");
  const span = createElement("span", [], "of");
  const totalPages = createElement("span", [Selector.TotalPages], "");

  const buttonsContainer = createElement("div", [Selector.PagesButtons]);
  const buttonPrev = createButton(Button.Prev, [Selector.ButtonPrev, Selector.ButtonPage]);
  const buttonNext = createButton(Button.Next, [Selector.ButtonNext, Selector.ButtonPage]);

  buttonsContainer.append(buttonPrev, buttonNext);
  pageContainer.append(title, pageNum, span, totalPages);
  container.append(pageContainer, buttonsContainer);

  return container;
}
