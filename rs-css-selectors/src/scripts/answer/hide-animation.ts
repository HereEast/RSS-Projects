import { getElement } from "../../utils/get-element";
import { Selector, Animation } from "../../types/enums";

export function hideElementsAnimation(): void {
  const playground = getElement(Selector.Playground);
  const elements = [...playground.children];

  elements.forEach((element, i) => {
    if (!(element instanceof HTMLElement)) throw Error("Element is not an HTMLElement...");

    element.classList.add(Animation.Hide);
    element.style.animationDelay = `${i / 10}s`;
  });
}
