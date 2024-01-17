import { createElement } from "../../utils/create-element";

// Logo
export function createLogo(): HTMLElement {
  const headerLogo = createElement("div", ["header__logo"]);
  const logoTitle = createElement("div", ["logo__text"]);
  const iconContainer = createElement("div", ["logo__icon"]);

  logoTitle.textContent = "CSS Playground";

  const SVGIcon = `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.05037 0L2.5332e-07 12H7.05037L14 11.8286L7.05037 0Z" fill="#6BCB5B"/>
      <circle cx="36.5" cy="6.5" r="6.5" fill="#FFE208"/>
      <rect x="16" width="12" height="12" fill="#725CFA"/>
    </svg>
  `;

  iconContainer.innerHTML = SVGIcon;

  headerLogo.append(logoTitle, iconContainer);
  return headerLogo;
}
