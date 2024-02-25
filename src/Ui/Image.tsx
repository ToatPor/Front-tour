import styled from "styled-components";
import PropTypes from "prop-types";
import { Iimage } from "./IUi/Timage";

export const Image = styled.img<Iimage>`
  height: ${(props) => props.height};
  border-radius: ${(props) => (props.radius ? props.radius : null)};
  width: ${(props) => (props.width ? props.width : null)};
  margin-left: ${(props) => (props.$margin ? `-${props.$margin}` : null)};
  z-index: ${(props) => (props.$index ? props.$index : null)};
`;

Image.propTypes = {
  height: PropTypes.string,
  radius: PropTypes.string,
  width: PropTypes.string,
  $margin: PropTypes.string,
  $index: PropTypes.number,
};
