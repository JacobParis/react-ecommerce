import React from "react";
import { Link } from "react-router-dom";

import CartCounter from "../Cart/CartCounter";
import MenuButton from "./MenuButton";

import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme, isSolid }) => (isSolid ? theme.color.light : "none")};

  transition: all 0.4s;
`;

const NavDrawer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: row;
  @media ${({ theme }) => theme.screen.large} {
    display: none;
  }
`;

const DrawerItem = styled(Link)`
    flex: 1 0 50%;
    height: 6rem;
    max-height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.dark}
    font-size: 2rem;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 1.875rem;
`;

const NavItems = styled.nav`
  margin-left: ${({ align }) => (align === "right" ? "auto" : 0)};
  margin-right: ${({ align }) => (align === "left" ? "auto" : 0)};
  max-width: none;
  width: auto;
  z-index: 1;
`;

const BicolorText = styled.span`
  margin-right: 1rem;
  margin-left: 1rem;
  transition: all 0.4s;
  color: ${({ theme, light }) =>
    light ? theme.color.light : theme.color.dark};
`;

const Logo = styled.div`
    @media ${({ theme }) => theme.screen.small} {
        left: 0;
        margin: 0 4.5rem;
    }
    margin: 0 auto;
    padding: 0 1.875rem;
    position: absolute
    display: inline-block;
    height: 2rem;
    line-height: 0;
    margin: 0 auto;
`;

const LogoSVG = styled.svg`
  height: auto;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme, light }) =>
    light ? theme.color.light : theme.color.dark};
  @media ${({ theme }) => theme.screen.large} {
    height: 2rem;
    width: initial;
  }
`;

const HamburgerMenu = styled(MenuButton)`
  color: ${({ theme, light }) =>
    light ? theme.color.light : theme.color.dark};
`;

const HeaderNav = () => {
  const [isScrolled, setScrolled] = React.useState(false);

  React.useEffect(function detectScroll() {
    const scrollEvent = window.addEventListener("scroll", () => {
      setScrolled(window.pageYOffset > 0);
    });

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <Header isSolid={isScrolled || isMenuOpen}>
      <NavContainer>
        <ResponsiveSwitch
          large={
            <NavItems align="left">
              <Link to="/products">
                <BicolorText light={!isScrolled && !isMenuOpen}>
                  Products
                </BicolorText>
              </Link>
              <Link to="/styles">
                <BicolorText light={!isScrolled && !isMenuOpen}>
                  Styles
                </BicolorText>
              </Link>
            </NavItems>
          }
          initial={
            <HamburgerMenu
              onClick={() => setMenuOpen(!isMenuOpen)}
              light={!isScrolled && !isMenuOpen}
            />
          }
        />
        <Logo>
          <Link to="/">
            <span className="hide-content">Coaster Stickers</span>
            <LogoSVG
              light={!isScrolled && !isMenuOpen}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 54"
            >
              <text
                textLength="400"
                fontSize="54"
                lengthAdjust="spacing"
                x="0"
                y="42"
                fill="currentColor"
              >
                Application
              </text>
            </LogoSVG>
          </Link>
        </Logo>
        <NavItems align="right">
          <CartCounter />
        </NavItems>
      </NavContainer>
      <NavDrawer isOpen={isMenuOpen}>
        <DrawerItem to="/products">Products</DrawerItem>
        <DrawerItem to="/styles">Styles</DrawerItem>
      </NavDrawer>
    </Header>
  );
};

export default HeaderNav;

function ResponsiveSwitch(props) {
  const { initial, medium, large, ...newProps } = props;

  const SmallContainer = styled.div`
    display: none;
    @media ${({ theme }) => theme.screen.small} {
      display: initial !important;
    }
    @media ${({ theme }) => theme.screen.medium} {
      ${medium ? null : "display: initial !important;"};
    }
    @media ${({ theme }) => theme.screen.large} {
      ${large ? null : "display: initial !important;"};
    }
  `;

  const MediumContainer = styled.div`
    display: none;
    @media ${({ theme }) => theme.screen.medium} {
      display: initial !important;
    }
    @media ${({ theme }) => theme.screen.large} {
      ${large ? null : "display: initial !important;"};
    }
  `;

  const LargeContainer = styled.div`
    display: none;
    @media ${({ theme }) => theme.screen.large} {
      display: initial !important;
    }
  `;

  return [
    initial && (
      <SmallContainer key="0" {...newProps}>
        {initial}
      </SmallContainer>
    ),
    medium && (
      <MediumContainer key="1" {...newProps}>
        {medium}
      </MediumContainer>
    ),
    large && (
      <LargeContainer key="2" {...newProps}>
        {large}
      </LargeContainer>
    )
  ];
}
