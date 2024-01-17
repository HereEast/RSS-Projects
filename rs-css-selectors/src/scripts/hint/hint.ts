import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getCurrentLevelID } from "../localStorage/get-current-id";
import { typeAnswer } from "./type-answer";
import { findLevelData } from "../../utils/find-level-data";

export function handleHint(): void {
  const input = getElement(Selector.Input);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Target is not an HTMLInputElement...");
  }

  const currentID = getCurrentLevelID();
  const levelData = findLevelData(currentID);
  const answer = levelData ? levelData.answer : "";

  if (answer) {
    typeAnswer(answer);
  } else {
    throw Error("Failed to find this level answer...");
  }

  input.dataset.hint = "hint";
}
