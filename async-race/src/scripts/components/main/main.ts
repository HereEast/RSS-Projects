import { createElement } from "../../utils/create-element";
import { Selector } from "../../../types/types";
import { createViewHeader } from "./page-header/view-header";
import { createPagination } from "./pagination/pagination";

export function createMain(): HTMLElement {
  const main = createElement("main", [Selector.Main]);
  const mainContainer = createElement("div", [Selector.MainContainer]);

  const viewHeader = createViewHeader();
  const viewBody = createElement("div", [Selector.ViewBody]);
  const pagination = createPagination();

  mainContainer.append(viewHeader, viewBody, pagination);
  main.append(mainContainer);

  return main;
}
