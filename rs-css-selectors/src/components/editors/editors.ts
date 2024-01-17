import { createElement } from "../../utils/create-element";
import { createCSSEditor } from "./css-editor";
import { createHTMLEditor } from "./html-editor";

// Editors
export function createEditorsBlock(): HTMLElement {
  const editorsBlock = createElement("div", ["game__block", "block__editors"]);
  const cssEditor = createCSSEditor();
  const htmlEditor = createHTMLEditor();

  editorsBlock.append(cssEditor, htmlEditor);

  return editorsBlock;
}
