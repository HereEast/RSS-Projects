import { LevelData } from "../../types/types";
import { Animation } from "../../types/enums";

// Add dance animation
export function addAnimation(levelData: LevelData): void {
  const selector = levelData.answer === "*" ? ".playground > *" : levelData.answer;
  const elements = [...document.querySelectorAll(selector)];

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) throw Error("Element is not an HTMLElement...");

    element.classList.add(Animation.Dance);
  });
}
