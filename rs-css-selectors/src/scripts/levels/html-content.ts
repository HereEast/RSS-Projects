import { Levels } from "../../types/types";
import { Selector } from "../../types/enums";
import { Entity } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getLevelData } from "../../utils/get-level-data";

// HTML editor content
export function updateHTMLEditor(id: string, levelsData: Levels): void {
  const contentContainer = getElement(Selector.HTMLEditorContentContainer);
  const levelData = getLevelData(id, levelsData);

  let editorContent = "";

  const tagsArray = levelData.code
    .split("\n")
    .map((str) => str.trim())
    .filter((str) => str.length);

  // Create tag lines
  tagsArray.forEach((tag) => {
    const idx = tag.indexOf("el");
    const attr = tag.slice(idx, idx + 6);

    const tagString = tag
      .replace("<", Entity.Less)
      .replace(">", Entity.Greater)
      .replace(/ el="\d"/, "");

    editorContent += `<div ${attr} class="tag-line">${tagString}</div>`;
  });

  contentContainer.innerHTML = "";
  contentContainer.insertAdjacentHTML("afterbegin", editorContent);
}
