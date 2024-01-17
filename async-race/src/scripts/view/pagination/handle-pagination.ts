import { Selector, View } from "../../../types/types";
import { getTarget } from "../../utils/get-element";
import { getCurrentPage, isFirstPage, isLastPage } from "../../utils/pagination-helpers";
import { updateGarage } from "../view-garage/render-garage";
import { getCurrentSort, getSortOrder } from "../view-winners/sort/sort-params";
import { updateWinners } from "../view-winners/render-winners";
import { getCurrentView } from "../../utils/helpers";

export async function handlePagination(e: Event): Promise<void> {
  const target = getTarget(e);

  const isNextButton = target.id === Selector.ButtonNext.slice(1);
  const isPrevButton = target.id === Selector.ButtonPrev.slice(1);

  if ((isNextButton && isLastPage()) || (isPrevButton && isFirstPage())) return;

  const currentPage = getCurrentPage();
  const newPage = isNextButton ? currentPage + 1 : currentPage - 1;

  const view = getCurrentView();

  if (view === View.Garage) {
    await updateGarage(newPage);
  } else {
    const currentSort = getCurrentSort();
    const { sort, order } = getSortOrder(currentSort);

    await updateWinners({ page: newPage, sort, order });
  }
}
