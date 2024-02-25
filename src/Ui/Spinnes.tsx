import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;
const SpinnerContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spinner = styled.div`
  margin: 0 auto;
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, var(--color-primary) 94%, #0000) top/10px
      10px no-repeat,
    conic-gradient(#0000 30%, var(--color-secondary));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

export const Spinners = function () {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};
