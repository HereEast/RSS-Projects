import { createElement } from "../../utils/create-element";
import { EditorParams } from "../../types/types";

export function createEditorHeader(params: EditorParams): HTMLElement {
  const editorHeader = createElement("div", ["editor__header"]);
  const spanTitle = createElement("span", ["editor__title"]);
  const spanFile = createElement("span", ["editor__file"]);

  spanTitle.textContent = params.title;
  spanFile.textContent = params.fileName;

  editorHeader.append(spanTitle, spanFile);

  return editorHeader;
}
