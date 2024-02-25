import styled from "styled-components";
import { GlobalStyled } from "../Styles/GlobalStyles";
import { Header } from "./Heading";
import { Button } from "./Button";
import { ESize, EVariation } from "./IUi/TButton";
import { FallbackProps } from "react-error-boundary";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;

const ErrorFallback = function ({ error, resetErrorBoundary }: FallbackProps) {
  //using error boundary will get out from app scope
  //need to use global styled again
  return (
    <>
      <GlobalStyled />
      <StyledErrorFallback>
        <Box>
          <Header as="h1">Something went wrong 😒</Header>
          <p>{error.message}</p>
          <Button
            size={ESize.large}
            onClick={resetErrorBoundary}
            $variation={EVariation.primary}
          >
            Try again
          </Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
};

export default ErrorFallback;
