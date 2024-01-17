import { RaceData } from "../../../../types/types";
import { driveCarAPI } from "../../../api/drive-api";
import { getDriveTime, getDistance } from "./helpers";
import { getElement } from "../../../utils/get-element";
import { handleWinner } from "../../view-winners/handle-win";

export const animation = {
  id: 0,
};

export const race: RaceData = {
  winner: {
    id: "",
    time: 0,
  },
  isRace: false,
};

export async function controlDrive(id: string): Promise<boolean> {
  const { success } = await driveCarAPI(Number(id));

  if (success) {
    console.log("Finish!", id);
    cancelAnimationFrame(animation.id);
  } else {
    cancelAnimationFrame(animation.id);
  }

  return success;
}

export async function startAnimation(id: string): Promise<void> {
  const car = getElement(`#car--${id}`);

  const time = await getDriveTime(id);
  const dist = getDistance() - 40;
  const frameCount = (time / 1000) * 80;

  let startX = car.offsetLeft;
  const step = (dist - startX) / frameCount;

  function animate(): void {
    startX += step;
    car.style.transform = `translate(${startX}px)`;

    if (startX <= dist) {
      animation.id = requestAnimationFrame(animate);
    }

    if (startX >= dist) {
      if (!race.winner.id && race.isRace) {
        handleWinner(id, time);
      }

      car.style.transform = `translate(${dist}px)`;
    }
  }

  animate();
  await controlDrive(id);
}
