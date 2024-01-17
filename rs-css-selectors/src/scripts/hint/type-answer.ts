import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";

export function typeAnswer(text: string): void {
  const input = getElement(Selector.Input);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Target is not an HTMLInputElement...");
  }

  let currentIndex = 0;
  let currentValue = "";

  const intervalID = setInterval(() => {
    currentValue += text[currentIndex];
    input.value = currentValue;

    if (currentIndex >= text.length - 1) {
      clearInterval(intervalID);
    }
    currentIndex++;
  }, 50);
}
