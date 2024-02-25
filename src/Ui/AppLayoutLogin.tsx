import { Footer } from "./Footer";
import { Image } from "./Image";
import { Main } from "./Main";
import { ContentHeader } from "./Header";
import { StyledContainers } from "./Applayout";
import { Outlet } from "react-router-dom";

const AppLayOutLogin = function () {
  return (
    <StyledContainers>
      <ContentHeader key={"login"} />
      <Main>
        <Outlet />
        <Footer>
          <Image src="/logo-green.png" height="5rem" />
        </Footer>
      </Main>
    </StyledContainers>
  );
};

export default AppLayOutLogin;
