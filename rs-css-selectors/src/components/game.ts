import { createElement } from "../utils/element";
import { createHeader } from "./header";
import { createTaskBlock } from "./task";
import { createEditorsBlock } from "./editors";

//
export function createGameSection(): HTMLElement {
  const gameSection = createElement("section", ["main__section", "section__game"]);
  const header = createHeader();

  const game = createElement("section", ["game"]);
  const taskBlock = createTaskBlock();
  const editorsBlock = createEditorsBlock();

  game.append(taskBlock, editorsBlock);
  gameSection.append(header, game);

  return gameSection;
}
