import { SortOptions, OrderOptions } from "../../../../types/types";

// Get sort order
export function getSortOrder(sortOption: SortOptions): { sort: SortOptions; order: OrderOptions } {
  const order = localStorage.getItem(`sort--${sortOption}`) || "DESC";

  return { sort: sortOption, order };
}

// Save sort options
export function saveSortOption(sortOption: SortOptions, sortOrder: OrderOptions): void {
  localStorage.setItem(`sort--${sortOption}`, sortOrder);
  localStorage.setItem("currentSort", sortOption);
}

// Get current sort
export function getCurrentSort(): SortOptions {
  const sort = localStorage.getItem("currentSort") || "id";

  return sort;
}
