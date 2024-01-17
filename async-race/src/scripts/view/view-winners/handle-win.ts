import { race } from "../view-garage/handle-race/animation";
import { showPopup } from "../view-garage/popup/show-popup";
import { saveWinnerAPI, updateWinnerAPI, getWinnerAPI } from "../../api/winners-api";
import { Winner } from "../../../types/types";

export async function handleWinner(id: string, time: number): Promise<void> {
  if (race.winner.id) return;

  const props: Winner = {
    id: Number(id),
    win: 1,
    time: Number(Math.floor(time)),
  };

  const winnerInWinners = await getWinnerAPI(id);

  if (winnerInWinners.id) {
    let bestTime = 0;

    if (winnerInWinners.time > time) {
      bestTime = time;
    } else {
      bestTime = winnerInWinners.time;
    }

    const winCount = winnerInWinners.win + 1;

    await updateWinnerAPI(id, { win: winCount, time: bestTime });
  } else {
    await saveWinnerAPI(props);
  }

  race.winner.id = id;
  race.winner.time = time;

  showPopup(race.winner);
}
