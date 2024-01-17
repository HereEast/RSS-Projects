import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";
import { highlightFromStart, highlightFromEnd } from "./highlight-html-blocks";

export function highlightHTML(target: HTMLElement): void {
  const lines = getElementsArray(Selector.HTMLLine);

  lines.forEach((line) => line.classList.remove("highlight"));

  const tagName = target.innerText.slice(1, -1);

  if (!tagName.includes("/")) highlightFromStart(target, lines);
  if (tagName.startsWith("/")) highlightFromEnd(target, lines);

  target.classList.add("highlight");
}
