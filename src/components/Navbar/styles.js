import styled from "styled-components";
import { Navbar as _Nav } from "../../styling/nav";
import { MaxWidth } from "../../styling/containers";
import { PrimaryButton as _PrimaryButton, COLORS, BREAKPOINTS } from "../../styling/";

export const NavBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7em;
    width: 100%;
    background-color: ${props => props.isNavTransparent ? "transparent" : COLORS.black };
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const Nav = styled(_Nav)`
    a {
      order: 1;
      
      span {
        color: ${props => props.isNavTransparent ? "white" : COLORS.black };
      }
    }

    span {
      order: 2;
      color: white;
      cursor: pointer;
    }
`;

export const PopupMenu = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20%;
  right: 0;
  height: 100%;
  background-color: #f9f9f9;
`;

export const BackgroundPopup = styled(PopupMenu)`
  left: 0;
  background-color: rgba(137, 137, 137, 0.2);
`;


export const PrimaryButton = styled(_PrimaryButton)``;