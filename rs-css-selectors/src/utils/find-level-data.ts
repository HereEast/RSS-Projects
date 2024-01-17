import { LevelData } from "../types/types";
import { levelsData } from "../data/levels-data";

export function findLevelData(levelID: string): LevelData {
  const data = levelsData.find((data) => data.id === levelID);

  if (!data) {
    throw Error("Couldn't find level data...");
  }

  return data;
}
