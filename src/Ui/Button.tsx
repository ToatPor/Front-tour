import styled, { css } from "styled-components";
import { EVariation, ESize, IButton } from "./IUi/TButton";
import propTypes from "prop-types";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 2rem;
    padding: 1.6rem 2.4rem;
    font-weight: 500;
  `,
};

const variation = {
  primary: css`
    color: var(--color-grey-100);
    background-color: var(--color-primary);
  `,
  confirm: css`
    color: var(--color-grey-100);
    background-color: var(--color-secondary);
  `,
  danger: css`
    color: var(--color-grey-100);
    background-color: var(--color-grey-600);
  `,
};

export const Button = styled.button<IButton>`
  cursor: pointer;
  border: none;
  padding: 1.2rem 2.4rem;
  color: var(--color-grey-100);
  border-radius: 8rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  ${(props) => props.size && sizes[props.size]}
  ${(props) => props.$variation && variation[props.$variation]}
`;

Button.propTypes = {
  //oneOf  be one of these exact values.
  //oneOfType types of values that your component can accept
  size: propTypes.oneOf<ESize>([ESize.large, ESize.medium, ESize.small])
    .isRequired,
  $variation: propTypes.oneOf<EVariation>([
    EVariation.confirm,
    EVariation.primary,
    EVariation.danger,
  ]).isRequired,
};
