import { Selector } from "../../../types/types";
import { createElement } from "../../utils/create-element";
import { createHeaderButtons } from "./view-buttons";
import { createHeaderForms } from "./forms";

export function createHeader(): HTMLElement {
  const header = createElement("header", [Selector.Header]);
  const headerContainer = createElement("div", [Selector.HeaderContainer]);

  const headerButtons = createHeaderButtons();
  const headerForms = createHeaderForms();

  headerContainer.append(headerButtons, headerForms);
  header.append(headerContainer);

  return header;
}
