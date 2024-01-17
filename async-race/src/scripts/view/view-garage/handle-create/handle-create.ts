import { Selector } from "../../../../types/types";
import { getFormInputs } from "../../../utils/get-element";
import { createCarAPI } from "../../../api/cars-api";
import { setTotalPages, togglePageButtons } from "../../pagination/page-utils";
import { updateTotalCount } from "../../../utils/set-total";
import { appendTrack } from "../tracks/append-tracks";
import { isLastPage, isEnoughSpace } from "../../../utils/pagination-helpers";

export async function handleCreateCar(e: Event): Promise<void> {
  e.preventDefault();

  const { inputText, inputColor } = getFormInputs(Selector.FormCreate);

  const name = inputText.value;
  const color = inputColor.value;

  if (!name) {
    inputText.focus();
    return;
  }

  const newCar = await createCarAPI({ name, color });

  if (isLastPage() && isEnoughSpace()) {
    appendTrack(newCar);
  }

  updateTotalCount(1);
  setTotalPages();
  togglePageButtons();

  inputText.value = "";
}
