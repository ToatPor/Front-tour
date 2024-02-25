import VerifyUserForm from "../Features/Signup/VerifyUserForm";
import { StyledContainer } from "../Ui/Container";
import { StyledLogInform } from "./Login";

const VerifyUser = () => {
  return (
    <StyledContainer>
      <StyledLogInform>
        <VerifyUserForm />
      </StyledLogInform>
    </StyledContainer>
  );
};

export default VerifyUser;
