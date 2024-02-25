import styled, { css } from "styled-components";
import { EHeader, THeading } from "./IUi/THeading";
import PropTypes from "prop-types";

const background = {
  card: css`
    /* background-image: linear-gradient(
      to right bottom,
      var(--color-secondary),
      var(--color-primary)
    ); */
    padding: 1.2rem 2.4rem;
    position: absolute;
    width: 55%;
    bottom: 43rem;
    right: 1rem;
    z-index: 10;
    text-align: right;
    font-size: 3rem;
    font-weight: 500;
    color: var(--color-grey-100);
  `,
};
export const Header = styled.header<THeading>`
  text-transform: uppercase;

  ${(props) =>
    props.as === EHeader.h1 &&
    css`
      font-size: 2.8rem;
      font-weight: 600;
      background-image: linear-gradient(
        var(--color-primary),
        var(--color-secondary)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      text-transform: uppercase;
    `}

  ${(props) =>
    props.as === EHeader.h2 &&
    css`
      font-size: 6.7rem;

      font-weight: 500;
    `}
      ${(props) =>
    props.as === EHeader.h3 &&
    css`
      font-size: 3.4rem;
      font-weight: 500;
    `}
      ${(props) =>
    props.as === EHeader.h4 &&
    css`
      font-size: 2.4rem;
      font-weight: bold;
      background-image: linear-gradient(
        to right bottom,
        var(--color-primary),
        var(--color-secondary)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    `}

    ${(props) =>
    props.$headerBackGround === "card" && background[props.$headerBackGround]}
`;

//Select some of type in Eheader
Header.propTypes = {
  as: PropTypes.oneOf<EHeader>([EHeader.h1, EHeader.h2, EHeader.h3, EHeader.h4])
    .isRequired,
  $headerBackGround: PropTypes.string,
};
