import { Button, Selector } from "../../../../types/types";
import { createElement, createButton } from "../../../utils/create-element";
import { deleteCarAPI } from "../../../api/cars-api";
import { updateGarage } from "../render-garage";
import { getTargetID } from "../../../utils/helpers";
import { startUpdate } from "../handle-update/start-update";
import { getCurrentPage, isLastTrack } from "../../../utils/pagination-helpers";
import { handleStart, handleStop } from "../handle-race/handle-race";
import { hideUpdateForm } from "../handle-update/handle-form";
import { deleteWinnerAPI } from "../../../api/winners-api";

export async function handleDelete(e: Event): Promise<void> {
  if (getCurrentPage() === 1 && isLastTrack()) return;

  const id = getTargetID(e);

  await deleteCarAPI(id);
  await deleteWinnerAPI(id);

  const currentPage = getCurrentPage();
  const page = isLastTrack() ? currentPage - 1 : currentPage;
  await updateGarage(page);

  hideUpdateForm(e);
  console.log("Delete");
}

export function createTrackButtons(): HTMLElement {
  const trackButtons = createElement("div", [Selector.TrackButtons]);

  const startBtn = createButton(Button.Start, [Selector.ButtonTrack, Selector.ButtonStart]);
  const stopBtn = createButton(Button.Stop, [Selector.ButtonTrack, Selector.ButtonStop]);
  const editBtn = createButton(Button.Edit, [Selector.ButtonTrack, Selector.ButtonEdit]);
  const deleteBtn = createButton(Button.Delete, [Selector.ButtonTrack, Selector.ButtonDelete]);

  editBtn.addEventListener("click", async (e) => {
    await startUpdate(e);
  });

  deleteBtn.addEventListener("click", async (e) => {
    await handleDelete(e);
  });

  startBtn.addEventListener("click", async (e) => {
    await handleStart(e);
  });

  stopBtn.addEventListener("click", async (e) => {
    await handleStop(e);
  });

  stopBtn.disabled = true;

  trackButtons.append(startBtn, stopBtn, editBtn, deleteBtn);
  return trackButtons;
}
