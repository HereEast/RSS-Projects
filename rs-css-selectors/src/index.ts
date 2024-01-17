import "./styles/index.css";
import { renderApp } from "./components/app";
import { initListeners } from "./scripts/listeners";
import { renderSelectedLevel } from "./scripts/levels/render-level";
import { levelsData } from "./data/levels-data";

renderApp();

window.addEventListener("DOMContentLoaded", (): void => {
  const savedID = window.localStorage.getItem("level") ?? "1";
  renderSelectedLevel(savedID, levelsData);

  initListeners();
});
