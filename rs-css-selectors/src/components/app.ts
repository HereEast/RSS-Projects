import { createFooter } from "./footer";
import { createMain } from "./main";
import { createWinPopup } from "./popup/popup-win";

export function renderApp(): void {
  const main = createMain();
  const footer = createFooter();
  const popup = createWinPopup();

  document.body.append(main, footer, popup);
}
