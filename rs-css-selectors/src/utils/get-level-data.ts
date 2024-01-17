import { Levels } from "../types/types";
import { LevelData } from "../types/types";

export function getLevelData(id: string, levelsData: Levels): LevelData {
  const levelData = levelsData.find((data) => data.id === id);
  if (!levelData) throw Error("Level is not found...");

  return levelData;
}
