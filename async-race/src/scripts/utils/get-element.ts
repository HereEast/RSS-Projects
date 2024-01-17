import { Selector, FormInputs } from "../../types/types";

export function getTarget(e: Event): HTMLElement {
  const target = e.target;

  if (!target) throw Error("Target element is not found...");

  if (!(target instanceof HTMLElement)) {
    throw Error("Target is not an HTMLElement...");
  }

  return target;
}

export function getClosest(targetElement: HTMLElement, selector: Selector | string): HTMLElement {
  const element = targetElement.closest(selector);

  if (!element || !(element instanceof HTMLElement)) {
    throw Error(`${selector} element is not found...`);
  }

  return element;
}

export function getElement(selector: Selector | string): HTMLElement {
  const element = document.querySelector(selector);

  if (!element || !(element instanceof HTMLElement)) {
    throw Error(`${selector} is not found...`);
  }

  return element;
}

export function getElementsArray(selector: Selector | string): HTMLElement[] {
  const elements: HTMLElement[] = Array.from(document.querySelectorAll(selector));

  if (!elements) throw Error(`${selector} elements are not found...`);

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      throw Error("Elements are not an array of HTMLElement...");
    }
  });

  return elements;
}

export function getFormInputs(form: Selector | string): FormInputs {
  const inputText = getElement(`${form} .input-text`);
  const inputColor = getElement(`${form} .input-color`);

  if (!(inputText instanceof HTMLInputElement)) {
    throw Error("Text input isn't found.");
  }

  if (!(inputColor instanceof HTMLInputElement)) {
    throw Error("Color input isn't found.");
  }

  return {
    inputText,
    inputColor,
  };
}
