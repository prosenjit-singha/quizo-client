import styled from "styled-components";
import { WrapperStyles } from "../../styles/Wrapper";
import { Link as rLink, NavLink } from "react-router-dom";
import { device } from "../../utils/device";
import logo from "../../assets/img/logo.png";
import { FocusStyle } from "../../styles/FocusStyle";

export const Wrapper = styled.header`
  ${WrapperStyles}
  padding-block: 1rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.paper.main};
  z-index: 1000;
`;

export const LogoContainer = styled(rLink)`
  cursor: pointer;
  height: fit-content;
  display: flex;
  text-decoration: none;
  font-size: 3rem;
  &:focus-visible {
    border-radius: 0.01rem;
    ${FocusStyle};
  }
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
}))`
  height: 60px;
`;

export const Links = styled.nav`
  will-change: transform;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: ${(p) => p.theme.paper.dark};
  max-height: ${(p) => (p.open ? "150px" : "0px")};
  overflow: hidden;
  transition: max-height 500ms ease-out;
  @media ${device.md} {
    overflow: visible;
    position: relative;
    max-height: 500px;
    flex-direction: row;
    justify-content: flex-end;
    background-color: transparent;
    width: 50%;
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  text-transform: uppercase;
  color: ${(p) =>
    p.isactive ? p.theme.palette.warning.active : p.theme.text.secondary};
  cursor: pointer;
  text-decoration: none;
  font-size: 1.25rem;
  transition: color 300ms ease;
  &:first-child {
    margin-top: 1rem;
    @media ${device.md} {
      margin: 0;
    }
  }
  &:last-child {
    margin-bottom: 1rem;
    @media ${device.md} {
      margin: 0;
    }
  }
  &:focus-visible {
    ${FocusStyle};
    border-radius: 0.05px;
  }
  &:hover {
    color: ${(p) =>
      p.isactive ? p.theme.palette.warning.active : p.theme.text.hovered};
  }
  &::after {
    position: absolute;
    content: "";
    top: 110%;
    left: 50%;
    width: 50%;
    height: 3px;
    border-radius: 5px;
    transform: translate(-50%, 0%) scaleX(${(p) => (p.isactive ? 1 : 0)});
    opacity: ${(p) => (p.isactive ? 1 : 0)};
    transform-origin: center center;
    /* background-color: red; */
    background-color: ${(p) =>
      p.isactive ? p.theme.palette.warning.active : "transparent"};
    transition: transform 350ms ease, opacity 300ms ease,
      background-color 300ms ease-out;
  }
  &:hover::after {
    opacity: 1;
    background-color: ${(p) => p.theme.text.disabled};
    transform: translate(-50%, 0%) scaleX(1);
  }
`;

export const ToggleButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.text.secondary};
  min-width: 40px;
  min-height: 40px;
  font-size: 2.5rem;
  border: none;
  user-select: none;
  transition: font-size 500ms ease, color 300ms ease;
  &:hover {
    color: ${(p) => p.theme.text.primary};
  }
  &:active {
    /* transform: scale(0); */
    font-size: 0;
  }

  @media ${device.md} {
    display: none;
  }
`;
