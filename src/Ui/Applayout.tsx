import styled from "styled-components";
import { ContentHeader } from "./Header";
import { Outlet } from "react-router-dom";
import { Main } from "./Main";
import { Image } from "./Image";
import { Footer } from "./Footer";

export const StyledContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AppLayout = function () {
  return (
    <StyledContainers>
      <ContentHeader key={"layout header"} />
      <Main>
        <Outlet />
        <Footer>
          <Image src="/logo-green.png" height="5rem" />
        </Footer>
      </Main>
    </StyledContainers>
  );
};

export default AppLayout;
