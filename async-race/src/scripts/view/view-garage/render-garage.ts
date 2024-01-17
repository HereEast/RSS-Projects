import { View } from "../../../types/types";
import { getCarsAPI } from "../../api/cars-api";
import { toggleElements } from "../toggle/toggle-elements";
import { getCurrentPage } from "../../utils/pagination-helpers";
import { setPagination } from "../pagination/page-utils";
import { saveCurrentView, getCurrentView } from "../../utils/helpers";
import { setTotalCount } from "../../utils/set-total";
import { appendTracks } from "./tracks/append-tracks";
import { generateCars } from "./handle-generate/handle-generate";

export async function updateGarage(page: number): Promise<void> {
  const cars = await getCarsAPI(page);

  if (!cars.count) {
    await generateCars(1);
  }

  appendTracks(cars);
  setTotalCount(cars.count);
  setPagination(page);
}

export async function renderGarageView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Garage) return;

  saveCurrentView(View.Garage);
  toggleElements(View.Garage);

  const page = getCurrentPage();
  await updateGarage(page);

  console.log("🙂 Garage View");
}
