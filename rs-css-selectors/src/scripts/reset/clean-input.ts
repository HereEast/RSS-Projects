import { Info, Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";

export function cleanInput(): void {
  const input = getElement(Selector.Input);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Target is not an HTMLInputElement...");
  }

  input.value = "";
  input.placeholder = Info.InputPlaceholder;
  input.removeAttribute("data-hint");
  input.focus();
}
