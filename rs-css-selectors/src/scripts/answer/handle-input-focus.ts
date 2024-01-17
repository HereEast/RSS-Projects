import { getTarget } from "../../utils/get-target";
import { Info } from "../../types/enums";

export function handleInputFocus(e: Event): void {
  const input = getTarget(e);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Target is not an HTMLInputElement...");
  }

  if (e.type === "blur") {
    input.focus();

    const isValue = input.value.trim();

    if (!isValue) {
      input.value = "";
      input.placeholder = Info.InputPlaceholder;
    }
  }
}
