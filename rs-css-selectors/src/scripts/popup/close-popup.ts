import { Selector } from "../../types/enums";
import { getTarget } from "../../utils/get-target";
import { getElement } from "../../utils/get-element";
import { resetGame } from "../reset/reset";

// Close popup
export function handleClosePopup(e: Event): void {
  const popupContainer = getElement(Selector.PopupContainer);
  const button = getTarget(e);

  if (!(button instanceof HTMLButtonElement) && !button.classList.contains("button--close-popup")) return;

  popupContainer.classList.remove("show-popup");
  document.body.style.overflow = "";

  resetGame();
}
