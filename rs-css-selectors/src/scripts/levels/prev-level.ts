import { levelsData } from "../../data/levels-data";
import { Info } from "../../types/enums";
import { renderSelectedLevel } from "./render-level";
import { saveLevelID } from "../localStorage/save-level-id";

// Prev
export function prevLevel(): void {
  const currentID = window.localStorage.getItem("level") || "1";

  let prevLevelID = Number(currentID) - 1;
  if (prevLevelID < 1) prevLevelID = Info.TotalLevels;

  renderSelectedLevel(String(prevLevelID), levelsData);
  saveLevelID(String(prevLevelID));
}
