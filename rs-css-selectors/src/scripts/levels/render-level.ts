import { Levels } from "../../types/types";
import { highlightItem } from "./highlight-item";
import { updateLevelCount } from "./update-count";
import { updateTaskTitle } from "./task-title";
import { updateHTMLEditor } from "./html-content";
import { updateGraphics } from "./graphics";
import { setStatusIcon } from "./status-icon";
import { cleanInput } from "../reset/clean-input";
import { initHovers } from "../listeners";

// Render level
export function renderSelectedLevel(id: string, data: Levels): void {
  document.body.className = `level--${id}`;

  highlightItem(id);
  updateLevelCount(id);
  setStatusIcon(id);

  updateTaskTitle(id, data);
  updateHTMLEditor(id, data);
  updateGraphics(id, data);

  cleanInput();
  initHovers();
}
