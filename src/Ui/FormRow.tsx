import React from "react";
import styled from "styled-components";
import { IFormRow } from "./IUi/TFormRow";
import propTypes from "prop-types";

const Label = styled.label`
  font-weight: 400;
  color: var(--color-grey-600);
`;

export const FormRow: React.FC<IFormRow> = function (props) {
  const { label, children, errors } = props;
  return (
    <>
      {label && <Label htmlFor={children?.props.id}>{label}</Label>}
      {children}
      {errors && <p style={{ color: "var(--color-todo)" }}>{errors}</p>}
    </>
  );
};

FormRow.propTypes = {
  children: propTypes.element.isRequired,
  label: propTypes.string.isRequired,
  errors: propTypes.string,
};
