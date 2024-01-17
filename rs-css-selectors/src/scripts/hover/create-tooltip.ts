import { createElement } from "../../utils/create-element";
import { createTooltipText } from "./tooltip-text";

export function createTooltip(target: HTMLElement): HTMLElement {
  const rect = target.getBoundingClientRect();
  const x = rect.left;

  const tooltip = createElement("span", ["tooltip"]);
  tooltip.textContent = createTooltipText(target);

  tooltip.style.left = x + "px";
  tooltip.style.top = "12%";

  return tooltip;
}
