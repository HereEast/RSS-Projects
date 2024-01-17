import "./styles/index.css";
import { renderApp } from "./scripts/components/app";
import { initListeners } from "./scripts/listeners";
import { renderGarageView } from "./scripts/view/view-garage/render-garage";

renderApp();
renderGarageView();

window.addEventListener("DOMContentLoaded", (): void => {
  initListeners();
});
