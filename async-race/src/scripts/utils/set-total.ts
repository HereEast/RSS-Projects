import { getElement } from "./get-element";
import { Selector } from "../../types/types";
import { getCurrentView } from "./helpers";

export function setTotalCount(count: number | string): void {
  const view = getCurrentView();

  const countElement = getElement(Selector.CurrentCount);
  countElement.textContent = String(count);

  localStorage.setItem(`total--${view}`, String(count));
}

export function updateTotalCount(number: number): void {
  const view = getCurrentView();

  const countElement = getElement(Selector.CurrentCount);
  const newCount = `${Number(countElement.textContent) + number}`;

  countElement.textContent = newCount;
  localStorage.setItem(`total--${view}`, newCount);
}
