import { ButtonName, Info } from "../../types/enums";
import { createElement } from "../../utils/create-element";
import { getCurrentLevelID } from "../../scripts/localStorage/get-current-id";

// Levels header
export function createLevelsHeader(): HTMLElement {
  const header = createElement("div", ["levels__header"]);

  const buttonPrev = `
    <button class='button levels__button button--prev'>
      <span>${ButtonName.Prev}</span>
    </button>
    `;

  const buttonNext = `
    <button class='button levels__button button--next'>
      <span>${ButtonName.Next}</span>
    </button>
    `;

  const currentID = getCurrentLevelID();

  const headerContent = `
    <div class="header__container">
      <div class="header__data"">
        <h3>Level</h3>
        <span class="header__data--level">${currentID}/${Info.TotalLevels}</span>
      </div>
      <div class="header__buttons">
        ${buttonPrev}
        ${buttonNext}
      </div>
    </div>
  `;

  header.insertAdjacentHTML("afterbegin", headerContent);

  return header;
}
