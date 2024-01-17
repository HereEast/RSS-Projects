import { getTarget } from "../../utils/get-target";
import { removeHoverStates } from "./remove-hovers";
import { getHTMLLineTarget } from "./get-html-by-attr";
import { highlightHTML } from "./highlight-html";
import { showTooltip } from "./show-tooltip";

export function handleShapesHover(e: MouseEvent): void {
  const target = getTarget(e);
  if (target.classList.contains("playground")) return;

  showTooltip(target);

  const targetLine = getHTMLLineTarget(target);
  highlightHTML(targetLine);

  target.addEventListener("mouseout", removeHoverStates);
}
