import { createElement } from "../../utils/create-element";
import { createLevelsHeader } from "./levels-header";
import { createLevelsBody } from "./levels-body";
import { ButtonName } from "../../types/enums";

// Levels
export function createLevelsSection(): HTMLElement {
  const levelsPanel = createElement("section", ["section__levels"]);

  const header = createLevelsHeader();
  const body = createLevelsBody();

  const buttonClose = `
    <div class="button__container">
      <button class="button button--hide">${ButtonName.Close}</button>
    </div>
  `;

  levelsPanel.append(header, body);
  levelsPanel.insertAdjacentHTML("beforeend", buttonClose);

  return levelsPanel;
}
