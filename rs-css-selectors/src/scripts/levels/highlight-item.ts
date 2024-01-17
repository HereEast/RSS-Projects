import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";

// Highlight item
export function highlightItem(id: string): void {
  const selectedLevel = document.querySelector(`[data-id="${id}"]`);
  const levelItems = getElementsArray(Selector.LevelItem);

  levelItems.forEach((item) => item.classList.remove("level--current"));
  selectedLevel?.classList.add("level--current");
}
