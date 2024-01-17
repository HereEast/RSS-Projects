import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";

export function removeHoverStates(): void {
  const tooltips = getElementsArray(Selector.Tooltip);
  const lines = getElementsArray(Selector.HTMLLine);

  lines.forEach((line) => line.classList.remove("highlight"));
  tooltips.forEach((tooltip) => tooltip.remove());
}
