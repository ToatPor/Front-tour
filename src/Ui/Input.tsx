import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 1.4rem 1.6rem;
  border: none;
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  font-family: inherit;
  letter-spacing: 1.2px;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;

  &::placeholder {
    color: var(--color-grey-400);
  }
  &:focus {
    outline: none;
    border-bottom: 3px solid var(--color-primary);
  }

  &:focus:invalid {
    border-bottom: 3px solid red;
  }
`;
