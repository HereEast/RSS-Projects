import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { handleAnswer } from "./handle-answer";

export function handleAnswerOnEnter(e: KeyboardEvent): void {
  const input = getElement(Selector.Input);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Target is not an HTMLInputElement...");
  }

  if (e.code === "Enter") {
    handleAnswer();
  }
}
