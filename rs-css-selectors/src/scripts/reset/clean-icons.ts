import { Selector } from "../../types/enums";
import { getElementsArray } from "../../utils/get-element";

export function cleanStatusIcons(): void {
  const levelItems = getElementsArray(Selector.LevelItem);

  levelItems.forEach((item) => {
    item.classList.remove("level--done");
    item.classList.remove("level--hint");
  });
}
