import { createElement } from "../../utils/create-element";
import { createLogo } from "./logo";
import { createHeaderButtons } from "./header-buttons";
import { createHeaderLevelInfo } from "./header-level";

// Header
export function createHeader(): HTMLElement {
  const header = createElement("header", ["header"]);

  const logo = createLogo();

  const headerControls = createElement("div", ["header__controls"]);
  const buttons = createHeaderButtons();
  const levelInfo = createHeaderLevelInfo();

  headerControls.append(levelInfo, buttons);
  header.append(logo, headerControls);

  return header;
}
