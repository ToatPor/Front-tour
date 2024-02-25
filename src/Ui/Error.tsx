import styled from "styled-components";
import { ERow } from "./IUi/TRow";
import { Row } from "./Row";
import { FC } from "react";
import { TMessage } from "./IUi/TMessage";
import propTypes from "prop-types";

const ErrorContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  border-radius: 5px;
`;

export const Error: FC<TMessage> = function (props) {
  const { message } = props;
  return (
    <ErrorContainer>
      <Row direction={ERow.vertical}>
        <header style={{ alignSelf: "center" }}>Something went wrong !</header>
        <p>{`${message}. Please trt again later 😢`}</p>
      </Row>
    </ErrorContainer>
  );
};

Error.propTypes = {
  message: propTypes.string.isRequired,
};
