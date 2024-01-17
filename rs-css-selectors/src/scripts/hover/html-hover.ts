import { getTarget } from "../../utils/get-target";
import { removeHoverStates } from "./remove-hovers";
import { highlightHTML } from "./highlight-html";
import { getGraphicElement } from "./get-graphics-by-attr";
import { showTooltip } from "./show-tooltip";

export function handleHTMLHover(e: MouseEvent): void {
  const target = getTarget(e);
  if (target.textContent?.includes("div")) return;

  highlightHTML(target);

  const graphicElement = getGraphicElement(target);
  showTooltip(graphicElement);

  target.addEventListener("mouseout", removeHoverStates);
}
