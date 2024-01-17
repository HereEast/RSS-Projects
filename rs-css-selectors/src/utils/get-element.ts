import { Selector } from "../types/enums";

// Get element
export function getElement(selector: Selector): HTMLElement {
  const element = document.querySelector(selector);

  if (!element || !(element instanceof HTMLElement)) {
    throw Error(`${selector} element is not found...`);
  }

  return element;
}

// Get closest element
export function getClosestElement(targetElement: HTMLElement, selector: Selector): HTMLElement {
  const element = targetElement.closest(selector);

  if (!element || !(element instanceof HTMLElement)) {
    throw Error(`${selector} element is not found...`);
  }

  return element;
}

// Get elements[]
export function getElementsArray(selector: Selector): HTMLElement[] {
  const elements: HTMLElement[] = Array.from(document.querySelectorAll(selector));

  if (!elements) throw Error(`${selector} elements are not found...`);

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      throw Error("Elements are not an array of HTMLElement...");
    }
  });

  return elements;
}
