import { getElement, getFormInputs, getTarget } from "../../../utils/get-element";
import { Selector, Car } from "../../../../types/types";

export function setUpdateInputs(car: Car): void {
  const { inputText, inputColor } = getFormInputs(Selector.FormUpdate);

  inputText.value = car.name;
  inputColor.value = car.color;
}

export function showUpdateForm(car: Car): void {
  setUpdateInputs(car);

  console.log(car); // Current values

  const form = getElement(Selector.FormUpdate);

  form.classList.add(Selector.FormUpdateOpen.slice(1));
  form.dataset.editId = String(car.id);
}

export function hideUpdateForm(e: Event): void {
  const target = getTarget(e);

  if (target.classList.contains("button__edit")) return;
  if (!(target.tagName === "BUTTON")) return;

  const form = getElement(Selector.FormUpdate);
  form.classList.remove(Selector.FormUpdateOpen.slice(1));
}
