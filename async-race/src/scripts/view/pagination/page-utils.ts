import { GARAGE_LIMIT, WINNERS_LIMIT } from "../../api/constants";
import { getElement } from "../../utils/get-element";
import { Selector, View, Button } from "../../../types/types";
import { isLastPage, getCurrentPage } from "../../utils/pagination-helpers";
import { disableButton } from "../view-garage/handle-race/helpers";
import { getCurrentView } from "../../utils/helpers";

export function getTotalPages(): number {
  const view = getCurrentView();

  const totalItems = Number(localStorage.getItem(`total--${view}`));
  const totalPages = view === View.Garage ? Math.ceil(totalItems / GARAGE_LIMIT) : Math.ceil(totalItems / WINNERS_LIMIT);

  return totalPages;
}

export function setTotalPages(): void {
  const view = getCurrentView();

  const totalPagesElement = getElement(Selector.TotalPages);
  const totalPages = String(getTotalPages());

  totalPagesElement.textContent = totalPages;
  localStorage.setItem(`${view}-totalPages`, totalPages);
}

export function setCurrentPage(page: number): void {
  const view = getCurrentView();

  const pageElement = getElement(Selector.CurrentPage);
  const newPage = page || 1;

  pageElement.textContent = String(newPage);
  localStorage.setItem(`${view}-page`, String(newPage));
}

export function togglePageButtons(): void {
  disableButton(Button.Page, false);

  if (getCurrentPage() === 1) {
    disableButton(Button.Prev, true);
  }

  if (isLastPage()) {
    disableButton(Button.Next, true);
  }
}

export function setPagination(page: number): void {
  setCurrentPage(page);
  setTotalPages();
  togglePageButtons();
}
