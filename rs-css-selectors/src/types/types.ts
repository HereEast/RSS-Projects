// Levels

export type LevelData = {
  id: string;
  title: string;
  task: string;
  answer: string;
  code: string;
};

export type Levels = LevelData[];

// Editors DOM

export type EditorParams = {
  classNames: string[];
  title: string;
  fileName: string;
  editorContent: HTMLElement;
};
