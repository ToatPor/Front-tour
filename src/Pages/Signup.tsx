import SingUpForm from "../Features/Signup/SingUpForm";
import { StyledContainer } from "../Ui/Container";
import { StyledLogInform } from "./Login";

const SignUp = () => {
  return (
    <StyledContainer>
      <StyledLogInform>
        <SingUpForm />
      </StyledLogInform>
    </StyledContainer>
  );
};

export default SignUp;
