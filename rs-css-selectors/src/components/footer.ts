import { createElement } from "../utils/create-element";

export function createFooter(): HTMLElement {
  const linkRS = "https://rs.school/";
  const linkGH = "https://github.com/HereEast";

  const footer = createElement("footer", ["footer", "content-width"]);
  const footerContainer = createElement("div", ["footer", "footer__container"]);
  const copyContainer = createElement("div", ["footer__copy"]);
  const spanSchoolInfo = createElement("span", []);
  const spanProjectTitle = createElement("span", []);
  const linkSchool = createElement("a", ["footer__link"]);
  const linkGithub = createElement("a", ["footer__link"]);

  if (linkSchool instanceof HTMLAnchorElement) {
    linkSchool.href = linkRS;
    linkSchool.target = "_blank";
    linkSchool.textContent = "RS School";
  }

  if (linkGithub instanceof HTMLAnchorElement) {
    linkGithub.href = linkGH;
    linkGithub.target = "_blank";
    linkGithub.textContent = "Here East";
  }

  spanSchoolInfo.textContent = "2023, ";
  spanSchoolInfo.append(linkSchool);

  spanProjectTitle.textContent = " — RS CSS Selectors";

  copyContainer.append(spanSchoolInfo, spanProjectTitle);
  footerContainer.append(copyContainer, linkGithub);

  footer.append(footerContainer);

  return footer;
}
