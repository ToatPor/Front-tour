import { useEffect } from "react";
import styled from "styled-components";
import { StyledContainer } from "../Ui/Container";
import { LogInForm } from "../Features/Login/LogInForm";

export const StyledLogInform = styled.div`
  margin: 0 auto;
  width: 80rem;
  max-width: 80rem;
  padding: 4.6rem 7rem;
  background-color: var(--color-grey-0);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Login = () => {
  useEffect(() => {
    document.title = "Natours | Login to your account";
  }, []);

  return (
    <StyledContainer>
      <StyledLogInform>
        <LogInForm />
      </StyledLogInform>
    </StyledContainer>
  );
};

export default Login;
