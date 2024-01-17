import { Car } from "../../../../types/types";

export function getSelectedCar(): Car {
  const savedItem = localStorage.getItem("editItem");

  if (!savedItem) {
    throw Error("Couldn't get 'editItem' from Local Storage.");
  }

  const editItem = JSON.parse(savedItem);
  return editItem;
}
