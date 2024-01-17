import { WINNERS_URL, WINNERS_LIMIT } from "./constants";
import { Winner, WinnersData, SortParams } from "../../types/types";

export async function saveWinnerAPI(body: Winner): Promise<Winner> {
  const res = await fetch(`${WINNERS_URL}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const winner = await res.json();

  return winner;
}

export async function updateWinnerAPI(id: number | string, body: Partial<Winner>): Promise<Winner> {
  const res = await fetch(`${WINNERS_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const car = await res.json();

  return car;
}

export async function deleteWinnerAPI(id: string | number): Promise<void> {
  const res = await fetch(`${WINNERS_URL}/${id}`, {
    method: "DELETE",
  });

  const data = res.json();
  return data;
}

export async function getWinnersAPI({ page, sort = "id", order = "DESC" }: SortParams): Promise<WinnersData> {
  const url = `${WINNERS_URL}?_page=${page}&_limit=${WINNERS_LIMIT}&_sort=${sort}&_order=${order}`;

  const res = await fetch(url);
  const winners: Winner[] = await res.json();

  const totalCount = res.headers.get("X-Total-Count");

  if (!totalCount) {
    throw Error("Couldn't get total winners.");
  }

  const winnersData = {
    cars: winners,
    count: totalCount,
  };

  return winnersData;
}

export async function getWinnerAPI(id: string | number): Promise<Winner> {
  const res = await fetch(`${WINNERS_URL}/${id}`);
  const winner: Winner = await res.json();

  return winner;
}
