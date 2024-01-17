import { Selector } from "../../../types/types";
import { createElement, createLink } from "../../utils/create-element";

const SCHOOL_URL = "https://rs.school/";
const GITHUB_URL = "https://github.com/HereEast";

const SCHOOL_LINK_TEXT = "RS School (2023)";
const GITHUB_LINK_TEXT = "Here East";
const PROJECT_NAME = "Async Race,";

export function createFooter(): HTMLElement {
  const footer = createElement("footer", [Selector.Footer]);
  const footerContainer = createElement("footer", [Selector.FooterContainer]);

  const projectInfo = createElement("div", [Selector.FooterInfo]);
  const githubInfo = createElement("div", [Selector.FooterInfo]);

  const projectName = createElement("span", [], PROJECT_NAME);
  const schoolLink = createLink(SCHOOL_LINK_TEXT, SCHOOL_URL);
  const githubLink = createLink(GITHUB_LINK_TEXT, GITHUB_URL);

  projectInfo.append(projectName, schoolLink);
  githubInfo.append(githubLink);

  footerContainer.append(projectInfo, githubInfo);
  footer.append(footerContainer);

  return footer;
}
