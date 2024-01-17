import { getElement } from "../../utils/get-element";
import { Selector } from "../../types/enums";
import { createTooltip } from "./create-tooltip";

export function showTooltip(target: HTMLElement): void {
  const playground = getElement(Selector.Playground);
  const tooltip = createTooltip(target);

  playground.append(tooltip);
}
