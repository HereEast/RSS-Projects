import { getTargetID } from "../../../utils/helpers";
import { getCarAPI } from "../../../api/cars-api";
import { showUpdateForm, hideUpdateForm } from "./handle-form";

export async function startUpdate(e: Event): Promise<void> {
  const id = getTargetID(e);
  const car = await getCarAPI(id);

  showUpdateForm(car);
  localStorage.setItem("editItem", JSON.stringify(car));
}

export function cancelUpdate(e: Event): void {
  e.preventDefault();

  hideUpdateForm(e);
  localStorage.setItem("editItem", "");
}
