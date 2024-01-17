import { createElement } from "../utils/create-element";
import { createHeader } from "./header/header";
import { createEditorsBlock } from "./editors/editors";

//
export function createGameSection(): HTMLElement {
  const gameSection = createElement("section", ["section__game"]);

  const header = createHeader();
  const game = createElement("section", ["game"]);

  const taskTitle = createElement("h2", ["task__text"]);
  const graphicsContainer = createElement("div", ["graphics__container"]);
  const editorsBlock = createEditorsBlock();

  game.append(taskTitle, graphicsContainer, editorsBlock);
  gameSection.append(header, game);

  return gameSection;
}
