import { getCurrentLevelID } from "../../scripts/localStorage/get-current-id";
import { getSavedStatus } from "../../scripts/localStorage/get-saved-status";
import { ButtonName, Info } from "../../types/enums";
import { createElement } from "../../utils/create-element";

// Level
export function createHeaderLevelInfo(): HTMLElement {
  const buttonLevels = createElement("button", ["button", "button--levels"], ButtonName.Levels);

  const currentID = getCurrentLevelID();
  const savedStatus = getSavedStatus(currentID);

  const levelInfo = createElement("div", ["header__levels", `level--${savedStatus}`]);

  const infoContainer = createElement("div", ["level__info"]);
  const statusSpan = createElement("span", ["level__status"]);
  const levelSpan = createElement("span", ["header__data--level"]);

  levelSpan.textContent = `${currentID}/${Info.TotalLevels}`;

  infoContainer.append(statusSpan, levelSpan);
  levelInfo.append(infoContainer, buttonLevels);

  return levelInfo;
}
