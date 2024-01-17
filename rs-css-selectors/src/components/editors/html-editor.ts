import { EditorParams } from "../../types/types";
import { createElement } from "../../utils/create-element";
import { createEditor } from "./editor-template";

// HTML
export function createHTMLEditor(): HTMLElement {
  const content = createElement("div", ["content__container"]);

  const params: EditorParams = {
    classNames: ["editor", "editor--html"],
    title: "HTML View",
    fileName: "playground.html",
    editorContent: content,
  };

  const htmlEditor = createEditor(params);
  return htmlEditor;
}
