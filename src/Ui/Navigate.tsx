import React, { PropsWithChildren, ReactElement } from "react";
import styled, { css } from "styled-components";
import { ERow } from "./IUi/TRow";
import { IULtype } from "./IUi/TUitype";
import PropTypes from "prop-types";

export const NavUl = styled.ul<IULtype>`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  ${(props) =>
    props.direction === ERow.vertical &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 4rem;
    `}

  & li {
    list-style: none;
  }
`;

export const Nav: React.FC<PropsWithChildren> = function (prop): ReactElement {
  const { children } = prop;
  return (
    <nav>
      <NavUl>{children}</NavUl>
    </nav>
  );
};

NavUl.propTypes = {
  direction: PropTypes.oneOf([ERow.horizontal, ERow.vertical]),
};
