import { Selector, Button } from "../../../types/types";
import { createElement, createInput, createButton } from "../../utils/create-element";

const PLACEHOLDER = "Car name...";
const COLOR = "#f6b73c";

export function createBasicForm(buttonName: Button): HTMLElement {
  const formContainer = createElement("div", [Selector.FormContainer]);

  const textInput = createInput("text", buttonName);
  textInput.placeholder = PLACEHOLDER;

  const colorInput = createInput("color", buttonName);
  colorInput.value = COLOR;

  const buttonCreate = createButton(buttonName, [`.button__${buttonName}`]);

  formContainer.append(textInput, colorInput, buttonCreate);

  return formContainer;
}
