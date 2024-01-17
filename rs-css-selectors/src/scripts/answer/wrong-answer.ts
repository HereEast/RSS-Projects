import { Selector, Animation } from "../../types/enums";
import { getElement } from "../../utils/get-element";

export function handleWrongAnswer(): void {
  const blockEditors = getElement(Selector.BlockEditors);

  blockEditors.classList.add(Animation.Shake);
  setTimeout(() => blockEditors.classList.remove(Animation.Shake), 500);
}
