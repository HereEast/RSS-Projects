import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";

export function showPopup(): void {
  const popupContainer = getElement(Selector.PopupContainer);

  popupContainer.classList.add("show-popup");
  document.body.style.overflow = "hidden";
}
