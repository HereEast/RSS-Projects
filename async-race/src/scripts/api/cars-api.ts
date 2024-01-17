import { Car, NewCar, CarsData } from "../../types/types";
import { GARAGE_URL, GARAGE_LIMIT } from "./constants";

export async function createCarAPI(body: NewCar): Promise<Car> {
  const res = await fetch(`${GARAGE_URL}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const car = await res.json();

  return car;
}

export async function updateCarAPI(id: number | string, body: NewCar): Promise<Car> {
  const res = await fetch(`${GARAGE_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const car = await res.json();

  return car;
}

export async function deleteCarAPI(id: string | number): Promise<void> {
  const res = await fetch(`${GARAGE_URL}/${id}`, {
    method: "DELETE",
  });

  const data = res.json();
  return data;
}

export async function getCarsAPI(page: number | string = 1): Promise<CarsData> {
  const res = await fetch(`${GARAGE_URL}?_page=${page}&_limit=${GARAGE_LIMIT}`);
  const data: Car[] = await res.json();

  const totalCount = res.headers.get("X-Total-Count");

  if (!totalCount) {
    throw Error("Couldn't get data from X-Total-Count header.");
  }

  const cars = {
    items: data,
    count: totalCount,
  };

  return cars;
}

export async function getCarAPI(id: string | number): Promise<Car> {
  const res = await fetch(`${GARAGE_URL}/${id}`);
  const car: Car = await res.json();

  return car;
}
