import { createButton, createElement } from "../../../utils/create-element";
import { Button, Selector } from "../../../../types/types";
import { sortWinners } from "../sort/sort-table";

export function createTableHeader(): HTMLElement {
  const header = createElement("div", [Selector.TableHeader]);

  const num = createElement("span", [Selector.RowNumber], "#");
  const color = createElement("span", [Selector.RowColor], "Color");

  const nameContainer = createElement("div", [Selector.RowCar]);
  const nameSpan = createElement("span", [], "Car");

  const winsContainer = createElement("div", [Selector.RowWins]);
  const winsSpan = createElement("span", [], "Wins");
  const buttonSortWins = createButton(Button.SortWin, [Selector.ButtonSortWins]);
  buttonSortWins.textContent = "";

  const timeContainer = createElement("div", [Selector.RowTime]);
  const timeSpan = createElement("span", [], "Time");
  const buttonSortTime = createButton(Button.SortTime, [Selector.ButtonSortTime]);
  buttonSortTime.textContent = "";

  buttonSortTime.addEventListener("click", async () => {
    await sortWinners("time");
  });

  buttonSortWins.addEventListener("click", async () => {
    await sortWinners("wins");
  });

  nameContainer.append(nameSpan);
  winsContainer.append(winsSpan, buttonSortWins);
  timeContainer.append(timeSpan, buttonSortTime);

  header.append(num, color, nameContainer, winsContainer, timeContainer);

  return header;
}
