import { Outlet } from "react-router-dom";
import styled from "styled-components";
import InformationAside from "./InformationAside";
const StyledInformation = styled.section`
  display: grid;
  grid-template-columns: 45rem 100rem;
`;

const InformationLayOut = () => {
  return (
    <StyledInformation>
      <InformationAside />
      <Outlet />
    </StyledInformation>
  );
};

export default InformationLayOut;
