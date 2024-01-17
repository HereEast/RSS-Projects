import { createElement } from "../../utils/create-element";
import { EditorParams } from "../../types/types";
import { createEditorHeader } from "./editor-template-header";
import { createEditorBody } from "./editor-template-body";

export function createEditor(params: EditorParams): HTMLElement {
  const editor = createElement("div", params.classNames);

  const editorHeader = createEditorHeader(params);
  const editorBody = createEditorBody(params);

  editor.append(editorHeader, editorBody);

  return editor;
}
