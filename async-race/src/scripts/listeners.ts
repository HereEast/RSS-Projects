import { Selector } from "../types/types";
import { getElement } from "./utils/get-element";
import { renderGarageView } from "./view/view-garage/render-garage";
import { renderWinnersView } from "./view/view-winners/render-winners";
import { handleCreateCar } from "./view/view-garage/handle-create/handle-create";
import { cancelUpdate } from "./view/view-garage/handle-update/start-update";
import { handleUpdate } from "./view/view-garage/handle-update/handle-update";
import { handleGenerate } from "./view/view-garage/handle-generate/handle-generate";
import { handleReset, handleRace } from "./view/view-garage/handle-race/handle-race";
import { handlePagination } from "./view/pagination/handle-pagination";

export function initPagination(): void {
  const buttonPrev = getElement(Selector.ButtonPrev);
  const buttonNext = getElement(Selector.ButtonNext);

  buttonPrev.addEventListener("click", handlePagination);
  buttonNext.addEventListener("click", handlePagination);
}

export function initListeners(): void {
  const buttonGarage = getElement(Selector.ButtonGarage);
  const buttonWinners = getElement(Selector.ButtonWinners);
  const buttonCreate = getElement(Selector.ButtonCreate);
  const buttonCancelEdit = getElement(Selector.ButtonCancel);
  const buttonUpdate = getElement(Selector.ButtonUpdate);
  const buttonGenerate = getElement(Selector.ButtonGenerate);
  const buttonReset = getElement(Selector.ButtonReset);
  const buttonRace = getElement(Selector.ButtonRace);

  buttonGarage.addEventListener("click", renderGarageView);
  buttonWinners.addEventListener("click", renderWinnersView);
  buttonCreate.addEventListener("click", handleCreateCar);
  buttonCancelEdit.addEventListener("click", cancelUpdate);
  buttonUpdate.addEventListener("click", handleUpdate);
  buttonGenerate.addEventListener("click", handleGenerate);
  buttonReset.addEventListener("click", handleReset);
  buttonRace.addEventListener("click", handleRace);

  initPagination();
}
