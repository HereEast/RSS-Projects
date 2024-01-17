import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getTarget } from "../../utils/get-target";

// Hide
export function hidePanel(e: Event): void {
  if (window.innerWidth > 980) return;

  const target = getTarget(e);
  if (target.closest(Selector.ShowLevelsBtn)) return;

  const levelsPanel = getElement(Selector.LevelsPanel);
  const isPanelOpened = levelsPanel?.classList.contains("panel--visible");

  if (!isPanelOpened) return;

  if (!target.closest(Selector.LevelsPanel) || target.closest(Selector.HideLevelsBtn)) {
    levelsPanel?.classList.remove("panel--visible");
  }
}
