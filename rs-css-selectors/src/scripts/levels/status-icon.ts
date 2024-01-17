import { LevelStatus, Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getSavedStatus } from "../localStorage/get-saved-status";

export function setStatusIcon(id: string, status?: LevelStatus): void {
  const levelStatus = status ? status : getSavedStatus(id);

  setHeaderStatusIcon(id, `level--${levelStatus}`);
  setPanelStatusIcon(id, `level--${levelStatus}`);
}

// Panel
function setPanelStatusIcon(id: string, status: string): void {
  const listItem = document.querySelector(`[data-id="${id}"]`);

  const currentClasses = listItem ? [...listItem.classList] : null;

  currentClasses?.forEach((item) => {
    if (item.includes("level--undefined") || item.includes("level--done") || item.includes("level--hint")) {
      listItem?.classList.remove(item);
    }
  });

  listItem?.classList.add(status);
}

// Header
function setHeaderStatusIcon(id: string, status: string): void {
  const headerElement = getElement(Selector.HeaderLevelInfo);

  const currentClasses = [...headerElement.classList];

  currentClasses.forEach((item) => {
    if (item.includes("level--")) {
      headerElement.classList.remove(item);
    }
  });

  headerElement.classList.add(status);
}
