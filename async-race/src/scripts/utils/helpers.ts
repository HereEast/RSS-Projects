import { getElement, getClosest, getTarget } from "./get-element";
import { Selector } from "../../types/types";

export function cleanContent(element?: HTMLElement): void {
  const parentElement = element || getElement(Selector.ViewBody);

  [...parentElement.children].forEach((child) => {
    child.remove();
  });
}

export function getRandomIndex<T>(array: Array<T>): number {
  const index = Math.floor(Math.random() * array.length);
  return index;
}

export function toggleDisable(button: HTMLElement | HTMLButtonElement): void {
  const buttonElement = button;

  if (buttonElement instanceof HTMLButtonElement) {
    buttonElement.disabled = !buttonElement.disabled;
  }
}

export function getTargetID(e: Event): string {
  const target = getTarget(e);
  const track = getClosest(target, Selector.Track);
  const id = track.id.split("--").at(-1);

  if (!id) {
    throw Error("Couldn't get target ID...");
  }

  return id;
}

export function saveCurrentView(currentView = "garage"): void {
  document.body.className = "";
  document.body.classList.add(currentView);

  localStorage.setItem("view", currentView);
}

export function getCurrentView(): string {
  return window.localStorage.getItem("view") ?? "";
}
