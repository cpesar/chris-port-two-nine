import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  background: transparent !important;
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  background: transparent !important;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  background: transparent !important;
  height: 100%;
  padding: 0 1.1em;
  /* color: #222; */
  color: #ffff00;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  background: transparent !important;
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">About us</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">How it works</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Explore</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Impact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;