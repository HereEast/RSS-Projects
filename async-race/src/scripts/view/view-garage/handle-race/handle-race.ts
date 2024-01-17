import { getTargetID } from "../../../utils/helpers";
import { stopCarAPI } from "../../../api/drive-api";
import { getElement } from "../../../utils/get-element";
import { toggleControls, disableButtons, getCarsIds, moveToStart, cleanWinner } from "./helpers";
import { startAnimation, animation, race } from "./animation";
import { Button, Selector } from "../../../../types/types";
import { getCurrentPage } from "../../../utils/pagination-helpers";
import { updateGarage } from "../render-garage";
import { togglePageButtons } from "../../pagination/page-utils";
import { hidePopup } from "../popup/show-popup";

export async function handleStart(e: Event): Promise<void> {
  const id = getTargetID(e);
  const car = getElement(`#car--${id}`);

  const isCarDriving = car.classList.contains(Selector.CarDriving.slice(1));
  if (isCarDriving) return;

  car.classList.add(Selector.CarDriving.slice(1));

  startAnimation(id);
  toggleControls(e);
}

export async function stopCar(id: number): Promise<void> {
  const car = getElement(`#car--${id}`);
  car.style.transform = "translate(0px)";

  await stopCarAPI(id);
  car.classList.remove(Selector.CarDriving.slice(1));
}

export async function handleStop(e: Event): Promise<void> {
  const id = Number(getTargetID(e));

  cancelAnimationFrame(animation.id);
  await stopCar(id);

  toggleControls(e);
}

export async function handleReset(e: Event): Promise<void> {
  e.preventDefault();

  cleanWinner();
  moveToStart();
  cancelAnimationFrame(animation.id);

  const buttons = [Button.Race, Button.Create, Button.Generate];
  disableButtons(buttons, false);

  const page = getCurrentPage();
  await updateGarage(page);
}

export async function handleRace(e: Event): Promise<void> {
  e.preventDefault();

  cleanWinner();
  moveToStart();
  cancelAnimationFrame(animation.id);

  race.isRace = true;

  const buttons = [Button.Race, Button.Start, Button.Edit, Button.Delete, Button.Page, Button.Create, Button.Generate];

  disableButtons(buttons, true);

  const ids = getCarsIds();

  const allRaceCars = ids.map(async (id) => {
    const result = await startAnimation(id);
    return result;
  });

  await Promise.all(allRaceCars);

  hidePopup();
  disableButtons(buttons, false);
  togglePageButtons();

  race.isRace = false;
}
