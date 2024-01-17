import { createElement } from "../../../utils/create-element";
import { Selector } from "../../../../types/types";
import { createCountElement } from "./count-element";
import { createGarageButtons } from "./garage-buttons";

export function createViewHeader(): HTMLElement {
  const header = createElement("div", [Selector.ViewHeader]);

  const title = createElement("div", [Selector.TitleContainer]);
  const titleText = createElement("h2", [Selector.Title], "");
  const countElement = createCountElement();

  const buttons = createGarageButtons();

  title.append(titleText, countElement);
  header.append(title, buttons);

  return header;
}
