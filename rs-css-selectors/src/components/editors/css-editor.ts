import { ButtonName } from "../../types/enums";
import { EditorParams } from "../../types/types";
import { createElement } from "../../utils/create-element";
import { createEditor } from "./editor-template";

// CSS
export function createCSSEditor(): HTMLElement {
  const inputContainer = createElement("div", ["input__container"]);
  const input = createElement("input", []);
  const button = createElement("button", ["button", "button--check"]);

  if (input instanceof HTMLInputElement) {
    input.type = "text";
  }

  button.textContent = ButtonName.Enter;

  inputContainer.append(input, button);

  const params: EditorParams = {
    classNames: ["editor", "editor--css"],
    title: "CSS Editor",
    fileName: "style.css",
    editorContent: inputContainer,
  };

  const cssEditor = createEditor(params);
  return cssEditor;
}
