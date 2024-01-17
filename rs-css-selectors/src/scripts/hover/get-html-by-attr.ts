import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";

export function getHTMLLineTarget(target: HTMLElement): HTMLElement {
  const attr = target.getAttribute("el");

  const lines = getElementsArray(Selector.HTMLLine);
  const targetLine = lines.find((line) => line.getAttribute("el") === attr);

  if (!targetLine) throw Error("HTML line element is not found...");

  return targetLine;
}
