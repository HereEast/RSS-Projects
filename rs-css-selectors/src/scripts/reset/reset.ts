import { saveLevelID } from "../localStorage/save-level-id";
import { cleanSavedResults } from "./clean-results";
import { renderSelectedLevel } from "../levels/render-level";
import { levelsData } from "../../data/levels-data";
import { cleanInput } from "./clean-input";
import { cleanStatusIcons } from "./clean-icons";

export function resetGame(): void {
  cleanSavedResults();
  saveLevelID("1");
  renderSelectedLevel("1", levelsData);
  cleanInput();
  cleanStatusIcons();
}
