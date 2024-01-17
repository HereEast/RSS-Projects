import { LevelStatus, Info } from "../../types/enums";

export function isWin(): boolean {
  const savedResults = window.localStorage.getItem("results");
  const results = savedResults ? JSON.parse(savedResults) : {};

  const wins = Object.values(results).filter((status) => status === LevelStatus.Done || status === LevelStatus.Hint);

  return wins.length === Info.TotalLevels;
}
