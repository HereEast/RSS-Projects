import { CarsData, Car } from "../../types/types";
import { GARAGE_URL, GARAGE_LIMIT } from "./constants";

// Get cars
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

// Get car
export async function getCarAPI(id: string | number): Promise<Car> {
  const res = await fetch(`${GARAGE_URL}/${id}`);
  const car: Car = await res.json();

  return car;
}
