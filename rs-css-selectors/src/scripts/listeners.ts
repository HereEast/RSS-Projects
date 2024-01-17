import { Selector } from "../types/enums";
import { getElement } from "../utils/get-element";
import { showPanel } from "./side-panel/show-panel";
import { hidePanel } from "./side-panel/hide-panel";
import { handleLevelSelect } from "./levels/select-level";
import { nextLevel } from "./levels/next-level";
import { prevLevel } from "./levels/prev-level";
import { handleAnswer } from "./answer/handle-answer";
import { handleInputFocus } from "./answer/handle-input-focus";
import { resetGame } from "./reset/reset";
import { handleAnswerOnEnter } from "./answer/handle-enter";
import { handleClosePopup } from "./popup/close-popup";
import { handleHint } from "./hint/hint";
import { handleShapesHover } from "./hover/shapes-hover";
import { handleHTMLHover } from "./hover/html-hover";
import { removeHoverStates } from "./hover/remove-hovers";

export function initListeners(): void {
  const showLevelsButton = getElement(Selector.ShowLevelsBtn);
  const levelsContainer = getElement(Selector.LevelsContainer);
  const nextLevelButton = getElement(Selector.NextLevelButton);
  const prevLevelButton = getElement(Selector.PrevLevelButton);
  const checkButton = getElement(Selector.CheckButton);
  const input = getElement(Selector.Input);
  const resetButton = getElement(Selector.ResetButton);
  const closePopupButton = getElement(Selector.PopupCloseButton);
  const hintButton = getElement(Selector.HintButton);

  showLevelsButton.addEventListener("click", showPanel);
  window.addEventListener("click", hidePanel);
  levelsContainer.addEventListener("click", handleLevelSelect);
  nextLevelButton.addEventListener("click", nextLevel);
  prevLevelButton.addEventListener("click", prevLevel);
  checkButton.addEventListener("click", handleAnswer);
  window.addEventListener("keydown", handleAnswerOnEnter);
  input.addEventListener("blur", handleInputFocus);
  resetButton.addEventListener("click", resetGame);
  closePopupButton.addEventListener("click", handleClosePopup);
  hintButton.addEventListener("click", handleHint);

  initHovers();
}

export function initHovers(): void {
  const playground = getElement(Selector.Playground);
  const HTMLContent = getElement(Selector.HTMLEditorContentContainer);

  playground.addEventListener("mouseover", handleShapesHover);
  HTMLContent.addEventListener("mouseover", handleHTMLHover);
  HTMLContent.addEventListener("mouseout", removeHoverStates);
}
