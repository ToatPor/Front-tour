import styled from "styled-components";
import { StyledCommonContainer } from "../../Ui/Container";
import { useIsAuth } from "../Login/useIsAuth";
import AccountInfos from "./AccountInfo";
import AccountChangePass from "./AccountChangePass";

export const StyledAccount = styled.div`
  background-color: var(--color-grey-0);
  padding: 8rem 0;
`;

const AccountSetting = () => {
  const { user } = useIsAuth();

  return (
    <StyledAccount>
      <StyledCommonContainer>
        <AccountInfos
          name={user?.data.data.users.name}
          email={user?.data.data.users.email}
          photo={user?.data.data.users.photo}
        />
        <AccountChangePass />
      </StyledCommonContainer>
    </StyledAccount>
  );
};

export default AccountSetting;
