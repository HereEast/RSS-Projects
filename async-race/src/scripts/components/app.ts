import { createHeader } from "./header/header";
import { createFooter } from "./footer/footer";
import { createMain } from "./main/main";
import { createWinPopup } from "./main/popup/popup";

export function renderApp(): void {
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();
  const popup = createWinPopup();

  document.body.append(header, main, footer, popup);
}
