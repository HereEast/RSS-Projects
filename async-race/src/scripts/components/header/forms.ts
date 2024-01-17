import { Button, Selector } from "../../../types/types";
import { createButton, createElement } from "../../utils/create-element";
import { createBasicForm } from "./form-basic";

const BUTTON_GENERATE = "Generate Cars";
const TITLE_TEXT = "Edit car ⚙️";

export function createCreateForm(): HTMLElement {
  const formCreate = createElement("form", [Selector.FormCreate]);
  const formElements = createBasicForm(Button.Create);

  const generateButton = createButton(Button.Generate, [Selector.ButtonGenerate]);
  generateButton.textContent = BUTTON_GENERATE;

  const dots = createElement("span");

  formCreate.append(formElements, dots, generateButton);

  return formCreate;
}

export function createUpdateForm(): HTMLElement {
  const formUpdate = createElement("form", [Selector.FormUpdate]);
  const formElements = createBasicForm(Button.Update);
  const buttonCancel = createButton(Button.CancelEdit, [Selector.ButtonCancel]);
  const title = createElement("h2", [], TITLE_TEXT);

  formElements.append(buttonCancel);
  formUpdate.append(title, formElements);

  return formUpdate;
}

export function createHeaderForms(): HTMLElement {
  const container = createElement("div", [Selector.FormsContainer]);

  const formCreate = createCreateForm();
  const formUpdate = createUpdateForm();

  container.append(formCreate, formUpdate);

  return container;
}
