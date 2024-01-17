import { levelsData } from "../../data/levels-data";
import { Info } from "../../types/enums";
import { renderSelectedLevel } from "./render-level";
import { saveLevelID } from "../localStorage/save-level-id";
import { getCurrentLevelID } from "../localStorage/get-current-id";

// Next
export function nextLevel(): void {
  const currentID = getCurrentLevelID();

  let nextLevelID = Number(currentID) + 1;
  if (nextLevelID > Info.TotalLevels) nextLevelID = 1;

  renderSelectedLevel(String(nextLevelID), levelsData);
  saveLevelID(String(nextLevelID));
}
