import styled from "styled-components";
import propTypes from "prop-types";

interface IOverlay {
  height?: string;
}

export const Overlay = styled.div<IOverlay>`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: ${(props) => props.height};
  position: absolute;
  background-image: linear-gradient(
    to right bottom,
    var(--color-secondary),
    var(--color-primary)
  );
  opacity: 0.7;
`;

Overlay.propTypes = {
  height: propTypes.string.isRequired,
};
