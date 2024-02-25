import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--color-grey-0);
    display: inline-block;
    font-size: 2rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0.8rem;
    transition: all 0.5s;
  }
`;

export const InformationLink = styled(Link)`
  &:active,
  &.active:link,
  &.active:visited {
    border-left: 6px solid var(--color-grey-0);
  }

  &:hover {
    border-left: 6px solid var(--color-grey-0);
  }
`;

export const CommonLink = styled(NavLink)`
  &:visited,
  &:link {
    display: inline-block;

    align-self: center;
    justify-self: center;
    padding: 1.6rem 3.2rem;
    border-radius: 100px;
    background-color: var(--color-complete);
    text-decoration: none;
    font-size: 2.4rem;
    color: var(--color-grey-0);
  }
`;

export const CardLink = styled(CommonLink)`
  grid-row: 3/-1;
  grid-column: 2/3;
  text-transform: uppercase;
  justify-self: end;
`;
