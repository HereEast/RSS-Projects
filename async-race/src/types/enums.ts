// View
export const enum View {
  Garage = "garage",
  Winners = "winners"
}

// Selectors
export const enum Selector {
  // Header
  Header = ".header",
  HeaderContainer = ".header__container",
  HeaderButtons = ".header__buttons",
  ViewButton = ".button__view",
  ViewButtonActive = ".button__view.active",
  ButtonGarage = "#button--garage",
  ButtonWinners = "#button--winners",
  Bubble = ".bubble",
  // Form
  FormsContainer = ".forms__container",
  FormCreate = ".form__create",
  FormUpdate = ".form__update",
  InputContainer = ".input__container",
  InputField = ".input-text",
  InputColor = ".input-color",
  ButtonCreate = ".button__create",
  ButtonUpdate = ".button__update",
  ButtonCancel = ".button__cancel",
  ButtonGenerate = ".button__generate",
  FormsHidden = ".forms--hidden",
  // Footer
  Footer = ".footer",
  FooterContainer = ".footer__container",
  FooterInfo = ".footer__info",
}

// Buttons
export const enum ButtonName {
  Garage = "Garage",
  Winners = "Winners",
}

export type ButtonData = {
  classNames: string[];
  name: ButtonName;
};

// Constants
export const enum Info {
  TotalLevels = 10,
  InputPlaceholder = "Type in a CSS Selector...",
}
