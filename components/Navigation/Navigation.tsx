import React from "react";
import Link from "next/link";

import { Ranukel } from "../Icon/Ranukel";
import {
  IconContainer,
  NavigationHeader,
  StyledAnchor,
} from "./Navigation.styles";

type LinkProps = {
  links: { title: string; link: string }[];
  currentPage: string;
};

const Navigation: React.FC<LinkProps> = ({ links, currentPage }) => {
  const ranukels = links.map((link) => (
    <Link
      href={
        link.title === "Kontakta oss" && currentPage === "contact"
          ? "/"
          : link.link
      }
      passHref
      key={link.link}
    >
      <IconContainer target={link.title === "OSA" ? "_blank" : "_self"}>
        <Ranukel />
        <StyledAnchor>
          {link.title === "Kontakta oss" && currentPage === "contact"
            ? "Hem"
            : link.title}
        </StyledAnchor>
      </IconContainer>
    </Link>
  ));
  return <NavigationHeader>{ranukels}</NavigationHeader>;
};

export { Navigation };
