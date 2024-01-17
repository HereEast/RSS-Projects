import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";

export function getGraphicElement(target: HTMLElement): HTMLElement {
  const attr = target.getAttribute("el");

  const elements = getElementsArray(Selector.ElementAttribute);
  const graphicElements = elements.filter((el) => el.closest(Selector.Playground));
  const graphicElement = graphicElements.find((el) => el.getAttribute("el") === attr);

  if (!graphicElement) throw Error("Graphic element isn't found...");

  return graphicElement;
}
