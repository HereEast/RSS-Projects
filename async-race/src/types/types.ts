export const enum View {
  Garage = "garage",
  Winners = "winners",
}

export const enum Selector {
  // Header
  Header = ".header",
  HeaderContainer = ".header__container",
  HeaderButtons = ".header__buttons",
  ViewButton = ".button__view",
  ViewButtonActive = ".button__view.active",
  ButtonGarage = "#button__garage",
  ButtonWinners = "#button__winners",
  Bubble = ".bubble",
  // Form
  FormsContainer = ".forms__container",
  FormCreate = ".form__create",
  FormUpdate = ".form__update",
  FormUpdateOpen = ".form__update--open",
  FormContainer = ".form__container",
  InputField = ".input-text",
  InputCreate = ".input-text__create",
  InputUpdate = ".input-text__update",
  InputColorCreate = ".input-color__create",
  InputColorUpdate = ".input-color__update",
  InputColor = ".input-color",
  ButtonCreate = ".button__create",
  ButtonUpdate = ".button__update",
  ButtonCancel = ".button__cancel",
  ButtonGenerate = ".button__generate",
  FormsHidden = ".forms--hidden",
  // Main
  Main = ".main",
  MainContainer = ".main__container",
  // View header
  ViewHeader = ".view__header",
  TitleContainer = ".view__title",
  Title = ".title",
  CarsCount = ".view__count",
  CurrentCount = ".count",
  ViewButtons = ".view__buttons",
  ButtonRace = ".button__race",
  ButtonReset = ".button__reset",
  // View body
  ViewBody = ".view__body",
  // Tracks
  Track = ".track",
  TrackContainer = ".track__container",
  TrackHeader = ".track__header",
  TrackButtons = ".track__buttons",
  ButtonTrack = ".button__track",
  // ButtonTrackDisabled
  ButtonStart = ".button__start",
  ButtonStop = ".button__stop",
  ButtonDelete = ".button__delete",
  ButtonEdit = ".button__edit",
  Car = ".car",
  CarDriving = ".car--driving",
  TrackBody = ".track__body",
  CarName = ".car__name",
  Flag = ".flag",
  // Pagination
  PagesContainer = ".pagination",
  Page = ".page__container",
  CurrentPage = ".page--current",
  TotalPages = ".page--total",
  PagesButtons = ".pages__buttons",
  ButtonPage = ".button__page",
  ButtonPrev = ".button__prev",
  ButtonNext = ".button__next",
  ButtonPageDisabled = ".button__page--disabled",
  // Footer
  Footer = ".footer",
  FooterContainer = ".footer__container",
  FooterInfo = ".footer__info",
  // Popup
  Popup = ".popup",
  PopupOpen = ".popup--open",
  PopupContainer = ".popup__container",
  PopupContent = ".popup__content",
  PopupMessage = ".popup__message",
  PopupWinner = ".popup__winner",
  PopupTime = ".popup__time",
  // Winners
  Table = ".table",
  TableHeader = ".table__header",
  RowsContainer = ".rows__container",
  Row = ".row",
  RowItem = ".row__item",
  RowNumber = ".row__number",
  RowCar = ".row__car",
  RowColor = ".row__color",
  RowWins = ".row__wins",
  RowTime = ".row__time",
  ButtonSortWins = ".button__sort--wins",
  ButtonSortTime = ".button__sort--time",
  ButtonSortIds = ".button__sort--ids",
}

export const enum Button {
  Garage = "garage",
  Winners = "winners",
  Start = "start",
  Stop = "stop",
  Edit = "edit",
  Delete = "delete",
  Create = "create",
  Update = "update",
  CancelEdit = "cancel",
  Generate = "generate",
  Race = "race",
  Reset = "reset",
  Page = "page",
  Prev = "prev",
  Next = "next",
  SortWin = "sort--wins",
  SortTime = "sort--time",
  SortIds = "sort--ids",
}

export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface CarsData {
  items: Car[];
  count: string;
}

export interface NewCar {
  name: string;
  color: string;
}

export interface Start {
  success: boolean;
}

export interface DriveResponse {
  success: boolean;
}

export interface StartData {
  velocity: number;
  distance: number;
}

export interface DriveResult {
  time: number;
  id: string;
}

export interface RaceData {
  winner: DriveResult;
  isRace: boolean;
}

export type SortOptions = "id" | "wins" | "time" | string;
export type OrderOptions = "ASC" | "DESC" | string;

export interface SortParams {
  page: number | string;
  sort: SortOptions;
  order: OrderOptions;
}

export interface Winner {
  id: number;
  win: number;
  time: number;
}

export interface WinnersData {
  cars: Winner[];
  count: string;
}

export interface TableData {
  color: string;
  name: string;
  win: number;
  time: number;
  id: number;
}

export interface SVGElement {
  divClass: string;
  ns: string;
  width: string;
  height: string;
  color?: string;
}

export interface FormInputs {
  inputText: HTMLInputElement;
  inputColor: HTMLInputElement;
}

export type ClassNames = Selector[] | string[];

export interface MakeModel {
  make: string;
  models: string[];
}
