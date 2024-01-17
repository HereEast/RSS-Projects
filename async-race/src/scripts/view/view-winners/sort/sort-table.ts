import { SortOptions } from "../../../../types/types";
import { getCurrentPage } from "../../../utils/pagination-helpers";
import { getSortOrder, saveSortOption } from "./sort-params";
import { updateWinners } from "../render-winners";

// Sort winners
export async function sortWinners(sortOpt: SortOptions): Promise<void> {
  const { sort, order } = getSortOrder(sortOpt);

  const newOrder = order === "DESC" ? "ASC" : "DESC";
  const page = getCurrentPage();

  saveSortOption(sort, newOrder);
  await updateWinners({ page, sort, order: newOrder });
}
