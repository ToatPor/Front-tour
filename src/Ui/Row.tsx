import styled, { css } from "styled-components";
import { EGap, ERow, IRow } from "./IUi/TRow";
import propTypes from "prop-types";
import { sizeGap } from "../Utilities/sizeGap";

export const Row = styled.div<IRow>`
  display: flex;
  ${(props) => props.$gap && sizeGap[props.$gap]}

  ${(props) =>
    props.direction === ERow.vertical &&
    css`
      flex-direction: column;
      gap: 2.4rem;
    `}
  ${(props) =>
    props.direction === ERow.horizontal &&
    css`
      align-items: center;
    `};

  ${(props) =>
    props.clipPath &&
    css`
      clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
    `}

  & svg {
    font-size: 3.4rem;
    color: ${(props) => props.color};
  }
  grid-column: ${(props) => (props.$column ? props.$column : null)};
`;

Row.propTypes = {
  direction: propTypes.oneOf<ERow>([ERow.vertical, ERow.horizontal]).isRequired,
  clipPath: propTypes.string,
  $gap: propTypes.oneOf<EGap>([
    EGap.medium,
    EGap.small,
    EGap.large,
    EGap.veryLarge,
  ]),
  $column: propTypes.string,
  color: propTypes.string,
};
