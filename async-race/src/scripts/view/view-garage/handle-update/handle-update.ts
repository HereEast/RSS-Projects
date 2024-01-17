import { Selector } from "../../../../types/types";
import { getFormInputs } from "../../../utils/get-element";
import { hideUpdateForm } from "./handle-form";
import { updateCarAPI } from "../../../api/cars-api";
import { updateCarUI } from "./update-car-ui";
import { getSelectedCar } from "./get-selected-car";

export async function handleUpdate(e: Event): Promise<void> {
  e.preventDefault();

  const { inputText, inputColor } = getFormInputs(Selector.FormUpdate);
  const selectedCar = getSelectedCar();

  if (!inputText.value.trim()) {
    inputText.focus();
    return;
  }

  if (inputText.value === selectedCar.name && inputColor.value === selectedCar.color) {
    hideUpdateForm(e);
    return;
  }

  const id = selectedCar.id;

  const patch = {
    name: inputText.value,
    color: inputColor.value,
  };

  await updateCarAPI(id, patch);

  updateCarUI(id, patch);
  hideUpdateForm(e);
}
