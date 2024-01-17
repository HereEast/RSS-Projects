import { createElement } from "../../utils/create-element";
import { EditorParams } from "../../types/types";

export function createEditorBody(params: EditorParams): HTMLElement {
  const editorBody = createElement("div", ["editor__body"]);

  const lineCountSpans = new Array(25).fill(0).map((_, i) => {
    const span = createElement("span", []);
    span.textContent = `${i + 1}`;
    return span;
  });

  const linesCountPanel = createElement("div", ["body__panel--lines"]);
  const bodyContentPanel = createElement("div", ["body__panel--content"]);

  lineCountSpans.forEach((span) => linesCountPanel.append(span));
  bodyContentPanel.append(params.editorContent);

  editorBody.append(linesCountPanel, bodyContentPanel);

  return editorBody;
}
