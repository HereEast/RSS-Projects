import { LevelStatus } from "../../types/enums";

export function saveStatus(id: string, status: LevelStatus): void {
  const savedResults = window.localStorage.getItem("results");
  const results = savedResults ? JSON.parse(savedResults) : {};

  results[id] = status;
  window.localStorage.setItem("results", JSON.stringify(results));
}
