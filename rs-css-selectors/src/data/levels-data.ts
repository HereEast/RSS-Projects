import { Levels } from "../types/types";

export const levelsData: Levels = [
  {
    id: "1",
    title: "A",
    task: "Select green triangles",
    answer: "triangle",
    code: `
      <div class="playground">
        <triangle el="1"/></triangle>
        <ball el="2"/></ball>
        <triangle el="3"/></triangle>
      </div>`,
  },
  {
    id: "2",
    title: "A B",
    task: "Select yellow balls in a pink fish",
    answer: "fish ball",
    code: `
      <div class="playground">
        <fish el="1">
          <ball el="2"/></ball>
          <ball el="3"/></ball>
        </fish el="1">
        <ball el="4"/></ball>
        <ball el="5"/></ball>
      </div>`,
  },
  {
    id: "3",
    title: "#id",
    task: "Select a pink teddy",
    answer: "#pink",
    code: `
      <div class="playground">
        <bear el="1"/></bear>
        <bear el="2" id="pink"/></bear>
        <bear el="3"/></bear>
        <bear el="4"/></bear>
      </div>`,
  },
  {
    id: "4",
    title: ".classname",
    task: "Select all small toys",
    answer: ".small",
    code: `
      <div class="playground">
        <duck el="1"/></duck>
        <ball el="2" class="small"/></ball>
        <box el="3">
          <duck el="4" class="small"/></duck>
        </box el="3">
        <box el="5"/></box>
      </div>`,
  },
  {
    id: "5",
    title: "A.classname",
    task: "Select all small fishes",
    answer: "fish.small",
    code: `
      <div class="playground">
        <fish el="1"/></fish>
        <ball el="2">
          <fish el="3" class="small"/>
        </ball el="2">
        <box el="4">
          <fish el="5" class="small"/>
        </box el="4">
        <ball el="6" class="small"/></ball>
      </div>`,
  },
  {
    id: "6",
    title: "*",
    task: "Select all toys at the playground",
    answer: "*",
    code: `
      <div class="playground">
        <ball el="1"/></ball>
        <duck el="2"/></duck>
        <box el="3">
          <triangle/ el="4">
        </box el="3">
        <ball el="5" class="small"/></ball>
      </div>`,
  },
  {
    id: "7",
    title: "[attribute]",
    task: "Select somebody's teddies",
    answer: "[kid]",
    code: `
      <div class="playground">
        <bear el="1"/></bear>
        <box el="2" kid="Mary">
          <bear el="3"/></bear>
        </box el="2">
        <ball el="4" kid="Patrick">
          <bear el="5"/></bear>
        </ball el="4">
      </div>`,
  },
  {
    id: "8",
    title: ":n-child(A)",
    task: "Select the 3rd duck",
    answer: "duck:nth-child(3)",
    code: `
      <div class="playground">
        <duck el="1"/></duck>
        <duck el="2"/></duck>
        <duck el="3"/></duck>
        <duck el="4"/></duck>
      </div>`,
  },
  {
    id: "9",
    title: ":empty",
    task: "Select empty toy boxes",
    answer: "box:empty",
    code: `
      <div class="playground">
        <box el="1"/></box>
        <box el="2"/></box>
        <bear el="3" class="teddy"/></bear>
        <box el="4">
          <triangle el="5" class="yellow"/></triangle>
        </box el="4">
      </div>`,
  },
  {
    id: "10",
    title: ":not(X)",
    task: "Select big balls",
    answer: "ball:not(.small)",
    code: `
      <div class="playground">
        <box el="1">
          <ball el="2" class="small yellow"/></ball>
        </box el="1">
        <box el="3">
          <ball el="4" class="yellow"/></ball>
        </box el="3">
        <ball el="5"/></ball>
        <ball el="6" class="small"/></ball>
      </div>`,
  },
];
