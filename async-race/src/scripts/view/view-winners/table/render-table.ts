import { Selector, Winner } from "../../../../types/types";
import { getCarAPI } from "../../../api/cars-api";
import { createElement } from "../../../utils/create-element";
import { getElement } from "../../../utils/get-element";
import { cleanContent } from "../../../utils/helpers";
import { createTableHeader } from "./table-header";
import { createRow } from "./table-row";
import { orderRows } from "./order-numbers";
import { updateTotalCount } from "../../../utils/set-total";

export async function appendRows(winners: Winner[]): Promise<HTMLElement> {
  const rowsContainer = createElement("div", [Selector.RowsContainer]);

  winners.forEach(async (winner) => {
    const car = await getCarAPI(String(winner.id));

    if (!car.id) {
      updateTotalCount(-1);
      return;
    }

    const props = {
      color: car.color,
      name: car.name,
      id: car.id,
      win: winner.win,
      time: Number((winner.time / 1000).toFixed(2)),
    };

    const row = createRow(props);
    rowsContainer.append(row);
  });

  return rowsContainer;
}

export async function renderWinnersTable(winners: Winner[]): Promise<HTMLElement> {
  const viewBody = getElement(Selector.ViewBody);
  cleanContent(viewBody);

  const table = createElement("div", [Selector.Table]);
  const tableHeader = createTableHeader();
  const rows = await appendRows(winners);

  orderRows();

  table.append(tableHeader, rows);
  viewBody.append(table);

  return viewBody;
}
