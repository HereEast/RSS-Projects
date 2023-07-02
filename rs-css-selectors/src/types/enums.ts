export const enum Selector {
  Main = ".main",
  ShowLevelsBtn = ".button--levels",
  HideLevelsBtn = ".button--hide",
  LevelsPanel = ".section__levels",
  LevelsContainer = ".levels__container",
  LevelItem = ".level__item",
  DatasetID = "[data-id]",
  PanelHeaderLevelNumber = ".section__levels .header__data--level",
  MobileHeaderLevelNumber = ".header .header__data--level",
  TaskText = ".task__text",
  HTMLEditorContentContainer = ".editor--html .content__container",
  GraphicsContainer = ".graphics__container",
  LevelsButtons = ".levels__header .header__buttons",
  LevelsButton = ".levels__button",
  NextLevelButton = ".button--next",
  PrevLevelButton = ".button--prev",
  Input = "input",
  CheckButton = ".button--check",
  HeaderLevelInfo = ".header__levels",
  BlockEditors = ".block__editors",
  ResetButton = ".button--reset",
  Playground = ".playground",
  Popup = ".popup__container",
  PopupCloseButton = ".button--close-popup",
}

export const enum LevelStatus {
  Unfinished = "unfinished",
  Done = "done",
  Hint = "hint",
}

export const enum Animation {
  Shake = "shake",
  Hide = "hide",
  Dance = "dance",
}

export const enum Entity {
  Less = "&lt;",
  Greater = "&gt;",
}

export const enum Info {
  TotalLevels = 10,
  InputPlaceholder = "Type in a CSS Selector...",
}

export const enum ButtonName {
  Reset = "Reset",
  Hint = "Hint",
  Levels = "=",
  Enter = "Enter",
  Prev = "&lt;",
  Next = "&gt;",
  Close = "Cool, thanks!",
}

export type ButtonData = {
  classNames: string[];
  name: ButtonName;
};

export type PopupButtons = ButtonData[];
