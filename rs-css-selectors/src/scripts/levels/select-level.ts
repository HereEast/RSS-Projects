import { Selector } from "../../types/enums";
import { getTarget } from "../../utils/get-target";
import { getClosestElement } from "../../utils/get-element";
import { levelsData } from "../../data/levels-data";
import { saveLevelID } from "../localStorage/save-level-id";
import { renderSelectedLevel } from "./render-level";

// Select level
export function handleLevelSelect(e: Event): void {
  const target = getTarget(e);
  const selectedLevel = getClosestElement(target, Selector.DatasetID);

  const levelID = selectedLevel.dataset.id;
  if (!levelID) throw Error("Level ID is not defined...");

  renderSelectedLevel(levelID, levelsData);
  saveLevelID(levelID);
}
